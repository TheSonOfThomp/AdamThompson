<?php
	include('includes/php/global-head.php');
?>
		<title><?php echo($page_title) ?></title>

		<!-- SCRIPTS -->
		<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<!-- <script type="text/javascript" src="<?php echo $root_path; ?>/includes/js/vendor/mixitup.min.js"></script> -->
		
<body id="<?php echo($page_id) ?>" onload="">
	<!-- Google Analytics Code --> 
	<?php 
		if ($DEBUG == false)
			include_once('includes/php/analyticstracking.php'); 
		?>