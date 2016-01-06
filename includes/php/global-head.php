<?php $page_title = ucfirst($page_id);
	include_once('mySchoolTime.php');

	$DEBUG = false;

	if ($DEBUG) {
	 	$root_path = 'http://localhost:9999/adam-thompson-4';
	 } 
	 else {
	 	$root_path = 'http://adamthompson.ca';
	 }
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
	"http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0;">
		<meta http-equiv="content-type" content="text/html; charset=utf-8">
		<meta name="keywords" content="design, user experience, product, industrial, gui">
		<link rel="shortcut icon" type="image/png" href="<?php echo $root_path?>/includes/image_assets/@_light.png">

		<!-- STYLE & FONTS -->
		<link href='http://fonts.googleapis.com/css?family=Lato:300, 100' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Raleway:200, 300' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic' rel='stylesheet' type='text/css'>

		<link rel="stylesheet" href= "<?php echo $root_path; ?>/includes/css/global.css" type="text/css">
