---
title: Spectraspectacular(AMC Soundproject 2014)
thum: /assets/img/amc2014/amc_soundproject.jpg
date : 2015-01-29
ogpimage: assets/img/amc2014/soundproject_ogp.png
---

At AMC SOUND PROJECT 2014

[AMC（Tokyo University of the Arts, Art Media Center）Archive Website](http://geidaiamc.tumblr.com/post/114569954667/amc-sound-project-2014-%E6%88%90%E6%9E%9C%E7%99%BA%E8%A1%A8-%E4%B8%8A%E9%87%8E%E5%85%AC%E5%9C%92%E4%BD%9C%E5%93%81%E5%B7%A1%E3%82%8A-%E6%8B%85%E5%BD%93%E8%AC%9B%E5%B8%AB%E5%8F%A4%E6%BE%A4-%E9%BE%8D)

<iframe width="610" height="400" src="https://www.youtube.com/embed/ea4RPf-Qzak" frameborder="0" allowfullscreen></iframe>


Sound Application work made in a Project "AMC SOUND PROJECT 2014"

Project Description (Translation by me)

> We started this workshop project with the theme "Music adapted to the enviroments", that makes the interactive Music application/works available on iPhone from last half of 2014. Its purpose is explore the possibilities of future music/sound in today's situation, including portablity of music player or the way to treat the sound media in which we can easily play music via streaming.
> 
> In this time, We held a open tour that demo of the works made in last half of year.
> 
> The works are only 3 but they are varying, a site/time specific work using the gps infomation, a work using an acceleration and a works using direction.
> 
>  General Info
>  
>  - Start Place： AMC lab rounge
>  - Date：2015/1/29（Thu）13:00〜15:00
>  - Order：Matsuura Tomoya（MCE） Hamasaki Daigo（MCE） Komiya Chiku（Composition）
>  - Schedule
>     + 13:00 install apps,share the pd patch at AMC rounge
>     + 13:30-Matsuura Tomoya in front of the water fountain in Ueno Park
>     + 14:00-Hamasaki Daigo at Central Plaza in Ueno Park
>     + 14:30-Komiya Chiku at Okachimachi Park
>   
>  Organized by Tokyo University of the Arts Art Media Center


# General Infomation

In this Project, a Framework that enable to treat sensor information in iPhone, for instance, acceleration, GPS or Touch sensor using [Puredata](puredata.info) was given.

I made interactive music application that reacts to the pattern of the fountain in Ueno Park.

# Spectraspectacular

![](/assets/img/amc2014/spectraspectacular.png)

The Fountain in Ueno Park is consisted of 7,8,7--23 fountains.

The 23 sound oscillators are given. Their frequencies are set to any of the (base frequency * nth power of 2 * mth power of 3).

The gain of each oscillators are diminished by distance from fountain's place and follows fountain's strength changed by varying patterns.

# Puredata patch

![](/assets/img/amc2014/pd1.png)

Main patch

![](/assets/img/amc2014/pd2.png)

Setting of the Coordinate of each fountains.
The original coodinate was get by Google Earth but the Float Precision of Pd was 32bit, so Precise position wasn't set in this app.

![](/assets/img/amc2014/pd3.png)

A time sequence pattern of fountains. There s no data of such a preset, so I observed this fountain, sitting over 4 hours.

The pattern was 30 minutes rest and 30 minutes playing.
Inside 30 minutes playing, each patterns varying (maybe) over 15 is changed by each 30 or 60 seconds.
Each fountains changes by 4 step of no/low/middle/high.

And Fountain pattern was driven by relative times, not RTC, so setting was slightly drifted, 5 seconds in a day...It was found in the last presentation tour...
