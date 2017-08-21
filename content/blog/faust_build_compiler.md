---
date: 2016-12-11
title: Faustのコンパイラのビルドとインストール時の注意点
permalink: faust_build_compiler
---

*この記事は[Faust(多分ひとり)Advent Calender](http://qiita.com/advent-calendar/2016/faust)の3つ目の記事です。*

本日はFaustのコンパイラをビルドする時、インストールする時の注意点について書こうと思います。

<!--more-->

# Faustには2種類ある

さて、前の記事とかでも**faust2ブランチ**という言葉を使っていましたが、Faustのコンパイラは2種類存在します。

一つは普通のfaust、こちらはfaustソースをC++にコンパイルするだけのシンプルなもの(mathdocとかは使えたはずですが)です。

もう一つは**faust2**というもので、こちらがLLVMを利用して実行時コンパイルやasm.jsを利用したWebaudioエクスポートが可能になっています。

# コンパイラをダウンロードしよう

さて、コンパイラはFaustliveやfaustgen~と違って残念ながらビルド済みのバイナリは配布されていません。
そのため自力でソースからビルドする必要があります。

Faustのリポジトリはこちら。

<https://github.com/grame-cncm/faust>

こちらは最近sourceforgeから移ったばっかりなので一応sourceforgeのアドレスも。

<https://sourceforge.net/p/faudiostream/code/ci/master/tree/>

通常版のfaustがmasterブランチ、faust2はfaust2ブランチという用にgitのブランチでバージョン違いがあるので、gitが入ってない方はインストールをオススメします。

というわけでDLは

```bash
cd path/to/dldir

git clone git@github.com:grame-cncm/faust.git

```

で落としてきます。

# ビルド

## 前準備

Macの人はmakeコマンドを使うためにXcode Command Line Toolsが必要です。
AppstoreからXcodeインストールした上で

```bash
xcode-select --install

```

でインストール。

## faust(通常版)

masterブランチに移動します（DL時は最初からそうだと思いますが念のため）。

```bash
cd path/to/faudiostream-code
git checkout master
```

### Mac/Linux

```bash
make
```

でビルドが走ります。特に何も依存ライブラリは無いはずです。

```bash
sudo make install
```

でUnixならusr/local/にインストールされます。(usr/local/binの中にfaustコマンドとfaust2xxxのスクリプト群、usr/local/includeに標準アーキテクチャファイルなどのヘッダ類が入ります。)

### Windows

Visual Studioでのインストールが推奨されているようです。（すみません、こちらはまだ試していません。）

VS2012以上でfaudiostream-code/windows/faust_vs2012.slnというVisual Studio solutionファイルを開いてビルドします。ターゲットはデバッグ、リリースどちらでも行けるそうです(以下、筆者はMacでしかまだビルドしたことがないのでMacの情報中心に書かせてもらいます。すみません)。

## faust2

### 依存ライブラリ

#### LLVM

faust2はLLVMの実行時コンパイルを使うために当然ながらLLVMのインストールが必要です。
LLVMのバージョンは

3.1<バージョン<=3.9が対応済みです。安定版は3.8.1が最大のはず？です。私は3.8.1でインストールできています。

Macの場合、

```bash
#Macports

sudo port install llvm-3.xx +universal
```

```bash
#Homebrew
brew tap homebrew/versions
sudo brew install llvm38 --universal
```



とかでいけます。

※どちらもビルドするのに1時間半ほどCPUがフルパワーで回りっぱなしになりますので注意

ユニバーサルバイナリである必要が有るので注意しましょう。homebrewはbrew install llvmでも同じく3.8.1が入るのですがこちらは最初から入っているclangと喧嘩しないようにコマンド名clang++3.8とか番号をつけてくれます。

llvm関係のコマンドのパスを確定させるためにllvm-configというコマンドを使うのですが、Makefileでは最初に/usr/bin→opt/local/bin→/usr/local/binという順番でllvm-configを探し、なければllvm-config-3.9→llvm-config-3.8という順でバージョンの高い順番にサフィックスを付けて検索していくので、Homebrewでインストールした場合でも勝手に見つけてくれる用になってます。

もしくはこちらからバイナリを落としてきて、
<http://llvm.org/releases/download.html>

faudiostream-code/compiler/Makefile.unixの28行目を直接編集してしまい、

```makefile
#これを
LLVM_CONFIG = $(lastword $(wildcard /usr/bin/llvm-config* /opt/local/bin/llvm-config* /usr/local/bin/llvm-config*) $(shell which llvm-config 2> /dev/null))
#こうする

LLVM＿CONFIG = /dl/folder/of/llvm/bin/llvm-config

```

というように、DLしたLLVMのllvm-configのパスを直接指定するのも手っ取り早い方法です。

#### openssl

例によってMacびいきですみませんが、

```bash
#Macports

sudo port install openssl +universal
```

```bash
#Homebrew

sudo brew install openssl --universal
```
とかでいけます。ただhomebrewでは標準で/usr/localにリンクしてくれず

```bash
brew link openssl --force
```
で入れてやらないとインクルードパスが通りません。
しかもどうやら最近これも[brew link openssl --forceができない問題
](http://qiita.com/dasisyouyu/items/c9621c29b0fe79d2b7c4)というのがあるらしく、openssl関係でエラーが出た場合は、未検証ですがcompiler/Makefile.unixの135行目あたりに

```makefile
CXXFLAGS += -Wall -Wuninitialized -fvisibility=hidden -Wno-overloaded-virtual -Wno-parentheses $(addprefix -I, $(subprojects)) -DINSTALL_PREFIX='"$(prefix)"'
CXXFLAGS += -I`$(LLVM_CONFIG) --includedir` -I../architecture -D$(LLVM_VERSION) -D__STDC_LIMIT_MACROS -D__STDC_CONSTANT_MACROS
CXXFLAGS += $(ARCHFLAGS)
#これ↓を追加
OPENSSL = $(shell brew --prefix openssl)
CXXFLAGS += -I`$(OPENSSL)`
```

で、多分行けるはず・・・

### libmicrohttpd

こちらは標準では必要ないですがmake dynamicで動的ライブラリを生成する時にhttpとOSCのサポートをするために必要です。

```bash
#Macports

sudo port install libmicrohttpd +universal
```

```bash
#Homebrew

sudo brew install libmicrohttpd --universal
```

### faust2のビルド

やっとですがfaust2ブランチにチェックアウト。

```bash
cd path/to/faudiostream-code
git checkout faust2
```

ここからは同様に

```bash
make
```

エラー無く行ければ通常版のfaustと違い**compiler/内にlibfaust.aという静的ライブラリが出来ているはず**です。

```bash
sudo make install
```

で同じように/usr/local内にコピーされます。

### 注意点

- CMakeLists.txtがあるのでCMakeを使ったことがある人はこちらを実行しそうになりますがどうもコミットログを見る限りMakefileの方を直接更新してるようなので使うと逆にエラーが出まくって大変なことになります。この辺はメーリスでも問題になってたのでそのうち解決するとは思いますが触らないほうが無難です。

- 最近でもLLVMのバージョンごとにビルドエラーが出たり出なかったりが結構あるみたいなのでLLVMのパスがちゃんと通ってそうでもLLVM関係のエラーが出る場合はバージョンを変えてみるのもありだと思います（LLVM自体のビルドがめちゃくちゃ時間かかるのが難ですが・・・）



# 次の記事では

ここまで書いても実際どういう感じでコードを書けばいいのかわかるまで結構時間がかかります。ので実践的にFaustのコードを書く時のコツやコードのスタイルなどを書いてみようと思います。
