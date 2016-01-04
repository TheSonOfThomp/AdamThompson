<?php
	$p = $_GET['p'];
	$useTemplate = true;
	$HTML_FILE = $p.'.php';
	$img_path = $root_path."/includes/portfolio_images/";
	$cover_photo = $img_path.$p.'.png';
	switch ($p) {
		// SHOWCASE //
		case 'noom_logging':
			$useTemplate = false;
			$p_title = "Improving Food Logging at Noom";
			$HTML_FILE = $p.'.php';
			break;
		case 'smrtwatr':
			$useTemplate = false;
			$p_title = "SMRT WATR - An Interactive Water Fountain";
			$HTML_FILE = $p.'.php';
			$cover_photo = $img_path.$p.'.jpg';
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

		case 'colourtherm':
			$p_title = 'Colour Thermometer';
			$p_p1 = "The <a terget='_blank' href='".$root_path."/ColourThermometer'>Colour Thermometer</a> is a web app I built that converts the specified location's temperature, weather conditions and current time as an hsv (hue, saturation, variance) colour value, respectively. I built this in my spare time in the winter of 2015 for fun and to demonstrate my abilities in JavaScript. <a href='https://github.com/Adam93MT/ColourThermometer'>Check it out on GitHub.</a> I was inspired by <a href='http://thecolourclock.co.uk' target='_blank'>The Colour Clock.</a>";
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