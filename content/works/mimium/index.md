---
title: mimium
thum: mimium-sc.png
date : 2020-02-22
category: artwork
bigthum: true
tags:
- music
- design
- programming
- tools
---


https://mimium.org/

mimium (MInimal-Musical-medIUM) は音と音楽のためのプログラミング言語である。mimiumは、音楽かやプログラマーのためのツールとしてだけでなく、音楽の制作や流通のインフラストラクチャをなることを目指して設計・開発されている。

mimiumは、ラムダ計算と呼ばれる汎用的な計算体系に、最小限の時間操作のためのプリミティブを（遅延およびフィードバック）加える形で設計された関数型プログラミング言語である。この設計により、多くの既存の音楽プログラミング環境とは異なり、オシレーターやフィルターのような基礎的な信号処理のユニットを、mimium言語上で単なる関数として定義することができる。また、ラムダ計算によるメタ操作の恩恵により、例えばオシレーター100個や1000個など任意の数に複製するといった、既存の言語では難しい処理も簡潔に記述できる。

信号処理をパラメトリックに記述できる言語の先行例としては、[Faust](https://faust.grame.fr)などが挙げられるが、Faustは基礎とする言語体系が汎用言語のそれと大きく異なるため、他の言語との連携は、Faustを埋め込んで使うという一方通行的なものとなっている。

mimiumはラムダ計算という汎用的な体系をベースにしているため、他の言語で定義された関数をmimium側から呼び出すことも比較的簡単である（これはLuaのようなアプリケーションやゲームの中に簡易的に埋め込む言語の設計も参考にしている）。

---

開発リポジトリ

https://github.com/tomoyanonymous/mimium-rs


---

### 関連研究

[音楽土木工学を設計する——音楽プログラミング言語mimiumの開発を通じて (博士論文)](/hakuron)

[mimium: a Self-Extensible Programming Language for Sound and Music (FARM 2021)](/research/farm2021-mimium)

[Lambda-mmm: 同期的信号処理言語のためのラムダ計算を基にした中間表現 (International Faust Conference 2024)](/research/lambdammm-ifc-2024)

本プロジェクトは[2019年度未踏IT人材発掘・育成事業](https://warp.ndl.go.jp/info:ndljp/pid/12446699/www.ipa.go.jp/jinzai/mitou/2019/koubokekka_index.html)として採択され、その後2019年度未踏スーパークリエータに認定された。

未踏　発表スライド

<script async class="speakerdeck-embed" data-id="4efb43b1e6024b61a752004ff755d7f1" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

未踏DemoDay 2019でのプレゼン動画（埋込不可のため以下のリンクよりアクセスしてください）

http://www.youtube.com/watch?v=J-K4IWDHgdo