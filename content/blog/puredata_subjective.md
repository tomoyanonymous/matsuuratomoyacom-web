---
date: 2016-04-27
title: Puredataで評価実験(サンプルパッチあり)
permalink: Puredata_subjective_test
layout: blog.hbs
---

微妙な需要ですが、Puredataはアルゴリズム作曲とか、シンセやエフェクター作ったりする以外にも（特に音を使う）主観評価実験に使うと便利だったりします。

大体の実験で、

- DAWソフトとかでパラメーターごとの音刺激を作成
- iTunesとかのプレイリストに音刺激入れてランダム再生
- 紙の解答用紙に記録してもらう
- 出てきたデータをエクセルにひたすら入力(めんどくさい)
- エクセルからCSV書き出し
- Rとかでデータの解析

という手順になったりするのですがこの内の**iTunes、紙、エクセル**の部分をPuredataを使えば一つにまとめることが出来ます。

当然実験内容によって作り方が変わるので万能のパッチは存在しないのですが、ある程度共通して使えるメソッドはあるのでここに書き記しておこうと思います。
<!-- more -->

<img src="{{config.root}}assets/img/pd_subjective/patch0.png" style = "width :300px;"alt="">

<small>今回の完成目標。</small>


ちなみに、「GUIとか組むならMaxのほうがプレゼンテーションモード使えて楽やん」と言うのはごもっともですが実験のためだけにMax買うのがつらいとか、（芸術系の大学はともかく）大学の授業だとMaxよりPuredataのほうが多そうな気もするので今回はPuredataで例示しようと思います。
それと、Pdの利点としてもう1つあげられるのは**直接CSVファイルに記録できること**があります。Maxでもdict使ってJSONで記録すれば似たようなことは出来ますが。。。


# 仮の実験内容

今回はこの記事通して架空の**「ステレオ音源の音像幅を狭めた時の印象評価」**という実験用パッチを作ってみます。

この実験では「元の音源を3種類」「ステレオの音像幅を100%、75%、50%、25%」に変化させたのをそれぞれの元音源と比較して（つまり100%は変化なし）、それぞれの「音像幅、包まれ感、空間の広がり」がどのくらい変化したかを回答してもらうとします。

これが統計の評価的に妥当な実験かどうかはとりあえず無視して、実際の制作に役立ちそうな部分だけを寄せ集めたものだと思ってください。

# パラメーターの洗い出し

実験用パッチを作るにあたって最初にパラメーターが何種類あるかを洗い出します。

今回は「元の音源を3種類」「ステレオの音像幅を100%、75%、50%、25%に変化させる」でした。
ということは今回は12種類の比較があるわけです。

## パラメーターを順列に対応させる

まずはこの全パターンを1~12の番号に1つずつ割り振ります。

具体的にはこのような感じです。

<img src="{{config.root}}assets/img/pd_subjective/patch1.png" alt="" style = "width:300px;">

さて、これに加えて「音量を+2、+1、±0、-1、−2、-3dB変化させる」というパラメーターを加えたくなった場合はどうでしょう（妥当性があるかは相変わらず無視です）。

こんな感じですね。

<img src="{{config.root}}assets/img/pd_subjective/patch4.png" alt="" style = "width:300px;">

実際に数値はArgumentに書くか右インレットに入れるかのどちらかでよいので、次の内どちらでも良いです。

<img src="{{config.root}}assets/img/pd_subjective/patch2.png" alt="" style = "width:300px;">
<img src="{{config.root}}assets/img/pd_subjective/patch3.png" alt="" style = "width:300px;">

前者のほうがコンパクトなので今回はこちらにします。

これで、0~71の順列に対応した組み合わせが吐き出されるようになります。

## ランダムに出力する

実際の実験では出題がランダムに為されるのが望ましい場合が多いですね。
0~71で規則的に組み合わせが並んでいるので、0~71の数字をバラバラな順番に**被りなく**出してくれるのが欲しいです。
ここで便利なのがMax/MSPのオブジェクトを収録しているcycloneライブラリ(pd-extendedには標準で入っています)。
\[urn\]というオブジェクトがそれに相当します。
というわけでこんな感じです。

<img src="{{config.root}}assets/img/pd_subjective/patch5.png" alt="" style = "width:300px;">

\[import cyclone\]は作らなくても平気ですがたまにurnオブジェクトが行方不明になったりするので明示的につけておいたほうが安心です。

ついでに色を付けて、少しづつモジュールとして分離してくために各パラメーターを\[send\]で送っておきましょう。

<img src="{{config.root}}assets/img/pd_subjective/patch5.5.png" alt="" style = "width:300px;">


# 信号処理部分

この辺は本当に実験内容によりけりなのでサクッと行きます。各パラメーターを受け取ってselで実際の値にマッピング、実際の処理に反映。

<img src="{{config.root}}assets/img/pd_subjective/patch13.png" alt="リスタートつきプレイヤー" style = "width:500px;">

# UIを作る

Pdで一番面倒くさいところですが、回答のインターフェースを作ります。まずは必要な部品の洗い出し。今回は

- エフェクト掛けた音源と元音源の切り替え:hradio
- 7段階の回答部分*3:hradio
- 問題を進めるためのボタン:bang
- リセットボタン:bang
- セーブボタン:bang
- ボリュームとDSPのオンオフ:output~

で平気そうです。実際に並べるとこんな感じです。

<img src="{{config.root}}assets/img/pd_subjective/patch8.png" alt="UI" style = "width:400px;">

あとはオブジェクトを右クリック→プロパティからひたすら見た目を変更していきます。日本語は**直接入力できないがコピペなら入る**ので頑張りましょう。pdには寛容さが大切です。

ちなみに、ボタンの説明書きはコメントでつけるよりもプロパティからラベルに書いたほうが迷子にならないしスタイルも変更できるのでおすすめです。地味にMaxに無い良い機能。

次になにもないところで右クリック→プロパティを開き「親パッチに表示する」にチェックを入れ、表示範囲のサイズとマージンをポチポチ手打ちで赤い線がうまくUIを囲うように変更します。

<img src="{{config.root}}assets/img/pd_subjective/patch9.png" alt="UI" style = "width:500px;">

で、sendでまた分離しておきましょう。

<img src="{{config.root}}assets/img/pd_subjective/patch10.png" alt="UI" style = "width:500px;">

# 記録部分を作る

さて、最終的にはCSVファイルに回答を記録したいわけですが、実は元ネタはこちらにあって

[https://github.com/danomatika/rc-patches/tree/master/extra](https://github.com/danomatika/rc-patches/tree/master/extra)
のなかに\[csv_file\]という\[binfile\]をラップして作ったサブパッチがあります。

openframeworks用のPdアドオンofxPdの作者[Dan Wilcox](http://danomatika.com/)さんの個人プロジェクト用に作ってあったのを勝手に解読して使ってます。これを使ってもいいのですがabstractionにするよりもパッチに合わせてイチから作ってしまうほうがコンパクトだなと思い\[csv_file\]自体は使っていません。

今回の場合、結論から言うとこうです。

<img src="{{config.root}}assets/img/pd_subjective/patch11.png" alt="UI" style = "width:500px;">

あまり詳しい説明するのは~~めんどくさい~~時間がかかるのでやめておきますが、

リストを分解→リストの各要素をany2byteで文字コードに変換→リストの要素区切りにカンマの文字コード44を入れていく→リストごとの区切りに改行コード13を入れていく（**OSによって改行コードが変わるので注意**）というのの繰り返しです。

# 処理の順番

地味にハマるのが回答の記録/音源の再生/パラメーターの割り振り/とかをどういう処理の順番でやるかを間違えて最後の回答だけ記録しそこねたとか、手続き型プログラミングだと起こりにくいミスが発生します。

今回の例をザクっと手続き風に図にすると(ちゃんとUML書ける人からめっちゃ怒られそうですが)

<img src="{{config.root}}assets/img/pd_subjective/step.jpg" alt="UI" style = "width:500px;">

雰囲気的にはこんな感じです。

これをパッチにするとこうなります。

<img src="{{config.root}}assets/img/pd_subjective/patch12.png" alt="UI" style = "width:200px;">

# 呼び出し用パッチを作る

さて、これで必要な処理は一通り揃いましたので、main.pdとかいう名前にして保存します。
後はこのパッチを呼び出すためのプレイヤーのパッチを作ります。cmd+nで新しくパッチを立ち上げ、main.pdと同じフォルダにplayer.pdという名前で保存します。

そうしたらplayer.pdには\[main\]というオブジェクトを作ればいきなりさっき作ったUIが出てくるはずです。

<img src="{{config.root}}assets/img/pd_subjective/patch14.png" alt="UI" >

後は実際に使うときはplayer.pdを立ち上げるようにすればOKです。

# サンプルパッチ

[https://github.com/tomoyanonymous/pd_subjective_test_example](https://github.com/tomoyanonymous/pd_subjective_test_example)

同フォルダにmusic1.wav、music2.wav、music3.wavという名前の好きなステレオ音声ファイルを突っ込んでから立ち上げてください。
ぶっちゃけちゃんとチェックしてないのでバグあるかも。
