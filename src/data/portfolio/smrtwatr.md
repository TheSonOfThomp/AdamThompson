---
title: SMRT WATR
date: 2015-08-31
id: smrtwatr
tagline: The interactive water fountain
cover: 'smrtwatr-cover.png'
color: '#19838E'
section: portfolio
---

# SMRT WATR

<div class="tldr" markdown=1>

## The water fountain that's as interesting as your smartphone.

#### We noticed people were involved in their smartphones more than their surroundings or even other people. We wanted to change that.

#### We created a multiplayer quiz game and a fountain that reacts to users' answers, where the winner was given control of a specially designed fountain for a time. It was a huge hit!

<div class="cover-image vertical">

![Cover photo](../../images/portfolio/cover/smrtwatr-cover.png)
</div>

</div>

SMRT WATR (smart water) is an interactive fountain and mobile game IoT experience I developed along with [Josh Bradshaw](http://joshbradshaw.ca), [Isaac Hunter](https://isaachunter.ca), [Shubh Jagani](http://www.shubhjagani.com), [Matt Jones](https://www.linkedin.com/in/matt--jones/), and [Emma Cooper](https://www.linkedin.com/in/emmacooper2562/).

##Challenge

We were challenged to design something to do with *water* using the Internet of Things. We were inspired by different public fountains and noticed that many were rarely appreciated as more than just decoration, or worse, an obstruction. People were more involved in their smartphones than in interacting with fountains or with other people. We wanted to change that. 

I was the lead UX designer and front-end developer for this project, and focused on the user's interaction with their mobile device, and the effect on the fountain. As an IoT product, actions performed on the mobile device would affect the fountain in the real world. 

## Interaction

We entertained a number of different ways users might interact with the fountain, including *make-it-rain*, inspired by throwing real coins into a fountain. In this proposal, users could donate to "throw" virtual currency into the fountain and see real time reactions from the fountain. A second concept was a crowed-sourced performance, where users could select an action which would be placed in a performance queue.

<div class="vertical">

![Mockup of the Make-A-Wish concept](../../images/portfolio/smrtwatr/make-a-wish.jpg)
</div>

## The Concept

After considering expected engagement and social potential we decided to build a quiz game that allowed users to interact with both other players as well as the fountain. The fountain would react to each question, responding appropriately as each user answered a question. 

If a user answered correctly, the fountain would light up in their player colour and increase the jet in their corner. If they answered incorrectly, the jet in their corner would drop until the next question. 

## User Flow

I worked on streamlining the user flow for all users, considering what would happen if there were not enough users or too many users. We were able to flesh out a task flow for the entire user engagement loop.

![The beginning of the user journey flowchart](../../images/portfolio/smrtwatr/SMRTWATR-flow.jpg)

## User Interface

I mocked up screens for the quiz game, and tested them on my group mates and other classmates. Using their feedback, I improved and refined my designs.

![Screenshots of the lobby and in-game UI](../../images/portfolio/smrtwatr/smrtwatr-lobby&ingame.png)

![Screenshots of the endgame UI](../../images/portfolio/smrtwatr/smrtwatr-endgame.png)

## Implementation

We set up a [Tornado](http://www.tornadoweb.org/en/stable/) server on a Raspberry Pi to serve the web UI, and to communicate with the fountain's controller. Tornado supports WebSocket and `html` templates to dynamically change the UI for separate clients on the fly. I wrote all of the app's front-end styling and logic, as well as the gameplay related server-side logic. 

Check out the front-end, back-end, and controller code on [GitHub](https://github.com/Adam93MT/SMRTWATR).

I also helped design and build the fountain basin itself, and worked on a mechanical solution to attach the fountain jets to servos.

## Demo

We showed off our fountain and game at the end of the term. It was a huge hit, and we won the People's Choice award.

<figure class='folio_image' id='smrtwatr-demo'>
	<iframe src="https://www.youtube.com/embed/x0ej92Pg6EA" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<figcaption></figcaption>
</figure>