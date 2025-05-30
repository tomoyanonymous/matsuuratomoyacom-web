---
date: 2020-04-03
title: "遅い音、速い音とそよ風になるコンピューター"
ogpimage: soyokaze.jpg
---
人間がギターを始めると誰しも一度速弾きにハマる。「速い」というのは徒競走が「速い」というのと同じで、速いことは偉いことになるからだ。人間は速くなるとヒエラルキーが上がる。
速さを極めることに一定期間ハマった後は、「速けりゃ音楽的にいいってもんじゃねーし」という後ろめたさの混じった言い訳を口にしながらかっこいいメロディの作り方の追求とかに流れていくようになる。それなりに速いフレーズが弾けるようになって満足感を覚えた人もだんだん別のことに目を向けるようになる。
ところで、世の中にはいろいろ上限を忘れてしまったタイプの人がいる。

{{< youtube -DMyM7ARJUI >}}

{{< youtube Xa7sl91w250 >}}

{{< youtube CSaRWt4cxao >}}

{{< youtube -s_E5-FNeAA >}}

{{< youtube T97LY1joYe8 >}}

演奏されている曲は熊蜂の飛行というクラシックがオリジナルの曲で、なぜか速弾き演奏のベンチマークとして使われるようになっている。

BPM300ぐらいが世界記録だった頃はまあ人間味がギリあるというか、背伸びしやがって可愛いなぐらいに思えるものだが、2017年とかになってまで最速を更新し続ける人がいるともうなんだかよくわからないというか、「すごい」からの「何必死になってんだよ」からの「逆にすごい」という感想が出てくる。

もはやこの音を聞いたところで音楽的感動とかそういう次元のものは一切ないのだが、これを演奏している人たちからはこの曲が一体どうやって聞こえているのだろうという疑問がふと湧いてくる。BPM3000の演奏を処理できる脳であればプロスポーツ選手の”ゾーン”さながら、音楽が遅く聞こえる…なんて状態になったりしているんじゃないだろうか。私たちがこの演奏なんだか新種のシンセサイザーから発されるSEなんだかわからない音を楽しめないのは脳がこの人たちに追いついていないからなのではないか。この先順調に上限BPMを更新して行ってBPM1200000、つまり人間の可聴上限20000Hzを超えた速弾きができるようになったら人間は音波を受信することで音を聞くのではなく手を動かすことで音楽を感じることが可能になり、人間拡張を達成できるのである。ヒューマンオーグメンテーション。

---

音楽の遅さについて考える上で避けて通れないのはNinjamだ。
Ninjamとはオンラインでジャムセッションをするための音声伝送ソフトウェアで、開発されたのは2005年なのでもう15年も前から存在するソフトウェアになる[^networked]。

今でこそリアルタイムオンラインセッションのための仕組みはヤマハのNETDUETTOを初め、RavennaやDante、AES67といった非圧縮のオーディオ信号を低遅延で送るための規格など様々なものが整っているが、2005年というと、Skypeでさえサービス開始が2003年とかだ。

IP電話の場合、伝送される音声は人の声だけを対象にした圧縮ができるし、しかもその符号化は既存の電話技術で培われているのでデータ量も少なく、そもそもそんなに遅延もシビアではない。しかし音楽となると僅かな遅延も演奏に対して支障が出かねない。
それをGPLのフリーウェアであるNinjamがどう解決したかというと、「いっそより遅らせる」という方法だった。
ジャムセッションのテンポをあらかじめ決めておいて、送られてきた音声はその一定周期分遅れたものがやってくるというわけである。同期はしていないけれど音楽的には破綻しない。コロンブスの卵である。

この状況は冷静に考えると中々おかしなもので、なんせ演奏に参加しているメンバーは全員それぞれちょっとずつ違う音楽を聴いており、そこで流れている音楽の正しい完成系というものが存在しない。こんな状況が発生する音楽ジャンルが他に存在するか。

その後NETDUETTOが2011年に登場することによってオンラインでセッションを行う場はだんだんそちらにシフトしていったように見える。ただ、NETDUETTOがプロプライエタリな技術である一方NinjamはいわゆるFOSSなので、匿名掲示板を中心にして世界中のどこにいるんだかわからない奴らと演奏を楽しむ、というある意味初期インターネットの牧歌的楽しみ方を象徴するような使い方をされており、現在に至っても少数ながらそのユーザーは存在しているようである。

---

コンピューターは無限に速いことが理想とされる。人間が問題に気づいた頃には答えがそこに提示されているくらいがちょうどいい。
コンピューターサイエンスでは与えられたどんな問題をも1ステップで解き終わる想像上の機械が理論を考えるために登場し、神託機械：Oracle Machineと名付けられていたりもする。

そういう世界の中で音（弾性波）という現象は相対的には圧倒的に遅い部類に入るものだが、その遅さを利用した装置が音響遅延線メモリーである。

水銀を満たしたパイプの両端にマイクとスピーカーをつけ、バイナリ信号をスピーカーから流し、マイクで信号を検出したら増幅して再びスピーカーへ。音速、パイプの長さ、バイナリデータの間隔に応じたデータ量で、弾性波のパルス列がパイプ内をぐるぐると循環し続ける。つまり、データが保持される。

まあ、この装置が1950年代のコンピューター黎明期のごく短い間使われたのは当時可能だった記憶装置技術の中で比較すると、磁気テープは安いが読み書き時にメカニカルな移動が伴うのでパンチカードを読み込むのと似たり寄ったりだし、アクセスを早くするため電気を使って真空管でフリップフロップを構成してデータを保持しようと思うと膨大な量の真空管が必要だし、しかもそれは結構頻繁に焼き切れるものだからコスト的に問題がある。

つまり「適度に読み書き速度が速く（あるいは遅く）」「適度にデータ量が多く」「適度にコストが低い」という絶妙に条件がマッチしたことから一次記憶装置、今でいうRAM(ただRandom Access MemoryじゃなくてSequencial Accessなんだが)のポジションに落ち着けたというわけである。当然その後は、磁気コアメモリやトランジスタという低コスト高速RW、大容量の代替品が登場するや否や消えて行った。

光の速さで遅延なく届く波ではこのメモリを構成することはできない。しかしメモリ容量を増やそうと思って音速が遅い物質を選んでいくと今度は読み出し速度が遅くなるので、性能が落ちる。パルスの間隔を短くしていけばそのうち弾性破壊が起きて弾性波としての性質を保てなくなるだろう。ムーアの法則に従って無限に速くなる計算性能にも、いつかは集積密度が原子の小ささに達すれば限界が訪れるなどとは言われているが、音響遅延線の性能は音波が遅いからこそ受け入れられ、またそして遅いからこそ、その限界が自明に約束されていた。

ところで、世界で初めてコンピューターを用いて奏でられた音楽はこの音響遅延線を用いたものだったと言われている。
オーストラリアの研究所で開発されていたCSIRACというコンピューターはデバッグ用にこの音響遅延線に流れるバイナリ信号をスピーカーに直接流せるようになっていたのだが、メモリを流れるパルスの数を制御すれば任意の音程が出せるんでは？ということに気がついた研究者たちはそのスピーカーから音楽を鳴らすプログラムを開発した[^csirac]。無論、この時スピーカーにかかる電圧はHIGHかLOWの2種類であり、クロックがDSDのような数MHzに達しない限りは任意の音波が出力できるというわけではない。ちなみにマスタークロックは1kHzなので基音が500Hzまでの音しか鳴らせないことになる。

---

さらにところで、コンピュータのクロックはCSIRACの1kHzから2000年台に至っては数GHzまで達しているにも関わらず、なぜ我々は未だに知覚できないレベルの低遅延なシステムを作るのにそれなりに苦労してNinjamのようなトリックを駆使したりしているのだろう。

その理由の一つはOSのスケジューリングにある。OSはコンピューター上を走る複数のプログラムを、見た目上はウィンドウという形で空間的に分割しているが、実際には時間軸上にも処理がプロセスごとに分割されている。このタスクの切り替え方法はOSによって色々あるんだが、大体10ms間隔ぐらいでスイッチするとのことだった(気がする、ソースは忘れたが、、、)。

10msというのは1サンプルの長さ1000/44100＝0.022675737msより圧倒的に長いわけで、1サンプルを現実の時刻通りに計算していては間に合わなくなってしまう。そのため音のプログラミングではこの10msぐらいのタイムスライスの間にまとめて128とか256サンプルとかをまとめて処理することになっている。この一度256サンプル分だけ貯めておく処理が挟まることによって遅延が生じる。アプリケーション間をオーディオがSoundflowerとかで行き来すると尚のことこの遅延が大きくなったりする。

万能の機械であるコンピュータだからこそ想像しうる全ての音楽を鳴らすことができる可能性があり、万能の機械なので他の仕事と協調して行われなければならない現実。

---

多摩美の久保田先生とライブコーディングについて話していた時に言っていたのがライブコーディングの大きな可能性は即興の時間スケールを作曲レベルの長い時間に引き延ばせるところにあるよね、という話(多分最近の本で書いていたような気もする)。

ある種の、遅い即興。他の人の演奏や、オーディエンスの反応に合わせて数ms先に演奏される次の単音を変化させるのではなく、数秒あるいは数十秒先に鳴らされるフレーズをコーディングして先に書き換える。身体の反応に遅れて演奏の結果がやってくる。

一方でこの遅さは手書きで楽譜を書いて即自分の演奏に反映するのでは間に合わず、代わりにコンピューターがコードで書いたフレーズを即解釈して音に変換してくれる、速さに裏打ちされたから実現できる遅い即興だとも言える。

遠く先に起こりうる音楽をいま予約して記述しておく、未来の演奏の先取りと言い換えてもそんなに間違ってない。BPM9999999の壁を超えて未来の演奏を今行う。それはとんでもなく”速い”演奏ではないか？

BPM9999999の演奏を誰もが理解できる世界が訪れたとしよう。人間は脳に電極をブッ刺し数MHzの電気信号を「音楽のようなもの」として認識することができるようになった。音楽の演奏においてはライブコーディングが普及し、誰もが数秒先のフレーズに対応するコードを書き合うのが当たり前。

そして、各演奏家の「数秒後に演奏されるであろう信号」を数㎲まで圧縮した電気信号が各演奏者にコードを評価した瞬間に届けられ、演奏者は「数秒後に演奏されるであろう音」知覚する。そして数ミリ秒も経たない間にコードを書き換えて更新。実際に音が鳴るよりも速く、演奏家たちは演奏されるであろう情報を書き換え続けるエクストリームメロディックスピードテクノ・ライブコーディング。一見真逆だけど聞こえていない相手の音を想像しながら演奏する非同期セッションという意味ではNinjamが先取りしていたこととそう変わりはしない。未来の即興はそんな感じでどうだろうか。

---

> *もしもこの世が義脳の中にあるとするならば、義脳が認識する義脳自身のクロック数が世界で最速の計算となる。義脳の中で行われる計算などは、電子頭脳の中に組み上げられた電子頭脳で計算を行うようなもので、ただの二度手間であるにすぎない。計算機なるものが自然の中で行っているのはそういう種類の二度手間である。*
> *結局のところ、自然現象を超える計算速度は存在しない。*
> *今は神父Cのテーゼとして知られている。*
>
> *(中略)*
>
> *「そしてわたしたちはそよ風になった」*
>
> 円城塔「Self-Reference ENGINE(2007)」より「05: Event」



[^networked]: Mills, R. (2010). Dislocated Sound: A Survey of Improvisation in Networked Audio Platforms. Proceedings of the 2010 Conference on New Interfaces for Musical Expression, 186–191.
[^csirac]: Doornbusch, P. (2004). Computer Sound Synthesis in 1951: The Music of CSIRAC. Computer Music Journal, 28(1),10–25. https://doi.org/10.1162/014892604322970616