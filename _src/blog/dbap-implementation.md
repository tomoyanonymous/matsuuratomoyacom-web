---
date: 2016-05-27
layout: blog.hbs
title: 簡単なマルチチャンネルパンナー、DBAPの実装
permalink: dbap-implementation
draft: true
---

MaxやPuredataを使う理由のうちにマルチチャンネルの制御がしたいということがある人は少なく無いと思います。

一般的な5.1chの実装はVBAPというアルゴリズムで実装されていますが、聴取位置からスピーカーが等距離でないといけなかったり、結構制限が多くて大変です。
そこでもう少しユルいアルゴリズムであるDBAPというのを使ってみようという話です。
<!-- more -->

### VBAP

マルチチャンネルによく使われているアルゴリズムは基本このVBAPというものです。

VBAPはVille Pukki氏の開発したアルゴリズムで、一般的なステレオパンナーを3次元的に拡張したものになります。

*Vector base amplitude panning  TKK Acoustics / Research / Spatial sound*

[http://legacy.spa.aalto.fi/research/cat/vbap/](http://legacy.spa.aalto.fi/research/cat/vbap/)

基本的に、音量コントロールで定位させるためにスピーカーから届くまでの時間を同じにするために、スピーカーはすべて自分から等距離＝同一球面上に定位する前提で考えられています。

VBAPの弱点と言われている部分は主に2つ、

- スピーカーをすべて同一球面上に置かなければいけない。
- スイートスポットが1点に固定される。

### DBAP

以上の問題点を改善するというか、もうちょっと妥協した条件でそれっぽくなるのを目指した（と解釈しました）のがDBAPです。

VBAPが

一方DBAPは、「仮装音源位置とスピーカー位置の距離関係」でのみでゲインを決めて定位させます。
