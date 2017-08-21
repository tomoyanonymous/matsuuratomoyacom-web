---
date: 2016-06-17
layout: blog.hbs
title: 簡単なマルチチャンネルパンナー、DBAPの実装
permalink: dbap-implementation

---

MaxやPuredataを使う理由のうちにマルチチャンネルの制御がしたいということがある人は少なく無いと思います。

一般的な5.1chの実装はVBAPというアルゴリズムで実装されていますが、聴取位置からスピーカーが等距離でないといけなかったり、結構制限が多くて大変です。
そこでもう少しユルいアルゴリズムであるDBAPというのを使ってみようという話です。
<!-- more -->

# パンニングの基本:ILDとITD

人間は左右の耳における**音量差**と**時間差**で音源の到来方向を知覚しています。この時の

- 音量差をILD(Inter-Channel Level Difference)
- 時間差をITD(Inter-Channel Time Difference)

と呼んだりします。

一般的なステレオパンナーや次に紹介するVBAPではILDのみを使っています。バイノーラルなどはILDとITDを両方活用したものということが出来ます。

# VBAP

マルチチャンネルによく使われているアルゴリズムは基本このVBAPというものです。

VBAPはアールト大のVille Pukki氏の開発したアルゴリズムで、一般的なステレオパンナーを3次元的に拡張したものになります。

*Vector base amplitude panning  TKK Acoustics / Research / Spatial sound*

[http://legacy.spa.aalto.fi/research/cat/vbap/](http://legacy.spa.aalto.fi/research/cat/vbap/)

球面上に並んだスピーカー群を三角形分割し、聴取位置から仮想音源位置までのベクトルをその音源を囲む３つのスピーカーまでのベクトルの足しあわせ(基底ベクトルの一次結合)で表現しようという考えです。

すでにMax/Pd共通ソースのエクスターナルオブジェクトが配布されているので割と簡単に使えます。
Pd-extendedには標準でこのvbapエクスターナルが入ってます（vanillaでもfind externalからvbapで検索すると出てきます）。

<img src="{{config.root}}assets/img/dbap/pd_vbap.png" alt="">


VBAPでは先述したようにILDのみを使ったパンニング方法なので、すべてのスピーカーから同時に音が届くような前提で考えられています。

そのために発生する問題が2つ。

- スピーカーをすべて同一球面上に置かなければいけない。
- スイートスポットが1点に固定される。

例えば普通の四角い部屋の天井に幾つかスピーカーが配置されてる状態でVBAPを組もうと思うとすでに球面上に位置するポイントがないためにディレイを挟むなどして一工夫する必要があります。

# DBAP

以上の問題点を改善するというか、もうちょっと妥協した条件でそれっぽくなるのを目指した（と解釈しました）のがDBAPです。
VBAPが98年に誕生したのに比べてDBAPは論文にまとまったので言えば2009年ぐらいなので、そこそこ新しいもののようです。

空間音響の表現のプロトコルの標準化を図る[SpatDIF](http://www.spatdif.org/)の中にもDBAPの記述が見られます。

[http://redmine.spatdif.org/projects/spatdif/wiki/DBAP_-_Distance_Based_Amplitude_Panning](http://redmine.spatdif.org/projects/spatdif/wiki/DBAP_-_Distance_Based_Amplitude_Panning)

VBAPに必要な条件は

- 聴取位置
- スピーカー配置(聴取位置から等距離)
- 仮想音源位置(聴取位置から等距離)

の3つです。一方DBAPは、

- スピーカー位置
- 仮想音源位置

の2つの関係のみで音量を決定します。

聴取位置が等距離でないために位相差の干渉などは起こりますがそこに目をつぶればそれなりに移動してる感も出ます。

すでに実装されているものとしては

- [Jamoma](http://www.jamoma.org/)
DBAPを考案したBEK（Bergen Center for Electronic Arts）が中心になって作っているらしい？Max/Pd/C++用オーディオフレームワークの中にdbap用のオブジェクトがあります。ただJamoma自体がオーディオプロセッシング用MVCフレームワーク(!?)というかなりクセのあるライブラリのため、DBAPのみを使いたい時に気軽に使えるとも言い難いです。

- <a href="http://www.s373.net/code/a-objects/a-objects.html">a-objectシリーズ</a>
andré sier氏の制作した大量のエクスターナル群の中にa-dbap2d,a-dbap3dオブジェクトというのがある。最終更新は2007とちょっと古め

- [Pd用のdbap2d,dbap3dオブジェクト](https://github.com/kronihias/dbap)
上のa-objectを元に作られたPd用の実装。


Max上ではnodesオブジェクトを使ったパンニングも思想としては近いですが微妙に違います。
せっかく実装の簡単なアルゴリズムなので、Max上で組んでみるとしましょう。

# 実装

今回はJamomaのページにある論文をほぼそのまま実装したものですので、より詳しい情報が見たいという方はこちらを参考にするのがよいと思います。

[http://jamoma.org/publications/attachments/icmc2009-dbap-rev1.pdf](http://jamoma.org/publications/attachments/icmc2009-dbap-rev1.pdf)

今回メインでお世話になるのはvexprオブジェクトです。scalarmodeというのをオンにすればスピーカーの数が複数個になってもアウトプットのリストが長くなるだけで動的に対応できるのでとても便利です。


まず、仮想音源とスピーカー位置の距離をそれぞれ算出しましょう。

x,yそれぞれの距離の二乗を足して、平方根を取ります。

<img src="{{config.root}}assets/img/dbap/dbap_example1.png" alt="">

距離に反比例して音量が小さくなっていって欲しいので、逆数を取ればよさそうです。

<img src="{{config.root}}assets/img/dbap/dbap_example2.png" alt="">

しかし、距離が離れるにつれて減衰していく割合のようなものを自由に変えられると便利です。そこで次のように考えます。
今、距離が２倍になれば音量は1/2、デシベル値に直すと20*log10(1/2)≒-6.02dBです。これをロールオフ(dB/double)というパラメーターと考えるようにしましょう。

ここで逆数というのはマイナス１乗という風にも捉えられますから、1/d = d^(-1) = d^(-6.02/6.02)という風に変形するとd^(-rolloff/20*log10(2))で好きなロールオフに設定することができるようになりました。

<img src="{{config.root}}assets/img/dbap/dbap_example3.png" alt="">

ロールオフを3,6,9dBと変化させるとこのようになります。

<img src="{{config.root}}assets/img/dbap/rolloff_graph.png" alt="">

さて、ここで一つ疑問が浮かびます。スピーカー同士が近いところだけやたら音量が大きくなるのではないでしょうか？はい、そのとおりです。
なので出てきたゲインの係数を一度すべて足し、その数でそれぞれのゲインを割ってあげましょう。

<img src="{{config.root}}assets/img/dbap/dbap_example4.png" alt="">

こうすることで「全てのゲインの係数（正確にはエネルギーなのでその２乗）を合計すると1」になります。
というわけで実装はこれだけで完了です。簡単ですね。

さらにvexprをできるだけまとめるとこのように。

<img src="{{config.root}}assets/img/dbap/dbap_example5.png" alt="">


基本的な実装はたったこれだけで済みます。シンプル！

# オプション1: Spatial Blur（空間広がり）

先程までは音源を点音源と仮定してましたが音源がぼわっと広がるような仮定をする場合はどうでしょう。
この場合は割と簡単で、音源に半径を指定して距離の計算に組み込めば良いだけです。

<small>ちなみに仮想音源とスピーカーの距離が全く同じになるとゲインが無限大に発散するため一応半径を少しだけでも設定しておくのが吉だと思います。</small>

<img src="{{config.root}}assets/img/dbap/dbap_example6.png" alt="">


以上。

# オプション2:スピーカー領域外の定位(未完)
さて、最後のゲインで割ってあげる処理のおかげで一つ困った問題が出てきます。

スピーカー群から遠ざかるほど音量が全体的に平均的になっていくので、スピーカーに囲まれた領域より外側に定位させることが難しいのです。（というか、そもそもスピーカーより外側に定位させるというのは原理的に無理なんですが仮想音源が遠くから近づいてまた去っていく、のような表現を擬似的に行いたい、という要望はあると思います）

元論文によるとこの場合は「スピーカーの凸包集合に対する最小距離で音量を割ってあげる」とのことです。

凸包？

<img src="{{config.root}}assets/img/dbap/hull.jpg" alt="">


凸包とは点の集合を紐でぐるっと巻いてやった時にできるような形のことです。
オレンジ色がスピーカー群、緑色の丸が仮想音源だと思ってください。
最小距離は辺に対する垂線の場合もあれば頂点の場合もあるし、そもそも凸包自体を求めるのも結構大変みたいなのでこれについては挫折しました（元論文にも説明だけで実装の数式などは書いてないようで、めんどくさいので挫折したのだと思っています）。

現実的にはスピーカーの配置されてる部屋の形（四角とか円とか）で近似してそこからの距離を出すのがよいのではないかと思います。

# オプション3:jsuiでGUIを作ってみる

先ほどのvexprで作ったものはスピーカーの数は動的に変更できますが動かしたい音源が増えるたびに先ほどのオブジェクトを作って対応しないといけません。
poly~で複数可してもよいのですがなんだか冗長な気もしたのでまとめてやる方法はないかと思い、試しに使ってみようと思っていたjsオブジェクトで計算してみることにしました。

ついでにSpatial Blurも実装して、結果としては以下の様な感じで。アウトレットの数をargumentから動的に変更できるのが便利です。

<img src="{{config.root}}assets/img/dbap/dbap_jsui.png" alt="">
<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">もうちと良くなりそう　<a href="https://twitter.com/hashtag/maxmsp?src=hash">#maxmsp</a> <a href="https://t.co/can3cvtZwA">pic.twitter.com/can3cvtZwA</a></p>&mdash; 松浦知也/Tomoya Matsuura (@tomoya_nonymous) <a href="https://twitter.com/tomoya_nonymous/status/743467236774469632">2016年6月16日</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

今回もサンプルパッチ（とjsファイル）を置いておきましたので必要に応じてご活用ください。

[https://github.com/tomoyanonymous/maxmsp_dbap_example](https://github.com/tomoyanonymous/maxmsp_dbap_example)
