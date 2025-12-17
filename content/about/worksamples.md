---
title: Work Samples
layout: single
ogpimage: ogp.jpg
---

<style>
    .no-print{
        font-size: 70%;
        text-decoration:underline;
    }
    @media print {
      @page{
          margin-bottom: 10mm;
          size: A4;
            @bottom-center {     
            content: counter(page);  
            }
      }
      .navbar, .footer ,.header-link,.no-print {
        display: none;
      }
      .text-base-content .prose{
        max-width:80ch
      }
      .text-base-content p, .text-base-content li{
        break-inside: avoid;
      }
    }
    .pdf_next_page {
     page-break-before: always;
    }
</style>

# 松浦知也 / Tomoya Matsuura 

## Work Samples

ver. 2025-12-17

1. Solar Panel Cafe(2025)
2. mimium(2020-)
3. EDTAC(2018)
4. Exidiophone(2018-)
5. Aphysical Unmodeling Instrument(2017-2018)
6. 送れ | 遅れ / post | past(2017)

<div class ="pdf_next_page">

# Solar Panel Cafe(2025)

<img src = "../solar1.jpg" style="display:inline;width:49%;" /> 
<img src = "../solar2.jpg" style="display:inline;width:49%;" />

<img src = "../solar3.jpg" style="display:inline;width:49%;" />

An unconventional workshop derived from a dye-sensitized solar cell production experience workshop.

Participants assist(in the other word, provide a labor) with one of the steps in dye-sensitized solar cell production—such as stirring and applying titanium oxide paste, sintering, dyeing, or assembly. In exchange, they receive coffee or tea. The beverages available here include tea actually used in the dyeing process, which is essential for producing dye-sensitized solar cells.

In this workshop, the usual host-participant hierarchy is inverted: the host becomes a servant performing domestic labor to provide tea for the participants. Many tools used in the workshop are scientific instruments that also function as kitchen utensils. Here, the kitchen is a factory within the home. By manufacturing solar cells—items not typically made at home—participants become dual entities: consumers of domestic labor while simultaneously DIY-ing technical infrastructure.

Collaboration: DIY Semiconductor Manufacturing Community ISHI-kai, Tokyo University of the Arts “I LOVE YOU” Project


<div class ="pdf_next_page">

# mimium(2020-)

<img src = "/works/mimium/mimium-sc.png" style="display:inline;width:49%;height:250px;object-fit:cover" /> 
<img src = "/works/mimium/mimium-sc2.png" style="display:inline;width:49%;height:250px;object-fit:cover" /> 

https://mimium.org

mimium (**MI**nimal-**M**usical-med**IUM**) is a programming language for sound and music. Designed and developed with the aim of serving not only as a tool for musicians and programmers but also as an infrastructure for music creation and distribution, mimium distinguishes itself in its capabilities.

mimium is a functional programming language based on lambda calculus, a universal computational system, enhanced with minimal primitives for temporal operations (delays and feedback). This design allows users to define fundamental signal processing units, like oscillators and filters, as just functions within the mimium language, distinguishing it from many existing sound programming environments. The benefits of lambda calculus enable meta-operations, making it straightforward to replicate functions such as oscillators in arbitrary numbers (e.g., 100 or 1000 instances), an operation that is often challenging to implement concisely in other languages.

Also mimium has a unique Live Coding feature. By doing static analysis of diff of the codes, regardless of the part of DSP, the player can continue the performance without audio interruption.

related articles:

Matsuura, T, Lambda-mmm: the Intermediate Representation for Synchronous Signal Processing Language Based on Lambda Calculus, Proceedings of International Faust Conference 2024, 2024 https://hal.science/hal-04849629

Matsuura, T. and Jo, K. 2021. mimium: A Self-Extensible Programming Language for Sound and Music. FARM 2021 - Proceedings of the ACM SIGPLAN International Workshop on Functional Art, Music, Modeling, and Design (2021). https://dl.acm.org/doi/10.1145/3471872.3472969


<div class ="pdf_next_page">

# EDTAC(2018)

<img src = "/works/edtac/edtac-filipwolak.jpg" style="margin-top:0px;display:inline;width:49%;height:230px;object-fit:cover" /> 
<img src = "/works/edtac/edtac22.JPG" style="margin-top:0px;display:inline;width:49%;height:230px;object-fit:cover" /> 

<img src = "/works/edtac/edtac23.JPG" style="margin-top:0px;display:inline;width:49%;height:230px;object-fit:cover" /> 
<img src = "/works/edtac/edtac-video-spriteone.png" style="margin-top:0px;display:inline;width:49%;height:230px;object-fit:cover" /> 

Most of today’s computers have a master clock. Basic model of today’s computers do not have a concept of time. They only think how to move a data in a memory in each step and ideally, the infinitely fast clock is the best in practical use if they had. And when computers treat information of time, we divide time into discrete segments. However, don’t we have the other way to calculate a time without digitizing the time?

For example, there is an analog circuit called monostable multivibrator. The circuit receives an electric pulse and outputs pulse after a certain delay. The interval is determined by a combination of a capacitance and a resistance. So what if the output pulse switch the resistor to another one and is fed back to input? The pulse is triggered again after a different delay time from the previous interval. By repeating this, we should make the timer which has non-uniform intervals. The set of intervals are reproducible and we can say it as programmable but nothing is digitized because the delay times are resistances, physical parameters.

This is a principle of the EDTAC(Electronic Delay Time Automatic Calculator). This device can exist even if there was not a notion of number. Number is the biggest format and standard from ancient in the world. Similarly, computers stand on thousands of standardizations.

This device keeps working even if it is not called a computer by most people. At least, I made it with the purpose for computation of time.

<div class ="pdf_next_page">

# Exidiophone(2018-)

<img src = "/works/solo-performances/algotrek6_matsuura.jpg" style="margin-top:0px;display:inline;width:49%;height:200px;object-fit:cover" /> 
<img src = "/works/exidiophone/exidiophone3.jpg" style="margin-top:0px;display:inline;width:49%;height:200px;object-fit:cover" /> 

<img src = "/works/exidiophone/exidiophone5.jpg" style="margin-top:0px;display:inline;width:49%;height:200px;object-fit:cover" /> 
<img src = "/works/exidiophone/exidiophone-system-en.jpg" style="margin-top:0px;display:inline;width:49%;height:200px;object-fit:cover" /> 

Exidiophone is an audio-feedback (Larsen Effect) based musical instrument which does not have any oscillators or audio sources. An audio-feedback is a phenomenon that produces a constant tone by repeating an amplification of a sound from a speaker to a microphone.

An usual audio feedback keeps amplifying until a capability of its amplifier circuit. On the other hand, Exidiophone has a light sensor which controls amplifier’s volume and a LED which is placed on the other side of light sensor. The LED is turned off when the gain of a signal coming from the microphone exceeds a threshold. 

Idiophone, one of the category of musical instruments, has an origin in the meaning that “The object itself makes a sound” like cymbals and Marrimba, not like a Membrenophone like drums or Chordophone like piano and guitar.

Thinking about Speaker literally, it means “a someone who speaks”. It is made for producing a loud voice instead of a human or reproducing auditory information by speaking recorded voices instead of people. A word Microphone comes from micro and phone. It picks up and amplifies small sound having an origin in the role of Sthethoscope.

Even if the speakers and microphone can record all the sound which exists on earth until now, we can still find a blank area that is not filled with “found sounds” and can be produced with a speaker and a microphone. Such a sound is “The sound which Speaker and Microphone themselves produces”. “Ex"idiophone expands the notion of “The sound which the object itself produces” on Idiophone and also expands a view to existing electronic musical instruments.


<div class ="pdf_next_page">

# Aphysical Unmodeling Instruments(2017-2018)

<img src = "/works/aphysical-unmodeling-instrument/thum.jpg" style="margin-top:5px" /> 

“Aphysical Unmodeling Instrument” is a sound installation that re-implements a physical modeling synthesizer, which is usually implemented on a computer to imitate tones of real musical instruments, with physical object such as speakers, microphones, lights and sensors without any computers. The work physicalizes Whirlwind developed in 1990s, a chimera computational model of 3 wind instruments: Trumpet, Flute and Clarinet.

This work was presented currently 4 times from 2017 to 2018 at different place from the view of acoustic characteristics and constraints for installation: Japanese cultural property, general room in a university, an anechoic chamber and a lobby at music hall. The original model is common for 4 exhibitions but concrete implementations are different to adapt the conditions of the rooms. Attempted to exhibit the works as a kind of performance that build an apparatus which reproduces sound from the description of sound: physical model taking it as like musical score.

related articles:

Matsuura, T. and Jo, K. 2018. Aphysical Unmodeling Instrument : Sound Installation that Re-Physicalizes a Meta-Wind-Instrument Physical Model , Whirlwind. New Interfaces for Musical Expression (2018), 29–30. https://doi.org/10.5281/zenodo.1302662

<div class ="pdf_next_page">


# 送れ | 遅れ / post | past(2017)

<img src = "/works/post-past_sotsuten/img/sotsuten_1.JPG" style="margin-top:5px;display:inline;width:49%;height:230px;object-fit:cover" /> 
<img src = "/works/post-past/postpast-2.jpg" style="margin-top:5px;display:inline;width:49%;height:230px;object-fit:cover" /> 

<img src = "/works/post-past_sotsuten/adm2_setsumei_en.png
" style="margin-top:5px;display:inline;width:49%;object-fit:cover;" /> 
<img src = "/works/post-past_sotsuten/adm_setsumei_en.png
" style="margin-top:5px;display:inline;width:49%;object-fit:cover;" /> 

A sound installation recreating an acoustic delay line memory device—used in early 1950s computers to store binary data via acoustic feedback—within an open space.

The device, which originally functioned by looping binary data through pairs of speakers and microphones, is reconfigured here using two pairs of microphones and speakers. Despite each individual unit possessing only communication capabilities, the collective system functions as a memory device.

Additionally, the space features a pair of computers placed side-by-side. These computers achieve similar data retention capabilities not through binary data encoding, but using Google Docs voice recognition input and macOS text-to-speech functionality.

By entering the space between the speakers and microphones, the audience can physically interfere with the data communication and touch the data.


Exhibited at Tokyo University of the Arts Graduation Exhibition(Music Creation and the Environments) 2017

