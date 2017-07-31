<?php
	include('includes/php/global-head.php');
?>
		<title><?php echo($page_title) ?></title>
		<link rel="stylesheet" type="text/css" href="<?php echo $root_path; ?>/includes/js/vendor/vanillabox/theme/bitter/vanillabox.css">

		<!-- SCRIPTS -->
		<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script type="text/javascript" src="https://raw.githubusercontent.com/patrickkunka/mixitup/v3/dist/mixitup.min.js"></script>
		<script type="text/javascript" src="<?php echo $root_path; ?>/includes/js/vendor/vanillabox/jquery.vanillabox-0.1.7.min.js"></script>
		<script type="text/javascript" src="<?php echo $root_path; ?>/includes/js/main.js"></script>

		<!-- <script type="text/javascript" src="<?php echo $root_path; ?>/includes/js/portfolio.js"></script> -->
</head> 
<body id="<?php echo($page_id) ?>" onload="">
	<!-- Google Analytics Code --> 
	<?php include_once('includes/php/analyticstracking.php'); ?>