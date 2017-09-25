<div class="folio-nav prev chameleon">
	<a href="?p=chameleon">Chameleon</a>
</div>
<div class="folio-nav next knowroaming">
	<a href="?p=knowroaming">KnowRoaming</a>
</div>

# Noom

## I simplified a confusing interface without compromising functionality.

### Users were having trouble navigating the core meal-logging flow because the buttons weren’t obvious and changed behaviour depending on use case. We needed to fix this.

#### We consolidated the user flow and UI, making it consistent in all use cases. Through meticulous user-testing we designed an interface that eliminated hesitation and uncertainty.

<figure class='folio_image' id='hero'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/noom/noom_logging.jpg'>
	</a>
<figcaption></figcaption>
</figure>

## Problem

Noom—based in midtown Manhattan—combats obesity, diabetes, and hypertension through behaviour change. Meal logging is a must-have feature in the app that gives constructive feedback on users' eating habits. It must be quick and intuitive to log the food you’ve eaten and get insightful feedback.

<figure class='folio_image' id='img2'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/noom/noom_logging-existing.png'>
	</a>
<figcaption>People didn't realize the <em>check</em> was a button, and were never quite sure what the back button would do.</figcaption>
</figure>

We observed users' and saw that they were often unsure of what to do when navigating between different views while logging food. People weren't noticing the _back_ or _check_ buttons, and the buttons didn't always work the way people expected them to. On top of that, the UI and flow would subtly change depending on the entry case.

<figure class='folio_image' id='img2'>
		<img src='../includes/portfolio_images/noom/noom_existing.jpg'>
<figcaption>My attempt to make sense of the existing workflow.</figcaption>
</figure>

##Requirements

We knew we would have to simplify the workflow and make the interface much more clear. From several specific criteria, we ended up with two overarching user requirements:

**Users will act with confidence:** All interactive elements will have a single clear purpose.

**Users will not get lost:** All cases will have an understandable  flow and architecture.

## Iteration

A main cause of confusion was that the interface and flow were different depending on whether you were logging a new meal or editing an old one. The most basic solution to solving the confusion was to eliminate different cases, and settle on a single, universal flow for all cases.

<figure class='folio_image images-2' id='img2'>
		<img class="or" src='../includes/portfolio_images/noom/noom_search_first.jpg'>
		<img src='../includes/portfolio_images/noom/noom_cart_first.jpg'>
<figcaption>Two potential user flows</figcaption>
</figure>

The issue is that one of the entry cases now requires navigation through a meaningless screen to achieve the goal.

### Going *Back*

Another problem was that users struggled to go back to the home screen, or worse, accidentally went back when they didn't want to. Since a user can start the workflow anywhere, both the _cart_ and _search_ screens needed an intuitive way to return to the home screen.

Traditionally, this has been done with the back arrow, but we noticed this was too ambiguous. "Am I going back home, or to the previous screen?" users would think. And this answer depended on whether they were logging a new meal or editing. After some research and experimentation, we found that the clearest way to convey this behaviour was to use a _cross_ (or ╳ ) icon.

<figure class='folio_image' id='img2'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/noom/noom_logging-vc.png'>
	</a>
<figcaption>Testing the individual screens and button styles was promising, and showed a lot of improvement from the original workflow.</figcaption>
</figure>

When prototyping screen transitions we noticed a problem. 
When the screens animated from one to the other, the behaviour of the _close_ button was still ambiguous on the second screen. We found that there was a near 50/50 split between users who expected the button to close the entire flow vs. the current screen. This was because a second _close_ button animated over top of the first

###*One X* to rule them all

These weren’t two _separate_ screens, but two parts of one experience. By designing the interaction and animation thoughtfully, I could convey the feeling of a single context in these two views.

I made this Origami prototype next, and while it is a little over-designed, I think the interactions are great. 

<figure class='folio_image' id='img2'>
	<iframe src="https://player.vimeo.com/video/157767592/?title=0&amp;byline=0&amp;loop=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<figcaption>I would need to tone down the animation if I wanted to get developers to build this.</figcaption>
</figure>

Finally, we had a single close button for both views, and an intuitive way to flip between them. By keeping a static close button and making the header a uniform size, it was possible to achieve the feeling of a single context for meal logging.

<figure class='folio_image' id='img2'>
	<iframe src="https://player.vimeo.com/video/157767466/?title=0&amp;byline=0&amp;loop=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<figcaption>The final prototype I sent to the development team</figcaption>
</figure>


##Testing & Validation

With the help of our User Research team we tested our designs and rated their performance against the usability criteria. We compiled these into a decision matrix, and included a developer estimate for each design. With this chart we were able to convince management that this design solved the problems, and got developer time to build the improvements.

We also tested different _cart_, and _add more_ button designs. The buttons in the final prototype were the winning variants. 

<figure class='folio_image' id='img2'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/noom/noom_logging-matrix.png'>
	</a>
<figcaption>The decision matrix we used to rank and justify the design decisions</figcaption>
</figure>