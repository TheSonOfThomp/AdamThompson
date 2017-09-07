#KnowRoaming


<div class="tldr">
	<div class="one-third">
		<div class="tldr-title">Problem</div>
		<div class="tldr-content">The existing app has grown too fast, and has no coherent structure or visual design.</div>
	</div>
	<div class="one-third">
		<div class="tldr-title">Solution</div>
		<div class="tldr-content">Overhaul the entire app structure and design and rebuild the app from the ground up.</div>
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
###Re-designing an app
I worked at KnowRoaming as a co-op student in Spring 2014 and Winter 2015.
This was my first ever app design job, and had no supervision from a senior designer; it wasn't until my second term when the company hired a full-time designer. This experience helped me learn and grow a lot as a designer.

My primary task was to improve the flow and experience of the existing account management app. In coordination with the stakeholders, COO, developers, and customer service, I reworked everything from the registration workflow, to the in app experience at home and abroad. 

##Context
###Eliminating 'Bill Shock'
<a href="http://knowroaming.com" target="_blank">KnowRoaming</a> is a Toronto-based company with the goal of eliminating 'Bill Shock'—that feeling you get when you realize just how much roaming can cost.
Their Smart SIM Sticker, a layer on top of your existing SIM card, acts as a second SIM while you're abroad. You are automatically connected to a local network through the Sticker, and pay only a small fee for roaming. KnowRoaming also has iOS and Android apps, which are account management tools, used to to setup your account, manage your balance and check usage and roaming rates.

<figure class='folio_image' id='hero'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/knowroaming/knowroaming.jpg'>
	</a>
<figcaption></figcaption>
</figure>

##Process
### Heuristic Analysis
I started my journey with a simple heuristic analysis of the app based on [Nielsen's heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/). While not quite a true heuristic analysis, this analysis turned up some interesting insights. I compiled a table of some of the most significant usability bugs in the app [^bugs].

<figure class='folio_image' id='img2'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/knowroaming/knowroaming_old_old_app.jpg'>
	</a>
<figcaption>The early 2014 KnowRoaming app that was my starting point for analysis and re-design</figcaption>
</figure>

The findings weren't all negative though. I made a note of these elements, and they were used as important design criteria for the redesign of the app—the new app shouldn't be worse at something than the old one. 









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

<div class="folio-nav prev">
	<a href="?p=noom">Noom</a>
</div>
<div class="folio-nav next">
	<a href="?p=smrtwatr">SMRT WATR</a>
</div>