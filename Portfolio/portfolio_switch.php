<?php
	$p = $_GET['p'];
	$img_path = $root_path."/includes/portfolio_images/";
	switch ($p) {
		// SHOWCASE //
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
			$p_p1 = "The <a terget='_blank' href='".$root_path."/ColourThermometer'>Colour Thermometer</a> is a web app I built that converts the specified location's temperature, weather conditions and current time as an hsv (hue, saturation, variance) colour value, respectively. I built this in my spare time in the winter of 2015 to demonstrate my abilities in JavaScript. I was inspired by <a href='http://thecolourclock.co.uk' target='_blank'>The Colour Clock.</a>";
			$img1 = $img_path."ColourThermometer.jpg";
			$img1_caption = "A screenshot from late winter 2015";
			break;
		case 'falcon':
			$p_title = 'Falcon Logo';
			$p_p1 = "My personal logo is based on the old heraldry of the Scottish and English Thompson's. I have wanted to design my own simple line logo for a while, so when I discovered what was on my family's crest at the CNE, I thought that a falcon might make for a pretty cool logo. I sketched a few designs on paper, and over several weeks removed unnecessary details, reducing the shape of the falcon to as few lines as possilble.";
			$img2 = $img_path."falcon-dark.jpg";
			$img2_caption = "The dark version";
			$img1 = $img_path."falcon-light.jpg";
			$img1_caption = "The light version";
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
		case 'stic':
			$p_title = 'Ski Tip Connector';
			$p_p1 = "For our first year design project, our team designed a ski tip connector to assist skiers with mental and physical disabilities more easily navigate the slopes. The design was considered by the Canadian Association for Disabled Skiing. Models were created using AutoCad and Inventor.";
			break;

		// OTHER //
		case 'KR_promo':
			$p_title = 'KnowRoaming Promotional Materials';
			break;
		case 'ComicSans':
			$p_title = "Say No To Comic Sans";
			$p_p1 = "Say 'No' to Comic Sans is a <a href='https://chrome.google.com/webstore/detail/say-no-to-comic-sans/diofbkkbeiifhjpkajdmalnadgppineg' target='_blank'>Chrome extension</a> with only one purpose, to rid the internet of Comic Sans. With 'Say No To Comic Sans', you will never have to fear web designers and their pernicious choice of web fonts. From now on, you'll have the chance to view each web page in its more attractive, Comic Sans-free form, and experience the web for what it should be: an internet free of Comic Sans!";
			$img1 = $img_path."Comic_Sans.png";
			$img1_caption = "The app icon";
			$img2 = $img_path."Comic_Sans-2.png";
			$img2_caption = "App feedback";
			break;
		case 'kwasind':
			# code...
			break;
		case 'web2':
			# code...
			break;

		// Otherwise, go back to the home page
		default:
			echo '<meta http-equiv="Refresh" content="0;'.$root_path.'">';
			break;
	}
?>