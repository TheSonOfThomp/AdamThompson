<?php
	include('includes/php/global-head.php');
	include 'includes/php/helper-functions.php';
?>
		<title><?php echo($page_title) ?></title>
		
<body id="<?php echo($page_id) ?>" onload="">
	<!-- Google Analytics Code --> 
	<?php 
		if ($DEBUG == false)
			include_once('includes/php/analyticstracking.php'); 
		?>