#Zynga Poker

##Role

At Zynga Toronto, I worked as a product manager on the web Poker app—the company's oldest running game. Though the game is old, there was still a loyal player base that was hungry for new features. I crunched data, researched competitive apps and created UX flows to design and maintain new and existing features in Zynga Poker.

<figure class='folio_image' id='hero'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/zynga/zynga-basket-cover.jpg'>
	</a>
<figcaption></figcaption>
</figure>

## Problem

Though newsfeed posts about games are a nuisance to most Facebook users I know, loyal players of social games love them. When a friend posts a feed-post it can prompt a fellow player to go play that game, and for many players feed-posts are the primary way they enter the game. Though Poker has some proven feed-post features, we wanted to create a fresh new type of feed-post that would engage new and existing players.

<figure class='folio_image' id='lucky-bonus'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/zynga/lucky-bonus.png'>
	</a>
<figcaption>One of Zynga Poker's existing feed-posts.</figcaption>
</figure>

##Goals
Our goals for this feature were simple—increase daily active users (DAU) entering the app via Facebook feed-posts. Based on the engagement of other feed posts in Poker and other Zynga games, we set the target metric of this feature as **14% user engagement**, resulting in a **3% increase of sourced-DAU**.

## Research

To determine what the best type of feed-post was, we turned to our competitors and internal rivals. For internal games, we were able to look at data to see how successful it was, and might be for our game. While most posts involved sharing high scores with friends, we found a very successful feature in FarmVille that could be adapted for Poker. The feature allowed users to share and collect four-leaf clovers which gave big rewards of in-game currency once a certain number were collected.

<figure class='folio_image' id='farmville-clovers'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/zynga/clovers.png'>
	</a>
<figcaption>FarmVille's Clover Basket viral feature.</figcaption>
</figure>


<!-- we looked around and based our feed-post feature on a successful one in farmville -->

## Feature

Since collecting clovers doesn't totally make sense for Poker, we had to make changes to the feature as it exists in FarmVille. We discussed different items to collect and how the reward system might work with them. One idea was to collect keys which would open a vault filled with chips and gold. Eventually the idea of collecting cards for a poker hand, a Royal Flush, was pitched. This idea worked great with our business goals since would allow users to stay engaged with the feature for a long time without repeating the same story. Here is a feature summary:

1. There’s a Royal Flush you want to collect
2. You can collect the cards required one at a time
3. To get a card, you need to share a Feed post asking for help &
get X friends to click on it
4. Each friend that clicks your feed post also gets progress towards
their card
5. Once you have enough clicks, you can claim the card
6. Once you collect all the cards, you unlock an exclusive prize


<!-- we had to tweak the feature a bit to make it fit with poker. Part of that was the story behind it. We thought of collecting keys to a vault, but settled on finding cards to create a royal flush -->

## Replay Value

What made the Royal Flush fiction attractive to us was that it made the feature very replayable. The feature's main _Share <-> Receive_ loop repeats until they have collected their royal flush. A player has to collect 5 cards x 4 suits to be done, with better prizes every card and every suit. Even then, they can start all over again.

<figure class='folio_image' id='replayability'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/zynga/replay-flow.png'>
	</a>
<figcaption>A flow chart of a user's journey through the feature loop</figcaption>
</figure>

## User Flow

There are two user types for this feature: the sender, and the clicker. Each party has a different flow. I had to think this through and streamline the flow for both parties. I made a few Balsamiq prototypes and had stakeholders play with them to help me streamline this process.

The "Hand Hub" would be the home base for this feature, accessible both from the main lobby on the Poker home screen, or after clicking a feed-post. From there a user can collect cards and prizes, as well as post a request for more cards.

<figure class='folio_image' id='full-user-flow'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/zynga/full-user-flow.png'>
	</a>
<figcaption>Full user flow for the Card Collection feature</figcaption>
</figure>

## Calibration

In addition to the feature's overall user flow, I was in charge of calibrating the feature in order to get the best value for the user, and make sure there weren't too many chips entering the economy at once. I looked at statistics for our existing feed-post features and the FarmVille clover basket feature to collect data and create economy projections. 

By setting a cool-down timer on post sends, and using past engagement data I was able to predict how many clicks users of different engagement levels would get in a day and therefore how long it might take for a player to collect each card. I then made simulations using different difficulties and prizes to project the peak impact to the game's economy (trying to keep the impact similar to an existing feature, Lucky Bonus). After some testing, I settled on 4 different calibrations for easy/hard difficulty and low/high reward.

|   |Easy|Hard|
|---|---|---|
|**Low Reward**|Few “clicks” needed Low Chip reward (Similar daily payout to Lucky Bonus)|Many “clicks” needed Low Chip reward (Lower payout than Lucky Bonus)|
|**High Reward**|Few “clicks” needed High Chip reward (Better daily payout than Lucky Bonus)|Many “clicks” needed High Chip reward (Similar daily payout to Lucky Bonus)|

After about a month of multivariant testing, we settled on the Easy+Low Reward variant since it showed the highest user engagement with the lowest impact to the game's economy.

##Results

At the end of our testing, we saw that we had nearly achieved our goal, and had saw **10% user engagement**, and a **2% increase in feed-post sourced DAU** in the first month the feature was live.

<div class="folio-nav prev chameleon">
	<a href="?p=chameleon">Chameleon</a>
</div>
<div class="folio-nav next home">
	<a href="../">Home</a>
</div>