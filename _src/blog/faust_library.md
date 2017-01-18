---
date: 2017-01-19
layout: blog.hbs
title: Faustのライブラリの使い方と標準ライブラリのオススメ
permalink: faust_library

---

*この記事は[Faust(多分ひとり)Advent Calender](http://qiita.com/advent-calendar/2016/faust)の5つ目の記事です。*

本日はFaustの外部ソースの取り込み方の説明と、標準でついてくるライブラリの中から使える関数を幾つか紹介しようと思います。

<!-- more -->

# 外部関数の読み込み

Faustにはライブラリを定義して別のファイルから呼び出しできる機能があります。

具体的には

```java
environment{}
library()
component()
import()
```

の４つです。

## environment{}

Javascriptのオブジェクトがイメージ的には近いです。幾つかの関数をグルーピングしたものを定義できて、ドットを使ってアクセスすることが出来ます。

```java
parameter = environment{
                        gain = 0.2;
                        offset = 0.3;
                        };

process = _:*(parameter.gain):+(parameter.offset);
```

ソースコードを見やすくするために使っていく感じになるでしょう。

## library()

libraryは、ある外部ファイルの中で関数を幾つか定義しておいて、それを一つのenvironmentとして呼び出せるものです。

この場合、呼び出せるのは**.dspの普通のソースファイル**と**process=hogehoge が定義されてない.libのライブラリファイル**のどちらもです。

```java
// in parameter.lib
gain = 0.2;
offset = 0.3;

// in main.dsp

param = library("./parameter.lib");

process =  _:*(param.gain):+(param.offset);

```

## component()

componentは、.dspで定義されたエフェクターをそのままソースの中で部品として使えるものです。**呼び出せるのは.dspファイルのみです。**

```java
// in gainoffset.dsp
gain = 0.2;
offset = 0.3;

process = _:*(gain):+(offset);

// in main.dsp

g_o = component("gainoffset.dsp");

process =  _:g_o:hbargraph("meter",-1,1);

```

実は、library()はprocessを呼び出すこともできるので、以下のように置換可能です。

```java
// in main.dsp

g_o = library("gainoffset.dsp").process;

process =  _:g_o:hbargraph("meter",-1,1);

```

## import()

importは他ファイルの名前空間を自分のファイルの中に呼び出せるものです。

外部ファイルのソースをそのまま自分のファイルの中に展開すると考えた方がわかりやすいかもしれません。

そのため、process=を含んでいるdspファイルを呼び出すとprocessが重複してしまうため、**基本的には呼び出せるのは.libファイルのみです。**

ただ、コンパイラは特に拡張子関係なくファイルを開くので.dspファイルの中でprocess=を定義しなかったりすればその限りではありませんが、ファイル一覧をパッと見たときに役割が分かる用に.libと.dspを分けておくのが良いと思います。

```java
// in gainoffset.lib
gain = 0.2;
offset = 0.3;

mygainoffset = _:*(gain):+(offset);

// in main.dsp

import("gainoffset.lib");

process =  _:mygainoffset:hbargraph("meter",-1,1);

```

ちなみに、Faustの中で数少ない=で結ばない構文です（この他はメタデータを定義するdeclareくらいだと思います）。

唯一微妙なのはatomで編集していると.libには最初に開いた時にシンタックスハイライトが適用されないので手動で適用し直さないといけないところでしょうか。

# 標準ライブラリ stdfaust.lib

さて、実は2016年10月頃にfaustはライブラリのシステムが大きく変わりました。

それ以前はmusic.lib、filter.libなど7~8個のライブラリファイルが同梱されていて、それを使う時にimportする形でしたが、今は標準ライブラリを呼び出すときはこの一文だけで大丈夫です。

```java
import("stdfaust.lib");
```

どういうことかというと、stdfaust.libの中身はこうなっています。

```java
//################################ stdfaust.lib ##########################################
// The purpose of this library is to give access to all the Faust standard libraries
// through a series of environment. 
//########################################################################################

ma = library("math.lib");
ba = library("basic.lib");
de = library("delay.lib");
en = library("envelope.lib");
ro = library("route.lib");
si = library("signal.lib");
an = library("analyzer.lib");
fi = library("filter.lib");
os = library("miscoscillator.lib");
no = library("noise.lib");
ho = library("hoa.lib");
sp = library("spat.lib");
sy = library("synth.lib");
ef = library("misceffect.lib");
co = library("compressor.lib");
ve = library("vaeffect.lib");
pf = library("phafla.lib");
re = library("reverb.lib");
pm = library("pm.lib");
dm = library("demo.lib");
```

つまり、filter.libの中の関数を呼び出すためには

```java
import("stdfaust.lib");
// Q3、カットオフ周波数1000Hzバンドパスフィルターを呼び出す
process = fi.resonbp(1000,3,1.0);
```

というようになります。

新しいシステムでこのよう仕組みになったのは、それまでfilter.libのbandpass()を呼び出すときはいきなりbandpass()を呼び出すのですが、これが自分で定義したのか標準ライブラリで定義したのかわからなくなることが多々あったので、標準ライブラリは名前空間を独立させるようにした、ということのようです。

このシステム導入と同時にフィルターやオシレータ、エフェクトの種類自体も大幅に増えたのでかなり便利になりました。

リファレンスはこちらにあるので読んでみてください。

<http://faust.grame.fr/library.html>

余談ですが、このライブラリはfaust2mdという、コメントをMarkdownで組んでおくと簡単にドキュメントを出力してくれるシステムを使ってライブラリファイルから自動出力されているみたいです。

以下ではこの中からいくつか便利なものを紹介していこうと思います。

## signal.lib

(記述)->(結果)という文法とは関係ない書き方をしていますのでご容赦。

呼び出しはsiです。

```java
si.bus(5) -> _,_,_,_,_

si.block(5) -> !,!,!,!,!

//この２つは一番良く使うと思います。

hslider("gain",0,0,1,0.001):si.smoo //UI系のパラメータの簡単な平滑化
```
## basic.lib

呼び出しはbaです。


```java

// 並列要素から取り出す系

ba.take(3,(10,20,30,40)); -> 30

ba.subseq((10,20,30,40,50,60), 1, 3); -> (20,30,40)

_,_,_,_ : ba.selector(2,4) : _;  // ４インプットの中から3番目を「コンパイル時に」取り出す(0からカウントなので注意)

_,_,_,_ : ba.selectn(4,2) : _;  // ４インプットの中から3番目を「実行時に」取り出す

//（selectorと2,4が逆になっているのに注意。例えばこの場合2をhsliderにしておいて実行中に変更する事ができる。）

_ : latch(clocksig) :_;//サンプルホールド。clocksigが負→正になったときサンプルする

_ : sAndH(t) : _; // 上の簡略版。tが1の時サンプル。ビット演算使ってtが0か1になるようにしておかないとおかしくなります
```

この他、sec→sampleやlinear→dbなどの単位変換などがあります。

## route.lib

ルーティング系。大規模になるほど使う機会が増えてきます。
呼び出しはro。

```java
(1,2,3,4,5) : ro.cross(5) -> 5,4,3,2,1

(L1,R1,L2,R2):ro.cross2 -> (L1,L2,R1,R2) //ステレオ信号を２つ扱う時に便利

(1,2,3,4,5,6,7,8):crossnn(4) -> 5,6,7,8,1,2,3,4

(1,2,3,4,5,6,7,8):interleave(4,2) -> 1,5,2,6,3,7,4,8

```

## filter.lib

フィルター系。膨大な量入っているので普通に実装の勉強になります。
ぱっと使いたい時に便利なやつを紹介。呼び出しはfiです。

```java
_:fi.dcblocker:_ DCオフセット除去

fi.ff_fcomb(最大ディレイサンプル数,ディレイサンプル,ドライゲイン,ディレイ信号ゲイン) //フィードフォワードコムフィルタ。最大ディレイサンプルは2のn乗。


fi.fb_fcomb(最大ディレイサンプル数,ディレイサンプル,フィードバックゲイン,アウトプット信号ゲイン)

// シンプルなレゾナンスフィルタ（多分双二次フィルタ）

fi.resonlp(fc,Q,gain) ローパス
fi.resonhp(fc,Q,gain) ハイパス
fi.resonbp(fc,Q,gain) バンドパス

// 次数指定可なバタワースフィルタ

fi.lowpass(次数,fc) 
fi.highpass(次数,fc)

//バンドパス、バンドストップは次数が偶数なので、1を指定すると２段という形になります。

fi.bandpass(次数/2,下カット周波数,上カット周波数)
fi.bandstop(次数/2,下カット周波数,上カット周波数)


//シェルビング

fi.lowshelf(次数,ゲイン,周波数)
fi.highshelf(次数,ゲイン,周波数)

//ピーキング、ディップ

peak_eq_cq(ゲイン,周波数,Q)

```


## noise.lib

ノイズ、乱数系。呼び出しはno。

```java
no.noise //-1~1のホワイトノイズ。

no.multinoise(n) //複数無相関ノイズを出したい場合。no.noiseを色んな所に使うと全部同じシードのノイズが出てしまいます。普通にシード指定の関数欲しい

pink_noise //ピンクノイズ。
pink_noise_vm(N) //無相関の複数ピンクノイズ。
```


## miscoscillator.lib

オシレーター詰め合わせ。呼び出しはos。

```java

os.osc(freq) //最も標準なオシレータ。（インパルス＋フィルタベース）
os.oscrp(freq,phase) //位相指定できるタイプ。

os.oscs(f) //ステートバリアブルフィルタ使用のサイン波。
os.oscws(fr) //ウェーブガイドフィルタ使用のサイン波。


os.osccos(freq) //テーブル呼び出しサイン波。これが一番軽いはず。テーブルサイズは2^16。
os.oscsin(freq)
os.oscp(freq,phase) //テーブルで位相指定できるタイプ。

//以下はアンチエイリアシング入れてないのでコントロールシグナルに使うのが普通

os.lf_squarewavepos(freq) //0~1矩形波
os.lf_squarewave(freq) //-1~1矩形波
os.lf_trianglepos(freq) //-1~1三角波
os.lf_sawpos_phase(phase,freq) //0~1鋸歯状波。sinやcosの位相に突っ込むmaxでのphasor~的な奴。
os.saw1(freq) //-1~1鋸歯状波。

//アンチエイリアシング入り

os.sawNp(N,freq,phase) //-1~1鋸歯状波。Nは次数で、6まで。高いほど再現度高いけど重い

os.pulsetrainN(N,freq,duty) //デューティ比設定可のパルス波。
os.squareN(N,freq)  //矩形波。
os.triangleN(N,freq) //三角波。

```

## analyzer.lib

グラフ表示系など。呼び出しはan。

```java
// とりあえず便利なスペクトル分析。

an.mth_octave_spectral_level_default(オクターブ内の分割数,最高周波数,分割数,平滑時間,dbオフセット)

//demo.lib内のデモを試すほうがわかりやすいかもです
de.spectral_level_demo
```

こういう感じになります。

<img src="{{config.root}}assets/img/faust/faust_analyzer.png" alt="" style = "max-height:400px;">

これ、若干パラメータがややこしいですが

例えば

- 最高周波数を16000Hz
- オクターブ内の分割数 2
- 全体の分割数 10

にした場合は、

16000*2^(-0/2) = 16000

16000*2^(-1/2) = 11313.7

16000*2^(-2/2) = 8000

16000*2^(-3/2) = 5656.9

16000*2^(-4/2) = 4000

16000*2^(-5/2) = 2828.4

16000*2^(-6/2) = 2000

16000*2^(-7/2) = 1414.2

16000*2^(-8/2) = 1000

というように計算して、下から順に

0~1000
1000~1414
1414~2000
2000~2828
2828~4000
4000~5656
5656~8000
8000~11313
11313~16000
16000~ナイキスト

という10バンドに分割します。Nが10だった場合はDC含む最低部分とナイキストまでの最高部分含めて10なので注意してください。

# 次の記事では

Faustで書いたコードの「ガワ」になる部分、Architectureファイルについて解説します。