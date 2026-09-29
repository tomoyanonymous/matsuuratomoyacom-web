---
title: Braunschweig Project Proposal
layout: single
ogpimage: ogp.jpg
build:
  list: never
sitemap:
  disable: true
---

<style>
    .no-print{
        font-size: 70%;
        text-decoration:underline;
    }
    .work-images{
        display: flex;
        gap: 4mm;
        margin: 0.5em 0;
    }
    .work-images img{
        flex: 1 1 0;
        min-width: 0;
        width: 50%;
        height: 55mm;
        object-fit: cover;
        margin: 0;
    }
    .todo{
        color: #999;
        font-style: italic;
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
      .work-images, .work{
        break-inside: avoid;
      }
      .todo{
        color: inherit;
      }
    }
</style>

# Braunschweig Project Proposal

<p class="no-print">※This page is printable. You can obtain PDF version by specifying "Save as PDF" from print option.</p>

## Profile

**Tomoya Matsuura**

<https://matsuuratomoya.com>

Instagram: tomoya_nonymous

## Artist Statement

**Tomoya Matsuura** (Kanagawa, Japan) is a SoundMaker—one who creates the tools and environments themselves for making sound.

His interest lies not much in sound itself, but in the underlying infrastructure that supports it.

Considering infrastructure at the individual, material level, this takes the form of instrument making and performance that focuses on the phenomenon level of sound generation, unbound by existing formats. For example, the electronic acoustic instrument “Exidiophone” (2018~), which produces sound solely through feedback, only establishes its identity as an instrument when placed within a space alongside speakers. Furthermore, its performance sound constantly changes based on the placement of the instrument and speakers, the room’s acoustic properties, and the positions of the performer and audience, possessing a strong ephemerality that renders recording meaningless.

On the other hand, viewing infrastructure at the level of social collectives brings focus to media standards and formats involved in music distribution. Here, biopolitics exists where the creators of standards control/dominate their users, and the options for production and reception that could inherently exist for users are unconsciously restricted by software, protocols, and platforms.

For example, the programming language for music, “mimium” (2020~), embodies a design philosophy that avoids embedding existing musical styles into its language specifications as much as possible. It actively practices this approach, reflecting the musician’s perspective, to develop technology that could become a new foundation for performance and listening.

This activity is presented as an imaginary research field **“Civil Engineering of Music(音楽土木工学)”** , aiming to cultivate the literal “soil and wood” of music-related technology, and to build a Civil—that is, citizen-driven, bottom-up—alternative technological environment.

The concrete approach here is based on media archaeology methods,  which involve meticulous research into past media that are no longer in use. By exploring why obsolete technologies have become obsolete, he aim to go beyond mere misuse of technology. He seek to imagine alternative present technological environments that could have diverged from the past, and to practice design activism that builds paths into these possibilities.

## Brief description of proposed artistic project

This work is a kinetic sound sculpture that amplifies and presents the sound produced when two pieces of wood rub against each other. 

For humankind, fire is the origin of technology and evokes a wide range of images—from celebration and prayer to destruction and war. 

Through the medium of wood, this work visually and sonically presents viewers with various images of fire—which do not physically exist—thereby questioning the relationship between humans and technology.  By rubbing wood together, people create fire; conversely, today, we routinely use technologies that generate flames to cut through wood—such as laser cutters—in the process of shaping it. 

In this work, two slender pieces of wood have been cut using a laser cutter; their cut surfaces remain charred from the cutting process and possess a high coefficient of friction due to the resin content. 

Driven by a motor, the wood pieces are slowly moved against one another along their cut surfaces, with each serving as both bow and string, producing a faint sound. This vibration is amplified by an attached contact microphone and sent to a speaker, generating a sound resembling an animal’s moan (this sound-production principle was inspired by German musician Hans Reichel’s Daxophone).

On the sides of the wooden pieces are “flames drawn by flames,” printed using the laser cutter’s raster image drawing function. These flames were sampled from news images of attacks in Gaza and Ukraine.

## Portfolio

<div class="work">

### mimium (2019–)

<div class="work-images">
<img src="/works/mimium/mimium-sc.png" alt="mimium">
<img src="/works/mimium/mimium-sc2.png" alt="mimium live coding environment">
</div>

mimium (MInimal-Musical-medIUM) is a programming language for sound and music, designed as an infrastructure for music creation and distribution rather than only a tool. It is a functional language based on lambda calculus, extended with minimal primitives for time (delay and feedback), so that oscillators and filters are ordinary functions that can be freely composed and multiplied. Its live-coding feature analyses code diffs so that a performance continues without audio interruption. It was supported by the IPA MITOU program (2019) and is the core of the author's doctoral research on a "Civil Engineering of Music". <https://mimium.org>

</div>

<div class="work">

### 送れ | 遅れ / post | past (2016)

<div class="work-images">
<img src="/works/post-past/postpast-2.jpg" alt="post | past, installation view">
<img src="/works/post-past/postpast-1.jpg" alt="post | past, installation view from the audience">
</div>

An installation that over-interprets the acoustic delay line memory used in the earliest electronic computers of the 1950s, which stored data by circulating sound pulses between a speaker and a microphone. Five computers listen to and reproduce each other's sound over the air; none of them can store data alone, yet the whole system works as a memory. The work asks when and where the data is actually stored, and what it means to record or to memorise. Presented at Tokyo University of the Arts (2016–17); Asia Digital Art Award 2017 Finalist.

</div>

<div class="work">

### Electronic Delay Time Automatic Calculator (EDTAC) (2018)

<div class="work-images">
<img src="/works/edtac/edtac-filipwolak.jpg" alt="EDTAC">
<img src="/works/edtac/edtac-minu-han.jpg" alt="EDTAC (photo by Minu Han)">
</div>

An alternative form of personal computer that has no master clock and therefore no minimum unit of time. Chained monostable circuits, whose delays are set by physical resistors, divide time as programmed without ever digitising it, with a telegraph sounder and optical fibre making the process audible and visible. The work questions the assumption that computation must be built on numbers and discrete clocks. Made at the School for Poetic Computation (2018); shown at IAMAS Intercollege Sonic Arts Festival 2018 and Kanaso Triennale 2020.

</div>

<div class="work">

### Aphysical Unmodeling Instrument (2017–18)

<div class="work-images">
<img src="/works/aphysical-unmodeling-instrument/thum.jpg" alt="Aphysical Unmodeling Instrument">
<img src="/works/aphysical-unmodeling-instrument/aui-nime2018-1.jpg" alt="Aphysical Unmodeling Instrument at NIME 2018">
</div>

A sound installation that re-implements a physical-modelling synthesizer, normally a computer simulation of real instruments, using physical objects: speakers, microphones, lights and sensors, without any computer. It physicalises "Whirlwind", a combined model of trumpet, flute and clarinet, treating the model as a kind of musical score. It was staged four times in different acoustic settings, from a Japanese cultural property to an anechoic chamber, including NIME 2018 (Virginia Tech). Selected for Kitakyushu Digital Creators Contest 2019.

</div>

<div class="work">

### Exidiophone (2018–)

<div class="work-images">
<img src="/works/solo-performances/algotrek6_matsuura.jpg" alt="Exidiophone performance at Algotrek 6, Providence">
<img src="/works/solo-performances/algotrek6_matsuura2.jpg" alt="Exidiophone performance at Algotrek 6, Providence">
</div>

Photos: Algotrek 6, Long Pond, Providence, 2025 (photos by Femi Shonuga-Fleming)

An electro-acoustic instrument that makes sound only from audio feedback, with no oscillator or sound source. A light sensor controls the amplifier gain while an LED, switched off whenever the feedback grows loud, closes the loop, so the instrument oscillates between tone and silence by itself. The sound depends on the placement of instrument and speakers, the room and the audience, which makes recording largely meaningless. Performed since 2018 in solo and ensemble settings in Japan and the USA.

</div>

## Short CV

**Tomoya Matsuura** (b. 1994, Kanagawa, Japan) is a SoundMaker: an artist, engineer, educator and researcher who makes sound, instruments, and the environments for those instruments. His research area, "Civil Engineering of Music", critically designs the socio-technical infrastructure around music through practice.

### Education

- 2019–2022 Ph.D. in Design, Graduate School of Design, Kyushu University
- 2017–2019 M.A. in Design, Graduate School of Design, Kyushu University
- 2018 School for Poetic Computation, Fall 2018 class
- 2013–2017 B.A. in Music, Tokyo University of the Arts (Music Creation and Environment in Music)

### Employment

- 2022–2026 Project Assistant Professor, Art Media Center, Tokyo University of the Arts
- 2020– Part-time lecturer (Sound Design), Fukuoka Jo Gakuin University
- 2015–2017 Sound Engineer, teamLab

### Grants, Awards

- 2023–2026 KAKENHI Grant-in-Aid for Early-Career Scientists (23K12059)
- 2019–2020 IPA MITOU IT Human Resources Project (Super Creator, 2020)
- 2019 Kitakyushu Digital Creators Contest, Selected
- 2017 Acanthus Music Prize; Asia Digital Art Award 2017 Finalist

### Selected Exhibitions

- 2020 Kanaso Triennale 2020, Yokohama City Gallery (EDTAC)
- 2018 New Interfaces for Musical Expression 2018, Virginia Tech (Aphysical Unmodeling Instrument)
- 2017 HANARART PLUS, Nara; Intercollege Sonic Arts Festival 2017 (Aphysical Unmodeling Instrument)
- 2016–17 Graduation Exhibition, Tokyo University of the Arts (post | past)

### Selected Performances

- 2026 Art Media Center Open Lab "Observatory", Tokyo University of the Arts
- 2025 Algotrek 6, Long Pond, Providence
- 2022 TELE MUSICKING, Goethe-Institut Tokyo
- 2018–2021 member of Shuta Hasunuma Full Philharmonic Orchestra

### Selected Publications

- Matsuura, T, Hiding What from Whom? A Critical Review of the History of Programming languages for Music, Proceedings of the International Computer Music Conference 2025, 2025
- Matsuura, T, Lambda-mmm: the Intermediate Representation for Synchronous Signal Processing Language Based on Lambda Calculus, Proceedings of International Faust Conference 2024, 2024
- Matsuura, T. and Jo, K. 2021. mimium: A Self-Extensible Programming Language for Sound and Music. FARM 2021 - Proceedings of the ACM SIGPLAN International Workshop on Functional Art, Music, Modeling, and Design (2021).
- Matsuura, T. and Jo, K. 2018. Aphysical Unmodeling Instrument : Sound Installation that Re-Physicalizes a Meta-Wind-Instrument Physical Model , Whirlwind. New Interfaces for Musical Expression (2018), 29–30.

### Technical Support & Sound Design for Other Artists

Sound system development and programming for STUDIO POETIC CURIOSITY (2023–26), SIDE CORE (2023–24), Umeda Tetsuya(2022).

Full CV: <https://matsuuratomoya.com/en/about/cv>

## Links to 3 Video files

1. <span class="todo">(To be added)</span>
2. <span class="todo">(To be added)</span>
3. <span class="todo">(To be added)</span>
