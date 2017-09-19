---
title: Audio⇔Visual
thum: /assets/img/avfeedback/screenshot3.png
date : 2015-01-22
ogpimage: assets/img/avfeedback/avfeedback_ogp.png
---

at Tokyo University of the Arts Class in 2014 "Interactive Music 2"

[AMC Archive Page](http://geidaiamc.tumblr.com/post/114567474767/%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%A9%E3%82%AF%E3%83%86%E3%82%A3%E3%83%B4%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%B8%E3%83%83%E3%82%AF%E2%85%A1%E6%88%90%E6%9E%9C%E7%99%BA%E8%A1%A8%E4%BC%9A-%E4%BC%9A%E5%A0%B4%E8%8A%B8%E8%A1%93%E6%83%85%E5%A0%B1%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC-%E3%83%A9%E3%83%9C%E3%83%A9%E3%82%A6%E3%83%B3%E3%82%B8)

<iframe width="610" height="400" src="https://www.youtube.com/embed/k5f98FPbETc?rel=0&amp;start=1530" frameborder="0" allowfullscreen></iframe>

# General Info

The sound takes visual's infomation, the visuals draw sound's wave.
Each of information are transformed interactively.

Application was developed with Openframeworks (both of sound and visual).
GUI was made with Puredata.

# Screenshot

![](/assets/img/avfeedback/screenshot1.png)

![](/assets/img/avfeedback/screenshot2.png)

![](/assets/img/avfeedback/patch.png)

Pd patch

# System

## Audio→Visual

The visual was constructed with 6 waveform, 2*RGB.
Actually there are 6ch audio but each RGB waveform was summed and send to Lch and Rch.

Horizontal drawing position, Waveform amplitude, Filling of waveform can be controlled  by Puredata.
Also Visual can be JPG glitched in any situation.


## Visual→Audio

White Holizontal line seeks upper side to bottom side.

In each frame, Holizontal pixels at the position of white line was scanned and its left half, right half and each of RGB amplitude was taken as Audio Spectrum.

Each Spectrum were processed with Inverse FFT and processed waveform is put to audio buffer.

# Technical tips

The buffer size and pixel-array size was converted using ofFbo.

The framerate and the buffer rate (sampling rate/buffer size) should be the same. The memory access to audio buffer at the same time from both of visual side and audio side should be avoided, it crashes app.

Actually mutex should be used in this situation but I did'nt used because I don't know much about that. The framerate was set to (sampling rate/buffer size). It doesn't crash frequently, Maybe, because visual side accesses to 1-frame delayed buffer from audio side.

本来はupdate()とaudioOut()においてmutexを使用すべきだがよくわかっていなかったのでフレームレート側を無理やり合わせている。多分ビジュアルがオーディオから1フレーム分遅れたやつにアクセスしているので落ちなくて済んでいるような気がする。