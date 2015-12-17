<?php
	$p = $_GET['p'];
	$useTemplate = true;
	$HTML = '';
	$img_path = $root_path."/includes/portfolio_images/";
	switch ($p) {
		// SHOWCASE //

		case 'noom_logging':
			$useTemplate = false;
			$p_title = "Noom - Food Logging Experience";

			$HTML = "
			<p class='folio-paragraph'>Meal logging is a must-have feature in Noom Health and Coach.  Therefore, it must to be quick and intuitive to log the food you’ve eaten and get insightful feedback. With the help of the UX research team and the input of other designers and engineers, I was able to fix some big problems with the food logging experience, and re-design it to be as straight-forward and intuitive as possible.</p>
			<h3 class='section-header'>Why did we do this?</h3> 
			<p class='folio-paragraph'>Through user testing we got to see what users did (and didn’t do) in the app. The biggest issue we saw was users having difficulty navigating between the *search* view and the *cart* view (to view foods already logged). The buttons both to view the cart, and to add more items were not nearly salient enough to be the primary action; the back buttons on either screen were counter intuitive, and didn't work the way anyone expected them to.</p>
			<figure class='folio_image' id='img2'>
				<a target='_blank'>
					<img src='https://www.dropbox.com/s/jsfuc4d46tcj1ny/Current%20State%20-%20New%20Meal.gif?dl=1'>
				</a>
			<figcaption>The arrow button in the corner — where does that take me? That little check mark in the other corner — can I click it? And if I do, where does it take me, and how can I get back?</figcaption>
			</figure>

			<p class='folio-paragraph'>The exact problems were not identical between the Android an iOS apps, but there were significant problems with each. On iOS, users were flat-out confused about the behaviour of some buttons, whereas on Android, users were missing out on critical information. When an Android user pressed the back arrow their meal would be saved, and they would arrive back on the home screen. At face value this makes sense, however it doesn’t provide the user experience promised by Noom: to learn about your meals in order to make healthier choices in the future. We saw this as another symptom of a broken food-logging workflow.</p>

			<p class='folio-paragraph'>Whether this odd navigation was designed or (more likely) an oversight, we recognized it was a problem that needed fixing, so I set out to re-think the meal-logging experience with better, more intuitive navigation in mind.</p>

			<h4>Design Constraints</h4>

			<p class='folio-paragraph'>To keep the scope of this project down, the team decided I would focus only on what happens after a user selects a meal, and before they receive feedback (though we discussed ways to improve meal selection in the future). Knowing that navigation was the key area of focus, I wanted to establish all the possible variants of navigation that could occur. This turned out to be a bit more complex than I had anticipated.</p>

			<p class='folio-paragraph'>Not only can users log new meals, but they can also edit their past meals. Editing a meal to add a forgotten item or to update the portion size shouldn’t require any extra steps or re-learning than a new meal. The food logging workflow should not only be excellent when logging a new meal, but should also be just as intuitive when making edits.</p>

			<h3>How did we do this?</h3>

			<p class='folio-paragraph'>Once we had determined what problems that needed to be solved, I got to brainstorming solutions. I made flowcharts and wireframes to see what solutions might work, and to get a better handle on the problem. When I had an idea the team and I liked, I made higher-fidelity mockups in [Sketch](http://sketchapp.com). For the more promising versions I made interactive prototypes using [Marvel](http://marvelapp.com), [Framer](http://framerjs.com) and [Origami](http://facebook.github.com/origami). We then used the mockups and prototypes to test; both on co-workers and users on [UserTesting](http://usertesting.com) and [UsabilityHub](http://usabilityhub.com). With these test results, I refined the mockups, or went back to sketching and brainstorming. After dozens of iterations we arrived at the final version of the Noom food logging experience. </p>

			<h4>Brainstorming</h4>

			<p class='folio-paragraph'>To start, I made some rough sketches and of how the screens would need to flow together. These flow charts helped me get a better handle of the problem, and see how I might make both navigation scenarios intuitive.</p>

			<figure class='folio_image' id='img2'>
				<a target='_blank'>
					<img src='https://www.dropbox.com/s/96nlv7clrdi7mrg/Photo%20Dec%2010%2C%2011%2026%2040%20AM%20%281%29.jpg?dl=0'>
				</a>
			<figcaption></figcaption>
			</figure>

			<p class='folio-paragraph'>The flowchart here shows the two most basic solutions, — one starting a user in the search view first, the other in the cart (meal summary) view first. For example, in a “Search First” model, users would be able to exit meal logging from the search view, and go forward to the cart. From the cart view, the user can go back to search, or complete the flow.</p>

			<p class='folio-paragraph'>In a perfect world, we’d be done here. However since we needed the workflow to be quick and intuitive for users in *all* scenarios, neither of these two iterations would cut it. Each version neglects a portion of the users we need to design for. <p class='folio-paragraph'>


			  > Users who are logging a new meal don’t want to press another button to start logging. 
			  > Users who've already logged the meal don't want to press another button to remember what they forgot.


			<p class='folio-paragraph'>A third solution was to build a hybrid of the first two; a conditional UI which starts the user in a different screen depending on whether the user has logged the meal already or not. </p>

			<figure class='folio_image' id='img2'>
				<a target='_blank'>
					<img src='https://www.dropbox.com/s/ajz5bl63ikiau86/Photo%20Dec%2010%2C%2011%2028%2056%20AM%20%281%29.jpg?dl=1'>
				</a>
			<figcaption></figcaption>
			</figure>
			<p class='folio-paragraph'>The top sketch illustrates navigation when editing a meal, the bottom when starting a new meal. Notice the different icons on the search screens in each scenario.</p>

			<p class='folio-paragraph'>In theory this model works, but it would cause significant mental strain for the user. All users will experience logging new meals at some point or another, so many will have that navigation pattern in memory after a few meals. The odd time they go to edit a meal though, their cognitive load will dramatically increase. The buttons they’re used to pressing mean completely different things now; they’ll press the wrong buttons and get frustrated that they can’t get it to work. This just re-creates the problem we sought to solve. I needed to keep digging to find a universally viable solution.</p>

			<h4>A Common Theme</h4>

			<p class='folio-paragraph'>Since a user can log a new meal, or edit one, and start the workflow with either the search or cart view, both of these screens needed a way to get out (and go back to the home screen). To keep each view consistent across scenarios then meant there needed to be a way to get out from *every* screen. One of the only ways to convey this behaviour in the UI was to use a cross icon; a back arrow is too ambiguous. *“Am I going back home, or to the first screen?”*. This was the fourth major iteration, and it seemed promising. I iterated on this version, changing the locations and styles of buttons until we had a few styles that we liked, and worked well. Testing the individual screens and button styles was promising, and showed a lot of improvement from the original workflow.</p>

			<figure class='folio_image' id='img2'>
				<a target='_blank'>
					<img src='https://www.dropbox.com/s/1qzctcrbpinohjo/One-X%20-%20vC.png?dl=0'>
				</a>
			<figcaption></figcaption>
			</figure>

			<p class='folio-paragraph'>There was a small problem with this *One-X *model though. If the screens were independent, and moved from one to the other, the behaviour of the close buttons could get confusing. If one view moved to another, I worried that the meaning of *Close* might still be ambiguous for the second screen. *“Will it close the whole flow, or just the screen I’m on?”*. As mentioned before, only closing the current screen (and effectively going back) doesn’t make much sense architecturally, since the behaviour would change depending on the context. This worry was proven during user interviews, where we found that there was a near 50/50 split between users who expected to close the entire flow vs. the current screen. These screens needed to be the same, but different.</p>

			<h4>One Screen</h4>

			<p class='folio-paragraph'>That’s when it hit me: these weren't *two* screens I was designing, rather two parts of the same experience. For the next few days I iterated like crazy; I knew I was on the right track with the *One-Screen* concept. </p>

			<p class='folio-paragraph'>There would be only one close button for both views, and an easy way to flip between each mode. The blue header would be a consistent element across the views; the close button would always be there. This design also had the benefit of not having to worry about how the *Add More* button looked. The search view would minimize to show the cart, and then open back up when a user taps the search bar. Since the search bar and other input methods were always visible, adding more to a meal would be as simple as tapping an input method.</p>

			<p class='folio-paragraph'>I sketched and mocked up how these interactions would work and brought them to our daily design sync. The team was on board. I made a prototype in [Origami](http://facebook.github.com/origami) to show how the flow might feel.</p>

			<figure class='folio_image' id='img2'>
				<a target='_blank'>
					<img src='https://www.dropbox.com/s/d9g9cm1mv16qkr4/OneScreen%20Origami%20video.gif?dl=1'>
				</a>
			<figcaption></figcaption>
			</figure>

			<p class='folio-paragraph'>Then we had a team meeting including a product manager and developer. We would have few resources available to implement this fix (if any), so the development effort would have to be justified by the usability benefits gained from the re-design.</p>

			<h4>Witherto's and Whyfor's</h4>

			<p class='folio-paragraph'>Wanting to show that *One-Screen* did in fact rule them all, I created a decision matrix for all the major iterations and the usability criteria for the redesign. Based on data from user tests for both the old app and new prototypes, I was able to fill a good portion of the chart. From these values, I evaluated the relative score of the other designs. As it turned out, *One-Screen* did score the highest in terms of usability, though only by a small margin. </p>

			<p class='folio-paragraph'>Once I included the development estimate, the *One-X* model pulled ahead. After discussing this chart to the rest of the team, we agreed that the benefits of *One-Screen* didn’t justify the increased development time, and we would move forward with the *One-X* model. </p>
			<figure class='folio_image' id='img2'>
				<a target='_blank'>
					<img src='https://www.dropbox.com/s/g2dqcnj3372t5gy/Decision%20Matrix%20-%20Meal%20Logging%20.png?dl=0'>
				</a>
			<figcaption></figcaption>
			</figure>

			<h4>Finishing Touches</h4>

			<p class='folio-paragraph'>There were still some small UI fixes that needed to be done before I could officially spec the design, so I kept the Sketch file open and kept working. After discussing how the navigation bar was implemented, I found a way to make the *One-X* model even better. As it turned out, it was possible to transition between two screens while keeping one navigation bar (or primary toolbar on Android) in place. The *One-Screen* version was technical overkill, and the problems it solved could just as easily be solved by modifying the *One-X *version. By keeping a static C*lose* button and making the header a uniform size, it was possible to achieve the feeling of a single context for meal logging. We did some validation of this and I added it to the matrix. The rest of the team was on board with these changes, and we were ready to spec. I sent the designs to [Zeplin](http://zeplin.io), and the improved meal logging experience was ready to be built!</p>

			<figure class='folio_image' id='img2'>
				<a target='_blank'>
					<img src='https://www.dropbox.com/s/1viftuad40qzud2/Meal%20Logging%20-%20with%20Touch%20States.gif?dl=0'>
				</a>
			<figcaption></figcaption>
			</figure>
			";
			break;
		case 'KR_app':
			$p_title = 'KnowRoaming App UX Design';
			$p_p1 = "<a target='_blank' href='http://knowroaming.com'>KnowRoaming</a> is a startup in Toronto, seeking to eliminate 'Bill Shock' from international roaming. They sell a SIM Sticker that sticks to your existing SIM card and acts as a second SIM while you're abroad. They connect you to a local network through the Sticker to save you money on roaming. Their iOS and Android apps are accout management tools, to setup your account, manage your balance and chack usage and rates.";
			$p_p2 = "I joined the KnowRoaming team in May 2014 as the company’s first User Experience designer. My primary task was to take their existing account-management app, and rework it to improve the flow and experience. In coordination with the stakeholders, COO, developers, and customer service, I reworked everything from the registration workflow, to the in app experience at home and abroad using the KnowRoaming SIM Sticker.";
			$p_p3 = "To start, I analyzed the existing app and noted what it does well, and where it fell short. Over the next few months I worked out sketches and wireframes, iterating  and discussing the designs every week. Once a basic workflow was decided, I began to work on the new visual style, and finally came up with a viable product near the end of my term there.";
			$p_p4 = "When I returned the following January, the product had been out for several several months, and user feedback was plentiful. I used this feedback, received from customer service, to improve on the design from the previous term. One of the most noteworthy improvements is the use of Phases - different use cases in the app corresponding to the user’s current situation - At Home, Abroad, and Back Home. I modified the existing home screen to display situational buttons that appear when needed, and disappear when not needed. For example, a user can’t setup their Roaming Data connection when they’re at home.";
			$p_p5 = "Among the other improvements were the Reload, ReachMe and Checkout workflow, the number purchasing workflow, and the appearance of the bottom tab bar";
			$p_p6 = "";
			$img1 = $img_path."knowroaming_app_v1.jpg";
			$img1_caption =  "The November 2014 release of the app redesign";
			$img2 = $img_path."knowroaming_app_abroad.jpg";
			$img2_caption =  "The Current 2015 version of the KnowRoaming App";
			$img3 = $img_path."knowroaming_app_process.jpg";
			$img3_caption =  "An later sketch of the new app";
			$img4 = $img_path."knowroaming_app_reload-reachme.jpg";
			$img4_caption =  "The new Reload and ReachMe subscription page";
			$img5 = $img_path."knowroaming_app_login.jpg";
			$img5_caption =  "The new login screen, featuring double parallax (on supported devices)";
			break;

		case 'colortherm':
			$p_title = 'Colour Thermometer';
			$p_p1 = "The <a terget='_blank' href='".$root_path."/ColourThermometer'>Colour Thermometer</a> is a web app I built that converts the specified location's temperature, weather conditions and current time as an hsv (hue, saturation, variance) colour value, respectively. I built this in my spare time in the winter of 2015 for fun and to demonstrate my abilities in JavaScript. I was inspired by <a href='http://thecolourclock.co.uk' target='_blank'>The Colour Clock.</a>";
			$img1 = $img_path."colourThermometer.jpg";
			$img1_caption = "A screenshot from early spring 2015";
			break;

		case 'athletes':
			$p_title = "Athletes.KnowRoaming";
			$p_p1 = "KnowRoaming created an athlete sponsirship program, targeting amateur athletes who cover the cost of travel (and roaming) on their own. I designed and built <a target='_blank' href='http://athletes.knowroaming.com'>athletes.knowroaming.com</a> as a simple mini-site and signup form for the KnowRoaming Athletes program.";
			$img2 = $img_path."athletes1.jpg";
			$img2_caption = "The front page of the Athlete Signup Page";
			$img1 = $img_path."athletes3.jpg";
			$img1_caption = "The signup form";
			$img3 = $img_path."athletes2.jpg";
			$img3_caption = "The 3 Tiers of the sponsorship program";
			break;

		case 'KR_web':
			$p_title = "KnowRoaming Website";
			$p_p1 = "I played a vital role in the redesign of KnowRoaming's new main site. In a meeting we discussed potenials to improve awareness of the KnowRoaming product and how to increase sales. I analyzed the current website and realized that there was little basic information about the product, and that a potential customer might not know enought about the product before they buy. We had statistics that viewers saw only half the page pefore leaving. That afternoon I sketched up a wireframe of a new website that improves on these issues. The goal of this redesign was to introduce the customer to the steps of using KnowRoaming (Application, Registration, Roaming, and Returning Home) one-by-one. By the time a visitor reaches the same section where they would have previously left, they have hopefully learned enough about the product to proceed.";
			$p_p2 = "After presenting the wireframe and making some modifications as recommended by the marketing team, we began development of a Beta site. A version of the new site is accessible as a special Airlines promotion mini-site at <a href='http://www.knowroaming.com/airlines' target='_blank'>knowroaming.com/airlines</a>. Before I left in May, we had a meeting to discuss next steps, and the design will be implemented on the main site within a month. The new site will have many metrics in place for user analysis and A/B testing.";
			$img1 = $img_path."knowroaming_pilots_wireframe.jpg";
			$img1_caption = "A section of the initial wirefreame for the redesigned site.";
			$img2 = $img_path."knowroaming_pilots_site.jpg";
			$img2_caption = "<a href='http://www.knowroaming.com/airlines' target='_blank'>The Airlines mini-site</a>";
			break;

		case 'stic':
			$p_title = 'Ski Tip Connector';
			$p_p1 = "For our first year design project, our team designed a ski tip connector to assist skiers with mental and physical disabilities more easily navigate the slopes. The design was considered by the Canadian Association for Disabled Skiing. Models were created using AutoCad and Inventor.";
			$p_p2 = "The mechanism is akin to the G6 guitar capo, which uses a wrap-spring-clutch to keep the device closed when in use, but allows it to quickly open by pressing the release lever.";
			$img1 = $img_path."STiC.png";
			$img1_caption = "The STiC, Ski Tip Connector";
			$img2 = $img_path."STiC-2.png";
			$img2_caption = "How the STiC is used. The STiCs keep the skis of an amateur skier in the \"pizza\" formation, which allows for more control. The rings on the side allow an instructor to attach tethers to steer a lesser-abled skier" ;
			$img3 = $img_path."STiC-3.png";
			$img3_caption = "An exploded view of a Ski Tip Connector";
			$img4 = $img_path."STiC-4.png";
			$img4_caption = "";
			break;

		// OTHER //
		case 'KR_retail':
			$p_title = "KnowRoaming Retail Display";
			$p_p1 = "At KnowRoaming I was asked to design and build a stand to display the SIM Stickers in retail stores. I took just over a week to move from concept sketches to this final prototype.";
			$p_p2 = " The prototyping phase was a long procedure since I had to experiment to get the front protrusion and front panel height just right. In the final drawings there are notes on which dimenstions need to be lengthened to increase the capacity. (The prototypes were shorter in order to fit on one sheet of the cardboard that we had in the office)";
			$img1 = $img_path."retail-white.jpg";
			$img1_caption = "A prototype from the factory";
			$img2 = $img_path."retail-render.jpg";
			$img2_caption = "An AutoCAD 3D render of the retail stand";
			$img3 = $img_path."retail-prototype-1.jpg";
			$img3_caption = "One of the first prototypes";
			break;
		case 'mediago':
			$p_title = "MediaGo app Redesign";
			$p_p1 = "While at Sony, I designed several concept images to improve the usability and aesthetics of the app. The version pictured got the best feedback throughout the ofice. The design however was not implemented due to differing priorities and a lack of relevant resources in the department";
			$img2 = $img_path."mediago_app.jpg";
			$img2_caption = "The leading concept design for MediaGo";
			$img1 = $img_path."mediago_launcher.jpg";
			$img1_caption = "I also re-designed the launcher for the app";
			// $img3 = $img_path."mediago_fullscreen_ad.jpg";
			// $img3_caption = "To promote MediaGo, I created a promotional video";
			break;
		case 'mediago_new':
			$p_title = "MediaGo New Feature";
			$p_p1 = "I was the lead designer on a new feature in MediaGo. I performed a brief user study before, and incorporated MediaGo interface patterns into the design. The feature is still under development, and I can't show it in my portfolio yet.";
			$img1 = $img_path."mediago_new.jpg";			
			break;
		case 'falcon':
			$p_title = 'Falcon Logo';
			$p_p1 = "My personal logo is based on the old heraldry of the Scottish and English Thompson's. I have wanted to design my own simple line logo for a while, so when I discovered what was on my family's crest last year at the CNE, I thought that a falcon might make for a pretty cool logo. I sketched a few designs on paper, and over several weeks removed unnecessary details, reducing the shape of the falcon to as few lines as possilble.";
			$img2 = $img_path."falcon-dark.jpg";
			$img2_caption = "The dark version";
			$img1 = $img_path."falcon-light.jpg";
			$img1_caption = "The light version";
			break;

		case 'KR_promo':
			$p_title = 'KnowRoaming Promotional Materials';
			$p_p1 = "At KnowRoaming I designed several pieces of propotional media. Not all of it is shown here.";
			$img1 = $img_path."KnowRoaming_pass.jpg";
			break;
		case 'ComicSans':
			$p_title = "Say No To Comic Sans";
			$p_p1 = "Say 'No' to Comic Sans is a <a href='https://chrome.google.com/webstore/detail/say-no-to-comic-sans/diofbkkbeiifhjpkajdmalnadgppineg' target='_blank'>Chrome extension</a> with only one purpose, to rid the internet of Comic Sans. With 'Say No To Comic Sans', you will never have to fear web designers and their pernicious choice of web fonts. From now on, you'll have the chance to view each web page in its more attractive, Comic Sans-free form, and experience the web for what it should be: an internet free of Comic Sans!";
			$img1 = $img_path."comic_sans.jpg";
			$img2 = $img_path."Comic_Sans-2.png";
			$img2_caption = "App feedback";
			break;
		case 'kwasind':
			$p_title = 'Camp Kwasind Graphics';
			break;
		case 'this':
			$p_title = "Adam-Thompson.ca";
			$p_p1 = "I designed this site completely from scratch. I wrote all of the HTML5, CSS3 and JavaScript (using jQuery).";
			$img1 = $img_path."this-3.jpg";
			$img1_caption = "This is the previous version of my site.";
			$img2 = $img_path."this.jpg";
			$img4 = $img_path."this-2.jpg";
			$img4_caption = "This is the first version of my portfolio site. I'm still quite happy with the portfolio carousel I built from scratch.";
			break;

		// Otherwise, go back to the home page
		default:
			echo '<meta http-equiv="Refresh" content="0;'.$root_path.'">';
			break;
	}

	if ($useTemplate) {
		# code...
	}

?>