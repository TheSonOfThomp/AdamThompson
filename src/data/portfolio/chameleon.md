---
title: Chameleon
date: 2017-12-20
tagline: What if your ears could blink?
cover: 'chameleon-cover.png'
color: '#2e8c5d'
section: portfolio
---

# Chameleon

<div class="tldr" markdown=1>

## Adaptive hearing protection that reacts to your environment.

#### We found that people don't like to wear hearing protection when the volume can change often—like in construction sites or factories—because they need to communicate, and constantly removing hearing protection is inefficient.

#### Chameleon is hearing protection that responds to the volume of the environment: When it's quiet, you can hear as if you're not wearing hearing protection. When it gets loud, it reacts in an instant to protect your hearing until it's safe again.


<div class="cover-image vertical">

![Cover photo](../../images/portfolio/cover/chameleon-cover.png)
</div>

</div>

## Problem

We surveyed and interviewed people who work in construction, manufacturing, and live music production[^1] about their hearing protection use. A vast majority answered that while they know they should wear, protection they often don't. When asked why, they said they often needed to talk at work, and it's tedious to constantly remove hearing protection and put it back on.

<!-- talk about NIHL -->

## Requirements 

Based on our research insights, we came up with a number of areas our device should excel in. We then turned them into engineering functional requirements and metrics.

**Attenuation:** Must protect the wearer from potentially damaging sound.

**Communication:** Should allow communication when there is no damaging sound.

**Comfort:** Should be comfortable to wear for a full work day.

**Cost:** Should be reasonably priced relative to other products in the space.

**Durability:** Should withstand daily use in a rugged environment, and consume minimal power.

**Measurement:** Should accurately measure the noise level, and conform to ANSI standards.

## User Stories

I started to draw up flows and storyboards for the ideal use of the device. Storyboards helped identify different use scenarios (who's talking? who's making the noise?), and functions we had initially overlooked (like override buttons to preemptively close the device), but a user flow was not very helpful, since the primary goal is to not interfere with the wearer's work. Any user flow was a straight line from the beginning off the day to the end. 

We found that the user story: "As a worker, I want to protect my hearing and still be able to communicate when working" helped us focus in during development.


## Prototypes
### Full Prototype Mk. 1
Over the next couple months we worked on the electrical and software systems, as well as testing different ways to dynamically attenuate. Our first system prototype was a retrofit on an existing ear-cup, and was used to test the measurement, control logic and mechanical components of the system. 

<figure class='folio_image video' id='first-proto-video'>
	<iframe src="https://www.youtube.com/embed/yUvlpVK7ays?loop=1" frameborder="0" loop="1" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
	<figcaption>The first prototype</figcaption>
</figure>

Though a good proof-of-concept, this prototype was too slow, and too noisy for what we needed to do with it. We also noticed when testing it that long hair tended to get caught in the disk—definitely not ideal.

### Full Prototype Mk. 2

I spent the next 4 months working on all aspects of the design: electronics, embedded code, mechanical and acoustics.

After a few dozen smaller scale prototypes to test each part of the system independently, we finally had a working full-system prototype.

![The final 3D printed prototype, with Teensy controller enclosure.](../../images/portfolio/chameleon/finished-prototype.jpg)

<!-- <figure class='folio_image' id='prototype3d'>
		<img src='../includes/portfolio_images/chameleon/finished-prototype.jpg'>
<figcaption></figcaption>
</figure> -->

## Pitch and Demo

We showcased our prototype at the Systems Design Engineering Symposium where we won People's Choice award. We also won the Norman Esch Entrepreneurship Award for our pitch and product demo!

<figure class='folio_image video' id='symposium-demo-video'>
	<iframe src="https://www.youtube.com/embed/3ss9hONATuw?loop=1" frameborder="0" loop="1" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
	<figcaption>Showing off the prototype at the Systems Design Engineering Symposium</figcaption>
</figure>

<figure class='folio_image' id='norman-esch-demo'>
		<img src='../../images/portfolio/chameleon/prototype-demo.jpg'>
<figcaption>Demonstrating the prototype at Norman Esch finals, where we<a href="https://uwaterloo.ca/engineering/news/six-teams-win-10000-each-annual-esch-awards" target="_blank"> won a $10,000 prize</a> for our pitch and demo!</figcaption>
</figure>



[^1]: Live music workers means, for example: stagehands, producers, and directors, not performers themselves