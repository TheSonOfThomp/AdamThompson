<?php
	$p = $_GET['p'];
	$f = $_GET['f'];
	$Parsedown = new ParsedownExtra();
	$markdown = file_get_contents($root_path.'/Portfolio/markdown/'.$p.'.md');
	if ($p && !$markdown) {
		// If we can't find the .md file, then redirect to the home page
		echo '<meta http-equiv="Refresh" content="0;'.$root_path.'">';
	}
	?>
	<title>Adam Thompson - <?php echo($p) ?></title>
</head>
<!-- ********** /HEAD ********** -->

<main class="portfolio-page">
<header class="small-header">
		<?php if (!$f) { ?>
			<a href="<?php echo $root_path; ?>/Portfolio">Portfolio</a>
		<?php } ?>
		<a href="<?php echo $root_path; ?>/">Adam Thompson</a>
</header>

<article class="gallery-content <?php echo $p ?>">
	<div class="col single-column">
	<?php
		echo $Parsedown->text($markdown);
	?>
	</div>
</article>
</main>