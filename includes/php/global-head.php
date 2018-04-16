<?php $page_title = ucfirst($page_id);
	include_once('mySchoolTime.php');

	if ($_SERVER['SERVER_NAME'] === "localhost") {
		$DEBUG = true;
		$root_path = 'http://localhost:9999/AdamThompson';
	}
	else {
		$DEBUG = false;
		$root_path = 'http://adamthompson.ca';
	}

	$show_resume = $_GET['resume'];	
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
	"http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="content-type" content="text/html; charset=utf-8">
		<meta name="keywords" content="design, user experience, product, industrial, UX, UI">

		<link rel="shortcut icon" type="image/png" href="<?php echo $root_path?>/includes/image_assets/silhouette_icn.jpg">

		<!-- SCRIPTS -->
		<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

		<!-- STYLE & FONTS -->
			<!-- Merriweather -->
		<link href='http://fonts.googleapis.com/css?family=Merriweather:300,300italic' rel='stylesheet' type='text/css'>

			<!-- TypeKit -->
		<script type="text/javascript" src="<?php echo $root_path; ?>/includes/js/vendor/typekit.js"></script>
			
			<!-- Font Awesome -->
		<script src="https://use.fontawesome.com/47706e48a4.js"></script>
		<!-- <script defer src="https://use.fontawesome.com/releases/v5.0.10/js/all.js" integrity="sha384-slN8GvtUJGnv6ca26v8EzVaR9DC58QEwsIk9q1QXdCU8Yu8ck/tL/5szYlBbqmS+" crossorigin="anonymous"></script> -->

		<!-- Custom Style and JS -->
		<link rel="stylesheet" href= "<?php echo $root_path; ?>/includes/style/adamthompson.css" type="text/css">

		<script type="text/javascript" src="<?php echo $root_path; ?>/includes/js/main.js"></script>
