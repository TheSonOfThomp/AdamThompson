---
title: Zynga Poker
tagline: Promoting social virality
cover: 'zynga-cover.png'
color: '#DD3B30'
section: portfolio
---

#Zynga Poker

<div class="tldr" markdown=1>
<!-- WHAT -->
## Collect a Royal Flush with the help of your friends.

<!-- WHY -->
#### Even when players love a game, they might need some encouragement play. When friends share about the game, players are encouraged to play as well in the spirit of competition.

<!-- HOW -->
#### We created a feature that allows players to earn "cards" by sharing to Facebook, and entering the game from friends' posts. Once they've collected a Royal Flush, they get a massive amount of poker chips.	

</div>

<figure class='folio_image' id='hero'>
	<img id="hero-iso" src='../includes/portfolio_images/zynga/zynga-basket-isolated.png'>
	<img id="hero-iso-crop" src='../includes/portfolio_images/zynga/zynga-basket-crop.png'>
<figcaption></figcaption>
</figure>

<!-- ## Role -->

I was a product manager for Zynga Poker, and worked on streamlining the user flow and optimizing the difficulty, rewards and other parameters of the feature.

## Backround

While most Facebook users I know find newsfeed shares about games a nuisance, many players of social games love them. 

When a friend shares a post it can prompt a fellow player to play that game in the spirit of competition. For many players these posts are the primary way they enter the game. 

We wanted to create a fresh new type of sharable moment that would engage both new and existing players.

<figure class='folio_image' id='lucky-bonus'>
	<img src='../includes/portfolio_images/zynga/lucky-bonus.png'>
<figcaption>One of Zynga Poker's existing feed-posts.</figcaption>
</figure>

##Goals

The primary goal of this feature was to daily active users (DAU) entering the app via Facebook shares. Based on the engagement of other feed posts, in Poker and other Zynga games, we set our engagement target to **12% active-user engagement**, which will result in a **3% increase of Facebook share sourced-DAU**[^sourcedDAU].

## Research

To determine how best to create engaging shares, we turned to our competitors and internal rivals. For internal games, we were able to look at historical data to evaluate their success. 

While most sharable moments involve sharing high scores with friends, we found a very successful feature in FarmVille could be adapted for Poker. The feature allowed users to share and collect four-leaf clovers which gave big rewards of in-game currency once a certain number were collected.

<figure class='folio_image' id='farmville-clovers'>
	<img src='../includes/portfolio_images/zynga/clovers.png'>
<figcaption>FarmVille's Clover Basket viral feature.</figcaption>
</figure>


<!-- we looked around and based our feed-post feature on a successful one in farmville -->

## Feature

After some brainstorming we settled on the idea of collecting playing cards to earn in-game currency—poker chips and gold. This idea worked great with our business goals since would allow users to stay engaged with the feature for a long time without repeating the exact same story.

<!-- 1. There’s a Royal Flush you want to collect
1. You can collect the cards required one at a time
2. To get a card, you need to share a Feed post asking for help &
get X friends to click on it
4. Each friend that clicks your feed post also gets progress towards
their card
5. Once you have enough clicks, you can claim the card
6. Once you collect all the cards, you unlock an exclusive prize -->


### Replay Value

What made the Royal Flush story attractive to us was that it made the feature very replayable. The feature's main _Share<i class="fa fa-long-arrow-right" aria-hidden="true"></i>Receive_ loop repeats until they have collected their royal flush. A player has to collect 5 cards per hand, over 4 suits to complete the feature, with better prizes every card and every suit. Even then, they can start all over again.

<figure class='folio_image' id='replayability'>
	<img src='../includes/portfolio_images/zynga/replay-flow.png'>
<figcaption>A flow chart of a user's journey through the feature loop</figcaption>
</figure>

## User Flow

There are two user types for this feature: the _sender_, and the _clicker_, each having a different flow. I had to think this through, and streamline the flow for both parties. I made a few Balsamiq prototypes and tested with those to help streamline the process.

The _Hand Hub_ would be the home base for this feature, accessible both from the main lobby on the Poker home screen, or after clicking a shared post. From there a user can collect cards and prizes, as well as share requests for more cards.

<figure class='folio_image' id='full-user-flow'>
	<img src='../includes/portfolio_images/zynga/full-user-flow.png'>
<figcaption>Full user flow for the Card Collection feature</figcaption>
</figure>

## Calibration

In addition to the feature's overall user flow, I was in charge of calibrating the feature in order to get the best value for the user, and make sure there weren't too many chips entering the game economy at once. I looked at existing data for existing features in Poker, and for FarmVille's basket feature to collect data and create economy projections. 

By setting a _cool down_ timer to limit time between shares, using historical engagement data I was able to predict how long it might take for a player to collect each card. 

I made simulations using different difficulties and prizes to project the peak impact to the game's economy. After some trial and error, I settled on a 2x2 matrix of difficulties and rewards (while trying to keep the in-game economic impact similar to a similar feature, Lucky Bonus). 

<!-- 
|   |Easy|Hard|
|---|---|---|
|**Low Reward**|Few “clicks” needed Low Chip reward (Similar daily payout to Lucky Bonus)|Many “clicks” needed Low Chip reward (Lower payout than Lucky Bonus)|
|**High Reward**|Few “clicks” needed High Chip reward (Better daily payout than Lucky Bonus)|Many “clicks” needed High Chip reward (Similar daily payout to Lucky Bonus)| 
-->

<figure class='folio_image' id='full-user-flow'>
	<img src='../includes/portfolio_images/zynga/variants.png'>
<figcaption>The 2x2 matrix of difficulty variants</figcaption>
</figure>

After about a month of multivariant testing, we settled on the _Easy+Low Reward_ variant since it showed the highest user engagement with the lowest impact to the game's economy.

##Results

At the end of our testing, we saw that we had nearly achieved our goal, and had saw **10% user engagement**, and nearly **2% increase in Facebook share sourced DAU**, in the first month the feature was live.

[^sourcedDAU]: 
	Facebook share sourced-DAU: the fraction of daily active users that enter the app by clicking on a friend's Facebook post 