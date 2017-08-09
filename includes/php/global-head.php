<?php $page_title = ucfirst($page_id);
	include_once('mySchoolTime.php');
	
	if ($_SERVER['SERVER_NAME'] == "localhost") {
		$DEBUG = true;
		$root_path = 'http://localhost:9999/adam-thompson-4';
	}
	else {
		$DEBUG = false;
		$root_path = 'http://adamthompson.ca';
	}
	
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

		<!-- STYLE & FONTS -->
			<!-- Raleway -->
		<link href='http://fonts.googleapis.com/css?family=Raleway:200,300' rel='stylesheet' type='text/css'>
			<!-- Merriweather -->
		<link href='http://fonts.googleapis.com/css?family=Merriweather:300,300italic' rel='stylesheet' type='text/css'>
			<!-- Montserrat -->
		<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400" rel="stylesheet">
			<!-- Lato -->
		<!-- <link href='http://fonts.googleapis.com/css?family=Lato:400' rel='stylesheet' type='text/css'> -->

		<link rel="stylesheet" href= "<?php echo $root_path; ?>/includes/style/adamthompson.css" type="text/css">
