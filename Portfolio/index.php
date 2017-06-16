<?php
include('../includes/php/global-head.php');
include('portfolio_switch.php');
include('../includes/plugins/Parsedown.php');
include('../includes/plugins/ParsedownExtra.php');
include('../includes/plugins/toc.php');
?>
<title>Adam Thompson - <?php echo($p_title) ?></title>
<!-- <link rel="stylesheet" href= "<?php echo $root_path; ?>/includes/css/header.css" type="text/css">
<link rel="stylesheet" href= "<?php echo $root_path; ?>/includes/css/mobile.css" type="text/css"> -->
<link rel="stylesheet" type="text/css" href="<?php echo $root_path; ?>/includes/style/portfolio-hilight.css">
<link rel="stylesheet" type="text/css" href="<?php echo $root_path; ?>/includes/js/vendor/vanillabox/theme/bitter/vanillabox.css">

<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="<?php echo $root_path; ?>/includes/js/vendor/jquery.mixitup.min.js"></script>
<script type="text/javascript" src="<?php echo $root_path; ?>/includes/js/vendor/vanillabox/jquery.vanillabox-0.1.7.min.js"></script>
<script type="text/javascript" src="<?php echo $root_path; ?>/includes/js/portfolio.js"></script>
</head>
<!-- ********** /HEAD ********** -->

<main class="portfolio-page">
<?php include('../includes/php/header.php'); ?>

<article class="gallery-content">
	<div id="toc hide">
	</div>
	<!-- TODO: ADD LEFT ALIGNED LOGO/MONOGRAM -->
	<h1 class="portfolio-title"><?php echo $p_title ?></h2>	
		<div class="col single-column">

	<?php if ($useMarkdown) {
		$Parsedown = new ParsedownExtra();
		$markdown = file_get_contents($p.'.md');?>
		<script type="text/javascript">
		var toc = <?php echo markdown_toc($p.'.md');?>;
		</script>
		<?php
		echo $Parsedown->text($markdown);
	}
	else if ($useTemplate) {
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


		// Create Links for TOC
		$('h2').attr('id', function(){
			return $(this).text().toLowerCase().replace(' ', '-');
		});
		$('h3').attr('id', function(){
			return $(this).text().toLowerCase().replace(' ', '-');
		});
		$('h4').attr('id', function(){
			return $(this).text().toLowerCase().replace(' ', '-');
		});
		$('h5').attr('id', function(){
			return $(this).text().toLowerCase().replace(' ', '-');
		});

		// Create TOC (only if more than 6 sections)
		if (toc.length > 8)
			for (var i = 0; i <= toc.length-1; i++) {
				level= toc[i]["level"] - 1;
				text = toc[i]["text"];
				id = text.toLowerCase().replace(' ', '-');
				if (level < 5)
					$("#toc").append("<a class='toc-h" + level + "' href='#" + id + "'> " + text + "</a>");
			}
		else $("#toc").addClass('hide')

		// Image lighbox
		$('.folio_image.image').each(function() {
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

		$('.folio_image.video').each(function() {
			if ($('iframe', this).attr('src') == '') {
				console.log($(this).attr('id') + ' does not exist');
				$(this).remove();
			}
		});
		
		$('.folio_image a').vanillabox({
			loop: true,
		});
	});

	// Add make all links open a new tab
	$('p a').attr('target', '_blank');
</script>
</main>
</body>
</html>
