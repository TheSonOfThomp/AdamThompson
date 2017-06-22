<?php
	$p = $_GET['p'];
	$useTemplate = true;
	$useMarkdown = false;
	$HTML_FILE = $p.'.php';
	$img_path = $root_path."/includes/portfolio_images/";
	$cover_photo = $img_path.$p.'.jpg';
	$HAS_VIDEO = false;
	switch ($p) {
		// SHOWCASE //
		case 'noom_logging':
			$useTemplate = false;
			$useMarkdown = true;
			$p_title = "Improving Food Logging at Noom";
			break;

		case 'chameleon':
			$useTemplate = false;
			$useMarkdown = true;
			$p_title = "Chameleon Hearing Protection";
			break;

		case 'tap-metronome':
			$useTemplate = false;
			$useMarkdown = true;
			$p_title = 'TAP Metronome';
			break;

		case 'smrtwatr':
			$useTemplate = false;
			$useMarkdown = true;
			$HAS_VIDEO = true;
			$p_title = "SMRT WATR - An Interactive Water Fountain";
			$cover_photo = $img_path.$p.'.jpg';
			break;

		case 'knowroaming':
			$useTemplate = false;
			$useMarkdown = true;
			// $HAS_VIDEO = true;
			$p_title = "KnowRoaming App Redesign";
			$cover_photo = $img_path.$p.'.jpg';
			break;

		case 'colourtherm':
			$p_title = 'Colour Thermometer';
			$p_p1 = "The <a terget='_blank' href='".$root_path."/ColourThermometer'>Colour Thermometer</a> is a web app I built that converts the specified location's temperature, weather conditions and current time as an hsv (hue, saturation, variance) colour value, respectively. I built this in my spare time in the winter of 2015 for fun and to demonstrate my abilities in JavaScript. <a href='https://github.com/Adam93MT/ColourThermometer'>Check it out on GitHub.</a> I was inspired by <a href='http://thecolourclock.co.uk' target='_blank'>The Colour Clock.</a>";
			break;

		case 'noom_portion':
			$p_title = "Noom Portion Picker";
			$p_p1 = "A smaller project that I worked on at Noom was re-designing the food Portion Picker (and other numerical data input UI widgets). The previous version of the portion picker was a small ruler with a coloured dot as a confirmation button. User research showed that many users were experiencing difficulty when logging food items, and we realized that the current confirmation button was likely not enough of a signifier for its function. After multiple prototypes and tests we decided on the design shown. This design features a larger touch area for the numerical selection ruler, a more salient unit display and selector, as well as a more intuitive confirmation button.";
			$img1 = $img_path."noom_portion_old.jpg";
			$img1_caption =  "The previous version of the Noom portion picker";
			break;

		case 'KR_athletes':
			$p_title = "Athletes.KnowRoaming";
			$p_p1 = "KnowRoaming created an athlete sponsirship program, targeting amateur athletes who cover the cost of travel (and roaming) on their own. I designed and built <a target='_blank' href='http://athletes.knowroaming.com'>athletes.knowroaming.com</a> as a simple mini-site and signup form for the KnowRoaming Athletes program.";
			$img2 = $img_path."web/KR_athletes.jpg";
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
			$img1 = $img_path."web/knowroaming_pilots_wireframe.jpg";
			$img1_caption = "A section of the initial wirefreame for the redesigned site.";
			$img2 = $img_path."web/KR_web.jpg";
			$img2_caption = "<a href='http://www.knowroaming.com/airlines' target='_blank'>The Airlines mini-site</a>";
			break;

		case 'KR_promo':
			$p_title = 'KnowRoaming Promotional Materials';
			$p_p1 = "At KnowRoaming I designed several pieces of propotional media, like business cards, to conference banners, info cards and brochures. The examples shown are brochures and an info card designed to mimic an airline ticket.";
			break;

		case 'falcon':
			$p_title = 'Falcon Logo';
			$p_p1 = "My personal logo is based on the old heraldry of the Scottish and English Thompson's. I have wanted to design my own simple line logo for a while, so when I discovered what was on my family's crest last year at the CNE, I thought that a falcon might make for a pretty cool logo. I sketched a few designs on paper, and over several weeks removed unnecessary details, reducing the shape of the falcon to as few lines as possilble.";
			$img2 = $img_path."falcon.jpg";
			$img2_caption = "The dark version";
			$img1 = $img_path."falcon-light.jpg";
			$img1_caption = "The light version";
			break;

		case 'bose_speaker':
			$p_title = 'Bose Wireless Speaker Design';

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

		case 'KR_applicator':
			$p_title = 'KnowRoaming Automatic Sticker Applicator';
			$p_p1 = "A small project I was tasked with at KnowRoaming was to conceptualize an automatic sticker applicator which can apply many KnowRoaming Smart SIMs in rapid succession. I used AutoCad and Inventor to create the 3D model and concept animations. The exported concept videos were used in stakeholder and inverstor meetings";
			break;

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

		case 'KR_video':
			$HAS_VIDEO = true;
			$p_title = "KnowRoaming Intro Video";
			$p_p1 = "At KnowRoaming I was asked to story-board and create an intro video for the app. Over a few weeks on my own, I created and edited this video using Cinema 4D and Adobe After Effects.";
			$p_video1 = "https://www.youtube.com/embed/Rv9WX5m6Tpc";
			break;

		case 'mediago_app':
			$useMarkdown = true;
			$p_title = "MediaGo Concept UI";
			break;
		
		case 'mediago_new':
			$p_title = "MediaGo New Feature";
			$p_p1 = "I was the lead designer on a new feature in MediaGo. I performed a brief user study before, and incorporated MediaGo interface patterns into the design. The feature is still under development, and I can't show it in my portfolio yet.";
			$img1 = $img_path."sony/mediago_new.jpg";			
			break;

		case 'comic_sans':
			$p_title = "Say No To Comic Sans";
			$p_p1 = "Say 'No' to Comic Sans is a <a href='https://chrome.google.com/webstore/detail/say-no-to-comic-sans/diofbkkbeiifhjpkajdmalnadgppineg' target='_blank'>Chrome extension</a> with only one purpose, to rid the internet of Comic Sans. With 'Say No To Comic Sans', you will never have to fear web designers and their pernicious choice of web fonts. From now on, you'll have the chance to view each web page in its more attractive, Comic Sans-free form, and experience the web for what it should be: an internet free of Comic Sans!";
			$img1 = $img_path."Comic_Sans-2.png";
			$img1_caption = "App feedback";
			break;
		case 'kwasind':
			$p_title = 'Camp Kwasind Graphics';
			$p_p1 = "At Camp Kwasind, as well as <a href=''>filming and editing</a> weekly, and periodic video for the summer, I created graphics for the weekly DVDs and the staff sweatshirt.";
			$img1 = $img_path."Kwasind-2.png";
			$img2 = $img_path."Kwasind-3.png";
			$img3 = $img_path."Kwasind-4.png";
			break;


		case 'kwasind_video':
			$HAS_VIDEO = true;
			$p_title = "Camp Kwasind Summer 2011 videos";
			$p_p1 = "In the summer of 2011 I worked as a filmographer and editor. Each week I filmed the goings-on at the camp and edited together a video for each of the campers to take home at the end of the week. I edited using Final Cut and After Efects";
			$p_video1 = "https://www.youtube.com/embed/fsnH0besPWk";
			$p_video2 = "https://www.youtube.com/embed/yQkyTBBfJcQ";
			$p_video3 = "https://www.youtube.com/embed/22CoGKZfwT0";
			break;

		case 'matrix_countdown':
			$HAS_VIDEO = true;
			$p_title = "Matrix-Style Countdown Video";
			$p_p1 = "This is a 5-minute countdown video I made for a youth event. Part of the event's topic was on The Matrix movie, so I wanted to mimic this theme in the intro. countdown.";
			$p_video1 = "https://www.youtube.com/embed/rnwYOO5LSxs";
			break;

		case 'mgm_video':
			$HAS_VIDEO = true;
			$p_title = "Mystery Guitar Man — Peter Gunn Theme";
			$p_p1 = "A while back the YouTuber Mystery Guitar Man held a competition to edit together a stop motion song. This was my entry.";
			$p_video1 = "https://www.youtube.com/embed/lAftWLBYl-U";
			break;

		case 'mySite':
			$p_title = "Adam-Thompson.ca";
			$p_p1 = "I designed this site completely from scratch. I wrote all of the HTML5, CSS3 and JavaScript (using jQuery). I wrote a php script called <a href='https://github.com/Adam93MT/mySchoolTime'>mySchoolTime</a> which automatically calculates what school term I am in (so I don't have to update it every 4 months).";
			$img1 = $img_path."this-3.jpg";
			$img1_caption = "This is the previous version of my site.";
			$img2 = $img_path."mySite.jpg";
			$img4 = $img_path."this-2.jpg";
			$img4_caption = "This is the first version of my portfolio site. I'm still quite happy with the portfolio carousel I built from scratch.";
			break;

		// Otherwise, go back to the home page
		default:
			echo '<meta http-equiv="Refresh" content="0;'.$root_path.'">';
			break;
	}

?>