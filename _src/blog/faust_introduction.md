---
date: 2016-12-01
layout: blog.hbs
title: 音声処理プログラミング言語、Faustの紹介
permalink: faust_introduction

---

*この記事は[Faust(多分ひとり)Advent Calender](http://qiita.com/advent-calendar/2016/faust)の1日目の記事です。*

さて、やろうと思っていて中々出来てなかった[Faust](http://faust.grame.fr)の紹介ですが、この際Advent Calenderでまとめて紹介して行こうと思います。
今回はFaustの全体的な紹介です。

<!-- more -->


# この記事の流れ

<img src="{{config.root}}assets/img/faust/faust_logo.png" alt="" style = "width :300px; margin:20px;">


Faustとは*Functional-AUdio-STream*の略で、フランスの音響研究所GRAMEが中心になって2004年頃から開発を続けている**関数型音声処理言語**です。

このAdventCalenderではFaustの紹介からtips、応用的な使い方までできるだけ網羅的にFaustについての記事を書いていきます。

この記事での紹介はJUCE Summit 2015でのOliver Larkinさんによるプレゼンの前半が非常によくまとまっていたのでそれをベースに書かせていただきます。英語OKな人は直接動画見るのも良いと思います。

<iframe width="560" height="315" src="https://www.youtube.com/embed/INlqClEOhak" frameborder="0" allowfullscreen></iframe>

スライドもLarkin氏のサイトに上がってます。

[http://olilarkin.co.uk/misc/JUCE_Summit.pdf](http://olilarkin.co.uk/misc/JUCE_Summit.pdf)

# Faustとは？

基本的な説明は以下の通り。

- Faustは音声信号処理に特化した関数型プログラミング言語です。
- GrameのYann Orlarey, Stéphane Letz and Dominique Foberらを中心に様々なコントリビュ―タ―により開発を続けられています。
- FasutコンパイラはFasut言語で書かれたコードからC++、C、JAVA、Javascript、asm.js、LLVM IRのコードを出力します。基本的にはC++とCだけですが、faust2というブランチのバージョンではLLVMを利用したJITコンパイル（プログラムの起動中にコンパイルすること）ができます。
- 多数の”アーキテクチャファイル”と呼ばれるファイルをコンパイルした信号処理のコードと組み合わせることで簡単に様々なフォーマット上（Maxオブジェクト、Puredataオブジェクト、スタンドアロンアプリケーション、VSTプラグインなどなど）に出力することが可能です。
- コンパイラはLinux、Windows、Macどれでも動くクロスプラットフォーム仕様で、GPLライセンスで配布されています
- Faustでコンパイルしたプログラムは基本的にコンパイルしたソースのライセンスを引き継ぎます。多くの場合商用利用可能です

# Faustでのプログラミングの基本的な考え方

Max、SuperCollider、Puredata、ChucKなど音声処理ができるプログラミング環境は多数存在しますが既存の環境の中で一番近いものを上げるとすればMaxの中の**Gen**だと思います。

その理由は以下のような共通点があることです。

- 信号を複数のシグナルブロックの集まりだと捉え、そのつなぎ方を記述する
- **すべての処理はサンプル単位**。MaxやSuperColliderのようにシグナルレート/コントロールレートと言った概念は無い。
- コードをC++にJITコンパイルできる。

さらにFaustならではの特徴は

- 非常に抽象的な記法ができるので、グラフィカルプログラミングでは度々面倒になる多数のブロックが並列あるいは直列/入れ子のように繋がる場合でも簡潔に記述ができる。
- フィルタやオシレータなど、全てのライブラリが揃っているが**全てがFaustで記述されている**ので信号処理にブラックボックスが無い。信号処理のお勉強にもなる。

- さらにWebエクスポートとかもできる。（サンプルは[こちら](http://faust.grame.fr/images/noise/noise.html)音が出ますので注意。）

# Faustのメリット・デメリット

いくつかさっき言ったのと被ってますが、

## メリット

- 非常に詳細かつ簡潔に信号処理を記述できる
- 慣れるとプログラミングの中で信号処理のみに集中できるのでワークフローが高速に
- 一つの信号処理が多くのプラットフォームで共通して使える
- 処理を最適化して出力してくれるので、C++直書きより高パフォーマンス
- フィルタ・オシレータ・様々なエフェクトの大量のライブラリが揃っている
- ドキュメントをFaustのコードから出力することが可能

## デメリット

- 全てがサンプル単位で処理され続けるので、あまり巨大なモジュールを作ると使ってない部分も信号処理をし続けるので無駄が発生する（with-muteというブランチで部分的に信号処理を止められる機能も開発中）

- オーバーサンプリングなど処理のサンプリングレートを部分的に変更することは出来ない。また幾つかのサンプルをまとめて処理するFFT処理も同様にできないので、高速なコンボリューションやスペクトラルプロセッシングは出来ない(これもmultirate-prototypeというブランチで開発中ではあるが、まだまだ時間かかりそう)

- とにかく記法が特殊なので慣れるまでにマジで時間がかかる。ただしコツを掴むと高速開発できるようになる。

- エラーが起きてもエラーメッセージが何を指摘していのかよくわからないことが多々ある（これも慣れると段々わかってくる。）

# Faustの基本記法

## 基本的な考え方

まず、Faustではあらゆる処理を入力がm個、出力がn個の処理ブロックと考え、それを繋いでいきます。

例えば基本的な＋、-、×や/も「2入力1出力」のブロックです。

<img src="{{config.root}}assets/img/faust/plus_mult_process.svg" alt="" style = "max-height:400px;">


ちなみにこの画像はFaustの出力の一つにSVG出力というのがあり、コードの構造を視覚的に確認することができるというものです。コードそのものが抽象的なFaustでは非常に重宝されます。

その他基本ブロックとしては、_(アンダースコア)が「1入力1出力」で、入力をそのままパスするブロックです。また、!（エクスクラメーションマーク）が「1入力0出力」の入力をカットするブロックです。

<img src="{{config.root}}assets/img/faust/ident_cut_process.svg" alt="" style = "max-height:400px;">


これ、使う意味あんの？と思いますが他のブロックとの入出力数の調整のためにめちゃくちゃ使います。

その他、sinやcosなどの基本的な関数も同様にブロックとして扱います。

## 接続文法

さて、このブロック同士をつなぐコンポジション（「接続」としましょうか）という文法がFaustの特徴的な文法です。

接続文法は**並列(Parallel)**、**直列(Sequencial)**、**分岐(Split)**、**結合(Merge)**、**再帰(Recursive)**という5種類の文法があります。

それぞれの接続法は見てもらえばイメージがつかめると思います。詳しくは文法の詳細解説の記事でお話ししますが、入力と出力数がルールに則っていないと接続できずエラーになります。

### Parallel

```java
process = (10,*);
```

<img src="{{config.root}}assets/img/faust/par1-svg/process.svg" alt="" style = "max-height:400px;">

### Sequencial

```java
process = ((*,/):+);
```

<img src="{{config.root}}assets/img/faust/seq1-svg/process.svg" alt="" style = "max-height:400px;">

### Split

```java
process = ((10,20)<: (+,*,/));

```

<img src="{{config.root}}assets/img/faust/split1-svg/process.svg" alt="" style = "max-height:400px;">

### Merge
```java
process = ((10,20,30,40):> *);

```

<img src="{{config.root}}assets/img/faust/merge1-svg/process.svg" alt="" style = "max-height:400px;">

### Recursive

```java
process = +(12345)~ *(1103515245)

```

<img src="{{config.root}}assets/img/faust/rec1-svg/process.svg" alt="" style = "max-height:400px;">

※これだけわけわからんコードだと思いますがこれは乱数列の生成をするコードです


それぞれ繋いだものを最終的にprocess = your_block;というように"process"に持っていくとそれが最終的な出力ブロックになります。

# プリミティブなブロックの種類達

- 数値(float/int)。0in1outのブロックとして扱われます
- 基本演算子
- 比較演算子
- ビット演算子
- Cのmath.hの関数(sin、cosやexp、logなどなど)
- ディレイ（1サンプル、可変サンプルなど）
- 読み書き可能なテーブル（配列）
- シグナルセレクター
- その他Cの外部関数呼び出し
- **UI要素**

# UI機能

<img src="{{config.root}}assets/img/faust/UIs.png" alt="" style = "max-height:400px;">


Faustでは例えばシンセを作るならオシレータのピッチやフィルターの周波数、Qなど実行中に変えたいパラメータが幾つかあると思います。
それらを予めUIとして定義しておくと、(アーキテクチャファイルの実装次第ですが)スライダーやトグルボックスなどのUIとして数値を変更することが可能です。

Faust上で定義されてるUIの種類は以下の通り。


- button(label)：押すと1サンプルだけ0から1になる
- checkbox(label):押すと1と0を切り替えられる
- hslider(label,initial,min,max,step):可変定数。水平スライダ
- vslider(label,initial,min,max,step):可変定数。垂直スライダ
- nentry(label,initial,min,max,step):可変定数。数値入力
- hbargraph(label,min,max):数値モニター、水平メータ
- hbargraph(label,min,max):数値モニター、垂直メータ
- hgroup(label,block):グルーピング。水平配置
- vgroup(label,blobk):グルーピング。垂直配置
- tgroup(label,block):グルーピング。タブ切り替え配置

しかし、実際にこれらがどうUIとして出力されるかはアーキテクチャファイル次第です。
例えばQtアプリケーション出力ではほぼこの通り出力されますが、Maxのオブジェクトとして出力された場合はUIもなにもないので、オブジェクトに"label" (設定したい数値)というメッセージを送ることで全てのUIを同じように操作することになります（ちなみにMaxではhbargraphは機能しません）。

またhslider("btn1 [style:knob]",0,0,100,1)のようにラベルの中に拡張メタデータを埋め込むことができ、アーキテクチャファイル側で対応した実装がされていれば、例えばこの例の場合はQtアプリ出力の際にスライダーではなくノブとして現れてくれます。
スタイルの変更以外にも、MIDI入力の定義やOSCのアドレス設定などもできるものがあります。

# ライブラリ

こちらにライブラリのドキュメントがあります。
また別記事での詳細解説の際に触れますが、最近ライブラリが刷新されインポート方法に若干変化が出たのと、スライドにあるものより更に種類が増えました。

[http://faust.grame.fr/library.html](http://faust.grame.fr/library.html)

ここではとりあえず名前と簡単な説明のみ。

- analyzer.lib：音圧トラッキングやBPFを使った簡易的なスペアナなど
- basic.lib:単位変換、時間カウンタやサンプルホールドなどの基本ライブラリ
- compressor.lib:コンプとリミッター
- delay.lib: ディレイ（補完つき）など
- demo.lib: ライブラリ同士の組み合わせのデモ。
- envelope.lib:adsrなどのエンベロープ関係。
- filter.lib:フィルター。素人から玄人まで使い倒せて、非常に細かいとこまで設定可能
- hoa.lib: アンビソニック関係。
- math.lib: サンプルレートの取得とか、sinhみたいな関数系がたくさん
- misceffect.lib: 分類微妙なエフェクト達。ノイズゲート、キュービックディストーション、ウェーブガイドメッシュなど
- miscoscillator.lib: 矩形波、ノコギリ波、サイン波などいろんなオシレータ。サイン波だけで10種類ぐらいアルゴリズムがある。
- noise.lib: ホワイトノイズ、ピンクノイズ関係
- phafla.lib: フェイザーとフランジャー。
- pm.lib: ウェーブガイド系物理モデリング用ライブラリ。
- reverb.lib: リバーブ。おなじみfreeverbやzita_revなど
- route.lib: ブロック同士の複雑な接続のための便利なやつ。
- signal.lib: プチプチノイズ防止のsmooth()や複数のシグナルバスbus()など便利系。
- spat.lib: 簡単なパンナー。
- synth.lib: 多分物理モデリングのためのニッチなエンベロープジェネレータ群。
- vaeffect.lib: moogのvcfモデリングやワウなどのエフェクト
- tube.lib
- tonestack.lib:この2つはドキュメント化されてないがギターアンプとそれに使われる真空管のモデリング。IRのサンプルと思われる数値が直書きしてあってやばい

今年のFaust Awardで賞取った[ambitools](http://www.sekisushai.net/ambitools/)はhoa.libをガンガン使っているはずですし、tonestackとtube.libははLinux用アンプシミュレーター[Guitarix](http://guitarix.org/)のために作られたやつだったはずで、iOS用アプリ[moForte](http://www.moforte.com/moforte-guitar-app/)でも使われているはずです。

# Faustでの実際のワークフロー

## コマンドライン

[コンパイラ](https://sourceforge.net/p/faudiostream/code/)をダウンロードしてきて自力でビルドすれば、FaustのコードからC++のファイルなどを直接コンパイルできるようになります。

例えば、以下のFaustのコードは入力1と2のボリュームをスライダーでコントロールしてミックスするというコードです。

```java
// simplemixer.dsp
process = (_,hslider("volume1",0.5,0,1,0.01),_,hslider("volume2",0.5,0,1,0.01) ):(*,*): +;

```

何が何やらさっぱりだと思いますが、これがこういうシグナルブロックになります。

<img src="{{config.root}}assets/img/faust/simplemixer_process.svg" alt="" style = "max-height:400px;">

そしてこれをコンパイルするコマンドがこちら。

```bash
faust simplemixer.dsp -o simplemixer.cpp
```

コンパイルオプションにも色々あるのですが、例としてはこんな感じ

- -a:アーキテクチャファイルの指定
- -o:出力ファイル名の指定
- -svg:SVGダイヤグラムの出力
- -double,-single:小数点精度の変更
- -vec :コードの自動vectorization(何ていうんですかね、並列処理するコードに勝手にしてくれて、パフォーマンス上げられたりします)

そうすると出てくるコードがこちら。長いですが敢えて全部貼りますよ。
**注目すべきは最後の2つ、compute()とbuildUserInterface()です。**

```cpp
/* ------------------------------------------------------------
Code generated with Faust 2.0.a53 (http://faust.grame.fr)
------------------------------------------------------------ */

#ifndef  __mydsp_H__
#define  __mydsp_H__

#ifndef FAUSTFLOAT
#define FAUSTFLOAT float
#endif  



#ifndef FAUSTCLASS
#define FAUSTCLASS mydsp
#endif

class mydsp : public dsp {

 private:

	int fSamplingFreq;
	FAUSTFLOAT fHslider0;
	FAUSTFLOAT fHslider1;

 public:

	void metadata(Meta* m) {
	}

	virtual int getNumInputs() {
		return 2;

	}
	virtual int getNumOutputs() {
		return 1;

	}
	virtual int getInputRate(int channel) {
		int rate;
		switch (channel) {
			case 0: {
				rate = 1;
				break;
			}
			case 1: {
				rate = 1;
				break;
			}
			default: {
				rate = -1;
				break;
			}

		}
		return rate;

	}
	virtual int getOutputRate(int channel) {
		int rate;
		switch (channel) {
			case 0: {
				rate = 1;
				break;
			}
			default: {
				rate = -1;
				break;
			}

		}
		return rate;

	}

	static void classInit(int samplingFreq) {

	}

	virtual void instanceConstants(int samplingFreq) {
		fSamplingFreq = samplingFreq;

	}

	virtual void instanceResetUserInterface() {
		fHslider0 = FAUSTFLOAT(0.5f);
		fHslider1 = FAUSTFLOAT(0.5f);

	}

	virtual void instanceClear() {

	}

	virtual void init(int samplingFreq) {
		classInit(samplingFreq);
		instanceInit(samplingFreq);
	}
	virtual void instanceInit(int samplingFreq) {
		instanceConstants(samplingFreq);
		instanceResetUserInterface();
		instanceClear();
	}

	virtual mydsp* clone() {
		return new mydsp();
	}

	virtual int getSampleRate() {
		return fSamplingFreq;
	}

	virtual void buildUserInterface(UI* ui_interface) {
		ui_interface->openVerticalBox("0x00");
		ui_interface->addHorizontalSlider("volume1", &fHslider0, 0.5f, 0.0f, 1.0f, 0.00999999978f);
		ui_interface->addHorizontalSlider("volume2", &fHslider1, 0.5f, 0.0f, 1.0f, 0.00999999978f);
		ui_interface->closeBox();

	}

	virtual void compute(int count, FAUSTFLOAT** inputs, FAUSTFLOAT** outputs) {
		FAUSTFLOAT* input0 = inputs[0];
		FAUSTFLOAT* input1 = inputs[1];
		FAUSTFLOAT* output0 = outputs[0];
		float fSlow0 = float(fHslider0);
		float fSlow1 = float(fHslider1);
		for (int i = 0; (i < count); i = (i + 1)) {
			output0[i] = FAUSTFLOAT(((fSlow0 * float(input0[i])) + (fSlow1 * float(input1[i]))));

		}

	}


};


#endif

```


computeに信号処理の部分、buildUserInterfaceにUI記述の部分が表れているのが分かりますでしょうか？

## アーキテクチャファイル

そして、この出力されたコードの前後にくっつけるコードを予め定義しておくのがアーキテクチャファイルというわけです。例えばMaxオブジェクトならMaxのSDKを読み込みオブジェクト生成のための実装の中でmydsp->compute()やbuildUserInterfaceを呼び出して処理をするような物を書いておけば、後はcppファイルをコンパイルすればいいだけです。もちろん、**アーキテクチャファイルを自分で作ることも出来ます。**

## faust2xxx

Faustのコマンドラインをインストールすると、
faust2xxxでfaustコードをアーキテクチャファイルを指定してコンパイル、その後cppをコンパイルするところまでを書いたシェルスクリプト群がくっついてきます。
一覧は以下の通り。

faust2alqt faust2alsa faust2alsaconsole faust2android faust2api faust2asmjs faust2au faust2bela faust2caqt faust2caqtios faust2csound faust2dssi faust2eps faust2faustvst faust2firefox faust2gen faust2graph faust2graphviewer faust2ios faust2iosKeyboard faust2jack faust2jackconsole faust2jackinternal faust2jackserver faust2jaqt faust2ladspa faust2lv2 faust2lv2synth faust2mathdoc faust2mathviewer faust2max6 faust2md faust2msp faust2netjackconsole faust2netjackqt faust2octave faust2owl faust2paqt faust2pdf faust2plot faust2png faust2puredata faust2raqt faust2ros faust2rosgtk faust2rpialsaconsole faust2rpinetjackconsole faust2sc faust2sig faust2sigviewer faust2supercollider faust2svg faust2vst faust2vsti faust2webaudio faust2webaudioasm

この他にWindows用のプラットフォーム依存のものがあるのですが多すぎるので省きました。面白いので言うと[OWL](http://hoxtonowl.com)や[Bela](http://bela.io/)などのハードウェアプラットフォームやWeb Audio用のもの（asm.js使用）などでしょうか。

なお、これはただのシェルスクリプトでしか無いのでQtアプリケーションを書き出すのであればQtSDKが入っていてqmakeコマンドが使えるようになっていたり、MaxオブジェクトであればMaxSDK、VSTプラグインならVST SDKを各自インストールしておく必要がありますのでご注意を。

# その他のプラットフォーム

しかし毎回コードを手動でコマンド打ってコンパイルするのも何かと面倒です。
そのための開発環境としては、次の記事で詳しく紹介しますが

[http://faust.grame.fr/download/](http://faust.grame.fr/download/)

- FaustLive:Qt製の.dspファイルの更新を検出して自動でライブコンパイルしてアプリケーションとして確認可能な環境（リモートコンパイル機能でMaxオブジェクトやVSTプラグインはエクスポートされたものをDLすることが可能）
- [オンラインコンパイラー](http://faust.grame.fr/onlinecompiler/)： ブラウザ上でリアルタイムにコードをダイヤグラムで確認しながら開発可能、FaustLive同様にリモートビルドしたバイナリをDL可能
- [Faust PlayGround](http://faust.grame.fr/faustplayground/)： オンラインコンパイラーと似ているがブラウザ上で実際に音を出しながらFaustの様々なライブラリをMaxのようにパッチングしながら確認可能な環境
- faustgen~:Max上でFaustのコードをライブコンパイルできるオブジェクト。たまに融通効かないがMaxのGUIやデバッグ機能などと一緒に使える、慣れると強力な開発環境

の4つがあります。

これらはどれもfaust2ブランチのライブコンパイル機能を活用して作られており、**libfaust**というライブラリを使えばC++のアプリケーション上でfaustのコードを実行時コンパイルして信号処理を変更するような事もできます。

例としてはプレゼンをしているLarkin氏が作っている、JUCEライブラリとの組み合わせでVSTプラグイン上でさらにVSTやFaustのdspを読み込み、その中の任意のパラメータを2次元上にマッピングして複雑なコントロールをする[pMix](https://github.com/olilarkin/pMix2)という中々ぶっ飛んでるソフトなどがあります。

# 次の記事では

とりあえずFaustを触って見るための入門環境として上で説明したFaustLive、オンラインコンパイラーなどの解説をする予定です。よろしくお願いします。
