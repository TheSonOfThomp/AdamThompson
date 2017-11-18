<?php
	include('includes/php/global-head.php');
	include 'includes/php/helper-functions.php';
?>
		<title><?php echo($page_title) ?></title>

		<!-- <script type="text/javascript" src="<?php echo $root_path; ?>/includes/js/vendor/mixitup.min.js"></script> -->
		
<body id="<?php echo($page_id) ?>" onload="">
	<!-- Google Analytics Code --> 
	<?php 
		if ($DEBUG == false)
			include_once('includes/php/analyticstracking.php'); 
		?>