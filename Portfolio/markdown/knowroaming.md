#KnowRoaming


<div class="tldr">
	<div class="one-third">
		<div class="tldr-title">Problem</div>
		<div class="tldr-content">The existing app has grown too fast, and has no coherent structure or visual design.</div>
	</div>
	<div class="one-third">
		<div class="tldr-title">Solution</div>
		<div class="tldr-content">Restructure the app, and redesign using consistent visual language.</div>
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

##Overview
###Re-designing an account management app
I worked at KnowRoaming as a co-op student in Spring 2014 and Winter 2015. This experience helped me learn and grow a lot as a designer.

In addition to graphic design, web development and some industrial design, my primary task was to improve the general user experience of the account management app. In coordination with the stakeholders, COO, developers, and customer service, I reworked everything from the registration workflow, to the in app experience both at home and abroad. 

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
From usability heuristics and data we gathered from users we were able to generate a number of requirements about different sections of the app. More broadly, these requirements consisted of:

**Users will know what to do:** Any new or infrequent task will clearly explained and the user will be guided through.

**Users will be confident:** The Application will ensure the KnowRoaming hardware and account is setup correctly before continuing.

**Users will know what's happening:** Key account status metrics will be easily visible and accessible to the user.

**Users will be able to find important functions:** All key functions will not be more than two levels deep in the information architecture. Other functions will be easily discoverable.

##Iteration
### Basic Architecture
To satisfy the final two requirements, the app would need to have a fairly flat architecture. KnowRoaming is a complex system, and while the new app would do as much as it could to eliminate confusion and unnecessary interaction, there are still many things the user needs to at least be aware of. From the main screen of the app, the user  needs to be able to access all of the following:

1. Current Network/SIM card
2. Summary of Status (Ready to Roam)
3. Change APN (Internet connection)
4. Current APN
5. Account Balance
6. Reload account
7. ReachMe
8. Usage, My Numbers, Rate Calculator
9. Account Settings

A first attempt to satisfy all these requirements was a dashboard-style home screen design. 

<figure class='folio_image' id='home-dash'>
<a target='_blank'>
	<img src='../includes/portfolio_images/knowroaming/sketch-home-dashboard.jpg'>
</a>
<figcaption>The dashboard design.</figcaption>
</figure>

### Navigation
The Dashboard design was very cluttered, didn't convey any specific hierarchy, and wasn't very future proof if other features were added.

A Drawer Style navigation would be able to convey a hierarchy of information, and allows all navigation elements to be viewed at once. If new functions were to be added later, they would be able to find an appropriate spot in the drawer.

<figure class='folio_image' id='home-drawer'>
<a target='_blank'>
	<img src='../includes/portfolio_images/knowroaming/home-openDrawer.png'>
	<img src='../includes/portfolio_images/knowroaming/home-drawer.png'>
</a>
<figcaption></figcaption>
</figure>

This prototype tested relatively well in-house, but the 'hamburger menu' was not always clear, and some users took a while to find the drawer. Given that the app would frequently be used by non digital-natives, an [undiscoverable drawer](https://uxdesign.cc/death-by-hamburger-2d1db115352a#.865mhybml) would not be the best navigation option. 

On top of discoverability issues, this design didn't clearly convey if the user was _Ready to Roam_, which does not satisfy the second requirement. 

The next iteration returned to a tab-bar for navigation, and put important information regarding _Ready to Roam_ status in a prominent location.

<figure class='folio_image' id='home-drawer'>
<a target='_blank'>
	<img src='../includes/portfolio_images/knowroaming/home-bubbles.png'>
</a>
<figcaption></figcaption>
</figure>

With this design, a user could be sure at a glance they were _Ready to Roam_ as the bubbles on the home screen filled in.  

### Use Cases

Until now, I hadn't considered where the user would be when using the app, and what actions they could take at a certain time. 

At home, before leaving, is where a user will do most of their account setup and management. There are only two actions needed to achieve _Ready to Roam_ status at home.

<figure class='folio_image' id='phases-home'>
<a target='_blank'>
	<img src='../includes/portfolio_images/knowroaming/At Home_iphone6_silver_portrait.png'>
</a>
<figcaption>At Home phase</figcaption>
</figure>

Once the user arrives abroad, the first thing a they must is set up their internet connection. Once the data connection has been established, users can use their device just like at home, and _Ready to Roam_ status is restored, as long as they have a sufficient balance. 

<figure class='folio_image' id='phases-abroad'>
<a target='_blank'>
	<img src='../includes/portfolio_images/knowroaming/Abroad - 70 balance_iphone6_silver_portrait.png'>
</a>
<figcaption>Abroad phase</figcaption>
</figure>


Arriving back home, the user needs to reset their internet connection in order to user data back at home. This is the only task required in the _Back Home_ phase. Once done, the user returns to the standard _At Home_ phase.

<figure class='folio_image' id='phases-back-home'>
<a target='_blank'>
	<img src='../includes/portfolio_images/knowroaming/05 Back Home_iphone6_silver_portrait.png'>
</a>
<figcaption>Back Home phase</figcaption>
</figure>

By splitting the home screen into three separate phases, with different UI in each, we were able to increase user confidence that they were doing the right thing, and could use their phone as usual.

<figure class='folio_image' id='phases-flowchart'>
<a target='_blank'>
	<img src='../includes/portfolio_images/knowroaming/Phase Selection Flowchart.pdf'>
</a>
<figcaption>This flowchart goes through the logic of how each phase is determined.</figcaption>
</figure>

## Tutorials
### Coaching the user

KnowRoaming is a complex system; involving partner networks, a SIM Sticker, the mobile OS and an app, there is a lot to teach the user and coach them through set up.

When a user finishes the registration process (also redesigned), they are presented with a short tutorial, explaining the three phases, and how to know they are _Ready to Roam_.

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
There was a lot involved in restructuring this app. And although I could write about it all—from rebranding core offerings (ReachMe), to creating a consistent visual style, I've limited this article to the basic architecture and navigation overhaul.

With the exception of certain small changes for new features, the KnowRoaming app maintains the same core architecture to date.

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