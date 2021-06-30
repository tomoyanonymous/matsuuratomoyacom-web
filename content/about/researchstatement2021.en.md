---
title: Research Proposal
layout: single
ogpimage: ogp.jpg
---

[CV](/en/about/cv)

[日本語版](/about/researchstatement2021)


# Development of Civil Engineering of Music Informatics

*2021.06.30 松浦知也 me@matsuuratomoya.com*

The purpose of this research is to trigger the transformation of music culture by technology by rethinking the design at the infrastructure level, such as computer architecture, operating system, and programming language.

## Background

Research in music and computing technology is currently focused on statistical approaches such as Music Information Retrieval [^mir], source separation, artificial speech synthesis, and Text-To-Speech. With the recent development of machine learning technology, these fields are becoming more and more accurate, and approaches to creative fields such as music production using artificial intelligence are also becoming more and more active. These research paradigms are generally based on the idea of modeling the functions of the human ear, mouth, and brain as closely as possible.

[^mir]: Downie, J. S. 2003. Music information retrieval. *Annual review of information science and technology*, *37*(1), 295-340.

On the other hand, when we look at the relationship between technology and the demand for music culture, we find that no matter how sophisticated the technology used to generate the audio, it is eventually edited into some kind of 5-10 minute audio file, which is almost always received by speakers or headphones, devices that emit 2-channel sound waves. In most cases, it is received by speakers or headphones, devices that emit 2-channel sound waves, and it can be said that the form of reception has not changed significantly since the dawn of recording technology.

One of the critical differences between the time of the advent of recording technology and today is that nowadays, from the time music is created to the time it is played back, a computer is involved in some way. DAW (Digital Audio Workstation) software is used in the music recording and production process, platforms such as Spotify and Apple Music and the servers that support them are used in the distribution process, and laptops, smartphones, and even headphones are used in the playback process. In the playback process, laptops and smartphones, as well as audio processing chips in DSP-embedded speakers and headphones, process audio in a broad sense. Nevertheless, the potential of the computer, which is supposed to be a versatile device, is only used to output a 2-channel audio signal in the end.

Of course, there have been attempts by individual artists to use computers in the pursuit of a new musical reception. For example, since the early days of the iPhone, ambient music composer Brian Eno, in collaboration with programmer Peteri Chilvers, has repeatedly released musical works [^bloom] as iPhone applications, in which infinite new patterns are generated. Even if the algorithm that generates the music is not new, the fact that the music is distributed as a program is significant.

[^bloom]: Bloom by Brian Eno and Peter Chilvers | GenerativeMusic.com: 2008. *http://generativemusic.com/bloom.html*. Accessed: 2020-03-26.

Although these efforts have not been as widespread as those led by musicians, they are becoming more popular in particular area, for example, background music of video games. In this context, compositional techniques such as Vertical Remixing which changes volumes of specific instruments and Horizontal Re-sequencing which changes an order of music sequences according to the actions by user or progression of story[^gamemusic] have been formalized.

[^gamemusic]: Lanham, M. 2017. Game Audio Development with Unity 5.X. Packt Publishing. ISBN: 9781787286450

Music that generates a different sound each time it is distributed in the form of a program has been only one particular form of music in the broader music culture, but with the recent rise of virtual reality and spatial audio, it is becoming an increasingly common form.

For example, in June 2021, Apple Music supported Dolby Atomos, an object-based spatial audio format that has been used mainly for movies [^applemusic]. Similarly, Sony supported object-based spatial audio (for certain streaming services only) in a format called 360 Reality Audio [^sony].　The object-based format differs from channel-based formats such as 5.1ch surround sound, which have been the main format until now, in that the sound file contains a 7.1.2ch sound source called a bed, with mono sound sources and its virtual location in 3D space as metadata. During playback, the signal is processed for optimal localization between headphones and different speaker layouts, and rendered by the CPU or a dedicated chip. In other words, a new sound source is generated through an algorithm for each playback environment, even for the same sound source.

[^sony]: 2021, Sony 360 Reality Audio　https://www.sony.jp/headphone/special/360_Reality_Audio/　Accessed:2021-06-25
[^applemusic]: 2021, Apple Newsroom - Apple Music、ドルビーアトモスによる空間オーディオを発表、さらにカタログ全体がロスレスオーディオに https://www.apple.com/jp/newsroom/2021/05/apple-music-announces-spatial-audio-and-lossless-audio/ Accessed: 2021-06-25

The format of music distribution has shifted from a clear goal of faithful reproduction of the original sound, to a battle of how much you can play around with the virtual acoustic world within the limited box of protocols and formats set by the platformer, and how much the platformers such as Apple, Sony and Dolby can dominate each other. It is a race to see how many mega-platformers such as Apple, Sony, and Dolby can dominate each other (even though the music that computers can realize should be much more diverse! ).

## Objectives

This research aims to make music culture more diverse and complex in the age of ubiquitous computing - where computers are literally ubiquitous but their variability is not effectively utilized at all. In order to make music culture more diverse and complex in this era, we will try to rethink and recreate the underlying core technologies of computers, such as architecture, OS, and programming languages, for music. This approach, which is different from music informatics, is called **Civil Engineering of Music Informatics** here.

In the past, the author has referred to the approach of media archaeology [^mediaarch], which illuminates different possibilities of history and culture by digging into the discourse on media devices that have become obsolete. He has been working as an artist, creating works in various forms such as sound installation, electronic instrument production, and performance [^works].

[^mediaarch]: Huhtamo, E. and Ōta, Y. 2015. メディア考古学 : 過去・現在・未来の対話のために. NTT出版.
[^works]: https://matsuuratomoya.com/works

In recent years, the author has taken an approach to transforming music culture by creating tools for the production of artworks and the media itself that underlie their distribution. 

This project revolves around two axes: the development of a platform for distributing the source code of mimium, a music programming language currently being developed and researched by the author, and the design of an open-architecture computer for artists that can easily execute mimium code. Through the development of mimium, the project aims to rethink the ecosystem of playing music on computers, which is ubiquitous in our daily lives, and to transform the entire music culture into something more accessible and sustainable.

## Ongoing Project: mimium - a self-extensible programming language for music

mimium (https://mimium.org) is a programming language for music that the author has been developing since 2019.


Domain-specific languages(DSL) for music have been developed continuously since the dawn of computers, represented by Max[^max], Puredata[^puredata], and SuperCollider[^supercollider].

[^max]: Puckette, M. 2002. Max at seventeen. Computer Music Journal. 26, 4 (2002), 31–43. DOI: https://doi.org/10.1162/014892602320991356.
[^puredata]: Puckette, M.S. 1997. Pure Data. International Computer Music Conference Proceedings (1997).
[^supercollider]: McCartney, J. 2002. Rethinking the computer music language: SuperCollider. Computer Music Journal. 26, 4 (Dec. 2002), 61–68. DOI: https://doi.org/10.1162/014892602320991383.

In recent years, there has been a lot of interest in the development of computer music, especially in the field of signal processing algorithms, such as Faust [^faust], that can be run on various platforms via C++ code or WebAssembly. A language that functions as an infrastructure and medium has emerged. Such languages have emerged in academic, commercial, and independent contexts, such as Kronos [^kronos], Vult [^vult], and Soul [^soul], but their central target is the description of signal processing algorithms. 

[^faust]: Orlarey, Y. et al. 2009. FAUST : an Efficient Functional Approach to DSP Programming. New Computational Paradigms for Computer Music. DELATOUR FRANCE.
[^kronos]:  Norilo, V. 2015. Kronos: A Declarative Metaprogramming Language for Digital Signal Processing. Computer Music Journal. 39, 4 (2015), 30–48. DOI: https://doi.org/10.1162/COMJ_a_00330.
[^vult]: Vult Language: 2020. http://modlfo.github.io/vult/. Accessed: 2020-09-27.
[^soul]: SOUL_Overview.md: 2019. https://github.com/soul-lang/SOUL/blob/master/docs/SOUL_Overview.md. Accessed: 2020-03-28.

**mimium(MInimal-Musical-medIUM)** is a language that focuses on the role of programming languages as a medium, and expands its scope to include not only the description of algorithms for signal processing, but also the description of musical works such as scores [^mimium].

[^mimium]: Matsuura, T. and Jo, K. 2021. mimium: A Self-Extensible Programming Language for Sound and Music. FARM 2021 - Proceedings of the ACM SIGPLAN International Workshop on Functional Art, Music, Modeling, and Design (2021) (To be Published. preprint: https://doi.org/10.5281/zenodo.5044732).

By using JIT compilation with LLVM [^llvm], we can write low-level processes such as signal processing in the order of milliseconds, and notation-level processes in the order of seconds to tens of seconds within a single language paradigm, while maintaining execution speed comparable to that of general-purpose languages such as C. Unlike existing environments focused on music production, we can simplify the implementation of the execution environment and reduce the binary size.

[^llvm]: Lattner, C. and Adve, V. 2004. LLVM: A Compilation Framework for Lifelong Program Analysis & Transformation. Proceedings of the International Symposium on Code Generation and Optimization: Feedback-Directed and Runtime Optimization (2004), 75.

This feature will be used to build an ecosystem in which music is described as source code and distributed as source code, mainly in the language mimium.

In our research after 2022, we will build a package manager and music distribution platform `mmmpm` for mimium.


A package manager, like npm[^npm] for Node.js and Cargo[^cargo] for Rust, is a general-purpose programming language that reads a configuration file describing a list of dependent packages and downloads necessary libraries from a network repository while resolving dependencies. It is a mechanism to facilitate the process of building a development environment.

[^npm]: https://www.npmjs.com/
[^cargo]: https://doc.rust-lang.org/cargo/

The package manager of mimium will be built in a similar way, but its purpose is not only to resolve dependent functions, but also to function as a platform for distributing finished music. By distributing both the finished music and the library on the same platform, we envision that, for example, a part of the music created by a musician can be read as a library and used as a secondary component of a new music.

This ecosystem of package managers will encourage more openness to Eno's efforts in generative music and the ongoing development of interactive music creation and distribution in games.

In "REMIX", Ressig used the act of remixing, which is the act of sampling a song to create new music, as a starting point to propose a change from Read Only culture to Read-Write culture, where the main act of creating and editing content in the future will extend from professionals to amateurs, as all digital data, such as video and text, can be copied, edited and redistributed without degradation [^remix].

[^remix]: ローレンス・レッシグ, 山形 浩生 (翻訳), 2010. REMIX ハイブリッド経済で栄える文化と商業のあり方.翔泳社.

The mimium package manager development is a more radical embodiment of these ideas. In a culture where music is distributed as source code, there is no clear boundary between the score describing the composer's intentions, the finished music, and the generated music whose output changes when parameters are given - and the instruments that are connected to physical elements by sensors. The boundary between the act of listening to music and the act of playing a musical instrument by giving parameters will also melt away.演奏する行為の境界線も融けてゆく。

## Domain Specific Architecture for Music

Another major characteristic of mimium is that it eliminates as many black boxes as possible in the program.

When using conventional music programming languages (which target composition-level expression), the user has to combine basic signal processing components - such as filters and oscillators - to achieve the desired signal processing. The problem with this is that it is necessary to use a general-purpose language such as C++ to realize components that cannot be expressed by combining basic components (e.g., a non-linear oscillator with chaotic behavior).

This problem not only limits the range of expressions that can be realized, but also leads to a separation of interests among users (or programmers) and a deepening division of labor. This asymmetry is not limited to music programming languages, but is similar to the situation of not being able to know the internal implementation of plug-ins in music production software. Of course, it is not necessary for every musician to know the algorithm of a sine wave oscillator, but when you want to play with its contents, the current software/hardware ecosystem makes the hurdle extremely high. The current software/hardware ecosystem has raised the bar extremely high, and it has become extremely difficult to foster hacker culture, such as circuit bending [^bending], which developed in the 90's~00's by hacking primitive digital circuits, or glitching, which creates never-before-heard sounds by intentionally destroying digital data.

[^bending]: Hertz, G. and Parikka, J. 2012. Zombie media: Circuit bending media archaeology into an art method. Leonardo. 45, 5 (2012), 424–430.  https://doi.org/10.1162/LEON_a_00438.

D-Box by Mcpherson et al. designed an electronic instrument with such hackability intentionally [^dbox], which eventually evolved into Bela, an open platform for building electronic instruments using a small Linux board BeagleBoneBlack (a dedicated Linux OS with real-time kernel extensions and a development environment completed by a web browser) [^bela].

[^dbox]: Mcpherson, A.P. and Zappi, V. 2015. Exposing the Scaffolding of Digital Instruments with Hardware-Software Feedback Loops. Proceedings of the International Conference on New Interfaces for Musical Expression. (2015), 162–167.
[^bela]: McPherson, A. 2017. Bela: An embedded platform for low-latency feedback control of sound. The Journal of the Acoustical Society of America, 141(5), 3618-3618.

Although the language specification of mimium itself is designed to eliminate black boxes as much as possible, the underlying operating system and computer architecture itself is still a big black box for musicians when it is actually executed.

Therefore, in this project, we will attempt to design an open and extremely simple processor architecture targeted at musicians.

In recent years, there has been a lot of research on practical architectures with very few instructions, such as two or four, triggered by OISC [^oisc], an architecture with only one type of instruction that was studied in the Esoteric Proramming Language [^subrisc]. While such research is mainly focused on reducing power consumption and footprint in applications such as IoT, this research is more focused on using the simplicity of the structure to create a computer as a free device, as a medium for artists to express themselves. The main focus of this research is to encourage such efforts in the field of music, such as Taeyoon Choi's Handmade Computer [^taeyoon] and CW&T's 1Bit 1HZ CPU [^CWT].

[^oisc]: Gilreath, W. F., & Laplante, P. A. 2003. Historical review of OISC. In Computer Architecture: A Minimalist Perspective (pp. 51-54). Springer, Boston, MA.
[^subrisc]: K. Saso and Y. Hara-Azumi, 2020. Revisiting Simple and Energy Efficient Embedded Processor Designs Toward the Edge Computing. in IEEE Embedded Systems Letters, vol. 12, no. 2, pp. 45-49, https://doi.org/10.1109/LES.2019.2949620 
[^taeyoon]: Taeyonn Choi, Handmade Computers. http://taeyoonchoi.com/poetic-computation/handmade-computers/ Accessed: 202`-06-25
[^CWT]: CW&T, 2011, 1 Bit 1Hz CPU https://cwandt.com/products/1-bit-1hz-cpu Accessed: 2021-06-25

The trend of computer architecture itself has passed through the era of multi-core and many-core, and is now creating a trend called Domain-Specific Architecture [^dsa], in which the most suitable ASIC for each application is designed with software and Domain Specific Language.

[^dsa]: Hennessy, J.L, Patterson, D.A, 2017, Computer Architecture: A Quantitative Approach (The Morgan Kaufmann Series in Computer Architecture and Design) 6th Edition. Morgan Kaufmann.

The purpose of DSA itself is to eliminate bottlenecks caused by general-purpose processor architectures, but in the field of speech signal processing, the examples of bottlenecks caused by CPU clock speed or number of cores are not that pronounced. Rather, the bottleneck stems from the upper layer, the preemptive scheduling in general-purpose operating systems, where the user program is not involved in precise execution timing control. This is a major advantage in the audio domain.

Moreover, in the field of music, there was a time in the 80's when independent audio chips (like synthesizers that could control parameters based on instructions from the CPU) were installed when the CPU could not realize real-time signal processing [^chiptune], so it can be thought that we have already experienced the DSA era once.

[^chiptune]: 田中治久(hally). 2017. チップチューンのすべて All About Chiptune: ゲーム機から生まれた新しい音楽. 誠文堂新光社.

In addition, as explained in the background, it is expected that there will be more and more cases in which computers will be equipped with dedicated chips that perform the decoding process for processing object-based audio formats, and it makes a certain amount of sense to design a processor architecture that is specialized for audio processing, but has a certain degree of versatility (≈ Turing completeness), rather than enclosing this for each format that becomes more diverse and complex.

The following steps are planned for the projects involved in this processor architecture.

1. specification of the processor and publication of the instruction set
2. release of source code for implementation in simulator and FPGA using hardware description language
3. manual implementation of the components and release of the instruction set
4. infrastructure for compiling from mimium
5. create sample works using processor architecture
6. Organize workshops for artists.
7. Conducting interviews with artists and qualitative analysis
8. Writing a paper


## Conclusion

This project aims to dismantle the unidirectional nature of music culture (star system, mass consumption culture, privilege of mega-platformers) due to the black box nature inherent in music production and distribution, by re-examining and implementing basic computer technologies such as computer architecture, operating systems, and programming languages from the perspective of their application to music. It is an attempt to dismantle the unidirectional nature of music culture (star system, mass consumption culture, privilege of mega-platformers) caused by the black box nature inherent in music production and distribution, and to construct a new field of music information and civil engineering by practically attempting to form a new DIY and DIWO music culture that combines making, listening, and performing.

Civil Engineering of Music Informatics is not necessarily a discipline only for music. As Attali once said, "Music has always contained in its principles the announcements of the coming age" [^attali], considering the principles of future music is also to predict the future society. This may be an exaggeration, but Dannenberg's survey of programming languages for computer music, for example, shows that music has a rich, multi-layered temporal structure, while the computational models of general-purpose computers have basically no concept of time, and are built on the paradigm that "the faster the better. As I said, considering a language for music may open up a new paradigm for programming [^dannenberg], and it is not too far-fetched to use the experimental field of music to predict the future of computers and computer-mediated culture that does not exist today.

[^attali]: ジャック・アタリ,金塚貞文訳. 2012. ノイズ 音楽/貨幣/雑音. みすず書房.
[^dannenberg]: Dannenberg, R.B. 2018. Languages for Computer Music. Frontiers in Digital Humanities. 5, (Nov. 2018). https://doi.org/10.3389/fdigh.2018.00026.