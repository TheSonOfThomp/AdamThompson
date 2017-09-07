#Noom

<div class="tldr">
	<div class="one-third">
		<div class="tldr-title">Problem</div>
		<div class="tldr-content">Users are having difficulty navigating a core section of the app.</div>
	</div>
	<div class="one-third">
		<div class="tldr-title">Solution</div>
		<div class="tldr-content">Restructure the task architecture, and increase clarity of UI elements.</div>
	</div>
	<div class="one-third">
			<div class="inline">
				<div class="tldr-title">Skills: </div>
				<div class="tldr-content">UX, Information Architecture, UI, Interaction</div>
			</div>
			<div class="inline">
				<div class="tldr-title">Tools: </div>
				<div class="tldr-content">Sketch, Marvel, Framer, Origami</div>
			</div>
	</div>
</div>

##Overview
###Changing behaviours, changing lives.
I worked for four months as a co-op student in midtown Manhattan at Noom—a company combating obesity, diabetes, and hypertension through behaviour change. My role as a product designer was to identify points of friction for our users, design and test solutions to these issues, and coordinate with developers, PMs, and UX researchers.

Meal logging is a must-have feature in Noom Coach—an app that tracks, and gives feedback on users' eating habits to help fight chronic illnesses. It must to be quick and intuitive to log the food you’ve eaten and get insightful feedback.

In my time at Noom, I redesigned the information architecture, user flow, UI and interaction of the meal-logging task.

<figure class='folio_image' id='hero'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/noom/noom_logging.jpg'>
	</a>
<figcaption></figcaption>
</figure>

##Problem
###Getting where you want to go

By observing users' behaviour we were able to see trends in what users would do. One of the biggest issues we saw was that users were having difficulty navigating between different views in the food logging flow. Users were unsure of what to do, and there was a lot of guessing to navigate between views. People weren't noticing certain buttons, or they didn't work the way they expected them to, and the UI changed depending on the entry case.

<figure class='folio_image video' id='img2'>
	<iframe src="https://player.vimeo.com/video/157767468" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
	<figcaption>I want to log a meal. That little check mark in the right corner — can I click it? And if I do, where does it take me, and how can I get back? The arrow button in the left corner — where does is take me? </figcaption>
</figure>

I made flowcharts of the existing workflow to better understand why the app wasn't matching our users' conceptual model. After drawing this, I could see why users would get confused. The *back* button on the _search_ view behaved the same as the *check* button (...sometimes. There were some cases where this didn't happen). Additionally, different entry cases created different flows, further contributing to the confusion. It was clear that this chaotic workflow would need to be ironed out.

<figure class='folio_image' id='img2'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/noom/noom_existing.jpg'>
	</a>
<figcaption>The chaotic flowchart that is the existing solution</figcaption>
</figure>

##Requirements
Once we had determined what problems that needed to be solved, we needed to create requirements. There were several specific criteria we created, which all boiled down to:

**Users will act with confidence:** All interactive elements will have a single clear purpose.

**Users will not get lost:** All cases will have an understandable  flow and architecture.

These requirements guided the design process, and allowed me to quickly evaluate potential designs.

##Iteration
 <!-- I tried making new, less chaotic flowcharts and wireframes to see what solutions might work and get a better handle on the nuances of the problem.  -->

Knowing that the app's information architecture was at the core of the problem, I wanted to establish all the possible entry points and navigation cases that could occur. This turned out to be a bit more complex than I had anticipated.

Not only can users log new meals, but they can also edit their past meals. Editing a meal to add an item or to update the portion size shouldn’t require any extra steps or new patterns than a new meal. The food logging workflow should not only be excellent when logging a new meal, but should also be just as intuitive when making edits.

###The Basics

The most basic solutions to the problem of navigation confusion involve eliminating different cases and settling on a single, universal flow for all entry cases—either starting a user in the search view first, or in the meal summary view first. The issue though is that one of the entry cases now requires navigation through a meaningless screen to achieve the goal.

<figure class='folio_image images-2' id='img2'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/noom/noom_search_first.jpg'>
		<img src='../includes/portfolio_images/noom/noom_cart_first.jpg'>
	</a>
<figcaption></figcaption>
</figure>

A third solution would be a hybrid of these first two—a conditional UI where the user enters into a different screen depending on whether the user has logged the meal already or not. This is similar to the current solution, but with more thoughtful UI buttons. This makes the navigation smooth in both cases, however the user will still need to remember which case they're in to know the behaviour of the buttons.

### Going *Back*

Since a user can start the workflow with any view, and since we need to keep each view consistent across entry cases, both of these screens needed an intuitive way to return to the home screen.
Traditionally, this has been done with the back arrow, but we noticed this was too ambiguous. "Am I going back home, or to the previous screen?" users would think. After some research and experimentation with icons, we found that one of the clearest ways to convey this behaviour in the UI was to use a _cross_ (or ╳ ) icon.

<figure class='folio_image' id='img2'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/noom/noom_logging-vc.png'>
	</a>
<figcaption>Testing the individual screens and button styles was promising, and showed a lot of improvement from the original workflow.</figcaption>
</figure>

Using this design, dubbed `one-x`, I able to design a conditional interface with identical behaviour across all cases. Whether the user was logging a new meal or editing an old one, each view would behave the same. 


### Transitions
There was a small problem with this model that we noticed when prototyping screen transitions. If the screens were independent, and animated from one to the other (as they would by default on both iOS and Android), the behaviour of the close buttons might get confusing. If one view animated to another, the meaning of `Close` might still be ambiguous for the second screen.“Will it close the whole flow, or just the screen I’m on?”. As before, only closing the current screen (and effectively going back) doesn’t make much sense architecturally, since the behaviour would change depending on the context. 

This worry was substantiated during user interviews, where we found that there was a near 50/50 split between users who expected to close the entire flow vs. the current screen. These screens needed to be the same, but different.

That’s when it hit me: these weren’t two separate screens I was designing, rather two parts of one experience. By designing the interaction thoughtfully, I needed to convey the feeling of a single context in these two views.

##Prototyping
###One Screen to rule them all

The next iteration behaved the same as the previous, except for the transition animation. I made a prototype in Origami to show how the flow might feel and how the two parts of the experience would interact.

There would be only one close button for both modes, and an easy way to flip between them. The search view would minimize to show the cart, and then open back up when a user taps the search bar. Since the search bar and other input methods were always visible, adding more to a meal would be as simple as tapping an input method.

<figure class='folio_image' id='img2'>
	<iframe src="https://player.vimeo.com/video/157767592" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<figcaption>I may have gone a little overboard with the interaction design and animation on this iteration, and would need to tone it down if I wanted to get the design built. </figcaption>
</figure>

###Dialing it back

I took a look at the essential elements of the previous iteration, which were 1) a single header and close button, and 2) a simple transition between views. By keeping a static close button and making the header a uniform size, it was possible to achieve the feeling of a single context for meal logging. I made some simplifications to the prototype and arrived at a (hopefully) final design.

<figure class='folio_image' id='img2'>
	<iframe src="https://player.vimeo.com/video/157767466" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<figcaption>An updated One-X design—The final prototype I sent to the development team</figcaption>
</figure>

##Testing & Validation
### Witherto’s and Whyfor’s

With the help of our User Research team, we tested many aspects of each of the six designs using various methods, and ranked each design's performance in each of the usability criteria. We compiled these into a decision matrix, and included the developer estimate for each design. 

<figure class='folio_image' id='img2'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/noom/noom_logging-matrix.png'>
	</a>
<figcaption>The Decision Matrix we used to rank and justify the design decisions</figcaption>
</figure>

After taking the final prototype and usability decision matrix to a developer meeting, the rest of the team was on board. I sent the designs to Zeplin, and the improved meal logging experience was ready to be built!

##Results
###Design to stand the test of time
Two years later, Noom Coach still uses this workflow, and has adopted some visual styles and design patterns for use elsewhere in the app. From casual conversation with current employees, this design has helped increase both user retention metrics and boosted average number of meals successfully logged.

<div class="folio-nav prev home">
	<a href="../">Home</a>
</div>
<div class="folio-nav next knowroaming">
	<a href="?p=knowroaming">KnowRoaming</a>
</div>