<div class="folio-nav prev chameleon">
	<a href="?p=chameleon">Chameleon</a>
</div>
<div class="folio-nav next knowroaming">
	<a href="?p=knowroaming">KnowRoaming</a>
</div>

# Noom

##I simplified a confusing interface without compromising functionality.

### Users were having trouble navigating the core meal-logging flow since the buttons weren’t obvious, and changed behaviour depending on use case. We needed to fix this.

### We consolidated the user flow and UI, making it consistent in all use cases. Through meticulous user-testing we designed an interface that eliminated hesitation and uncertainty.

<figure class='folio_image' id='hero'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/noom/noom_logging.jpg'>
	</a>
<figcaption></figcaption>
</figure>

I worked for four months at Noom in midtown Manhattan—a company combating obesity, diabetes, and hypertension through behaviour change. Meal logging is a must-have feature in the app that tracks and gives constructive feedback on users' eating habits. It must be quick and intuitive to log the food you’ve eaten and get insightful feedback.

##Problem

We observed users' behaviour, and one of the biggest issues we saw was that they were having difficulty navigating between different views in the food logging flow. They were unsure of what to do, and there was a lot of guessing. People weren't noticing certain buttons, or they didn't work the way they expected them to, and the UI changed depending on the entry case.

<figure class='folio_image' id='img2'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/noom/noom_existing.jpg'>
	</a>
<figcaption>The confusing flowchart for the existing solution</figcaption>
</figure>

##Requirements
When we had a good idea of what the problems were and what were causing them, we created user requirements for the redesign. From several specific criteria, we boiled them down to:

**Users will act with confidence:** All interactive elements will have a single clear purpose.

**Users will not get lost:** All cases will have an understandable  flow and architecture.

## Iteration

The most basic solutions navigation confusion involve eliminating different cases, and settling on a single, universal flow for all entry cases—either starting a user in the _search_ view first, or in the meal summary (_cart_) view first. 

<figure class='folio_image images-2' id='img2'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/noom/noom_search_first.jpg'>
		<img src='../includes/portfolio_images/noom/noom_cart_first.jpg'>
	</a>
<figcaption></figcaption>
</figure>

The issue with this is that one of the entry cases now requires navigation through a meaningless screen to achieve the goal.

Another possibility was a conditional UI—similar to the current solution but with more thoughtful UI buttons. This makes the navigation smooth in both cases, but the user will still need to remember which case they're in to know the behaviour of the buttons.

### Going *Back*
A major issue we saw was users struggled to be able to go to the home screen, or accidentally went back when they didn't want to. Since a user can start the workflow anywhere and we need to keep the workflow consistent across cases, both the _cart_ and _search_ screens needed an intuitive way to return to the home screen.

Traditionally, this has been done with the back arrow, but we noticed this was too ambiguous. "Am I going back home, or to the previous screen?" users would think. After some research and experimentation, we found that the clearest way to convey this behaviour was to use a _cross_ (or ╳ ) icon.

<figure class='folio_image' id='img2'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/noom/noom_logging-vc.png'>
	</a>
<figcaption>Testing the individual screens and button styles was promising, and showed a lot of improvement from the original workflow.</figcaption>
</figure>

When prototyping screen transitions we noticed a problem. 
When the screens animated from one to the other, the behaviour of the close buttons was still ambiguous on the second screen. We found that there was a near 50/50 split between users who expected the button to close the entire flow vs. the current screen. As before, only closing the current screen (and effectively going back) doesn’t make much sense architecturally.

###*One X* to rule them all

These weren’t two separate screens I needed to design, rather two parts of one experience. By designing the interaction and animation thoughtfully, I could convey the feeling of a single context in these two views.

In the final prototype, there was a single close button for both views, and an easy way to flip between them. By keeping a static close button and making the header a uniform size, it was possible to achieve the feeling of a single context for meal logging.

<figure class='folio_image' id='img2'>
	<iframe src="https://player.vimeo.com/video/157767466" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<figcaption>The final prototype I sent to the development team</figcaption>
</figure>


##Testing & Validation

With the help of our User Research team, we tested many aspects of each of the six iteration using various methods, and ranked each one's performance in all the usability criteria. We compiled these into a decision matrix, and included a developer estimate for each design. 

<figure class='folio_image' id='img2'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/noom/noom_logging-matrix.png'>
	</a>
<figcaption>The decision matrix we used to rank and justify the design decisions</figcaption>
</figure>

---
### Another prototype

I made this Origami prototype as part of the process, and while it is a little over-designed, I still love the interactions in it. 

<figure class='folio_image' id='img2'>
	<iframe src="https://player.vimeo.com/video/157767592" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<figcaption>I may have gone a little overboard with the interaction design and animation on this iteration, and would need to tone it down if I wanted to get the design built. </figcaption>
</figure>