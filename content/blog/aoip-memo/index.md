---
title: 2020年のAoIP技術メモ
date: 2020-03-11
# ogpimage: ogp.jpg
draft: true
---
行きがかり上AoIPについて調べているが情報が散らばりすぎているのでメモします

# Audio Over IPとは

名前の通り音声信号をIPパケットに乗せて送る技術全般を指す。

具体的にはDante、Ravenna、LiveWire、AES67、SMPTE2110、IEEE 802.1 AVBあたりのことを指すことが多い。

ちなみにVoIPという用語もあるがこれは伝統的にIP電話みたいな声を送ることに特化した技術のことを指すことが多い。最近はVideo Over IPというのもあるので用語が混ざってややこしい。AudioとVideo両方を送ったりするのにMedia Over IPという呼び方をすることもある。

# 事前用語解説

## AES

Audio Engineering Society　オーディオ産業関連の学会。アカデミックな学会でもあるけど企業の研究者とかがいっぱいいる。年に2回コンベンションで論文発表したり企業の製品発表をしている。オーディオ関連の様々な標準規格を作っていてAES〇〇と名前がつく。会員にならないと論文が読めないけど結構高い。

http://www.aes.org

## EBU

European Broadcasting Union。ヨーロッパにおける放送規格を作っているところ。AESの規格をもとにして作っていることが多いので互換のものも結構ある。

https://www.ebu.ch/home

## SMPTE

Society of Motion Picture and Television Engineers。アメリカの映像関係の規格を作っている団体。タイムコードの規格がデファクトスタンダードになっているので単にSMPTEと呼んだときこれを指すこともある。

https://www.smpte.org/

# 需要

(いろいろ不正確なのであまり信頼しないで欲しいです)

もともと音声のデジタル伝送といえばAES(XLRでステレオ送るやつ)（単にAESと書かれることが多いが正確にはAES3）を始め、ADAT(48kHz\*8Ch)とかMADI(48kHz\*64Ch)(AES10とも呼ぶ)とかがある。

https://synthax.jp/madi-information.html

MADIとか普及する前は例えばスタジアム規模のライブとかスポーツ中継のようにマイクのある現場とコンソールまでの距離が極端に離れている場合でも極太マルチケーブルを引き回していたりした。アナログだと普通に距離によって信号減衰とかノイズが乗るとかがあるので困る。

MADIなら光ファイバー使って2kmぐらい引き回すことができる。ケーブルの本数が少なければ多重化（フォールトトレラントのため）もしやすい。

一方MADIは音声送るためだけの信号なので、中継局とかでいい感じにチャンネルマトリクスを組みたい場合はMADIのルーター（高い）を買ったりそれ用にデジタルミキサーを使ったりすることになる。

AoIPにすると音声以外に映像の信号だったり制御用の信号とかもまとめて一つのネットワークの系統に入れることができるとか、専用のケーブルとか機器がいらないとかのメリットがある。

そしてIPはIPなので当然WAN越しに送ることも不可能では無い。別に圧縮信号にして送ってもよいのでライブストリーミングとかにも応用が効く。（ただ、AoIP言った時に一般的に指すのは非圧縮でローカルネットワークで超低遅延な伝送のことを指すことが多いっぽい）。

デメリットとしてはMADIでダイレクトに送るよりは若干遅延が生じる、し、ネットワーク環境によって遅延の大小が異なるので管理がちょっと難しい。ただレイテンシに関してはみんないろいろ頑張っている。

あといまだに規格が業界全体として落ち着いたとは言えない。今からそれについて書く。

# レイヤーの違い

AoIPに関して混乱しやすいのがどの規格がどのレイヤーに属しているのか知らないとごっちゃになる、というとこです。

ネットワークのレイヤーとは

<https://ja.wikipedia.org/wiki/OSI参照モデル>

下から順に物理層、データリンク層、ネットワーク層とありますがこの辺りが重要です。

いくつかのLANケーブルで音声を送る規格は**データリンク層はイーサネットだけどIPを使ってない**



http://www.otaritec.co.jp/products/lawo/presentations/InterBEE_2018_AoIP_LAWO.pdf



https://www.aimsalliance.org/wp-content/uploads/2018/11/AoIP-anatomy-of-a-full-stack-implementation.pdf



https://www.iij.ad.jp/dev/report/iir/037/03.html



https://www.nhk.or.jp/strl/publica/rd/rd164/pdf/P31-38.pdf

http://amwa-tv.github.io/nmos-discovery-registration/

https://github.com/AMWA-TV/nmos-discovery-registration

https://www.slideshare.net/bunjiy/4k8kvideo-over-ipcdn-96589406