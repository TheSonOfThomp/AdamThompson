<?php
include_once('../includes/php/global-head.php');
include_once('../includes/php/analyticstracking.php');
include('../includes/plugins/Parsedown.php');
include('../includes/plugins/ParsedownExtra.php');
?>

<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="<?php echo $root_path; ?>/includes/js/vendor/jquery.mixitup.min.js"></script>
<script type="text/javascript" src="<?php echo $root_path; ?>/includes/js/portfolio.js"></script>

	<?php 
	// Decide whether we're showing an article or the full portfolio page
	// this is pretty hacky, but it works without any frameworks
	if (isset($_GET['p']))
		include('article.php');

	else 
		{ ?>
		<title>Adam Thompson - Portfolio</title>
		</head>
		<body class="portfolio">
			<header class="portfolio sticky">
				<div class="title">
					<a href="<?php echo $root_path; ?>/">Adam Thompson</a>
					<div class="tagline">Portfolio</div>
				</div>
			</header>

	<?php
		$see_more = true;
		include('../includes/php/portfolio.php');
		include('../includes/php/footer.php');

		}
	?>

</body>
</html>
