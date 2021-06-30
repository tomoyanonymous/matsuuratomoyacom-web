---
title: Research Proposal
layout: single
ogpimage: ogp.jpg
---

[CV](/about/cv)

[English Version](/en/about/researchstatement2021)

# 音楽情報土木工学（Civil Engineering of Music Informatics）の構築

*2021.06.30 松浦知也 me@matsuuratomoya.com*

本研究は、テクノロジーによる音楽文化の変容を、コンピューターアーキテクチャ、OS、プログラミング言語といったインフラストラクチャレベルのデザインを再考することで誘発することを目的とする。

## Background

音楽とコンピューティング技術の研究は現在、Music Information Retrieval[^mir]や音源分離、また人工音声合成、Text to Speechなどの統計的アプローチを中心に発展している。これらの分野は近年の機械学習技術の発達を背景にしてその精度を高めつつあり、また人工知能を用いた音楽制作といった創作分野へのアプローチも活発化している。これらの研究パラダイムは概ね人間の耳や口、そして脳という各機能をなるべく忠実に模していくという方向性に基づいていると言えるだろう。

[^mir]: Downie, J. S. 2003. Music information retrieval. *Annual review of information science and technology*, *37*(1), 295-340.

他方、音楽文化の需要のあり方という視点でテクノロジーとの関わり方を見てみると、どれだけ高度なテクノロジーを用いて生成された音声も、最終的には何らかの5~10分の音声ファイルとして編集され、ほとんどの場合スピーカーやヘッドホンという2chの音波を発する装置によって受容され、録音技術黎明期からの受容の形式と大きく変化していないと言える。

録音技術登場時と現在で決定的に違う点として、現在音楽が制作されてから再生されるまでに、ほとんどの場合何らかの形でコンピューターが介入していることが挙げられる。音楽録音や制作過程においてはDAW(Digital Audio Workstation)ソフトウェアが、配信過程においてはSpotifyやApple Musicのようなプラットフォームとそれを支えるサーバー群、再生過程においてはラップトップやスマートフォン、さらにはDSP内蔵のスピーカーやヘッドホンの音声処理チップといった様に広義のコンピューターが音声を処理している。にも関わらず、本来万能な装置であるはずのコンピュータのポテンシャルは最終的に2chの音声信号を出力するためにしか用いられていない。

もちろん、コンピューターを用いて新しい音楽の受容を追求する試みはアーティストごとの取り組みとしては存在している。例えばiPhoneが登場した当初の時代から、アンビエント音楽の作曲家Brian EnoはプログラマPeteri Chilversと共同してiPhoneアプリケーションとしての、無限に新しいパターンが生成される音楽作品[^bloom]を繰り返しリリースしている。これらは、例え音楽を生成するアルゴリズムの方になんら新規性がなくとも、プログラムとして音楽作品を流通させたことに意義があると言える。

[^bloom]: Bloom by Brian Eno and Peter Chilvers | GenerativeMusic.com: 2008. *http://generativemusic.com/bloom.html*. Accessed: 2020-03-26.

こうした取り組みは音楽家が主体になる取り組みがそれほど広まることは無かったものの、例えばゲームのBGMにおいては場面に合わせて音楽の音量や展開を変化させるインタラクティブミュージックとして定着しつつある。その中ではVertical RemixingやHorizontal Re-sequencing[^gamemusic]の様に作曲の技法としての確立も進みつつある。

[^gamemusic]: Lanham, M. 2017. Game Audio Development with Unity 5.X. Packt Publishing. ISBN: 9781787286450

こうしたプログラムという配布形式で毎回異なる音を生成する音楽は、これまで広い音楽文化の中の特殊な一つの形式でしかなかったが、近年のVirtual Realityや空間オーディオの隆盛に伴って、ますます一般的な形式に近づきつつある。

例えば2021年6月にApple MusicはDolby Atomosという、これまで映画を中心に利用されてきたオブジェクト・ベースの空間オーディオフォーマットに対応した[^applemusic]。同様にSonyも360 Reality Audioというフォーマットでオブジェクト・ベースの空間オーディオに（特定のストリーミングサービスに限って）対応した[^sony]。　オブジェクト・ベースのフォーマットは、5.1chサラウンドの様なこれまで主要なフォーマットだったチャンネル・ベースの形式と異なり、音源ファイルにはベッドと呼ばれる7.1.2chの音源に加えて、モノラル音源とその音源の3D空間上の仮想的位置情報がメタデータとして保存されており、再生時にヘッドホンや、異なるスピーカーレイアウト間で最適な定位となる様に信号処理を行いCPUや専用のチップがレンダリングを行う。つまり、同じ音源でも再生環境ごとに毎回新しい音源がアルゴリズムを通して生成されている。

[^sony]: 2021, Sony 360 Reality Audio　https://www.sony.jp/headphone/special/360_Reality_Audio/　Accessed:2021-06-25
[^applemusic]: 2021, Apple Newsroom - Apple Music、ドルビーアトモスによる空間オーディオを発表、さらにカタログ全体がロスレスオーディオに https://www.apple.com/jp/newsroom/2021/05/apple-music-announces-spatial-audio-and-lossless-audio/ Accessed: 2021-06-25

音楽配信の形式はもはや原音の忠実な再生という明確な目標から、プラットフォーマーが定めたプロトコルやフォーマットという限られた箱庭の中で仮想の音響世界をどれだけ遊び尽くせるかというバトルと、Apple、SonyやDolbyといったプラットフォーマー同士がどれだけ覇権を握れるかという囲い込み競争になっている（コンピュータの実現できる音楽はもっともっと多様であるはずなのに！）。

## Objectives

本研究はそうしたユビキタス・コンピューティングーただし、文字通り、コンピューターが偏在してはいるけれどその可変性は全く有効活用されてないー時代における音楽文化をより多様で複雑なものにすべく、その下敷きになるアーキテクチャやOS、プログラミング言語といったコンピュータにおける基幹技術を音楽のために再考し作り直すアプローチを試みる。これを音楽情報科学と異なるアプローチとして、**音楽情報土木工学（Civil Engineering of Music Informatics）** とここでは呼称する。

筆者はこれまで、時代遅れになったメディア装置についての言説を掘り下げることで歴史や文化の異なる可能性を照らし出す、メディア考古学[^mediaarch]というアプローチを参照し、オルタナティブな音楽のあり方をサウンドインスタレーション、電子楽器制作、パフォーマンスといった様々な形態で作品制作を行う、アーティストとしての活動を行ってきた[^works]。

[^mediaarch]: Huhtamo, E. and Ōta, Y. 2015. メディア考古学 : 過去・現在・未来の対話のために. NTT出版.
[^works]: https://matsuuratomoya.com/works

そして近年では作品制作から作品の製作のための道具や、流通の下敷きになるメディア自体を作ることで音楽文化を変容させるアプローチを行っている。

 本プロジェクトは、筆者が現在開発、研究している音楽プログラミング言語mimiumを中心にして、そのソースコードを配布するプラットフォームの開発、mimiumのコードを簡単に実行可能な、アーティストのためのオープンアーキテクチャなコンピュータの設計という2つの軸で展開する。mimiumの開発を通して、日常に偏在するコンピュータで音楽を奏でるエコシステム自体を再考することで、音楽文化全体をよりaccessibleかつsustainableなものへと変化させていく取り組みである。

## Ongoing Project: 音楽プログラミング言語mimium

mimium(https://mimium.org)は筆者が2019年より開発を続けている音楽のためのプログラミング言語である。

音楽に特化したプログラミング言語はこれまで、Max[^max]、Puredata[^puredata]、SuperCollider[^supercollider]を代表としてコンピューターの黎明期から継続的に開発されてきている。

[^max]: Puckette, M. 2002. Max at seventeen. Computer Music Journal. 26, 4 (2002), 31–43. DOI: https://doi.org/10.1162/014892602320991356.
[^puredata]: Puckette, M.S. 1997. Pure Data. International Computer Music Conference Proceedings (1997).
[^supercollider]: McCartney, J. 2002. Rethinking the computer music language: SuperCollider. Computer Music Journal. 26, 4 (Dec. 2002), 61–68. DOI: https://doi.org/10.1162/014892602320991383.



中でも近年、Faust[^faust]に代表される、信号処理のためのアルゴリズムをC++コードやWebAssemblyを経由して様々なプラットフォームで動作させる様な、単にクリエータの創作支援のためのツールとしてではなく、1つのコードを様々な環境で動かせるインフラストラクチャ、メディウムとして機能する言語が登場してきた。こうした言語はKronos[^kronos]、Vult[^vult]、Soul[^soul]など、アカデミック/商業/インディペンデントそれぞれの文脈で登場してきているが、いずれも中心的なターゲットは信号処理のアルゴリズムの記述である。

[^faust]: Orlarey, Y. et al. 2009. FAUST : an Efficient Functional Approach to DSP Programming. New Computational Paradigms for Computer Music. DELATOUR FRANCE.
[^kronos]:  Norilo, V. 2015. Kronos: A Declarative Metaprogramming Language for Digital Signal Processing. Computer Music Journal. 39, 4 (2015), 30–48. DOI: https://doi.org/10.1162/COMJ_a_00330.
[^vult]: Vult Language: 2020. http://modlfo.github.io/vult/. Accessed: 2020-09-27.
[^soul]: SOUL_Overview.md: 2019. https://github.com/soul-lang/SOUL/blob/master/docs/SOUL_Overview.md. Accessed: 2020-03-28.

**mimium(MInimal-Musical-medIUM)** はこうしたメディウムとしてのプログラミング言語の役割にフォーカスし、かつ信号処理のアルゴリズム記述にとどまらず、楽譜の様に音楽作品の記述にまで対象を広げた言語である[^mimium]。

[^mimium]: Matsuura, T. and Jo, K. 2021. mimium: A Self-Extensible Programming Language for Sound and Music. FARM 2021 - Proceedings of the ACM SIGPLAN International Workshop on Functional Art, Music, Modeling, and Design (2021) (To be Published. preprint: https://doi.org/10.5281/zenodo.5044732).

信号処理のような、数ミリ秒単位の低レベルな処理から、楽譜レベルの数秒~数十秒の処理を1つの言語パラダイムの中で書け、LLVM[^llvm]を使用したJITコンパイルを活用することで、C言語のような汎用言語にでの記述と遜色ない実行速度を保ちながら、既存の音楽制作にフォーカスした環境と異なりその実行環境の実装を単純にし、かつバイナリサイズを小さくできる。

[^llvm]: Lattner, C. and Adve, V. 2004. LLVM: A Compilation Framework for Lifelong Program Analysis & Transformation. Proceedings of the International Symposium on Code Generation and Optimization: Feedback-Directed and Runtime Optimization (2004), 75.

この特徴を活かして、mimiumという言語を中心に、音楽をソースコードとして記述し、ソースコードとして配布するエコシステムの構築を図る。

2022年以降の研究では、mimiumのためのパッケージマネージャ兼音楽配布プラットフォーム`mmmpm`の構築を行う。

パッケージマネージャとは、汎用プログラミング言語では例えばNode.jsにおけるnpm[^npm]、RustにおけるCargo[^cargo]の様に、依存パッケージのリストを記述した設定ファイルを読み込んで、ネットワーク上のリポジトリから必要なライブラリを依存関係を解決しつつダウンロードし、開発環境の構築過程を円滑にする仕組みである。

[^npm]: https://www.npmjs.com/
[^cargo]: https://doc.rust-lang.org/cargo/

mimiumのパッケージマネージャもこれに倣った仕組みを構築するが、その利用目的を単に依存する関数の解決だけではなく、完成した楽曲を配布するプラットフォームとして機能させることを目指す。完成した楽曲とライブラリを同じプラットフォーム上で配布することによって、例えばある音楽家が作成した曲の一部をライブラリとして読み込み新しい楽曲の構成要素として二次利用する様な例を想定している。

このパッケージマネージャのエコシステムにより、イーノが試みてきた生成的音楽の取り組みや、ゲームにおいて現在も発展しているインタラクティブ音楽の制作と配布をよりオープンな形で後押しする。

Ressigが「REMIX」で、ある楽曲をサンプリングして新しい音楽を作るリミックスという行為を起点にして、未来のコンテンツの作成、編集の主体は動画やテキストといったあらゆるデジタルデータが劣化なくコピー、編集、再配布できることからプロからアマチュアへ裾野が広がっていく、Read OnlyカルチャーからRead-Writeカルチャーへの変化を提起した[^remix]。

[^remix]: ローレンス・レッシグ, 山形 浩生 (翻訳), 2010. REMIX ハイブリッド経済で栄える文化と商業のあり方.翔泳社.

mimiumのパッケージマネージャ開発はこうした思想をよりラディカルな形で体現するものである。ソースコードとして音楽が配布される文化の中では、作曲者の意図を記述した楽譜と、完成した音楽と、パラメーターを与えることによって出力が変化する生成音楽ーそれをセンサーなどで身体的な要素と結びつけた楽器に明確な境界線は無くなる。音楽を聴取するという行為とパラメーターを与えて楽器を演奏する行為の境界線も融けてゆく。

## Domain Specific Architecture for Music

mimiumのもう1つの大きな特徴はプログラムの中に存在するブラックボックスを可能な限り無くしていることである。

これまでの(作曲レベルの表現を対象に入れた)音楽プログラミング言語を使う際、ユーザーは基本的な信号処理の部品ー例えばフィルターやオシレータなどーを組み合わせることで目的の信号処理を実現してきた。これには、基本部品の組み合わせで表現できない（例えば、カオティックな挙動をする非線型オシレータ）部品を実現するにはC++のような汎用言語を使う必要性があるという問題があった。

この問題は実現可能な表現の範囲が制限されるという問題に加えて、ユーザー（あるいはプログラマー）の関心が分離し、分業体制が深まっていってしまうことにある。これは音楽プログラミング言語に限らず、音楽制作ソフトウェアにおけるプラグインの内部実装を知ることができないという状況にも似た非対称性が発生している。もちろん、全ての音楽家がサイン波発振器のアルゴリズムを知っている必要はないにせよ、いざ中身を弄りたいと思った時に、現在のソフトウェア/ハードウェアのエコシステムはそのハードルが極端に高くなっており、90~00年代にプリミティブなデジタル回路をハックする事で発展したサーキットベンディング[^bending]や、デジタルデータを意図的に破壊する事で聞いたことのない音を作り出すグリッチのようなハッカーカルチャーを育む事は極めて難しくなっている。

[^bending]: Hertz, G. and Parikka, J. 2012. Zombie media: Circuit bending media archaeology into an art method. Leonardo. 45, 5 (2012), 424–430.  https://doi.org/10.1162/LEON_a_00438.

McphersonらによるプロジェクトD-Boxでは、そのようなハッカビリティを意図的に備えた電子楽器を設計し[^dbox]、それはやがて小型のLinuxボードBeagleBoneBlackを活用した電子楽器製作のためのオープンなプラットフォーム（リアルタイムカーネル拡張を備えた専用のLinuxOSと、Webブラウザで完結する開発環境）、Belaへと発展した[^bela]。

[^dbox]: Mcpherson, A.P. and Zappi, V. 2015. Exposing the Scaffolding of Digital Instruments with Hardware-Software Feedback Loops. Proceedings of the International Conference on New Interfaces for Musical Expression. (2015), 162–167.
[^bela]: McPherson, A. 2017. Bela: An embedded platform for low-latency feedback control of sound. The Journal of the Acoustical Society of America, 141(5), 3618-3618.

mimiumの言語仕様そのものは可能な限りブラックボックスを排除する作りにはなっているものの、それが実際に実行される時の下敷きになっているOperating Systemやコンピューターアーキテクチャそのものは音楽家にとってはまだ大きなブラックボックスだといえよう。

そこで本プロジェクトの中では、音楽家をターゲットにした、オープンかつ極めて単純な構成のプロセッサアーキテクチャの設計を試みる。

近年、Esoteric Proramming Languageの中で研究されていた命令が1種類しか存在しないアーキテクチャOISC[^oisc]に端を発し、インストラクションが2つや4つと極めて少ない実用的なアーキテクチャの研究が進んでいる[^subrisc]。こうした研究は主に、IoTなどのアプリケーションにおいて消費電力を減らせて、フットプリントも小さくできるということにフォーカスを当てているが、本研究ではむしろ、その構造の単純さを利用して、自由な装置としてのコンピュータとして、アーティストが自らの表現媒体として計算機を自ら作り上げるような取り組み（例えばTaeyoon ChoiのHandmade Computer[^taeyoon]やCW＆Tの1Bit 1HZ CPU[^CWT]）を音楽の領域において後押しすることを主眼に置く。

[^oisc]: Gilreath, W. F., & Laplante, P. A. 2003. Historical review of OISC. In Computer Architecture: A Minimalist Perspective (pp. 51-54). Springer, Boston, MA.
[^subrisc]: K. Saso and Y. Hara-Azumi, 2020. Revisiting Simple and Energy Efficient Embedded Processor Designs Toward the Edge Computing. in IEEE Embedded Systems Letters, vol. 12, no. 2, pp. 45-49, https://doi.org/10.1109/LES.2019.2949620 
[^taeyoon]: Taeyonn Choi, Handmade Computers. http://taeyoonchoi.com/poetic-computation/handmade-computers/ Accessed: 202`-06-25
[^CWT]: CW&T, 2011, 1 Bit 1Hz CPU https://cwandt.com/products/1-bit-1hz-cpu Accessed: 2021-06-25

コンピューターのアーキテクチャの潮流自体も、マルチコア/メニーコアの時代を経て、アプリケーションごとに最適なASICをそれぞれそのためのソフトウェアやDomain Specific Languageとセットにして設計する、Domain-Specific Architecture[^dsa]と呼ばれる流れが作られつつある。

[^dsa]: Hennessy, J.L, Patterson, D.A, 2017, Computer Architecture: A Quantitative Approach (The Morgan Kaufmann Series in Computer Architecture and Design) 6th Edition. Morgan Kaufmann.

DSA自体の目的は、汎用プロセッサアーキテクチャに起因するボトルネックの解消にあるのだが、音声信号処理の分野ではCPUのクロックスピードやコア数がボトルネックになる例はそこまで顕著になっていない。ボトルネックはむしろその上層、汎用OSにおけるプリエンプティブ（≒ユーザープログラムが正確な実行タイミング制御に関与できない）スケジューリングに起因しており、DSAの流れが進むことによって、音声信号処理のチップが全体のスケジューリングから独立して考えられるようになることが音声ドメインにおける大きなメリットと言えるだろう。

しかも、音楽の分野においては80年代にCPUではリアルタイムに信号処理が実現できなかった時代に独立した音声チップ（CPUからの命令を元にパラメータをコントロールできるシンセサイザーのようなもの）が搭載されている時代が存在しており[^chiptune]、既にDSAの時代を一度経験しているとも考えられる。

[^chiptune]: 田中治久(hally). 2017. チップチューンのすべて All About Chiptune: ゲーム機から生まれた新しい音楽. 誠文堂新光社.

また、背景で説明した、オブジェクト・ベースの音声フォーマットの処理のためのデコード処理を行う専用のチップをコンピューターに搭載する例は今後ますます増えると考えられ、これを多様化・複雑化するフォーマット毎に囲い込みを行うのではなく、音声処理に特化した、しかしある程度の汎用性（≒チューリング完全性）を備えたプロセッサのアーキテクチャを設計することには一定の意義があると言える。

本プロセッサアーキテクチャに関わるプロジェクトは、

1. プロセッサの仕様策定、インストラクションセットの公開
2. ハードウェア記述言語を用いてのシミュレータおよびFPGAによる実装のためのソースコード公開
3. 手動で部品実装とそのための手順書公開
4. mimiumからコンパイルするためのインフラストラクチャ整備
5. プロセッサアーキテクチャを用いたサンプルとなる作品の制作
6. アーティストのためのワークショップの開催
7. アーティストへのインタビュー調査とその質的分析
8. 論文執筆

といった手順を予定している。

## Conclusion

本プロジェクトはコンピューターアーキテクチャ、OS、プログラミング言語といったコンピュータにおける基礎技術を音楽のための応用から再検討、実装することによって、音楽制作と配布に内在するブラックボックス性に起因する音楽文化の一方向性（スターシステム、大量消費文化、メガ・プラットフォーマーの特権性）の解体と、作る/聴く/演奏するが融合した新しいDIY、DIWO的音楽文化の形成を実践的に試み流、音楽情報土木工学という新しい分野の構築を試みるものである。

音楽情報土木工学は必ずしも音楽のためだけの学問ではない。かつてAttaliが「音楽はいつの時代もその原理のうちに、来るべき時代の告知を含んでいたのだ」[^attali]と述べたように、未来の音楽の原理を考察する事は未来の社会を予測することでもある。そこまでは言い過ぎだとしても、例えばDannenbergがコンピュータ音楽のためのプログラミング言語のサーベイで、音楽は時間構造が多層的でリッチであり、一方で汎用計算機の計算モデルの中には基本的に時間の概念が存在せず、速ければ速いだけ良いというパラダイムの元に作られているという違いがあるため、音楽のための言語について考察することが新しいプログラミングのパラダイムを開拓するかもしれないと述べたように[^dannenberg]、音楽という実験場で今は存在しない未来のコンピューターやコンピューターを媒介する文化の姿を占う事は決して大それたことではないだろう。

[^attali]: ジャック・アタリ,金塚貞文訳. 2012. ノイズ 音楽/貨幣/雑音. みすず書房.
[^dannenberg]: Dannenberg, R.B. 2018. Languages for Computer Music. Frontiers in Digital Humanities. 5, (Nov. 2018). https://doi.org/10.3389/fdigh.2018.00026.