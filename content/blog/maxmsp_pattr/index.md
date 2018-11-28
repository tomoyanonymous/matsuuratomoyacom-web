---
date: 2016-05-08
title: Cycling74-MaxのPattrをちゃんと使い倒す
permalink: maxmsp-pattr
---

Max/MSP使っていると困るのが**パラメーターの管理**です。とりあえず適当にPresetで保存読み出ししておけばいいけど、テキストでも編集したいとなると古くから使われている**coll**とかjsonで保存できる**dict**とか、よくわからないpattrとかいろいろありすぎてわかりません。
今回は一番良くわからなそうなpattrを真面目に使ってみようという話です。
<!--more-->

# 目標

例えば、いろんな自分で作ったモジュールのパラメーターをMIDIコンからコントロールして、かつプリセットにも保存されて、というのがやりたい。
言うのは簡単ですが実際やると、

- パッチ側でマウスでいじった値がコントローラー側に反映されず値がいきなり飛ぶ

みたいな現象が起きて、これを改善しようと思うとsendとreceiveで双方向に値を送り合ったりしてパッチがグッチャグチャになっていきます。地獄。pattrを使うとこれがうまいこと解決できます。

# pattr入門

まずpattrの一番シンプルにわかりやすい挙動について見てみましょう。

<img src="pattr.gif" alt="" style = "width:300px;">

分かりますでしょうか。
注目すべきは**2番めのアウトレット**に繋がれたfloatはアウトレットに何も繋がっていないにも関わらず他のオブジェクトの値を変更しています。
この双方向バインディングこそがpattrのミソですが、上から下にメッセージが流れていくパッチングの原則を破っているのでわかりにくさの原因でもあります。(そのためこの2番めのアウトレットはfloatやsliderなど値を持つ一部のオブジェクトにしか接続できないという特徴があります。)

# サブパッチャーにアクセス

面白いのはサブパッチャーの中のパラメーターにもアクセスできることで、例えばディレイのモジュールを作り、中でパラメーターにpattrで名前をつけバインドしておきます。

<img src="pattr2.png" alt="" style = "width:400px;">

これを親パッチから2つそれぞれ呼び出して中のパラメーターを個別に操作することが出来ます。今回はfeedbackをコントロールしたい。

<img src="pattr3.png" alt="" style = "width:400px;">

ややこしいポイントとしては、サブパッチ、bpatcherにはpattrオブジェクトは**バインド出来ません**。
\[p fuga\]のようなサブパッチなら\[bindto fuga::feedback\<、bpatcherならインスペクタを開いてScripting nameを編集し\[bindto (scriptingname)::feedback\<　というようにするとアクセスできます。

# pattrstorageで保存

pattrのもう一つの特徴に、出てきたpattrオブジェクトの値を自動でまとめてくれるpattrstorageというものがあり、json/xmlにエクスポートしたり、presetオブジェクトと連携が出来たりします。

とりあえず作ってみて、\[clientwindow\<というメッセージを送り保存される値を見てみましょう。

<img src="pattr4.png" alt="">

上2つにu〜〜〜という変なのがいますね。これは名前をつけてないpattrオブジェクトが自動的に検出されているからです。
コントローラー側は特に値を保存しなくてもいいのでこれは邪魔です。
しかしちゃんとそのへんは考えられていて、

<img src="pattr5.png" alt="">

@invisivleというアトリビュートをつけてやると解決します。

さて、\[pattrstorage store\]と名前をつけたうえで\[preset @pattrstorage store \]というpattrstorageと結びつけたpresetオブジェクトを作り、1つ2つ値を保存してみます。

<img src="pattr6.png" style = "width:300px;" alt="">


その後\[writejson\<というメッセージをpattrstorageに送り、値を保存すると中身はこのようになっております。

```json
//storage.json
{
	"pattrstorage" : 	{
		"name" : "store",
		"slots" : 		{
			"1" : 			{
				"id" : 1,
				"data" : 				{
					"pingpong1::delaytime" : [ 0.0 ],
					"pingpong1::feedback" : [ 0.548 ],
					"pingpong1::spread" : [ 0.0 ],
					"pingpong1::mix" : [ 0.0 ],
					"pingpong2::delaytime" : [ 0.0 ],
					"pingpong2::feedback" : [ 0.54 ],
					"pingpong2::spread" : [ 0.0 ],
					"pingpong2::mix" : [ 0.0 ]
				}

			}
,
			"2" : 			{
				"id" : 2,
				"data" : 				{
					"pingpong1::delaytime" : [ 0.0 ],
					"pingpong1::feedback" : [ 0.7 ],
					"pingpong1::spread" : [ 0.0 ],
					"pingpong1::mix" : [ 0.0 ],
					"pingpong2::delaytime" : [ 0.0 ],
					"pingpong2::feedback" : [ 0.16 ],
					"pingpong2::spread" : [ 0.0 ],
					"pingpong2::mix" : [ 0.0 ]
				}

			}

		}

	}

}

```

割と可読性も高いし、テキストで編集も大変では無さそうですね。

# 別のパッチからコントロールする

さて、実際にMIDIコンなどと連携したければコントローラーと実際の処理は別パッチで出来たほうが使いまわしもしやすいです。
一度jsonファイルを経由すれば、これも出来ます。

実際の処理部分のパッチをmain.maxpat、コントローラーのパッチをcontroller.maxpatとしておきましょう。

で、controllerの方はいきなりですがこうします。

<img src="pattr7.png" style = "min-width:330px; width:45%;" alt="">
<img src="pattr8.png" style = "min-width:330px; width:45%;" alt="">

pattrの手前で\[sprintf ::main::%s\]となっていますが、これは名前がmain.maxpatだからこうなります。
これで、ドロップダウンメニューから好きなパラメーターを選択してinletに好きな値を放り込めば完成です。

# 実際

実際使った時はこんな感じでやってました。
Arturiaの[BEATSTEP](https://arturia.jp/products/item/beatstep/)というMIDIコントローラーと一緒に使う用に作っていて、配置もそのまんまにしています。
BEATSTEPのいいところは、ノブがエンドレスロータリーエンコーダーになってて、Relativeモードというのが使えるところです。

relativeモードでは回した速度によってインクリメント、デクリメントを送ってくるモードで、最初に挙げたmidiコントローラー側が値を持っていてパッチ側で設定した値が飛んでしまうという問題を回避することが出来ます。

### 通常モード

<img src="pattr9.png" alt="">

### プレゼンテーションモード

<img src="pattr10.png" alt="">

さらにコントローラーごとの値をpattrで保存して値のマッピング情報自体をjsonにインポート/エクスポート出来ます。
使いまわせるほど現場で回数使ってないですが。。。

今回のサンプルパッチはこちらに。

[https://github.com/tomoyanonymous/maxmsp_pattr_example](https://github.com/tomoyanonymous/maxmsp_pattr_example)

それでは皆様に於かれましてはよいMaxライフを。
