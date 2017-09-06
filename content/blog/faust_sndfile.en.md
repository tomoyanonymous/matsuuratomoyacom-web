---
date: 2017-09-06
title: process wav file simply with faust2sndfile
---

This article is introduction how to apply effects written in faust to wave files.

<!--more-->

# The Pros with faust

It's highly faster and simpler than the case of Matlab or Python.
Surely faust can't apply complex process such as statistical or relates to multiple files. However, sometimes we have to accomplish boring tasks, for instance, apply the same filter to a lot of wav files as preparation of the main task.

Also, we can use, ffmpeg filter or Audacity/DAW's Automation but sometimes their processes are the black box.

## Cons

Currently, the length of samples generated are the same as input file. This means the effector which has a long tale, such as the delay with a feedback or reverb would be cut before it ends.


---

# faust2sndfile

In this time, We use this tool faust2sndfile. Unfortunately We can't use this with FaustLive or Online Compiler yet. So We have to install faust locally.

## Install Faust locally 

Follow the instruction in the [readme](https://github.com/grame-cncm/faust) of faust.
If you are Homebrew user,[I made the formula](https://github.com/tomoyanonymous/homebrew-faust). Please try this.

The latest stable release, v2.1.0, dosen't include faust2sndfile, you need to install the HEAD of the faust2 branch. if you use homebrew, append `--HEAD` option.

If you install faust, faust2sndfile will be installed at the same time.

## Inside the script

<https://github.com/grame-cncm/faust/blob/master-dev/tools/faust2appls/faust2sndfile>

faust2sndfile is, actually, a simple shell script.

It compiles .dsp file into a binary with sndfile architecture.

And, We can execute the generated binary with arguments \<inputfile-path\> \<outputfile-path\>.

You need to install LibSndFile to build a binary. You can test if it is installed.

```bash
pkg-config --cflags --static --libs sndfile
```

If no error, you can use libsndfile. If you got an error, you can install via homebrew like this.

```
brew install libsndfile
```

# Use

```bash
faust2sndfile -h
```

If you get `faust2sndfile <file.dsp>`, faust2sndfile is installed correctly.

So Let's make simple .dsp file something like below.

```java
import("stdfaust.lib");
process = fi.lowpass(1,1000),fi.lowpass(1,1000);
```

It's simple lowpass fillter which pass through under 1000Hz sound.
and save with the name `lowpass.dsp`.

```bash
faust2sndfile lowpass.dsp -double
```

Compile and build the binary with the command. For tips, option flags to faust compiler must be given at this time. Though we may use only it of specifying precision like `-double` or `quad` at this time.

Then, we will get a binary with the name of `lowpass`.
So we have to do only execute it below.

```bash
./lowpass test.wav test_processed.wav
```

The first argument is the input file, the second is the output.

![](/assets/img/faust/faust_simplelowpass.png)

The avobe is the spectrogram before process and below is the after. We can see the applied sound doesn't have the sound in over 1000Hz.

The output format follows the input's extension.
It using libsndfile so we can use wav, aiff and even flac.

If faust code is monaural process and Input file is Stereo, Only Lch will be processed and generated with no error or warnings.

# Process multiple files

I tried to write this script, but I don't ensure if it works correctly. So use your own responsibility.

```bash
#!/bin/bash

dsp='./lowpass'

src=($(find src -name '*.wav' -o -name '*.aif'))

mkdir out

faust2sndfile $(echo $dsp'.dsp') -double

for obj in "${array[@]}"; do
  echo $obj
  out=$(echo $obj | sed s/src/out/g)
  dsp $obj $out
done

```
