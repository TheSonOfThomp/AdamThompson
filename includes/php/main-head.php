<?php
	include('includes/php/global-head.php');
?>
		<title><?php echo($page_title) ?></title>
		<link rel="stylesheet" href= "<?php echo $root_path; ?>/includes/css/header.css" type="text/css">
		<link rel="stylesheet" href= "<?php echo $root_path; ?>/includes/css/portfolio.css" type="text/css">
		<link rel="stylesheet" href= "<?php echo $root_path; ?>/includes/css/resume.css" type="text/css">
		<link rel="stylesheet" href= "<?php echo $root_path; ?>/includes/css/mobile.css" type="text/css">
		<link rel="stylesheet" type="text/css" href="<?php echo $root_path; ?>/includes/js/vendor/vanillabox/theme/bitter/vanillabox.css">

		<!-- SCRIPTS -->
		<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script type="text/javascript" src="<?php echo $root_path; ?>/includes/js/vendor/jquery.mixitup.min.js"></script>
		<script type="text/javascript" src="<?php echo $root_path; ?>/includes/js/vendor/vanillabox/jquery.vanillabox-0.1.7.min.js"></script>
		<script type="text/javascript" src="<?php echo $root_path; ?>/includes/js/main.js"></script>
		<!-- <script type="text/javascript" src="<?php echo $root_path; ?>/includes/js/portfolio.js"></script> -->
</head> 
<body id= "<?php echo($page_id) ?>" onload="__pauseAnimations();">
	<!-- Google Analytics Code --> 
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	
	  ga('create', 'UA-41604709-1', 'adamthompson.ca');
	  ga('send', 'pageview');
	  _gaq.push(['_setCustomVar',
	      1,                  // This custom var is set to slot #1.  Required parameter.
	      'Screen Width',     // The name acts as a kind of category for the user activity.  Required parameter.
	      $(window).width(),  // This value of the custom variable.  Required parameter.
	      3                   // Sets the scope to session-level.  Optional parameter.
	   ]);
	  	_gaq.push(['_setCustomVar',
	      2,                  // This custom var is set to slot #2.  Required parameter.
	      'Screen height',     // The name acts as a kind of category for the user activity.  Required parameter.
	      $(window).height(),  // This value of the custom variable.  Required parameter.
	      3                   // Sets the scope to session-level.  Optional parameter.
	   ]);
	</script>

	