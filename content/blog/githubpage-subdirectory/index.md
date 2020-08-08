---
date: 2016-05-07
title: Github pagesで意地でもサブディレクトリをルートにする
permalink: githubpage-subdirectory
# highlight: true
---


このページ自体をGithub Pagesでホストしているのですが、

- ソース自体もgithubで管理したい
- しかしリポジトリのルートからホスティングされるためbuildとかに入れてると例えば前者なら<Githubのユーザー名>.github.io/buildにアクセスしないといけない
- そうすると相対パスが狂ったりする
- 公式でおすすめされてるJekyllはインソースビルドしてるがフォルダ構造が汚くなるのでやりたくない

などの問題があります。これをどうにか解決しようと頑張った。

*(2020-08-08) ちょくちょく検索などで参照されてるようなので追記すると、現在は以下の方法を使用しておりません。　この記事を書いた頃はmetalsmithでページを作っていたのですが、後にHugoに移動しました。さらにnetlifyでページを自動デプロイ＆ホストしており手動ビルド→pushの方法は使用しておりません。ドメイン設定も楽だしgithub pagesのみでがんばる意味もそんなに無くなってしまった気がします。この記事を参照してくれていた[κeenさんの記事のようにGitLab Pagesを使う](https://keens.github.io/blog/2020/03/27/blogyarunaragitlab_pagesgaosusume/)のもおすすめだと思います。*

*そもそもソースファイルとソースから自動生成されたファイルがgitの履歴に同居するって時点でgitの良さを失っている気がしますよね、個人的に最近のgithub pagesはHTML直書きの簡易サイトのホスト向けっていう位置づけです。*


<!--more-->

# 試行錯誤

git subtreeを使ってサブディレクトリだけ別ブランチにプッシュすればいけるのでは？と思いやってみる。

そういえばGithub Pagesのホスティングは2種類あって、gh-pagesというブランチを作れば勝手にホスティングされるんだったなと思い、

```bash
$ git subtree push -P build origin gh-pages
```

これでいけんじゃね？と思い、push出来てホスティングも出来たがドメインの設定になってミスに気づく。

Github Pagesにはホスティングの仕方が2種類あって、

- User Page:リポジトリ名を<Githubのユーザー名>.github.ioにするとそのURLにmasterブランチをルートにしてホスティングされる
- Project Page: gh-pagesブランチを作ると<Githubのユーザー名>.github.io/<リポジトリ名>でホスティングされる

ここで例えばmatsuuratomoya.comからリダイレクトするようにしても、matsuuratomoya.com/リポジトリ名でしかリダイレクトしてくれません。

[https://help.github.com/articles/custom-domain-redirects-for-github-pages-sites/](https://help.github.com/articles/custom-domain-redirects-for-github-pages-sites/)

ということはなんとか前者にしなければいけません。

# 解決法

結論から言うと*ソースを入れてるフォルダをmaster以外のブランチに移し*、*buildフォルダをsubtreeとしてmasterブランチに作る*ので解決なんですが、すでにリモートのmasterブランチにファイルがいたりするとコンフリクトして大変なのでメモ書きすると

```bash
$ git branch -m working #masterからworkingという適当な名前の新しいブランチに移動
$ git push #リモートにもworkingを作る
$ git branch -D master #一旦masterブランチを消去
```

ここで、一旦Githubのページ上で作業する。

- デフォルトブランチをworkingに変更(こうしないとmasterブランチを消せない)
- masterブランチを削除
- あと、リポジトリ名は＜ユーザー名＞.github.ioにしておく

再びローカルで

```zsh
$ git subtree push -P ./build origin master #リモートのmasterにbuild以下をpushする
```

でめでたくユーザー名.github.ioにホスティングされ、独自ドメインを設定してもうまくいきます。

後はずっとworkingブランチで作業してソースを変更したら普通にコミット&プッシュ（もちろんリモートもworkingブランチに）
デプロイするときは`$ git subtree push -P ./build origin master`すればOK。

一つのリポジトリに全く内容の違うブランチが混在してるのも気持ち悪いですが、これを避けるためにはローカルで別フォルダにリモートリポジトリを作って同じことをすればいいですが・・・めんどくさいです・・・。

そもそも現状ソースフォルダとビルドフォルダに内容同じ画像フォルダを持っている時点でインソースビルドのほうが賢い気もします。
もうちょっといい方法があったら教えてほしい。
