# SMRT WATR

<div class="folio-nav prev home">
	<a href="../">Home</a>
</div>
<div class="folio-nav next noom">
	<a href="?p=noom">Noom</a>
</div>


## We made a water fountain that's as interesting as your smartphone.

### We noticed people were more involved in their smartphones than fountains or even other people. We wanted to change that.

### We created a multiplayer quiz game that reacted to users' answers, and where the winner was given control of a specially designed fountain for a time. It was a huge hit!

<figure class='folio_image' id='hero'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/smrtwatr/smrtwatr.jpg'>
	</a>
<figcaption></figcaption>
</figure>

SMRT WATR (smart water) is an interactive fountain and mobile game IoT experience I developed along with [Josh Bradshaw](http://joshbradshaw.ca), [Isaac Hunter](https://isaachunter.ca), [Shubh Jagani](http://www.shubhjagani.com), [Matt Jones](https://www.linkedin.com/in/matt--jones/), and [Emma Cooper](https://www.linkedin.com/in/emmacooper2562/).

##Challenge

We were challenged to design something to do with *water* using the Internet of Things. From many different topics, we were inspired by different public fountains and noticed that many of these were rarely appreciated as more than just decoration, or worse, an obstruction. People were more involved in their smartphones than in interacting with the fountain or with other people. We wanted to change that. 

## Interaction

I was the lead UX designer and front-end developer for this project, and focused on the user's interaction with their mobile device, and how this would affect the fountain. Our mandate, as an IoT product, was that actions performed on the mobile device would affect the fountain in the real world. 

We entertained a number of different ways users might interact with the fountain, including *make-it-rain*, inspired by throwing real coins into a fountain. In this proposal, users could donate to "throw" virtual currency into the fountain and see real time reactions from the fountain. A second concept was a crowed-sourced performance, where users could select an action which would be placed in a performance queue.

<figure class='folio_image' id='other-options'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/smrtwatr/make-a-wish.jpg'>
	</a>
<figcaption>Mockup of the Make-A-Wish concept</figcaption>
</figure>

## The Concept

After considering expected engagement and social potential we decided to build a quiz game that allowed users to interact with both other players as well as the fountain. The fountain would react to each question, responding appropriately as each user answered a question. 

If a user answered correctly, the fountain would light up in their player colour and increase the jet in their corner. If they answered incorrectly, the jet in their corner would drop until the next question. 

## User Flow

I worked on streamlining the user flow for all users, considering what would happen if there were not enough users or too many users. We were able to flesh out a task flow for the entire user engagement loop.

<img src='../includes/portfolio_images/smrtwatr/SMRTWATR flow.jpg' style="max-width: 100%; max-height: none;">
</figure>


## User Interface

I mocked up screens for the gem, and tested them on my group mates and other classmates. Using their feedback, I improved and refined my designs.

<figure class='folio_image' id='smrtwatr-lobby&ingame'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/smrtwatr/smrtwatr-lobby&ingame.png'>
	</a>
<figcaption>Screenshots of the Lobby & In-game UI</figcaption>
</figure>

<figure class='folio_image' id='smrtwatr-endgame'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/smrtwatr/smrtwatr-endgame.png'>
	</a>
<figcaption>Screenshots of the Endgame UI</figcaption>
</figure> 

## Implementation

We set up a [Tornado Web](http://www.tornadoweb.org/en/stable/) server on a Raspberry Pi to serve the web UI, and to communicate with the fountain's controller. Tornado supports `html` templates, and can dynamically change the UI on the fly. I wrote all of the app's `html` and `sass`, as well as some server-side logic using `node.js`. 

Check out the front-end, back-end, and controller code is available on [GitHub](https://github.com/Adam93MT/SMRTWATR).

I also helped design and build the fountain basin itself, and worked on a mechanical solution to attach the fountain jets to servos.

## Demo

We showed off our fountain and game at the end of the term. It was a huge hit, and we won the People's Choice award.

<figure class='folio_image' id='smrtwatr-demo'>
	<a target='_blank'>
		<iframe src="https://www.youtube.com/embed/x0ej92Pg6EA" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
	</a>
<figcaption></figcaption>
</figure>



