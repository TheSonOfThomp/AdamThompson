#Improving Food Logging at Noom

Meal logging is a must-have feature in Noom Coach. Therefore it must to be quick and intuitive to log the food you’ve eaten and get insightful feedback. With the help of the UX research team and the input of other designers and engineers, I was able to fix some big problems with the food logging experience, and re-design it to be as straight-forward and intuitive as possible.

<figure class='folio_image' id='img1'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/noom/noom_logging.jpg'>
	</a>
</figure>

## Why did we do this?

Through user testing we got to see what users did (and didn’t do) in the app. The biggest issue we saw was that users were having difficulty navigating between the search view and the cart view (to view foods already logged). The buttons to view the cart, and to add more items were not nearly salient enough to be the primary action; the back buttons on either screen were counter intuitive, and didn’t work the way anyone expected them to.

<figure class='folio_image video' id='img2'>
	<iframe src="https://player.vimeo.com/video/157767468" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
	<figcaption>I want to log a meal. The arrow button in the left corner — where does that take me? That little check mark in the right corner — can I click it? And if I do, where does it take me, and how can I get back?</figcaption>
</figure>

The exact problems were not identical between the Android and iOS apps, but there were significant problems with each. On iOS, users were flat-out confused about the behaviour of some buttons, whereas on Android, users were missing out on critical information. When an Android user pressed the back arrow their meal would be saved, and they would arrive back on the home screen. At face value this makes sense, however it doesn’t provide the user experience promised by Noom: to learn about your meals in order to make healthier choices in the future. We saw this as another symptom of a broken food-logging workflow.

Whether this odd navigation was designed or (more likely) an oversight, we recognized it was a problem that needed fixing, so I set out to re-think the meal-logging experience with better, more intuitive navigation in mind.

### Design Constraints

To keep the scope of this project down, the team decided that I would focus only on what happens after a user selects a meal, and before they receive feedback (though we discussed ways to improve meal selection in the future). Knowing that navigation was the key area of focus, I wanted to establish all the possible variants of navigation that could occur. This turned out to be a bit more complex than I had anticipated.
Not only can users log new meals, but they can also edit their past meals. Editing a meal to add a forgotten item or to update the portion size shouldn’t require any extra steps or re-learning than a new meal. The food logging workflow should not only be excellent when logging a new meal, but should also be just as intuitive when making edits.

## How did we do this?

Once we had determined what problems that needed to be solved, I got to brainstorming solutions. I made flowcharts and wireframes to see what solutions might work, and to get a better handle on the problem. When I had an idea the team and I liked, I made higher-fidelity mockups in Sketch. For the more promising versions I made interactive prototypes using Marvel, Framer and Origami. We then used the mockups and prototypes to test; both on co-workers and users on UserTesting and UsabilityHub. With these test results, I refined the mockups, or went back to sketching and brainstorming. After dozens of iterations we arrived at the final version of the Noom food logging experience.

### Brainstorming

To start, I made some rough sketches and of how the screens would need to flow together. These flow charts helped me get a better handle of the problem, and see how I might make both navigation scenarios intuitive.

<figure class='folio_image' id='img2'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/noom/noom_logging-rough-flowchart.jpg'>
	</a>
<figcaption></figcaption>
</figure>

The flowchart here shows the two most basic solutions, — one starting a user in the search view first, the other in the cart (meal summary) view first. For example, in a “Search First” model, users would be able to exit meal logging from the search view, or go forward to the cart. From the cart view, the user can go back to search, or complete the flow.

In a perfect world, we’d be done here. However, since we needed the workflow to be quick and intuitive for users in all scenarios, neither of these two iterations would cut it. Each version neglects a portion of the users we need to design for:

- Users who are logging a new meal don’t want to press another button to start logging.

- Users who’ve already logged the meal don’t want to press another button to remember what they forgot.

A third solution was to build a hybrid of the first two; a conditional UI which starts the user in a different screen depending on whether the user has logged the meal already or not.

<figure class='folio_image' id='img2'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/noom/noom_logging-va.jpg'>
	</a>
<figcaption>The top sketch illustrates navigation when editing a meal, the bottom when starting a new meal. Notice the different icons on the search screens in each scenario.</figcaption>
</figure>

### A Common Theme

Since a user can log a new meal, or edit one, and start the workflow with either the search or cart view, both of these screens needed a way to get out (and go back to the home screen). To keep each view consistent across scenarios meant there needed to be a way to get out from every screen. One of the only ways to convey this behaviour in the UI was to use a cross icon; a back arrow is too ambiguous. “Am I going back home, or to the first screen?”. This was the fourth major iteration, and it seemed promising. I iterated on this version, changing the locations and styles of buttons until we had a few styles that we liked, and worked well. Testing the individual screens and button styles was promising, and showed a lot of improvement from the original workflow.

<figure class='folio_image' id='img2'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/noom/noom_logging-vc.png'>
	</a>
<figcaption></figcaption>
</figure>

There was a small problem with this One-X model though. If the screens were independent, and moved from one to the other, the behaviour of the close buttons could get confusing. If one view animated to another, I worried that the meaning of Close might still be ambiguous for the second screen.“Will it close the whole flow, or just the screen I’m on?”. As mentioned before, only closing the current screen (and effectively going back) doesn’t make much sense architecturally, since the behaviour would change depending on the context. This worry was proven during user interviews, where we found that there was a near 50/50 split between users who expected to close the entire flow vs. the current screen. These screens needed to be the same, but different.

### One Screen

That’s when it hit me: these weren’t two screens I was designing, rather two parts of the same experience. For the next few days I iterated like crazy; I knew I was on the right track with the One-Screen concept.

There would be only one close button for both views, and an easy way to flip between each mode. The blue header would be a consistent element across the views; the close button would always be there. This design also had the benefit of not having to worry about how the Add More button looked. The search view would minimize to show the cart, and then open back up when a user taps the search bar. Since the search bar and other input methods were always visible, adding more to a meal would be as simple as tapping an input method.

I sketched and mocked up how these interactions would work and brought them to our daily design sync. The team was on board. I made a prototype in Origami to show how the flow might feel.

<figure class='folio_image' id='img2'>
	<iframe src="https://player.vimeo.com/video/157767592" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<figcaption></figcaption>
</figure>

Then we had a team meeting which included a product manager and developer. We would have few resources available to implement this fix (if any), so the development effort would have to be justified by the usability benefits gained from the re-design.

### Witherto’s and Whyfor’s

Wanting to show that One-Screen did in fact rule them all, I created a decision matrix for all the major iterations and the usability criteria for the redesign. Based on data from user tests for both the old app and new prototypes, I was able to fill a good portion of the chart. From these values, I evaluated the relative score of the other designs. As it turned out, One-Screen did score the highest in terms of usability, though only by a small margin.

Once I included the development estimate, the One-X model pulled ahead. After discussing this chart to the rest of the team, we agreed that the benefits of One-Screen didn’t justify the increased development time, and we would move forward with the One-X model.

<figure class='folio_image' id='img2'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/noom/noom_logging-matrix.png'>
	</a>
<figcaption>The Decision Matrix I used to rank and justify the designs</figcaption>
</figure>

## Finishing Touches

There were still some small UI fixes that needed to be done before I could officially spec and hand over the design, so I kept the Sketch file open and kept working. After discussing how the navigation bar was implemented, I found a way to make the One-X model even better. As it turned out, it was possible to transition between two screens while keeping one navigation bar (or primary toolbar on Android) in place. The One-Screen version was technical overkill (I admit, I was a little overzealous), and the problems it solved could just as easily be solved by modifying the One-X version. By keeping a static close button and making the header a uniform size, it was possible to achieve the feeling of a single context for meal logging. We did some validation of this and I added it to the matrix. The rest of the team was on board with these changes, and we were ready to spec. I sent the designs to Zeplin, and the improved meal logging experience was ready to be built!

<figure class='folio_image' id='img2'>
	<iframe src="https://player.vimeo.com/video/157767466" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<figcaption>The final prototype I sent to the development team</figcaption>
</figure>

