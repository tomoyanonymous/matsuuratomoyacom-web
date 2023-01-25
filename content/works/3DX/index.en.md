---
title: 3DX(plugin development)
thum: 3DX.png
date : 2020-12-16
category: clientwork
tags:
- programming
bigthum: true
---

Participated in the development of [3DX](https://novo-notes.com/en/3dx) sold from [NovoNotes](https://novo-notes.com/ja), a panner, ambisonic decoder/encoder, and format converter plug-in for  music production software, for spatial acoustic design.

Did the programming in C++, mainly implementing the signal processing part.

client: [Novonotes](https://novo-notes.com/ja) [MAGNETICA studio](https://www.magnetica-studio.com/)


https://novo-notes.com/ja/3dx

{{<tweet user="tomoya_nonymous" id ="1340533705756962816" >}}

In addition, the C++ header library for calculating spherical harmonic functions (i.e. encoding/decoding ambisonics) efficiently, which was developed simultaneously during the production process, is published as OSS.

https://github.com/magnetica-studio/efficient-spherical-harmonic-evaluation

This library uses an algorithm that has already been proposed, but the original library was implemented in C using metaprogramming to output the C source, but it is written in C++ using compile-time computation in this library.