#KnowRoaming


<div class="tldr">
	<div class="one-third">
		<div class="tldr-title">Problem</div>
		<div class="tldr-content">The existing app has grown too fast, and has no coherent structure or visual design.</div>
	</div>
	<div class="one-third">
		<div class="tldr-title">Solution</div>
		<div class="tldr-content">Restructure the app, and show the user only the necessary information.</div>
	</div>
	<div class="one-third">
			<div class="inline">
				<div class="tldr-title">Skills: </div>
				<div class="tldr-content">UX, Information Architecture, UI, Interaction, Front-End Dev</div>
			</div>
			<div class="inline">
				<div class="tldr-title">Tools:</div>
				<div class="tldr-content">Sketch, Balsamiq, Photoshop, Illustrator, Marvel</div>
			</div>
	</div>
</div>

##Role
### ... Designer
I worked at KnowRoaming as a co-op student in Spring 2014 and Winter 2015. In my time there I wore many hats, from graphic designer, industrial designer, web developer and UX designer.

Despite all these hats, my primary task though was to improve and redesign the account management app. In coordination with the stakeholders, COO, developers, and customer service, I reworked everything from the visual design, the registration flow, to the in app experience both at home and abroad. 

##Context
###Eliminating _Bill Shock_
<a href="http://knowroaming.com" target="_blank">KnowRoaming</a> is a Toronto-based company with the goal of eliminating _bill shock_—the feeling when you realize just how much international roaming can cost.
Their Smart SIM Sticker, a layer on top of your existing SIM card, acts as a second SIM while you're abroad. You are automatically connected to a local network through the Sticker, and pay a small fee for roaming on their partner networks. 

Along with the Smart Sticker, KnowRoaming develops both an iOS and Android account management app. The app is used to to setup your account, manage your balance and check usage and roaming rates.

<figure class='folio_image' id='hero'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/knowroaming/knowroaming.jpg'>
	</a>
<figcaption></figcaption>
</figure>

##Investigation
###Collecting Data
I started my journey with a simple heuristic analysis of the existing app based on [Nielsen's heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/). While not quite a true heuristic analysis by Nielsen's definition, this activity turned up some interesting insights. I compiled a table of some of the most significant usability bugs in the app [^bugs].

While I did find many bugs, the findings weren't all negative. I made a note of the positive aspects, which were used as important design criteria for the redesign of the app. 

<figure class='folio_image' id='img2'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/knowroaming/knowroaming_old_old_app.jpg'>
	</a>
<figcaption>The early 2014 KnowRoaming app that was my starting point for analysis and re-design</figcaption>
</figure>

The main takeaway from exploring the existing app was that there was little to no coherent structure or visual design elements. Even some developers who knew the app well had to think for a moment when I asked them how to do some basic tasks. 

I wanted to get some information from people who are more familiar with the app, but I had no way of personally contacting existing users. Fortunately we had a great support team who were in contact with users daily. I talked with them regularly, and had them compile a list of some common issues. This provided me with some good confirmation of the issues I had found, as well as some new insights.

## Requirements
From usability heuristics and data we gathered from users we were able to generate a number of requirements about different sections of the app. More broadly, these requirements were:

**Users will be confident:** Users will be sure that both the KnowRoaming hardware and account are set up correctly before continuing.

**Users will know what's up:** Key account information will be easily visible and accessible to the user.

**Users will be able to find things:** All major functions will be discoverable, and won't require 'drilling down'.

##Iteration
### Basic Architecture
In order to be confident and know what's up, a user needs to be able to see and do a number of different things. From our knowledge of the product and common user comments, we created a prioritized list of these items.

1. Current Network/SIM card
2. Summary of Status (Ready to Roam)
3. Change APN (Internet connection)
4. Current APN
5. Account Balance
6. Reload account
7. ReachMe/Call Forwarding
8. Usage, My Numbers, Rate Calculator
9. Account Settings


### A Super-Flat Architecture
One way achieve all of this would be through a very flat architecture. By showing all possible actions on the home-screen, there would be nothing left out. 

<figure class='folio_image' id='super-flat'>
<a target='_blank'>
	<img src='../includes/portfolio_images/knowroaming/super-flat-architecture.png'>
</a>
<figcaption>A super-flat architecture diagram</figcaption>
</figure>

In practice though this proved to be cluttered and didn't convey any real hierarchy. It also wasn't very future proof if other more important features were added. We needed to come up with a more elegant navigation structure—one that prioritized all the information effectively.
<!-- 
<figure class='folio_image' id='home-dash'>
<a target='_blank'>
	<img src='../includes/portfolio_images/knowroaming/sketch-home-dashboard.jpg'>
</a>
<figcaption>The dashboard design.</figcaption>
</figure> -->


### Navigation

A drawer-style navigation would be able to do just that, and still allow nearly all navigation elements to be viewed at a glance. If new functions were to be added later, they would be able to find an appropriate spot in the drawer.

<figure class='folio_image' id='home-drawer'>
<a target='_blank'>
	<img src='../includes/portfolio_images/knowroaming/home-drawer.png'>
	<img src='../includes/portfolio_images/knowroaming/home-openDrawer.png'>
	
</a>
<figcaption>Pressing "Am I Ready to Roam?" would guide the user through a travel checklist.</figcaption>
</figure>

This prototype tested relatively well in-house, but the 'hamburger menu' wasn't always found right away. Given that the app would frequently be used by non digital-natives, an [undiscoverable drawer](https://uxdesign.cc/death-by-hamburger-2d1db115352a#.865mhybml) would not be the best navigation option. 

On top of this, we noticed this home screen design didn't convey clearly enough if the user was _Ready to Roam_. We would have to design a home screen that showed this information at-a-glance so the user could be confident in their setup.

### Ready to Roam
We decided to go back to a tab-bar for navigation, and I started sketching a few home-screen designs to see how we could show _Ready to Roam_ at-a-glance. 

<figure class='folio_image' id='ready-to-roam'>
<a target='_blank'>
	<img src='../includes/portfolio_images/knowroaming/sketch-ReadyToRoam1.jpg'>
	<img src='../includes/portfolio_images/knowroaming/sketch-home-bubbles.jpg'>
</a>
<figcaption>A circular and top-to-bottom checklist design</figcaption>
</figure>

We got a lot of traction in-house with the top-to-bottom checklist design, so I made a higher-fidelity mockup to see how it performed in small scale tests. With this design, a user could be sure at a glance they were _Ready to Roam_ as the bubbles on the home screen filled in.  

<figure class='folio_image' id='home-drawer'>
<a target='_blank'>
	<img src='../includes/portfolio_images/knowroaming/home-bubbles.png'>
</a>
<figcaption>Ready to Roam Checklist on the home-screen</figcaption>
</figure>

### Use Cases

While the checklist style design tested very well in small scale usability tests, there was one significant problem with it.
There are certain actions, such as setting up data or subscribing to ReachMe, that are key to being _Ready to Roam_, but can't be done everywhere. 
This led to confusion, and given the complexity of the system, we wanted our users to be confident that everything was setup properly.
We eliminated these actions from the home screen to make sure a user is confident wherever they are.


###1) At Home

At home is where a user will do most of their account setup and management. To achieve _Ready to Roam_ status at home, all a user need to do is add a balance, and subscribe to ReachMe, the optional (but recommended) call-forwarding service.

<figure class='folio_image' id='phases-home'>
<a target='_blank'>
	<img src='../includes/portfolio_images/knowroaming/At Home_iphone6_silver_portrait.png'>
</a>
<figcaption>At Home phase</figcaption>
</figure>

###2) Abroad
Once the user arrives abroad, the first thing a they need to do is set up their internet connection. Once the data connection has been established, users can use their device just like at home, and _Ready to Roam_ status is restored, as long as they have a sufficient balance. 

<figure class='folio_image' id='phases-abroad'>
<a target='_blank'>
	<img src='../includes/portfolio_images/knowroaming/Abroad - 70 balance_iphone6_silver_portrait.png'>
</a>
<figcaption>Abroad phase</figcaption>
</figure>

###3) Back Home
Arriving back home, the user must reset their internet connection in order to use data back at home. This is the only task required in the _Back Home_ phase. When complete, the user returns to the _At Home_ phase.

<figure class='folio_image' id='phases-back-home'>
<a target='_blank'>
	<img src='../includes/portfolio_images/knowroaming/05 Back Home_iphone6_silver_portrait.png'>
</a>
<figcaption>Back Home phase</figcaption>
</figure>

By splitting the home screen into three separate phases with different UI in each, we were able to increase user confidence that they were doing the right thing, and could use their phone as usual.

<figure class='folio_image' id='phases-flowchart'>
<a target='_blank'>
	<img src='../includes/portfolio_images/knowroaming/Phase Selection Flowchart.pdf'>
</a>
<figcaption>This flowchart goes through the logic of how each phase is determined.</figcaption>
</figure>

## Tutorials
### Coaching the user

KnowRoaming is a complex system; involving partner networks, a SIM Sticker, the mobile OS and an app, there is a lot to teach the user and coach them through set up.

When a user finishes the registration process, they are presented with a short tutorial, explaining the three phases, and how to know they are _Ready to Roam_.

<figure class='folio_image' id='totorial'>
<a target='_blank'>
	<img src='../includes/portfolio_images/knowroaming/tutorial/tutorial-1.png'>
	<img src='../includes/portfolio_images/knowroaming/tutorial/tutorial-2.png'>
	<img src='../includes/portfolio_images/knowroaming/tutorial/tutorial-3.png'>
	<img src='../includes/portfolio_images/knowroaming/tutorial/tutorial-4.png'>
</a>
<figcaption>The tutorial that plays once a user finishes registration</figcaption>
</figure>

At the beginning of each phase, a set of coachmarks is shown to familiarize the user with the updated interface.

<figure class='folio_image' id='coaches'>
<a target='_blank'>
	<img src='../includes/portfolio_images/knowroaming/tutorial/02 Home SIM coach.png'>
	<img src='../includes/portfolio_images/knowroaming/tutorial/01 KnowRoaming SIM coach.png'>
</a>
<figcaption>Some examples of Coachmarks that are shown when a user travels abroad</figcaption>
</figure>

##Conclusion
###I could go on...
There was a lot involved in restructuring this app. And although I could write about how I created a consistent design language, designed the layout of each screen, rebranded core offerings (ReachMe), build a landing page for sponsorships, and even designed a new retail stand, I've limited this article to the basic architecture and navigation overhaul.

With the exception of certain small changes to allow for new features, the KnowRoaming app maintains the same core 3-phase architecture to date.

<!-- 
##Considerations
###The Thumb Zone
### Reminders & Pop-Ups
###Icons & Branding
 -->




































[^bugs]: Table of UX bugs
<figure id="table1">
<table cellpadding="5px">
	<tr> <th>Usability issue</th>	<th>Severity ( 1-5 )</th>	<th>Usability Heuristic</th>	<th>Recommendations</th> </tr>
	<tr> <td> User is unaware what their KnowSim Serial number is, or where to find it without consulting manual</td>	<td>5</td>	<td>Help & Documentation</td>	<td>Provide easier method of finding Serial, & add documentation in app</td> </tr>
	<tr> <td>User is unsure when they have set-up properly, and are ready to use the app</td>	<td>5</td>	<td>Visibility of System Status</td>	<td>Show salient feedback of the user's set-up status</td> </tr>
	<tr> <td>Leaving the app is required for registration. This forces the user to restart the registration process</td>	<td>5</td>	<td>Flexibility & Efficiency	<td>Return the user to the same location in the app. Make use of OS multitasking </tr>
	<tr> <td>User is unsure whether they have signed up properly due to lack of feedback while processing the registration</td>	<td>4</td>	<td>Visibility of System Status</td>	<td>Provide feedback while communicating with server after sign up</td>
	<tr> <td>Warning about Network Status appears nearly every time user returns to app</td>	<td>4</td>	<td>Control & Freedom</td>	<td>Show System popup only when the user opens the app in a distinctly different geographical region</td>
	<tr> <td>Wizard in app breaks operating system convention</td>	<td>4</td>	<td>Consistency & Standards</td>	<td>Redesign home page to provide necessary salient feedback, and frequently used functions </td>
	<tr> <td>Sign out is unforgiving (no confirmation)</td>	<td>4</td>	<td>Error Prevention</td>	<td>Add alert to confirm sign out</td>
	<tr> <td>User must press an unfamiliar icon to view their account balance</td>	<td>4</td>	<td>Visibility of System Status</td>	<td>Make the account balance more salient.</td>
	<tr> <td>Some screens are cluttered and many elements are not aligned</td>	<td>3</td><td>Aesthetics & Minimalism</td> <td>Re-design most screens, & re-write text</td>
</table>
</figure>

<div class="folio-nav prev noom">
	<a href="?p=noom">Noom</a>
</div>
<div class="folio-nav next smrtwatr">
	<a href="?p=smrtwatr">SMRT WATR</a>
</div>