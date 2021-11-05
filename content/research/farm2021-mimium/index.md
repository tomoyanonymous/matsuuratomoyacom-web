---
authors:
  - Tomoya Matsuura
  - Kazuhiro Jo
title: "mimium: a Self-Extensible Programming Language for Sound and Music"
journal_title: "FARM 2021: Proceedings of the 9th ACM SIGPLAN International Workshop on Functional Art, Music, Modelling, and Design"
volume:
issue:
category: proceedings
firstpage: 1
lastpage: 12
pdf_url: https://doi.org/10.1145/3471872.3472969
conference_title: "FARM: 9th International Workshop on Functional Art, Music, Modelling, and Design"
publisher: Association for Computing Machinary
date: 2021-08-22
publishDate: 2021-08-22
reviewed: true
bibtex: '@inproceedings{Matsuura2021,
author = {Matsuura, Tomoya and Jo, Kazuhiro},
title = {{mimium: a Self-Extensible Programming Language for Sound and Music}},
year = {2021},
month = {8},
pages = {1--12},
booktitle = {FARM 2021: Proceedings of the 9th ACM SIGPLAN International Workshop on Functional Art, Music, Modelling, and Design},
publisher = {Association for Computing Machinary},
address = {Online, South Korea},
URL = {{https://doi.org/10.1145/3471872.3472969}},'
abstract: "We propose a programming language for music named mimium, which combines temporal-discrete control and signal processing in a single language. mimium has an intuitive imperative syntax and can use stateful functions as Unit Generator in the same way as ordinary function definitions and applications. Furthermore, the runtime performance is made equivalent to that of lower-level languages by compiling the code through the LLVM compiler infrastructure. By using the strategy of adding a minimum number of features for sound to the design and implementation of a general-purpose functional language, mimium is expected to lower the learning cost for users, simplify the implementation of compilers, and increase the self-extensibility of the language. In this paper, we present the basic language specification, semantics for simple task scheduling, the semantics for stateful functions, and the compilation process. mimium has certain specifications that have not been achieved in existing languages. Future works suggested include extending the compiler functionality to combine task scheduling with the functional paradigm and introducing multi-stage computation for parametric replication of stateful functions."

---

# Abstract

We propose a programming language for music named mimium, which combines temporal-discrete control and signal processing in a single language. mimium has an intuitive imperative syntax and can use stateful functions as Unit Generator in the same way as ordinary function definitions and applications. Furthermore, the runtime performance is made equivalent to that of lower-level languages by compiling the code through the LLVM compiler infrastructure. By using the strategy of adding a minimum number of features for sound to the design and implementation of a general-purpose functional language, mimium is expected to lower the learning cost for users, simplify the implementation of compilers, and increase the self-extensibility of the language. In this paper, we present the basic language specification, semantics for simple task scheduling, the semantics for stateful functions, and the compilation process. mimium has certain specifications that have not been achieved in existing languages. Future works suggested include extending the compiler functionality to combine task scheduling with the functional paradigm and introducing multi-stage computation for parametric replication of stateful functions.


# Related Contents

[mimium](/works/mimium)
