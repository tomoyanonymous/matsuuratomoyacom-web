---
title: IR Measurement Toolbox for Max/MSP
thum: thum.jpg
date: 2016-06-11
ogpimage: ogp.jpg
category: clientwork
tags:
- tools
bigthum: false
---

インパルス応答(リバーブや頭部伝達関数(HRTF)のサンプリングに使われるデータ)の測定ツール。Cycling'74 Max上の機能のみで実装されており、他のライブラリ等を必要としない。

![](thum.jpg)

テスト信号の生成(Angelo Farinaのexponential sine sweep法に準じる)、それを用いた音声の録音、録音された信号からのインパルス応答の変換までを他のツール無しに実現する。現在は4トラックまで同時収録、変換が可能。

https://github.com/tomoyanonymous/IR_measurement_toolbox
