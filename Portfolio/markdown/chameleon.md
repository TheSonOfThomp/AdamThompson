<div class="folio-nav next noom">
	<a href="?p=noom">Noom</a>
</div>
<div class="folio-nav prev home">
	<a href="../">Home</a>
</div>

# Chameleon

## We made adaptive hearing protection that reacts to the environment.

### People often don't wear hearing protection in environments like construction sites or factories because they need to communicate, and taking hearing protection on and off is inefficient.

#### Chameleon is hearing protection that responds to the volume of the environment. When it's quiet, Chameleon allows you to hear as if you're not wearing hearing protection. When it's gets loud, it reacts in an instant to protect your hearing until the environment is safe again.

<figure class='folio_image' id='hero'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/chameleon/chameleon-hero.jpg'>
	</a>
<figcaption></figcaption>
</figure>

## Problem

We surveyed and interviewed people who work in construction, manufacturing, and live music[^live-music] about their hearing protection use. A vast majority answered that while they know they should wear, protection they often don't. When asked why, they said they often needed to talk at work, and it's tedious to constantly remove hearing protection and put it back on.

<!-- talk about NIHL -->

## Requirements 

Based on our research insights, we came up with a number of areas our device should excel in. We then turned them into engineering functional requirements and metrics.

**Attenuation:** Must protect the wearer from potentially damaging sound.

**Communication:** Should allow communication when there is no damaging sound.

**Comfort:** Should be comfortable to wear for a full work day.

**Cost:** Should be reasonably priced relative to other products in the space.

**Durability:** Should withstand daily use in a rugged environment, and consume minimal power.

**Measurement:** Should accurately measure the noise level, and conform to ANSI standards.

## Prototypes
### Full Prototype Mk. 1

Our first system prototype was a retrofit on an existing ear-cup, and was used to test the measurement, control logic and mechanical components of the system. 

<figure class='folio_image video' id='first-proto-video'>
	<iframe src="https://www.youtube.com/embed/yUvlpVK7ays?loop=1" frameborder="0" loop="1" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
	<figcaption>The first prototype</figcaption>
</figure>

Though a good proof-of-concept, this prototype was too slow, and too noisy for what we needed to do with it. We also noticed when testing it that long hair tended to get caught in the disk—definitely not ideal.

### Full Prototype Mk. 2

I spent the next 4 months working on all aspects of the design: electronics, embedded code, mechanical and acoustics.

After a few dozen smaller scale prototypes to test each part of the system independently, we finally had a working full-system prototype.

<figure class='folio_image' id='hero'>
		<img src='../includes/portfolio_images/chameleon/finished-prototype.jpg'>
<figcaption>The final 3D printed prototype, with Teensy controller enclosure.</figcaption>
</figure>

## Pitch and Demo

We showcased our prototype at the Systems Design Engineering Symposium where we won People's Choice award. We also won the Norman Esch Entrepreneurship Award for our pitch and product demo!

<figure class='folio_image' id='hero'>
		<img src='../includes/portfolio_images/chameleon/prototype-demo.jpg'>
<figcaption>Demonstrating the prototype at Norman Esch finals.</figcaption>
</figure>



[^live-music]: 
Live music workers means, for example: stagehands, producers, and directors, not performers themselves