---
title: 3DX(プラグイン開発)
thum: 3DX.png
date : 2020-12-16
category: clientwork
tags:
- programming
bigthum: true
---

[NovoNotes](https://novo-notes.com/ja)より発売されている、音楽制作ソフトウェア向け、空間音響デザインのためのパンナー、アンビソニック・デコーダー/エンコーダー、フォーマットコンバータープラグイン「[3DX](https://novo-notes.com/ja/3dx)」の開発に参加しました。

松浦は信号処理部分の実装を中心にC++でのプログラミングを行いました。


client: [Novonotes](https://novo-notes.com/ja) [MAGNETICA studio](https://www.magnetica-studio.com/)


https://novo-notes.com/ja/3dx

{{<tweet 1340533705756962816 >}}

また、制作過程で同時に開発した、高速に球面調和関数を計算（＝アンビソニックをエンコード/デコード）するためのC++ヘッダーライブラリをOSSとして公開しています。

https://github.com/magnetica-studio/efficient-spherical-harmonic-evaluation

本ライブラリは、アルゴリズム自体はすでに提案されているものを用いていますが、元のライブラリではC言語でC言語ソースを出力するメタプログラミングを用いて実装されていたものを、C++のコンパイル時計算を用いて記述したものになります。