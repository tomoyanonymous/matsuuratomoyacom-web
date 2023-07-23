---
title: Electronic Delay Time Automatic Calculator(EDTAC)
thum: edtac-filipwolak.jpg
date: 2018-11-10
ogpimage: ogp.jpg
category: artwork
tags:
- installation
bigthum: true
---

photo above is by Filip Wolak.

時間を時間のままプログラミングするために作られた、もう一つのあり得る形のパーソナルコンピューター。
マスタークロックを持たず、それ故に時間の最小単位も持たない。
このコンピュータの機能は物理的にプログラムされた通り、時間を分割することだけである。

{{<vimeo 314336109>}}

[School for Poetic Computation](https://sfpc.io) Fall 2018 classにて制作、Student Showcase（2018年11月10、11日）にて展示。

またインターカレッジ・ソニックアーツフェスティバル2018(情報科学芸術大学院大学,2019年3月9、10日)にて展示。

![](edtac21.JPG)

![](edtac22.JPG)

![](edtac23.JPG)

![](edtac24.JPG)

## 時間の計算について

今日のコンピュータのほとんどがマスタークロックを持つ。同様に、チューリングマシン、有限状態機械、プッシュダウン・オートマトンといった今日の計算機の基礎になっているほとんどの計算モデルには時間の概念が無い。それらは基本的に、1計算ステップごとにメモリー内のデータを動かすことだけを考えており、理想的には無限に高速なクロックがあるならばその方がよい、ということだ。

そして、コンピュータが時間に関わる情報を扱うとき、通常我々は連続している時間を一定の間隔で分割することで、数値の集合として扱う。

しかし、時間を離散化せずに計算する方法というものは無いのだろうか？

例えば、アナログ回路の基本的なものとして、単安定マルチバイブレータというものがある。
この回路はパルス遅延回路の一種で、電気パルスを受け取り、一定時間経過後にまた電気パルスを出力する。遅延時間はコンデンサの容量と抵抗値の組み合わせで決定される。ではここで、この回路の出力が抵抗を切り替えると同時に入力へフィードバックされたらどうなるだろうか？パルス遅延回路は先ほどとは違う遅延時間の後再びパルスを出力する。これを繰り返すことで一定でない時間間隔のタイマーを作ることができるだろう。パルスの間隔は抵抗値の並びという形で再現性があるし、これをプログラマブルということは可能だろう。だがその時間間隔は抵抗値という物理的パラメーターなので、ここでは何一つ離散化が行われていない。

![edtac-video-spriteone](edtac-video-spriteone.png)

これがEDTAC(Electronic Delay Time Automatic Calculator)の基本動作である。

このデバイスは世界に数という概念が無くても存在することができる。数とは、はるか昔から使われ続けてきた一番大きなフォーマットであり、共通規格だ。コンピューターは数をはじめとした、膨大な標準規格の上に成り立っている。

このデバイスはコンピューターと呼ばれようが呼ばれまいがその機能を遂行できるし、最低でもわたしはこれを時間の計算という目的のもとに作った。

![](edtac-minu-han.jpg)
photo by Minu Han

## 音・音楽プログラミングの最小限

EDTACにおけるプログラミングの作業は、光ファイバーの接続順、抵抗値という物理値、カウンター回路のアルゴリズムを決めることである。世界初の電子計算機ENIACはデータフロー方式というケーブルで物理的に計算素子の順番を繋ぎ変えることがプログラミングであり[^chun]、これをプログラミングと呼ぶのならEDTACの配線作業もプログラミングと呼べるだろう。

[^chun]: Chun, W. H. K. (2005). On Software, or the Persistence of Visual Knowledge. Grey Room, 18, 26–51. doi:10.1162/1526381043320741

またコンピューターを用いた音生成の歴史を辿れば、Max MathewsらがMUSIC Iで音圧を数列で直接記述する今日の音プログラミングのはじまりの前に、CSIRACやFerranti Mark Iといったコンピューターがデバッグのためにバイナリデータ信号をスピーカーに直接流して音を鳴らす機能（Hooter）を持っていたのを転用して、任意のメロディを鳴らすという、汎用性はないが音のプログラミングという取り組みが確かに行われている[^nishino][^doornbush]。

[^doornbush]: Doornbusch, P. (2004). Computer Sound Synthesis in 1951: The Music of CSIRAC. Computer Music Journal, 28(1), 10–25. doi:10.1162/014892604322970616 
[^nishino]: Nishino, H., & Nakatsu, R. (2016). Computer Music Languages and Systems: The Synergy Between Technology and Creativity. In Handbook of digital games and entertainment technologies. doi:10.1007/978-981-4560-52-8

では、何を以て音のプログラミングが達成されたのかという境目は存外曖昧なものである。MUSIC Iにはじまるサンプリングによる音表現を基礎にした信号処理には技術的な限界もあり、異なる形式での処理方法の可能性も示唆されている中で[^puckette]、EDTACはその根本的な問題である時間を伴う信号をどうやって時間から引き剥がして記述するかという問題に言及する。

[^puckette]: Puckette, M. (2015). The sampling theorem and its discontents. http://msp.ucsd.edu/Publications/icmc15.pdf. keynote speech in ICMC 2015.

## Working Process

![](edtac_working1.jpg)
photo by Tiriree Kananuruk

![](edtac_working2.jpg)
photo by Tiriree Kananuruk

![](edtac_progress.jpg)

![](edtac_progress2.jpg)
