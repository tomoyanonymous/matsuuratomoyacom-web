---
authors:
  - Tomoya Matsuura
title: "Hiding What from Whom? A Critical Review of the History of Programming languages for Music"
journal_title: "Proceedings of the International Computer Music Conference 2025"
math: true
volume:
issue:
category: proceedings
firstpage: 1
lastpage: 8
pdf_url: https://doi.org/10.5281/zenodo.15285756
conference_title: "International Computer Music Conference 2025"
publisher: "International Computer Music Association"
date: 2025-04-26
publishDate: 2025-04-26
reviewed: true
bibtex: '@inproceedings{Matsuura2025,
author = {Matsuura, Tomoya},
title = {{Hiding What from Whom? A Critical Review of the History of Programming languages for Music}},
year = {2025},
month = {6},
pages = {1--8},
booktitle = {Proceedings of the International Computer Music Conference 2025},
publisher = {International Computer Music Association},
address = {Online, United States},
URL = {{https://doi.org/10.5281/zenodo.15285756}},'
abstract: "This paper critically reviews the history of programming languages for music, distinct from computer music as a genre, by drawing on discussions from sound studies. The paper focuses on the universalist assumptions around pulse-code modulation and the Unit Generator concept established by the MUSIC-N family, which established a lineage of role between composers and scientists which tends to turn composers into consumers. The paper concludes that programming languages for music developed after the 2000s present alternatives to the often-invisible technological infrastructures surrounding music, such as formats and protocols, rather than solely aiming to create novel musical styles."

---

*この論文概要および本文は、[英語版](/en/research/icmc-2025)の著者による邦訳であり、採録されているものとは表現が異なる場合があります。引用する場合は、公開されているものを参照した上で行うか、邦訳版であることを明記してください。また、括弧やダブルクオート、固有名詞のフォーマットにブレがありますが、とりあえず公開しておくことを最優先して作成しているためご了承ください。*

---

## 概要

本論文では、音楽のためのプログラミング言語の歴史を、コンピューター音楽という様式から切り離して記述するために、サウンドスタディーズの議論を取り入れて音楽プログラミング言語の歴史の批判的レビューを行う。本論文はMUSIC-Nシリーズによって確立された、パルス符号とUnit Generatorコンセプトを取り巻く普遍主義的前提が、作曲家と科学者という役割の線引きを成立させ、更に作曲家を消費者化する傾向へ焦点を当てる。そのうえで、2000年代以降に開発されてきた音楽のためのプログラミング言語は、必ずしも新しい音楽を生み出すことをだけを目的とする訳ではなく、不可視化されるフォーマットやプロトコルといった音楽に関わる技術インフラに対するオルタナティブの提示という側面を持っていると結論づける。

---

## 発表スライド

<script defer class="speakerdeck-embed" data-id="1a8f010cb65f4ee3b4079f58fc69e3cc" data-ratio="1.7777777777777777" src="//speakerdeck.com/assets/embed.js"></script>

## はじめに

音楽のためのプログラミング言語や環境は、コンピューターを用いて音楽を作り出す試みの歴史と密に結びついて発展してきた。MaxやPure Data、Csound、SuperColliderといったソフトウェア群は、"computer music language"[1], [2], [3]、"language for computer music"[4]、"computer music programming systems"[5]といった呼ばれ方がされているが、それぞれの語の使用に明確なコンセンサスがあるわけではない。だが、共通して使われる"computer music"の語からもわかるように、これらプログラミング言語の歴史はコンピューターを用いることで"almost any sound can be produced"[6, p. p557] であることを前提とする、technology-drivenな音楽のジャンルの歴史と強く結びついてきた。

コンピューターが大学の研究所の中にしかなく、ディスプレイやマウスが存在しなかった時代において、コンピューターを用いて音を鳴らしたり、音楽を制作する作業は、プログラミングという手段と不可避的に紐づいていた。しかし今日、コンピューターで音を作り出す方法としPro ToolsのようなDAW（Digital Audio Workstation）ソフトウェアではなくプログラミングという手段を用いることは幾分特殊な手段となっている。言い換えると、パーソナルコンピューター普及以後に開発される音楽のためのプログラミング言語とは、音の生成のために意識的に（テキスト形式であれグラフィカルなものであれ）プログラミングというフロントエンドを選択したソフトウェアなのである。

1990年代以降のプログラミング言語の理論的発展や、リアルタイムオーディオ処理のためのプログラミングに求められる様々な制約に伴って、今日音楽のためのプログラミング言語を開発する上で求められる専門的知識は肥大化している。また2000年以降に開発されたいくつかの音楽に関係する言語は必ずしも新しい音楽表現の追求を目的としていないものもある。そうした言語の価値判断が如何にしてなされるべきかという問いに対する統一した見解は未だないように思われる。

そこで本論文では、音楽のためのプログラミング言語の設計と開発に関わる評価と、コンピューター音楽という特定の様式と切り分けて考えるために、これまでのサーベイに加えてサウンドスタディーズの議論を取り入れながら歴史の批判的レビューを行う。

### "Computer Music"という語の用法

"computer music"という語が、その語が特定しうる範囲の広さに反して、実際にはある特定の様式やコミュニティに閉じた枠組みとして用いられていることはOstartagによる"Why Computer Music Sucks"をはじめとして1990年代から指摘されてきた[7]。

Lyonがほぼ20年前に確認しているように、今日音楽が生産されてから体験されるまでの過程においてコンピューターを一度も介さないという状況を考えるのはもはや難しい[8,p1]。こうした学術的なコンピューター音楽に対して「コンピューター音楽」という語を用いる必要性はもはや薄まってきている。

HolbrookとRudiはLyonの議論を引き継ぎ、ポスト・アクースマティック[9]のような枠組みをコンピューター音楽の再定義に用いることを提案する。このアプローチはコンピューター以前の電子音楽・実験音楽の伝統を、広い意味での技術先行的に作られる音楽の地平に位置付けるものである[10]。

ポスト・アクースマティックな音楽の定義は意図して厳密に定義されてないものの、その構成要素の1つとして、生産される場所が研究所から個人へ広がり、技術の使用方法に多様性を生んだという言説を含む[9,p113]。だが、ポスト・アクースマティックな言説はコンピューターの価格が低下し、ラボの外側で多様な音楽表現が生まれた事実をクラシカルなコンピューター音楽の歴史に取り込みはするものの、一方で依然「ただコンピューターを使っているだけ」の多くの音楽を重要でないものとして除外し、その分断された状況に対する洞察を与えてくれない。

Lyonは「コンピューター音楽」という語の使用は「ピアノ音楽」のようなもので、その中で作られる音楽の様式を無視した分析であるという。だが、コンピューターというメディアの特徴の1つはまさにシミュレーションとモデリングを通じて様式（style）そのものをメタ操作の対象にしうるという点である。コンピューターを使用して楽器を作る時や、作られた楽器を使う際は何らかの音楽文化に埋め込まれたシンボルの操作＝プログラミングを通じて音を出すため、アコースティックな楽器やアナログ電子楽器よりも作られる音楽にその音楽文化を構成する言語や認識自体が再帰的に埋め込まれることになる。Magnussonはこのようなデジタル楽器の特徴を"認識論的道具"であることとし、コンピューターは形式化を通じて「音楽理論のスナップショットを作り出し、音楽文化をその時で凍結する」ように働くとする[11,p.173,筆者訳]。


今日多くの人は単に他にもっと手っ取り早い手段がないから仕方なしにコンピューターを使用しているだけで、コンピューターのメタメディアという固有性を意識的に活用した音楽制作をしている訳ではない。だがそうだとして、仕方なくコンピューターというメディアが選択されるような音楽文化においても、クリエーターはソフトウェアやプロトコル、フォーマットといったインフラストラクチャから影響を受けている。音楽のためのプログラミング言語の歴史が特定の様式やコミュニティに関連付けられたコンピューター音楽の歴史と一体化している限り、このような消極的な手段としてコンピューターを使っている音楽を分析することは難しい。

本論文では、音楽のためのプログラミング言語の歴史を特に以下の2つの話題に着目してLyonとは逆に極端に様式を問わないような、すなわち、そのツールで何が作られたのかではなくそのツールがどのように作られているのかに焦点を当てて再検討する。

1. 今日のほとんどの音プログラミングの基礎的考え方であるパルス符号変調による音声表現の普遍性を、黎明期のコンピューターによる音生成の試みを参照することで批判する。
2. PCMに基づく音合成の祖であるMUSIC-Nファミリーが、今日のプログラミング言語デザインの視点からすると、その設計がシステムごとに大きく異なること、また時代を追うごとにユーザーがその内部構造について理解する必要を無くすブラックボックスとして発展してきたことを指摘する。

最終的には、2000年代以降に開発されてきた音楽のためのプログラミング言語は、必ずしも新しい音楽を生み出すことをだけを目的とする訳ではなく、不可視化されるフォーマットやプロトコルといった音楽に関わる技術インフラに対するオルタナティブの提示という側面を持っていると結論づけ、今後のコンピューターを用いる音楽の歴史研究における新しい論点を提示する。

## PCMと黎明期のコンピューター音楽

ベル研究所によるMUSIC I(1957)[12]と、それに連なるMUSIC-Nと呼ばれるシステム群は、最初期のコンピューター音楽研究として挙げられる。しかし、MUSIC Iよりも前にイギリスやオーストラリアにおいてコンピューターで音楽を鳴らす試みが行われてきたことが指摘されている[13]。

1950年代のコンピューターで音を出す試みは、基本的に1bitのパルスの間隔を制御して音程を制御するといったものである。これは、まだ動作クロック周波数が可聴域に収まる範囲だった時代、コンピューターの回路上の電気信号を音声として可聴化することが、ディスプレイやオシロスコープで視覚化するよりも手軽で安価なデバッグの手段だったという理由がある。

例えば、イギリスのBINACのエンジニアだったLouis Wilsonは近くに置いていたAMラジオが、真空管をスイッチングする際に発生する微弱な電磁波を拾うことで規則的な音を出すことに気がつき、コンピューターの出力にスピーカーとパワーアンプを繋ぎ、検証作業のために利用し始めた。Frances Elizabeth Holbertonは1949年にこれを逆手に取って、任意の間隔でパルスを発生させるプログラムを組んでメロディを鳴らせるようにした[14]。

また、この時代、例えばオーストラリアのCSIR Mark I(CSIRAC)などのいくつかのコンピューターは、「hoot」と呼ばれる単一パルスをスピーカーに送信するだけのプリミティブ命令を備えていた。BINACやCSIR Mark Iのような黎明期のコンピューターによる音生成は、既存の音楽のメロディーを再生するようなものがもっぱらだった。

しかし、この時代の音生成のすべてが既存の音楽の再生産だった訳でもない。Doornbuschは、イギリスのPilot ACE(Prototype for Automatic Computing Engine:ACE)において、音響遅延線メモリーの仕組みを活用した独自の音楽を作り出す試みがあったことを指摘している[13, p303-304]。

音響遅延線メモリーは、BINACやCSIR Mark Iも含めこの時代の計算機の主記憶装置として使われたものの1つで、スピーカーとマイクにより水銀中に流れるパルスのフィードバックを用いてデータを保持する。ACEのエンジニアだったDonald Davisは生成された音を次のように形容している。

> Pilot Aceとその後続機Ace Properはどちらも、独自の音楽を作曲することができて、コントロールデスクに取り付けられた小さなスピーカーから演奏することができた。私が〔コンピューターを主語にした〕作曲という言い方をしたのは、人が意図的に音程を選ぶような余地が一切なかったからだ。その音楽は無調ではあったが大変興味深く、上昇系のアルペジオに始まり、だんだんと、フーガが発展していくように複雑化し加速していった。そして複雑度が人間の認知を超え最終的に色のついたノイズの中に溶けていった。[15, p.19-20,筆者訳]

この音楽はプログラムの最適化の過程で、音響遅延線メモリーの構造に基づくデバッグ作業で取り付けたいくつかのスイッチを"誤用"(p.20)することで生まれたという。メディア研究者のMiyazakiは、黎明期の電子計算機の利用におけるアルゴリズムとそのビットパターンによって生み出された音を聴く行為が、プログラミングやその中のデバッグ作業に組み込まれている状況を"Algo-*rhythmic* Listening"と形容している[16]。

Doornbuschはコンピューター音楽の歴史からオーストラリアやイギリスにおける実践がその後の研究に直接的な影響を与えていないことを理由に無視されていることに警鐘を鳴らしている[13,p.305]。実際、このPilot ACEで作られた音は、専門的なラボラトリーから（アマチュアを含む）個人へコンピューター音楽が広がっていったというポスト・アクースマティックな歴史観に疑問を呈するものといえる。

なぜならPilot ACEで音を出したのは音楽の専門家ではなく、かつデバッグ目的だけではなく面白い音を出すことを目的としてプログラムされていて、かつそこで出力された音は（おそらく現代のオーディオプログラミング環境においても）容易に再現できない音響遅延線メモリーというハードウェアに紐づいたものであったからだ。

同様に、1960年代、マサチューセッツ工科大学（MIT）でPeter Samsonは、当時古くなって学生が自由に利用できたTX-0のデバッグ用スピーカーを流用して音を鳴らしていた。彼は「hoot」命令を活用して、矩形波でのバッハのフーガのようなメロディを演奏させる実験を行なった[17]。

Samsonはやがて、このプログラムを発展させたハーモニー・コンパイラと呼ばれるプログラムをTX-0を基にして作られたDEC社のPDP-1のために作り、これはMITの多くの学生に用いられた。その後Samsonは1972年頃から、同時期に開発され始めていた様々なデジタルシンセサイザーのサーベイを行いつつ、コンピューター音楽に特化したものを制作した。完成したSamson Boxはスタンフォード大学のCCRMAにおいて、1990年代初頭まで10年以上にわたって使い続けられ、多くの作曲家が作品を作るのに使用した[18]。Samsonの例を考えれば、はじめの目的がデバッグであったことを理由に初期の計算機の音楽生成の試みをコンピューター音楽の歴史の中で切り分けることは適切ではないと言える。


### PCMの普遍性の下敷きにあるアクースマティックな聴取

MUSICがその後の研究の発展に繋がった理由の一つは、単に開発時期が早かっただけでなく、**パルス符合変調（PCM）** に基づく”理論上どんな音でも”表現できるコンピューター上の音表現を初めて実現したからである。

PCMは、音声波形を一定時間に分割するサンプリングと、各時間の音圧を離散的な数値として量子化による、今日のコンピューター上における音声表現の基礎的な表現である。

コンピューター音楽の歴史におけるPCMの普遍主義の問題点は、ポスト・アクースマティックの前提となるアクースマティックという概念に内在する。アクースマティックはミュージック・コンクレートのようなテープ音楽の聴取のスタイルとして、特定の音源を想像しない聴き方としてPiegnotが提唱し、Schaefferが理論立ててきたものだ[9,p.106]。Chionによる映像のサウンドデザイン分析をはじめとして録音された音の聴取の理論として長く使われている。

だが、サウンドスタディーズ研究者のJonathan Sterneが指摘してきたように、アクースマティックの概念に代表される録音技術にまつわる言説は、そう主張をすることによってそれ以前の音の聴取を「自然」なものとして切り分けるように働いてきている[^husserl]。つまり、これらの主張は音響再生産技術が登場する以前は、聴取は何にも媒介されず全体的なものであった---という自然観を構築するのである。

[^husserl]: スターンはのちにアクースマティックな聴取にまつわる言説が前提とする、フッサール流の現象学における超越的主体は欠損のない理想的身体を想定していることを批判し、信頼できない主体と語り手を前提とするインペアメントの政治的現象学の方法論を提示している[19]。コンピューター音楽における普遍主義は録音技術と聴覚障害の関係のようにエイブリズムの観点からも議論されるべきだろう。

> For instance, the claim that sound reproduction has “alienated” the voice from the human body implies that the voice and the body existed in some prior holistic, unalienated, and self present relation. [20,p20-21]


PCMに基づく音生成が「ほぼどんな音でも」を謳える根拠には、録音技術成立以後の聴取の前提として、録音された音には”原音”が存在し、聴取者はそこから歪みやノイズをより分けることができるというイデオロギーが存在する。そのうえで、サンプリング理論は、統計的な人間の聴覚特性に基づいて、ある一定以下の音量差の弁別ができないこと、一定範囲外の周波数の振動を知覚できないことを前提として、その範囲内に収まる音の解像度に表現を有限化することで、実質的に人間が聞きうる範囲の音全てを表現できることが保証されるのである。

ところで、MUSIC Iの音合成はPCMに基づいてはいるものの、モノフォニックな三角波の音量と音程、発音タイミングの制御だけだった（MUSIC IIでは4オシレーターが利用できるようになった）[12]。今日、三角波の音量と音程を制御できるシステムのことを「ほぼどんな音でも」生成できるシステムだという人は存在するだろうか？

より今日の現実的な利用を考慮したとしても、例えばリング変調(RM)、振幅変調(AM)のような信号同士の乗算やディストーションのような非線形エフェクトは、入力信号の周波数成分によっては適切なオーバーサンプリングを施さない限り折返し歪み成分が発生する。PCMは録音されたものを再現するという目的では普遍的なフォーマットと言えるが、Pucketteが直線の集合のようなフォーマットや物理モデリング合成の例を別の可能性として挙げるように[21]、必ずしも音を生み出すための材料として万能な訳ではないのだ。

## Unit Generatorは何を隠すのか?

MUSICはバージョンIII以降、スコア（時間ごとに変化するパラメーターのリスト）言語とオシレーターやフィルターのような **Unit Generator(UGen)** の接続をあらわしたオーケストラ言語をプログラムの入力として受け取るブロックダイアグラム・コンパイラーという形式を取ることになった。以下、本論文中におけるUGenの定義は、ユーザーが使用する信号処理のモジュールで、その内部実装が公開されていないまたはユーザーが使用するものとは異なる言語で実装されていることを指す。

コンピューターを使った音楽の研究におけるMUSICファミリーの特徴はPCMに基づく音声合成を行った以外にも、ドメイン固有言語を開発することによってプロフェッショナルな音楽家とコンピューターエンジニアという分業体制を確立したことにある。Mathewsは、MUSIC I やIIを利用した作曲からエンベロープやビブラートなど様々な機能追加の要望を受け、かつプログラムを固定化された形にしないためにMUSIC IIIでコンパイラを開発したと述べており[22,13:10-17:50]、自身の役割を音楽家ではなく科学者だったと繰り替えし発言している。

> 最初にこれらの音楽のためのプログラムを作ったとき、当初のユーザーは作曲家ではなく、心理学者のガットマンとジョン・ピアース、そしてわたしという、基本的に科学者だった。私たちは、音楽家がこの言語を習得し、これを使って自分自身を表現できるかどうかを知りたかった。そこで私たちは、この実験をやってみたいという冒険心あふれる音楽家や作曲家を探した。[12,p.17,筆者訳]

このような音楽家と科学者という明確な役割の既定は、MUSIC以後のコンピューター音楽の研究を特徴づける要素の1つである。矛盾するようだが、コンピューターでこれまで聞いたことのないような音を作る行為において、音楽家がプログラミングという難しい作業を知らなくてもよくなることが研究としての道を開いたのである。

### 例: 信号処理における内部状態変数の隠蔽

MUSIC NシリーズはScore言語とOrchestra言語による記述という全体のワークフローを共有してはいるものの、実際のプログラミング言語としての実装は個別にかなり異なるものも含まれる。

あまり着目されていないが特筆すべき例は、MUSIC IVの派生の一つであるMUSIGOL[23]。MUSIGOLでは、システム自体の実装だけでなく、ユーザーが記述するスコアやオーケストラのプログラムも、すべてALGOL 60のソースコードとして記述される。今日でいうProcessingやArduinoのように、ライブラリとして記述されるドメイン固有言語：内部DSLとしての音楽プログラミング言語の最も古い例と言える[^mus10]。（なので、上で示した本論文中の定義に従えば、MUSIGOLはUGenを使用する言語ではない。）

[^mus10]: スタンフォード大学で使用されたMUS10は、内部DSLではないが既存のALGOLのパーサーを改造する形で作られていた[24,p248]。

同じMUSIC Nシリーズでもそれぞれの時代における音楽家にとって適度に直感的な抽象化が変化してきたことを、2次のバンドパスフィルターの記述を例に示す。このバンドパスフィルタは、現在時刻$n$の入力信号を$S_n$、現在から$t$時刻前の出力信号を$O{n-t}$、任意の音量パラメーター$I_{1}$としたとき、次のような計算式で現在の信号と過去の出力を混合する。

$$
O_n = I_1 \cdot S_n + I_2 \cdot O_{n-1} - I_3 \cdot O_{n-2}
$$

MUSIC Vではこのバンドパスフィルタは次のように記述することで使用できる[25, p78]。

```
FLT I1 O I2 I3 Pi Pj;
```

ここでは、`I1` が入力、`O`が出力のバスであり、`I2`、`I3`は上記計算式の係数$I_2$、$I_3$を$I_1$で割って正規化した値に対応する（そのためこのフィルタは全体のゲインが1より大きかったり小さかったりする）。ここで、`Pi`、`Pj`は本来スコアからのパラメーターを受け取るために使われる`P0`から`P30`までのパラメーターのうち、使われていないものをフィードバックする出力信号を一時的に保存するための汎用メモリーとして再利用している。他のUGenでも、例えばオシレーターでは位相のアキュムレーターを同様にノートパラメーターを再利用することで処理している。そのため、ユーザーは望ましい周波数特性からフィードバックゲインを手動で計算する必要があり[^musicv]、少なくとも2サンプル分のメモリ空間を利用することを意識する必要がある。

[^musicv]: CONVTというプリプロセッサのような機能によって周波数特性から係数の変換は実現できるとされている[25,p.77]。


一方で、Barry Vercoeが開発したMUSIC 11およびのちのCsoundではバンドパスフィルターは`reson`という名前のUGenとして定義されており、このUGenの取るパラメーターは入力信号、中心カットオフ周波数、周波数幅、Qという4つであり、ユーザーは出力のフィードバック2サンプル分のデータ領域を意識する必要がなくなっている[26,p.248]。ただし、MUSIC 11やCsoundではUser Defined Opcode(UDO)としてこのバンドパスフィルターをゼロから実装することもできる。Vercoeは信号処理のプリミティブは1サンプルフィードバックのように低レベルな操作を可能にしブラックボックスを無くしつつ、内部の詳細を知る必要がないときには高レベルなモジュールを組み合わせて面倒を避ける（avoid the clutter）ことが重要であるとする[26, p.247]。

```
      instr  1 ; instrument with fabricated reson:
la1   init   0 ; clear feedbacks
la2   init   0 ; at start only
i3    = exp(-6.28 * p6 / 10000)               ; set coef 3
i2    = 4*i3*cos(6.283185 * p5/10000) / (1+i3); set coef 2
i1    = (1-i3) * sqrt(1-1 - i2*i2/(4*i3))     ; set coef 1
a1    rand   p4                               ; source signal
la3   =      la2                              ; feedback 2
la2   =      la1                              ; feedback 1
la1   =   　　i1*a1 + i2 * la2 - i3 * la3      ; 2nd order difference eqn
      out   　la1
      endin

      instr 2 ; this instr does same as above
a1    rand   p4                               ; source signal
a1    reson  a1,p5,p6,1                       ; 2nd order recursicve filter
      endin
```

<small>
それぞれ、論文より抜粋したRESON UGenのスクラッチ実装と、組み込み実装の例（コメントはスペースの都合で省略している）。
</small>

一方で、Unit Generatorパラダイムを引き継いだPure Data[27]や、Max(信号処理の機能はMSPとしてPure Dataから移植された)、SuperCollider[28]、ChucK[29]においては、プリミティブなUGenはCやC++といった汎用言語で記述され、ユーザーが低レベルなUGen（External Object）を新たに定義したい場合はCやC++の開発環境を用意する必要がある[^chuck]。

[^chuck] ChucKはのちの拡張機能として、CSoundのUDOに相当するChuGenが導入され、ChucK言語自体で低レベルなUGenの新たな定義が可能になった[30]。だがCSoundもChucKも、UDOの実行時の処理性能はネイティブに実装されたUGenと比べて劣ることもあり、既存のUGen全てをUDOとして置き換えている訳ではなく、あくまで拡張機能の扱いに留めている。

UGenをより低級のC言語で実装したとき、例えそれがオープンソースな実装であっても、知識の分断によって現実的にはユーザー（作曲家）はブラックボックスとしてUGenを組み合わせることになる。このブラックボックスとしてのUGenの利用は、MUSICから連なる音楽家と科学者のコラボレーションという分業体制をさらに深めた状況を反映している（これは、原因とも結果とも捉えられる）。

例えば、MaxとPure Dataの開発者であるPucketteは、IRCAMにおける研究者、Musical Assistant（リアライザーとも呼ばれる）、作曲家、という分業体制が、現在におけるMaxというソフトウェアに関わる人を開発者、External Objectの開発者、Maxのユーザーという3つのレイヤーに対応しているとする[31]。人類学者のGeorgina Bornによる1980年代のIRCAMのエスノグラフィに記述されているように、IRCAMにおける基礎研究のリサーチャーと作曲家の分業は非常に明確であり、その体制はIRCAMでの研究におけるポピュラー音楽とそれに関連するテクノロジーの排除の傾向とも結びついていた[32] 。

ただし、そうした分断をBornが分析するようなモダニスト/ポストモダニスト/ポピュリストという軸や、ローテク/ハイテクという軸による価値観の違いによって生まれているわけではない[^wessel]。なぜなら知識の分断による技術のブラックボックス化はポピュラー音楽でも同じように起きているからだ。Paul Thébergeは1980年代のシンセサイザーの”民主化”が技術の隠蔽を通じて行われることで、音楽家というクリエーターを消費者化すると指摘した。

[^wessel]:　David WesselはBornのエスノグラフィ内のRIGという人物が自分であることを明かしたうえで、Bornのエスノグラフィでは当時のIRCAM所長でもあったピエール・ブーレーズをモダニストとして単純化して描きすぎていると言及している。 [33] 

> 技術システムへの適切な知識を欠くことにより、音楽家たちは次第に、新しい音の素材源としてあらかじめ作られたプログラムに惹かれるようになった。（中略）これはまた、業界が音楽家を特定の種類の消費者として再定義する傾向を示唆するのだ。[34, p.89,筆者訳]

この論点は電子音楽からコンピューターを用いる音楽全般にも延長できる。例えばメディア研究者のLori Emersonは、パーソナルコンピューターの普及はXerox PARCのDynabookをはじめとするユーザー自身で機能を改変できるメタメディアという当初の構想に始まったものの、最終的にはMacintoshやiPadにおいてユーザーをプログラミングから遠ざけ、ブラックボックス化することで不完全な形で実現されたとしている[35]。実際、Dynabookを構想したAlan KayはiPadは見た目こそ当初の理想系として提示されたものに似ているものの、実際はプログラミングによる拡張が存在しないため単なるメディア消費デバイスになってしまっていると評している[36]。

このような消費主義的道具の利用に対して、ミュージシャンは技術の誤用と流用(appropriation and exploitation)による抵抗を試みてきた[37]。だがサーキットベンディングが文字通りの黒い箱-機能の集約された一つの大きなICによってその可能性を狭められたように[38,p.225]、グリッチが方法論から表面的な聴感上のスタイルへ回収されたように[39]、資本主義に基づくテクノロジーはユーザーに失敗を許さない方向へと発展する。この状況下で、新しくプログラミング言語を設計することは単に音楽家に新しい音楽を生み出す手段を提供するだけではなく、ハックされる余地のある技術インフラの能動的再構築という、それ自体ハッキングに続く音楽的実践（ミュージッキング）として位置づけられるのである。


## 2000年以後の音楽プログラミング言語の特徴

これまでの議論を踏まえた上で、2000年代以後に開発された音楽のためのプログラミング言語群は、言語の役割をさらに狭め、Unit Generatorパラダイムとは異なるレイヤーでのオルタナティブな抽象化を試みた言語と、逆によりプログラミング言語としての汎用性を広げブラックボックスを減らした言語という2つの方向に分類できる。

高レイヤーでのオルタナティブな抽象化を試みた言語は、コードを書き換えることで演奏を行うライブコーディングの文化と結びついて発展してきた。2000年代以後のTOPLAPをはじめとするライブコーディングのコミュニティの活動は、そのマニフェストに"Obscurantism is dangerous.(蒙昧主義は危険)"とあるように[40]単にコーディング自体をパフォーマンス化しただけではなく、ブラックボックス化する音楽ソフトウェアを使ったラップトップパフォーマンスに対する抵抗でもあった。

実際、Rubyをホストとした**IXI** [41]や**Sonic Pi** 、Clojureを用いた**Overtone** [42] 、Haskellを用いた**TidalCycles** [43]、Pythonを用いた**FoxDot** [44]のようなSuperColliderのクライアントとして実装された言語はより汎用なプログラミング言語の表現力を活かして、UGenパラダイムは受け入れながらも音価やリズムといった高レベルの抽象化でこれまでの言語では不可能だった表現を可能にしている。またTidalCyclesのパターンの抽象化が必ずしも音楽だけでなくビジュアルのパターンなどにも応用可能なように、最終的なアウトプットとしてPCMでの波形出力を前提にしているわけでもない。

その一方でこうした高レベルな言語はその設計上、エフェクトのような音色の操作や低レベルな信号処理はアドホックな実装にならざるを得ない。SuperColliderの開発者であるMcCartneyは、そもそも汎用プログラミング言語の表現力が高ければ専用の言語を作る必要は無くなるだろうと述べていた[1]。この予測はMUSIGOLの例を考えれば妥当だと言える。だが、実際にはプログラムの動的変更に強いスクリプティング言語では、現代のプリエンプティブなOS環境下において、例えばガベージコレクションのような動的メモリ管理がリアルタイム処理における決定的な実行タイミングの保証を妨げる[45]といった困難が付きまとう。

またかつてFORTRANやC言語による記述はアーキテクチャに依存せずコンピューター上での音声処理を表現する汎用的な手段として機能していたが、現在においては汎用プログラミング言語の種類が増えた結果、CやC++によるプログラミングはかつてのアセンブリでのプログラミングのように相対的に難易度が高いものとなった。また異なるCPUだけでなくOS、Webなど多様なホスト環境への移植のハードルの高さを考慮するともはやポータブルとは言い難い。そのため、内部DSLとして実装される信号処理を対象に入れたシステムは、LuaAV[46]のような数少ない例を除いてほとんど作られていない。

代わりに、音楽での利用を想定した汎用言語をゼロから作るアプローチが台頭してきた。こうした言語の代表例はSorensenによるライブプログラミング環境**Extempore** [47]が挙げられる。ExtemporeはLispベースの言語の1つであるSchemeと、その上でメタ実装されるxtlang言語とで構成される。xtlangはC言語のようなハードウェアオリエンテッドな型シグネチャを記述する必要があるものの、コンパイラ基盤LLVM[48]を活用し、音色の操作を含む信号処理コードを実行時に機械語へJITコンパイルし高速に実行できる。

汎用言語の表現力や、LLVMのようなコンパイラ基盤から、ブラックボックスを減らした抽象化を行う例として、形式化に裏付けされた言語の設計というアプローチがある。**Faust** [49]はUGenのようなグラフ構造をベースにしながらも、ブロックダイアグラム代数という体系に基づいた意味論を持ち、ディレイやフィルターで必要とされる内部状態の読み書きが言語プリミティブとして組み込まれている。この形式化により、CやC++、Rustといった汎用言語にトランスパイル可能な言語であり、MaxやPure Dataのエクスターナルオブジェクトとして使用することもできる。

より汎用的な計算モデルであるラムダ計算を基盤とした**Kronos** [50]や**mimium** [51]では、PCMベースの信号処理を中心としながらも、プログラム自体のインタラクティブなメタ操作[52]や、自己完結した意味論と他の汎用言語との相互運用性の両立[53]などが試みられている。

ドメイン固有言語とは、ある目的に特化した言語でありながら、プログラミングによるある一定の表現の自由度を求めるダブルバインドの中で構築される。ExtemporeやKronos、mimiumの試みはその意味では、単に音楽のためのプログラミング言語というだけでなく、時間変化する値をコンピューター上で一般的に表すためのFunctional Reactive Programmingの研究の文脈に位置づけられる。多くのコンピューターハードウェアは、それ自体に実時間の概念は存在せず、計算のステップのみが考慮されるため、低レベルな汎用プログラミング言語も同様に時間の概念は言語プリミティブとしては組み込まれない。それゆえ音楽という時間とは切り離せない領域での計算モデルの探求は依然として必要とされ、汎用プログラミング言語の理論構築に貢献するポテンシャルを持つのだ。

ただし、強く形式化された言語は、UGenをその言語上でブラックボックスなしに定義できる代わりに、その言語の設計や実装の背景を理解するのに高度な知識が要求される。つまり、Multi-LanguageパラダイムにおけるSuperCollider自体の開発者、エクスターナルUGenの開発者、TidalCyclesのようなクライアント言語の開発者、SuperColliderのユーザー、クライアント言語のユーザーという細かい分業の代わりに、言語開発者とユーザーという2者の間に深い分断を発生させうる。


こうしたトレードオフの解決の本質的手段は明らかではないものの、例えば音楽のための言語でセルフホスト（言語のコンパイラをその言語自体で記述可能なこと）が可能な言語というアイデアは一見すると馬鹿げているが、ユーザーが言語の仕組みそのものを自発的に学習可能な環境を作れるという意味では検討に値する。

## 結論

本論文では、コンピューター音楽と音楽のためのプログラミング言語の歴史をPCMの普遍主義とUnit Generatorのブラックボックス化の傾向に着目して再検討した。かつては、エンジニアと作曲家が明確に役割を分割し協力し合うことで、コンピューターを用いて新しい表現を生み出せることが期待されていた。実際、ポスト・アクースマティックの議論に立ち戻れば、HolbrookとRudiのようにそれを歓迎すべきことだとする価値観もいまだ根強い。

> 最近のツールの多くは、信号処理のルーチンと変数を抽象化することで、使いやすくし、意味のある結果を生み出すためにその下敷きとなる処理を理解する必要をなくした。作曲家は、これらの技術を使用するために数学やプログラミングのスキルを必ずしも必要としなくなったのだ。[10, p.2, 筆者訳]

だが、分業はそのために共有可能な語彙を生み出し（これはまさにMathewsが生み出したUGenそのものである）、その語彙を永続化させるよう働く。新しいテクノロジーが外部からもたらされるものとし、コンピューターで音楽を制作する主体に光を当てた歴史を描くことによって、そのためのプログラミング環境やソフトウェア、プロトコル、フォーマットの構築に携わる主体は透明化され[54]、インフラストラクチャの生み出す間接的な権力関係から目を背けることになる。

そのため、未来の音楽のためのプログラミング言語の研究には、言語を含む道具を作ることが音楽文化の中でどういった美学的価値を持つのか（それはいかなる音楽的実践と言えるのか）、また社会的にどのような権力の（イン）バランスをもたらすのかという文脈の構築が求められる。

また、そもそもプログラミング言語は汎用言語の研究においてもefficiencyやexpressiveness、generalityといった用語で曖昧な評価基準によるクレームがなされていることが指摘されているが[55]、これは音楽のように明確な価値基準の存在しない分野においてはなお深刻な問題である。McphersonらによるIdiomacity概念の提案[3]のように、私たちが普段使っているプログラミング言語にどのような価値判断を下しているのかの語彙を共有、開発する必要がある。

広い意味では音楽のためのプログラミング言語自体の制作もまた個人レベルに広がってはいる。例えば、ChucKをベースにラムダ関数などの抽象機能を強化したAstorによる**Gwion** [56]、Ruizによる自身のモジュラーシンセサイザーハードウェア制作のために作られたDSPトランスパイラ言語**Vult** [57]、Webでの実行を念頭においたUGenベースのライブコーディング環境**Glicol** [58]などがあるが、これらの試みはアカデミックな文脈ではキャッチアップできていない。

逆に、過去の大学で研究されていた言語や1980年代のハードウェアオリエンテッドなリアルタイムシステムに関する実践的な知識は失われつつある。"Inside Computer Music"[59]のように過去のコンピューター音楽の作品を分析する研究は行われ始めているが、同様にコンピューター音楽のシステムの構築に関する考古学的実践も当事者のオーラルアーカイブなど一次資料の収集に加えて今後必要になってくるだろう。

## 参考文献

[1] J. McCartney, "Rethinking the computer music language: SuperCollider," *Computer Music Journal*, vol. 26, no. 4, pp. 61--68, Dec. 2002, doi: [10.1162/014892602320991383](https://doi.org/10.1162/014892602320991383).

[2] H. Nishino and R. Nakatsu, "Computer Music Languages and Systems: The Synergy Between Technology and Creativity," in *Handbook of Digital Games and Entertainment Technologies*, 2016. doi: [10.1007/978-981-4560-52-8](https://doi.org/10.1007/978-981-4560-52-8).

[3] A. McPherson and K. Tahlroǧlu, "Idiomatic Patterns and Aesthetic Influence in Computer Music Languages," *Organised Sound*, vol. 25, no. 1, pp. 53--63, 2020, doi: [10.1017/S1355771819000463](https://doi.org/10.1017/S1355771819000463).

[4] R. B. Dannenberg, "Languages for Computer Music," *Frontiers in Digital Humanities*, vol. 5, Nov. 2018, doi: [10.3389/fdigh.2018.00026](https://doi.org/10.3389/fdigh.2018.00026).

[5] V. Lazzarini, "The Development of Computer Music Programming Systems," *Journal of New Music Research*, vol. 42, no. 1, pp. 97--110, 2013, doi: [10.1080/09298215.2013.778890](https://doi.org/10.1080/09298215.2013.778890).

[6] M. V. Mathews, "The Digital Computer as a Musical Instrument," *Science, New Series*, vol. 142, no. 3592, pp. 553--557, Nov. 1963, Available: <https://www.jstor.org/stable/1712380>

[7] B. Ostertag, "Why Computer Music Sucks." https://web.archive.org/web/20160312125123/http://bobostertag.com/writings-articles-computer-music-sucks.htm, 1998.

[8] E. Lyon, "Do We Still Need Computer Music?" *Talk given at EMS 2006, Beijing*. https://disis.music.vt.edu/eric/LyonPapers/Do_We_Still_Need_Computer_Music.pdf, 2006.

[9] M. Adkins, R. Scott, and P. A. Tremblay, "Post-Acousmatic Practice: Re-evaluating Schaeffer's heritage," *Organised Sound*, vol. 21, no. 2, pp. 106--116, Aug. 2016, doi: [10.1017/S1355771816000030](https://doi.org/10.1017/S1355771816000030).

[10] U. Holbrook and J. Rudi, "Computer music and post-acousmatic practices: International Computer Music Conference 2022," in *Proceedings of the International Computer Music Conference, ICMC 2022*, G. Torre, Ed., International Computer Music Association, Jul. 2022, pp. 140--144.

[11] T. Magnusson, "Of epistemic tools: Musical instruments as cognitive extensions," *Organised Sound*, vol. 14, no. 2, pp. 168--176, Aug. 2009, doi: [10.1017/S1355771809000272](https://doi.org/10.1017/S1355771809000272).

[12] M. Mathews and C. Roads, "Interview with Max Mathews," *Computer Music Journal*, vol. 4, no. 4, pp. 15--22, 1980.

[13] P. Doornbusch, "Early Computer Music Experiments in Australia and England," *Organised Sound*, vol. 22, no. 2, pp. 297--307, Aug. 2017, doi: [10.1017/S1355771817000206](https://doi.org/10.1017/S1355771817000206).

[14] R. D. Woltman *et al.*, "UNIVAC Conference." Charles Babbage Institute, 1990.

[15] D. Davis, "Very early computer music," *Resurrection The Bulletin of the Computer Conservation Society*, vol. 10, pp. 19--20, 1994.

[16] S. Miyazaki, "Algorhythmic Listening 1949-1962 Auditory Practices of Early Mainframe Computing," in *AISB/IACAP World Congress 2012: Symposium on the History and Philosophy of Programming, Part of Alan Turing Year 2012*, 2012, p. 5.

[17] S. Levy, *Hackers: Heroes of the Computer Revolution - 25th Anniversary Edition*, 1st edition. O'Reilly Media, 2010.

[18] D. G. Loy, "Life and Times of the Samson Box," *Computer Music Journal*, vol. 37, no. 3, pp. 26--48, 2013, Accessed: Jan. 05, 2022. [Online]. Available: <https://www.jstor.org/stable/24265512>

[19] J. Sterne, Diminished Faculties: A Political Phenomenology of Impairment. Durham: Duke Univ Press, 2022.

[20] J. Sterne, *The audible past: Cultural origins of sound reproduction*. Durham: Duke University Press, 2003.

[21] M. Puckette, "The Sampling Theorem and Its Discontents," *International Computer Music Conference*, pp. 1--14, 2015.

[22] M. V. Mathews, "Max Mathews Full Interview - NAMM.org." https://www.namm.org/video/orh/max-mathews-full-interview, Mar. 2007.

[23] D. M. Innis, "Sound Synthesis by Computer: Musigol, a Program Written Entirely in Extended Algol," *Perspectives of New Music*, vol. 7, no. 1, pp. 66--79, 1968, doi: [10.2307/832426](https://doi.org/10.2307/832426).

[24] G. Loy and C. Abbott, "Programming languages for computer music synthesis, performance, and composition," *ACM Comput. Surv.*, vol. 17, no. 2, pp. 235--265, Jun. 1985, doi: [10.1145/4468.4485](https://doi.org/10.1145/4468.4485).

[25] M. V. Mathews and J. E. Miller, *The technology of computer music*. M.I.T. Press, 1969.

[26] B. L. Vercoe, "Computer Systems and Languages for Audio Research," *The New World of Digital Audio (Audio Engineering Society Special Edition)*, pp. 245--250, 1983.

[27] M. Puckette, "Pure Data," in *International Computer Music Conference Proceedings*, Michigan Publishing, University of Michigan Library, 1997.

[28] J. McCartney, "SuperCollider, a New Real Time Synthesis Language," in *International Computer Music Conference Proceedings*, Michigan Publishing, 1996.

[29] G. Wang, P. R. Cook, and S. Salazar, "ChucK: A Strongly Timed Computer Music Language," *Computer Music Journal*, vol. 39, no. 4, pp. 10--29, 2015, doi: [10.1162/COMJ_a_00324](https://doi.org/10.1162/COMJ_a_00324).

[30] S. Salazar and G. Wang, "ChuGens, ChubGraphs, ChuGins: 3 Tiers for Extending ChucK," in *International Computer Music Conference Proceedings*, 2012, pp. 60--63.

[31] I. Reese, "47・Miller Puckette・Max/MSP & Pure Data." https://futureofcoding.org/episodes/047.html, May 2020.

[32] G. Born, *Rationalizing Culture*. University of California Press, 1995.

[33] G. Taylor, "Article: An Interview With David Wessel - Cycling '74." https://cycling74.com/articles/an-interview-with-david-wessel, 1999.

[34] P. Théberge, *Any sound you can imagine: Making music/consuming technology*. in Music/culture. Hanover, NH: Wesleyan University Press : University Press of New England, 1997.

[35] L. Emerson, *Reading Writing Interfaces: From the Digital to the Bookbound*. Univ of Minnesota Press, 2014.

[36] A. C. Kay, "American computer pioneer Alan Kay's concept, the Dynabook, was published in 1972. How come Steve Jobs and Apple iPad get the credit for tablet invention?" *Quora*. https://www.quora.com/American-computer-pioneer-Alan-Kay-s-concept-the-Dynabook-was-published-in-1972-How-come-Steve-Jobs-and-Apple-iPad-get-the-credit-for-tablet-invention, Apr. 2019.

[37] C. Kelly, *Cracked Media: The Sound of Malfunction*. Cambridge, Mass: MIT Press, 2009.

[38] A. Inglizian, "Beyond Bending - Triggering, Sequencing, and Modulating Circuit-Bent Toys," in *Handmade Electronic Music: The Art of Hardware Hacking*, 3rd ed., New York: Routledge, 2020. doi: [10.4324/9780429264818](https://doi.org/10.4324/9780429264818).

[39] K. Cascone, "Errormancy: Glitch as Divination," *The End of Being*. https://web.archive.org/web/20150617190502/http://theendofbeing.com/2012/04/19/errormancy-glitch-as-divination-a-new-essay-by-kim-cascone/, Jul. 2011.

[40] TOPLAP, "ManifestoDraft - Toplap." https://toplap.org/wiki/ManifestoDraft, 2004.

[41] T. Magnusson, "The IXI Lang: A SuperCollider Parasite for Live Coding," *International Computer Music Conference Proceedings*, vol. 2011, 2011.

[42] S. Aaron and A. F. Blackwell, "From Sonic Pi to overtone: Creative musical experiences with domain-specific and functional languages," *Proceedings of the ACM SIGPLAN International Conference on Functional Programming, ICFP*, pp. 35--46, 2013, doi: [10.1145/2505341.2505346](https://doi.org/10.1145/2505341.2505346).

[43] A. McLean, "Making programming languages to dance to: Live coding with tidal," in *FARM 2014 - Proceedings of the 2014 ACM SIGPLAN International Workshop on Functional Art, Music, Modelling and Design*, New York, New York, USA: Association for Computing Machinery, 2014, pp. 63--70. doi: [10.1145/2633638.2633647](https://doi.org/10.1145/2633638.2633647).

[44] R. Kirkbride, "FoxDot: Live coding with python and supercollider," in *Proceedings of the International Conference on Live Interfaces*, 2016, pp. 194--198.

[45] R. B. Dannenberg and R. Bencina, "Design Patterns for Real-Time Computer Music Systems," in *ICMC 2005 Workshop on Real Time Systems Concepts for Computer Music*, 2005.

[46] G. Wakefield, W. Smith, and C. Roberts, "LuaAV: Extensibility and Heterogeneity for Audiovisual Computing," in *Proceeding of Linux Audio Conference*, 2010.

[47] A. C. Sorensen, "Extempore: The design, implementation and application of a cyber-physical programming language," PhD thesis, The Australian National University, 2018. doi: [10.25911/5D67B75C3AAF0](https://doi.org/10.25911/5D67B75C3AAF0).

[48] C. Lattner and V. Adve, "LLVM: A Compilation Framework for Lifelong Program Analysis & Transformation," in *Proceedings of the International Symposium on Code Generation and Optimization: Feedback-Directed and Runtime Optimization*, IEEE Computer Society, 2004, p. 75.

[49] Y. Orlarey, D. Fober, S. Letz, and S. Letz, "FAUST : An Efficient Functional Approach to DSP Programming," in *New Computational Paradigms for Computer Music*, Delatour France, 2009.

[50] V. Norilo, "Kronos: A Declarative Metaprogramming Language for Digital Signal Processing," *Computer Music Journal*, vol. 39, no. 4, pp. 30--48, 2015, doi: [10.1162/COMJ_a_00330](https://doi.org/10.1162/COMJ_a_00330).

[51] T. Matsuura and K. Jo, "Mimium: A Self-Extensible Programming Language for Sound and Music," in *Proceedings of the 9th ACM SIGPLAN International Workshop on Functional Art, Music, Modelling, and Design*, in FARM 2021. New York, NY, USA: Association for Computing Machinery, Aug. 2021, pp. 1--12. doi: [10.1145/3471872.3472969](https://doi.org/10.1145/3471872.3472969).

[52] V. Norilo, "Kronos Meta-Sequencer -- From Ugens to Orchestra, Score and Beyond," in *Proceedings of the International Computer Music Conference*, 2016, pp. 117--122.

[53] T. Matsuura, "Lambda-mmm: The Intermediate Representation for Synchronous Signal Processing Language Based on Lambda Calculus," in *Proceedings of the 4th International Faust Conference*, 2024, pp. 17--25.

[54] J. Sterne, "There Is No Music Industry," *Media Industries Journal*, vol. 1, no. 1, pp. 50--55, Jan. 2014, doi: [10.3998/MIJ.15031809.0001.110](https://doi.org/10.3998/MIJ.15031809.0001.110).

[55] S. Markstrum, "Staking claims: A history of programming language design claims and evidence: A positional work in progress," *Evaluation and Usability of Programming Languages and Tools, PLATEAU'10*, 2010, doi: [10.1145/1937117.1937124](https://doi.org/10.1145/1937117.1937124)

[56] J. Astor, "Gwion." https://github.com/Gwion/Gwion, 2017.

[57] L. L. Ruiz, "Vult Language." http://modlfo.github.io/vult/, 2020.

[58] Q. Lan, "Glicol." https://glicol.org/, 2020.

[59] M. Clarke, F. Dufeu, and P. Manning, *Inside Computer Music*. New York: Oxford Univ Pr, 2020.


# Related Contents

[mimium](/works/mimium)
