---
authors:
  - Tomoya Matsuura
title: Designing Civil Engineering of Music through the development of mimium, a programming languag for music
journal_title: Ph.D thesis for Graduate School of Design, Kyushu University
volume:
issue:
category: thesis
firstpage:
lastpage:
pdf_url: 
conference_title:
publisher: Kyushu University
date: 2022-03-20
publishDate: 2022-03-20
reviewed: true
bibtex: "@phdthesis{thesis-matsuura,
  author       = {Tomoya Matsuura}, 
  title        = {esigning Civil Engineering of Music through the development of mimium, a programming languag for music},
  school       = {Kyushu University, Graduate School of Design},
  year         = 2022,
  address      = {},
  month        = 3,
  URL = {}"
abstract: "This dissertation aims to present Civil Engineering of Music（CEoM） as an alternative research field for technology and music through the practice in the development of mimium, a programming language for music(PLfM). In chapter 1, an overall structure of the dissertation and the concept of  CEoM are presented. CEoM is an approach for research that rethinks fundamental technologies which are not built for music but that have a significant impact on the technological environment of music, such as programming languages, operating systems, and computer architectures. Today, it is difficult to make or listen to music without any intervention of the electronic computer that can, theoretically, do anything. Nevertheless, the computer as a Meta-Medium(Kay and Golderg 1977), the original idea of personal computing that the users make programs for their own tools, is still not a straightforward way and the technological environment of music always depends on technical infrastructures. This dissertation draws a view of CEoM, an action to push a change of such environments through the circulation between a speculation and a practice in the design and development of PLfM. In chapter 2, the history of Design Research as a research program is shown and the author clarifies the position of the research program of the dissertation that shapes problems through the practice of making. Since the 1960s, the design of systems, especially those using computers, has incorporated scientific, quantitative, and falsifiable processes. Since the 1980s, however, the complexity of the problems and the influence of adjacent fields such as the study of Science, Technology and Society(STS), and contemporary art have led to the significance of design that aims to pose questions to society through the artifacts that are neither useful nor quantitatively measurable effects. This research is an extension of such a history of design research, referring to the connection between media archaeology and critical design(Jo 2016) and Critical Fabulation(Rosner 2018), and takes the methodology of presenting a different historical perspective of media technology through the design practice. In chapter 3, the history of a computer as a medium for expression is reflected to rethink PLfM from an alternative view of history. Today's computing environment is an imperfect realization of the meta-media ideal, and users have been kept away from programming, which was originally inseparable from the use of computers. Musical practices which use a computer have a fundamental limitation in that if they cannot imagine the expression, they also can not create it. However, as existing musical forms become embedded in infrastructures such as standards and formats, in conjunction with industrial development, now users can no longer realize their ideas even if they could imagine. The intentional misuse of technology without knowing inside, such as glitch, which worked until the 2000s as a musical practice that actively uses technologies, no longer works in today's black-boxed music technology culture. In chapter 4, the history of PLfM is drawn. The Unit Generator(UGen) concept, which is a long tradition in PLfM, was originally only a tentative choice among various possible abstractions. However, with the industrialization of computers and the strong demand for real-time performance, a hardware version of UGen was actively researched, which eventually led to the normal specification of the software-oriented PLfM of today. Since 2000, various alternative abstraction attempts have been made, not limited to UGen, but they have resulted in a situation of a multi-language paradigm in which separate languages are developed and used for each layer of abstraction. The pursuit of abstract computational models independent of musical styles is still insufficient in PLfM design. In Chapter 5, as a diachronic comparison to the diachronic arrangement in the previous chapter, the author summarizes theories on design and implementation that can be discussed separately from the representations generated using the language, which is lacking in PLfM research. While referring to the discussion on general-purpose languages, the process of use and development of PLfM as a Human-in-the-Loop model is presented, and discuss the trade-offs that exist: larger intermediate representations in the language are more resistant to dynamic modification, smaller representations make the expression more general, and taking both dynamic modifications and generality increase the complexity of design and the cost of implementation. Chapter 6 describes the details of mimium, a PLfM designed by the author. mimium is designed as a general-purpose functional language with a minimal additional set for musical purpose: @ operators for scheduling function execution and stateful functions that allow signal processing with an internal state to be written in the same syntax as pure functions. By having these two specifications, the user can implement basic processing units given as a black-box traditionally as a library.Chapter 7 discusses the different ways of creating tools for music that have emerged through the development of mimium. The structure of mimium as a general-purpose language with minimal temporal manipulation has made it possible to describe the sound without relying on metaphors. However, the policy of creating a language with fewer black-boxes leads to a bifurcation into two types of work: implementation of the host language itself and building libraries on it, resulting in another division of labor between musicians and programmers. This leads to activism that is more meta than PLfM development, a conceptual framework that provides alternative perspectives to reframe a division of labor which is implicitly installed on our mind, such as musicians and engineers, i.e., Civil Engineering of Music."

---

# Abstract

This dissertation aims to present Civil Engineering of Music（CEoM） as an alternative research field for technology and music through the practice in the development of mimium, a programming language for music(PLfM).

In chapter 1, an overall structure of the dissertation and the concept of  CEoM are presented. CEoM is an approach for research that rethinks fundamental technologies which are not built for music but that have a significant impact on the technological environment of music, such as programming languages, operating systems, and computer architectures. Today, it is difficult to make or listen to music without any intervention of the electronic computer that can, theoretically, do anything. Nevertheless, the computer as a Meta-Medium(Kay and Golderg 1977), the original idea of personal computing that the users make programs for their own tools, is still not a straightforward way and the technological environment of music always depends on technical infrastructures. This dissertation draws a view of CEoM, an action to push a change of such environments through the circulation between a speculation and a practice in the design and development of PLfM.

In chapter 2, the history of Design Research as a research program is shown and the author clarifies the position of the research program of the dissertation that shapes problems through the practice of making. Since the 1960s, the design of systems, especially those using computers, has incorporated scientific, quantitative, and falsifiable processes. Since the 1980s, however, the complexity of the problems and the influence of adjacent fields such as the study of Science, Technology and Society(STS), and contemporary art have led to the significance of design that aims to pose questions to society through the artifacts that are neither useful nor quantitatively measurable effects. This research is an extension of such a history of design research, referring to the connection between media archaeology and critical design(Jo 2016) and Critical Fabulation(Rosner 2018), and takes the methodology of presenting a different historical perspective of media technology through the design practice.

In chapter 3, the history of a computer as a medium for expression is reflected to rethink PLfM from an alternative view of history. Today's computing environment is an imperfect realization of the meta-media ideal, and users have been kept away from programming, which was originally inseparable from the use of computers. Musical practices which use a computer have a fundamental limitation in that if they cannot imagine the expression, they also can not create it. However, as existing musical forms become embedded in infrastructures such as standards and formats, in conjunction with industrial development, now users can no longer realize their ideas even if they could imagine. The intentional misuse of technology without knowing inside, such as glitch, which worked until the 2000s as a musical practice that actively uses technologies, no longer works in today's black-boxed music technology culture.

In chapter 4, the history of PLfM is drawn. The Unit Generator(UGen) concept, which is a long tradition in PLfM, was originally only a tentative choice among various possible abstractions. However, with the industrialization of computers and the strong demand for real-time performance, a hardware version of UGen was actively researched, which eventually led to the normal specification of the software-oriented PLfM of today. Since 2000, various alternative abstraction attempts have been made, not limited to UGen, but they have resulted in a situation of a multi-language paradigm in which separate languages are developed and used for each layer of abstraction. The pursuit of abstract computational models independent of musical styles is still insufficient in PLfM design.

In Chapter 5, as a diachronic comparison to the diachronic arrangement in the previous chapter, the author summarizes theories on design and implementation that can be discussed separately from the representations generated using the language, which is lacking in PLfM research. While referring to the discussion on general-purpose languages, the process of use and development of PLfM as a Human-in-the-Loop model is presented, and discuss the trade-offs that exist: larger intermediate representations in the language are more resistant to dynamic modification, smaller representations make the expression more general, and taking both dynamic modifications and generality increase the complexity of design and the cost of implementation.

Chapter 6 describes the details of mimium, a PLfM designed by the author. mimium is designed as a general-purpose functional language with a minimal additional set for musical purpose: `@` operators for scheduling function execution and stateful functions that allow signal processing with an internal state to be written in the same syntax as pure functions. By having these two specifications, the user can implement basic processing units given as a black-box traditionally as a library.

Chapter 7 discusses the different ways of creating tools for music that have emerged through the development of mimium. The structure of mimium as a general-purpose language with minimal temporal manipulation has made it possible to describe the sound without relying on metaphors. However, the policy of creating a language with fewer black-boxes leads to a bifurcation into two types of work: implementation of the host language itself and building libraries on it, resulting in another division of labor between musicians and programmers. This leads to activism that is more meta than PLfM development, a conceptual framework that provides alternative perspectives to reframe a division of labor which is implicitly installed on our mind, such as musicians and engineers, i.e., Civil Engineering of Music.

---

# Related Works

[mimium](/en/works/mimium)