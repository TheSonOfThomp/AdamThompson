<?php
	$p = $_GET['p'];
	$useTemplate = false;
	$useMarkdown = true;
	$HTML_FILE = $p.'.php';
	$img_path = $root_path."/includes/portfolio_images/";
	$cover_photo = $img_path.$p.'.jpg';
	$HAS_VIDEO = false;
	switch ($p) {
		// SHOWCASE //
		case 'noom_logging':
			break;

		case 'chameleon':
			$p_title = "Chameleon Hearing Protection";
			break;

		case 'tap-metronome':
			$p_title = 'TAP Metronome';
			break;

		case 'smrtwatr':
			$p_title = "SMRT WATR - The Interactive Water Fountain";
			break;

		case 'knowroaming':
			$p_title = "KnowRoaming App Redesign";
			break;

		case 'colourtherm':
			$p_title = 'Colour Thermometer';
			break;

		case 'analog-tuner':
			$p_title = 'Analog Guitar Tuner';
			break;

		case 'vu-meter':
			$p_title = 'Arduino VU Meter';
			break;

		case 'KR_web':
			$p_title = "KnowRoaming Website";
			break;

		// case 'KR_promo':
		// 	$p_title = 'KnowRoaming Promotional Materials';
		// 	$p_p1 = "At KnowRoaming I designed several pieces of promotional media, like business cards, to conference banners, info cards and brochures. The examples shown are brochures and an info card designed to mimic an airline ticket.";
		// 	break;

		case 'falcon':
			$p_title = 'Falcon Logo';
			break;

		case 'bose_speaker':
			$p_title = 'Bose Wireless Speaker Design';
			break;
		// OTHER //

		case 'KR_retail':
			$p_title = "KnowRoaming Retail Display";
			break;

		case 'KR_video':
			$p_title = "KnowRoaming Intro Video";
			break;

		case 'mediago_app':
			$p_title = "MediaGo Concept UI";
			break;
		
		case 'comic_sans':
			$p_title = "Say No To Comic Sans";
			break;

		case 'kwasind_video':
			$p_title = "Camp Kwasind Summer 2011 videos";
			break;
	
		case 'mgm_video':
			$p_title = "Mystery Guitar Man — Peter Gunn Theme";
			break;


		// case 'noom_portion':
		// 	$p_title = "Noom Portion Picker";
		// 	$p_p1 = "A smaller project that I worked on at Noom was re-designing the food Portion Picker (and other numerical data input UI widgets). The previous version of the portion picker was a small ruler with a coloured dot as a confirmation button. User research showed that many users were experiencing difficulty when logging food items, and we realized that the current confirmation button was likely not enough of a signifier for its function. After multiple prototypes and tests we decided on the design shown. This design features a larger touch area for the numerical selection ruler, a more salient unit display and selector, as well as a more intuitive confirmation button.";
		// 	$img1 = $img_path."noom_portion_old.jpg";
		// 	$img1_caption =  "The previous version of the Noom portion picker";
		// 	break;

// case 'kwasind':
		// 	$p_title = 'Camp Kwasind Graphics';
		// 	$p_p1 = "At Camp Kwasind, as well as <a href=''>filming and editing</a> weekly, and periodic video for the summer, I created graphics for the weekly DVDs and the staff sweatshirt.";
		// 	$img1 = $img_path."Kwasind-2.png";
		// 	$img2 = $img_path."Kwasind-3.png";
		// 	$img3 = $img_path."Kwasind-4.png";
		// 	break;


	// case 'mediago_new':
		// 	$p_title = "MediaGo New Feature";
		// 	$p_p1 = "I was the lead designer on a new feature in MediaGo. I performed a brief user study before, and incorporated MediaGo interface patterns into the design. The feature is still under development, and I can't show it in my portfolio yet.";
		// 	$img1 = $img_path."sony/mediago_new.jpg";			
		// 	break;

	// case 'matrix_countdown':
		// 	$HAS_VIDEO = true;
		// 	$p_title = "Matrix-Style Countdown Video";
		// 	$p_p1 = "This is a 5-minute countdown video I made for a youth event. Part of the event's topic was on The Matrix movie, so I wanted to mimic this theme in the intro. countdown.";
		// 	$p_video1 = "https://www.youtube.com/embed/rnwYOO5LSxs";
		// 	break;

		// case 'mySite':
			// $p_title = "Adam-Thompson.ca";
			// $p_p1 = "I designed this site completely from scratch. I wrote all of the HTML5, CSS3 and JavaScript (using jQuery). I wrote a php script called <a href='https://github.com/Adam93MT/mySchoolTime'>mySchoolTime</a> which automatically calculates what school term I am in (so I don't have to update it every 4 months).";
			// $img1 = $img_path."this-3.jpg";
			// $img1_caption = "This is the previous version of my site.";
			// $img2 = $img_path."mySite.jpg";
			// $img4 = $img_path."this-2.jpg";
			// $img4_caption = "This is the first version of my portfolio site. I'm still quite happy with the portfolio carousel I built from scratch.";
			// break;

		// Otherwise, go back to the home page
		default:
			echo '<meta http-equiv="Refresh" content="0;'.$root_path.'">';
			break;
	}

?>