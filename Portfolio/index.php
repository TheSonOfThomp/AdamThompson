<?php
include('../includes/php/global-head.php');
include('portfolio_switch.php');
?>
<title>Adam Thompson - <?php echo($p_title) ?></title>
<link rel="stylesheet" href= "<?php echo $root_path; ?>/includes/css/header.css" type="text/css">
<link rel="stylesheet" href= "<?php echo $root_path; ?>/includes/css/mobile.css" type="text/css">
<link rel="stylesheet" type="text/css" href="<?php echo $root_path; ?>/includes/css/portfolio-hilight.css">
<link rel="stylesheet" type="text/css" href="<?php echo $root_path; ?>/includes/js/vendor/vanillabox/theme/bitter/vanillabox.css">

<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="<?php echo $root_path; ?>/includes/js/vendor/jquery.mixitup.min.js"></script>
<script type="text/javascript" src="<?php echo $root_path; ?>/includes/js/vendor/vanillabox/jquery.vanillabox-0.1.7.min.js"></script>
<script type="text/javascript" src="<?php echo $root_path; ?>/includes/js/portfolio.js"></script>
</head>
<!-- ********** /HEAD ********** -->

<main>
<?php include('../includes/php/header.php'); ?>


<article class="gallery-content">
	<h2 class="portfolio-title"><?php echo $p_title ?></h2>	
	<div class="col single-column">
		<img class="cover-photo" src="<?php echo $cover_photo ?>">

	<?php if ($useTemplate) {
		include('portfolio-template.php');
	}
	else {
		include($HTML_FILE);
	}
	?>
	</div>
</article>
<script type="text/javascript">
	$(document).ready(function() {

		$('.folio_image').each(function() {
			if ($('a', this).attr('href') == '') {
				console.log($(this).attr('id') + ' does not exist');
				$(this).remove();
			}
		});

		$('.folio_paragraph').each(function() {
			if ($(this).text() == '') {
				console.log($(this).attr('id') + ' does not exist');
				$(this).remove();
			}
		});
		
		$('.folio_image a').vanillabox({
			loop: true,
		});
	});

	// // Scroll to the h2
	// h2_location = $('h2').offset().top;
 //    $('body').animate({scrollTop: h2_location}, 650);
</script>
</main>
</body>
</html>
