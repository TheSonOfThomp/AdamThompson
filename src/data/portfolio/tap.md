---
title: TAP Metronome
tagline: For easy band practice
cover: 'tap-cover.png'
color: '#000000'
section: portfolio
---

#Tap Metronome

<div class="tldr" markdown=1>
<!-- WHAT -->
## The simple metronome for efficient group practice.

<!-- WHY -->
#### Practicing with a metronome as a group can be difficult when everyone needs to be able to hear the click. Without headphones, musicians end up playing or singing quieter than they should in an attempt to hear the metronome.

<!-- HOW -->
#### Tap Metronome is an iOS app that uses the screen as an indicator, so everyone can stay in sync when making music. Just put your phone on a music stand, and jam away.
</div>


<figure class='folio_image' id='hero'>
	<img id="hero-iso" src='../includes/portfolio_images/tap/tap-metronome.png'>
	<img id="hero-iso-crop" src='../includes/portfolio_images/tap/tap-metronome-crop.png'>
<figcaption></figcaption>
</figure>

I designed and built this iOS app from scratch in Swift.

## Inspiration

Tap Metronome was inspired while I was practicing with the Water Boys a cappella group. We were struggling to stay together, and couldn't all hear the metronome clicks while singing. We needed a way to stay in time, but not rely on being able to hear the clicks.

I started building the app during Hack the North 2016, and refined it in the fall of 2017. 

## Design

In order to create a signal detectable over the sound of making music, I needed to use either visual or hapic feedback. Visual cues would be the most viable for a mobile app, so I explored different ways to make a salient visual cue. The most salient visual cue is a screen flash, so I adapted this to fit with the tap-tempo functionality I wanted to implement. When a user taps the screen, there is a pleasant circle that radiates from where they tapped. These circles repeat to the tempo that's been set until stopped.


<a href="https://itunes.apple.com/us/app/tap-metronome/id1300298573?">Available on the App Store!</a>

<a href="https://github.com/Adam93MT/TAP-Metronome">Check out the source on GitHub</a>


<figure class='folio_image multi-image' id='img1'>
	<img src='../includes/portfolio_images/tap/tap-metronome-crop.png'>
	<img src='../includes/portfolio_images/tap/tap-metronome-slider-crop.png'>
	<img src='../includes/portfolio_images/tap/tap-metronome-hidden-crop.png'>
	<img src='../includes/portfolio_images/tap/tap-metronome-settings-crop.png'>
<figcaption>Some Screenshots</figcaption>
</figure>