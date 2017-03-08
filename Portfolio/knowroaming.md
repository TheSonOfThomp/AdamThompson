<a href="http://knowroaming.com" target="_blank">KnowRoaming</a> is a Toronto-based company looking to eliminate 'Bill Shock' induced by international roaming—that feeling you get when you realize just how much roaming can cost. Their Smart SIM Sticker, which sandwiches on top of your existing SIM card, acts as a second SIM while you're abroad. You are automatically connected to a local network through the Sticker, and pay only a small fee for roaming. The Smart Sticker comes with iOS and Android companion apps which are account management tools, used to to setup your account, manage your balance and check usage and roaming rates.

<figure class='folio_image' id='img1'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/knowroaming/knowroaming.jpg'>
	</a>
<figcaption></figcaption>
</figure>

I joined the KnowRoaming team in May 2014 as an intern, and as the company’s first User Experience designer. My primary task was to take their existing account management app, and rework it to improve the flow and experience. In coordination with the stakeholders, COO, developers, and customer service, I reworked everything from the registration workflow, to the in app experience at home and abroad using the KnowRoaming SIM Sticker. The design process here was extremely iterative, done over a period of two 4-month work terms, and doesn't quite fit into a nice structured narrative. Nevertheless, here's an account of how the KnowRoaming app was designed.

### Establishing Requirements

To get a sense of what I was dealing with, I took the first few weeks to really get familiar with the current app, and how the system is intended to work. The KnowRoaming service is really quite complex—using the phone's own OS, the SIM card, and cell networks all over the globe to get users connected.

<figure class='folio_image' id='img2'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/knowroaming/knowroaming_old_old_app.jpg'>
	</a>
<figcaption>The pre-2014 KnowRoaming app that was my starting point for analysis and re-design</figcaption>
</figure>

#### Heuristic Analysis

Since my job was to redesign the app and not the company's entire business (after all, I _was_ only an intern), I started my journey with a simple heurstic analysis of the app based on [Jakob Nielsen's heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/). While not a true heuristica analysis (it was only me looking at the app), this analysis turned up some interesting insights. Below is a table I compiled of some of the most significant usability "bugs".

<figure id="table1">
<table cellpadding="5px">
	<tr> <th>Usability issue</th>	<th>Severity (1-5)</th>	<th>Usability Heuristic</th>	<th>Recommendations</th> </tr>
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
<figcaption>Some of the most significant findings <form></form> the heuristic analysis</figcaption>
</figure>

The findings weren't all negative though. I made a note of these elements, and they were used as important design criteria for the redesign of the app—the new app shouldn't be worse at something than the old one (unless absolutely necessary). 

Shown in the screenshot above, the app displays the user's current network status front and centre. The visibility of this status is important information when arriving abroad, for quick troubleshooting and for peace of mind.

#### User Data

With individual research established, I wanted to get some frontline information from people who are more familiar with the app. I had no way of directly contacting existing users unfortunately, so I had to settle for some second-hand information. Thankfully we had a great support team who were in contact with users daily. I asked them to compile a list of some common issues users were having in the app, whether these were issues they were calling in about, or issues in troubleshooting. This provided me with some good confirmation of the issues I had found in the heuristic evaluation, as well as some new insights that I had not thought of.

#### Personas
Along with the list of usability issues, I asked for some basic demographic information of our users. From this information, and some interaction with individuals who generally fit the descriptions, I was able to create three brief personas of our users. To keep it simple, I limited the personas to an intent quote, and a short bio.

##### Jim
>I’m going on vacation next month, and I'd like to be able to contact my family & friends back home while I'm gone

*Summary:* Jim is a seventy year-old retired teacher, who spends his time travelling world with his wife. He has three children and several more grandchildren whom he would like to contact while abroad, and wishes to use KnowRoaming in order to do this without spending too much money. Jim needs glasses for reading and occasionally struggles to read smaller type on his mobile device’s screen.

##### Paul
>My job is to travel, and I'd like to be able to use my phone during my downtime without paying ridiculous fees.

*Summary:* Paul is a commercial airline pilot who travels to many countries each week. He enjoys browsing, gaming and streaming media on his smartphone. He wishes to use KnowRoaming as a simple solution to use his smartphone while travelling.

##### Tina
>I travel a lot for work, so I need to be able to contact clients, and for them to contact me wherever I am.

*Summary:* Tina is an independent business consultant who frequently travels abroad to meet with clients. She wishes to use her phone to call out and to receive calls wherever she is in the world. She also wants an interface that is easy to use and that is not too different from what she is used to.

#### Task Analysis

With the data I now had about the intended and actual use of the app, I was able to do a task breakdown to organize the actions involved in different activities in the app. Primarily targeting first time users, I broke down the tasks involved for a new user to start using the product, since many of these actons also need to be done by existing users before using the product again. Not all hierarchies are shown but most are similarly structured.


<figure class='folio_image' id='img3'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/knowroaming/knowroaming hta 1 Register.png'>
	</a>
<figcaption>Registration Task Hierarchy</figcaption>
</figure>

The other tasks involved in account setup are:
2. Load Balance
3. Setup Call-Forwarding
4. Purchase Foreign number
5. Setup KnowRoaming Access Point Name (APN)

With the amount of unique actions needed to register and setup, there was an opportunity to improve the app greatly.

<!-- ### Preparation -->

#### Use Cases

There are a number of cases in which the app can be used, and the app should behave differently in each scenario. I worked with the product team to flesh out what these use cases were, and what actions need to be performed when.

*1. At Home*
<figure class='folio_image' id='img4'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/knowroaming/Phase_bar-home.png'>
	</a>
<figcaption></figcaption>
</figure>
The first use case is at home. This is ideally where a user will do most of their account setup and management. Things like setting up a call forwarding number are not technically possible while abroad, so this action should be encouraged while on the Home SIM

*2. Abroad*
<figure class='folio_image' id='img4'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/knowroaming/Phase_bar-abroad.png'>
	</a>
<figcaption></figcaption>
</figure>
When a user arrives abroad, neither Android nor iOS will automatically setup a data connection, so the first thing a user must do when arriving abroad is set up this connection. Once the data connection has been established, users can use their device just like at home. 

*3. Back Home*
<figure class='folio_image' id='img4'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/knowroaming/Phase_bar-back.png'>
	</a>
<figcaption></figcaption>
</figure>
This might seem like the same use case as the first. It is, only with one major distinction. While the geographical case is the same, users arriving back home after being abroad will still have the KnowRoaming data connection. In order to return to their home data plan, users need to redo the same process they took to establish their roaming data connection.

*Edge Cases:* Home SIM while Abroad / Abroad on Home SIM

In some rare cases, either (a) the KnowRoaming SIM will fail to connect/re-connect, or (b) a more advanced user will force a SIM switch. In these cases the actions available to users are different from the standard cases, so I'll have to take these cases into account.

<!-- #### Storyboards -->


<!-- 
### Some Turbulence

- Wireframing/Sketching
- Paper Prototypes
- Layout and Navigation

### Landing in YYZ

- Typography
- Icons 
- Motion
- Controls
- Design Patterns -->

<!-- 
To start, I analyzed the existing app and noted what it does well, and where it fell short. Over the next few months I worked out sketches and wireframes, iterating  and discussing the designs every week. Once a basic workflow was decided, I began to work on the new visual style, and finally came up with a viable product near the end of my term there.

When I returned the following January, the product had been out for several several months, and user feedback was plentiful. I used this feedback, received from customer service, to improve on the design from the previous term. One of the most noteworthy improvements is the use of Phases - different use cases in the app corresponding to the user’s current situation - At Home, Abroad, and Back Home. I modified the existing home screen to display situational buttons that appear when needed, and disappear when not needed. For example, a user can’t setup their Roaming Data connection when they’re at home.

Among the other improvements were the Reload, ReachMe and Checkout workflow, the number purchasing workflow, and the appearance of the bottom tab bar
 -->
 <!--
			$img2 = $img_path."knowroaming_app_abroad.jpg";
			$img2_caption =  "The Current 2015 version of the KnowRoaming App";
			$img3 = $img_path."knowroaming_app_process.jpg";
			$img3_caption =  "An later sketch of the new app";
			$img4 = $img_path."knowroaming_app_reload-reachme.jpg";
			$img4_caption =  "The new Reload and ReachMe subscription page";
			$img5 = $img_path."knowroaming_app_login.jpg";
			$img5_caption =  "The new login screen, featuring double parallax (on supported devices)"; -->
<!--