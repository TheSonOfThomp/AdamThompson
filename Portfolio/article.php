<?php
	$p = $_GET['p'];
	$Parsedown = new ParsedownExtra();
	$markdown = file_get_contents($root_path.'/Portfolio/markdown/'.$p.'.md');
	if ($p && !$markdown) {
		// If we can't find the .md file, then redirect to the home page
		echo '<meta http-equiv="Refresh" content="0;'.$root_path.'">';
	}
	?>
	<title>Adam Thompson - <?php echo($p) ?></title>

	<?php
		// Automatically set up the Next/Prev Navigation buttons
		$json_path = $root_path."/Portfolio/portfolio.json";
		$json_string = file_get_contents($json_path);
		$folio_obj = json_decode($json_string, true);
		$featured = $folio_obj["portfolio-featured"];
		
		$prev = '';
		$next = '';
		$prevURL = '';
		$nextURL = '';
		$prevName = '';
		$nextName = '';

		foreach ($featured as $key => $value) {
			if ($p === $value["id"]) {
				$prev = is_null($featured[$key - 1]["id"]) ? $root_path : $featured[$key - 1]["id"];	
				$next = is_null($featured[$key + 1]["id"]) ? $root_path : $featured[$key + 1]["id"];
				$prevURL = is_null($featured[$key - 1]["id"]) ? $root_path : '?p='.$featured[$key - 1]["id"];	
				$nextURL = is_null($featured[$key + 1]["id"]) ? $root_path : '?p='.$featured[$key + 1]["id"];
				$prevName = is_null($featured[$key - 1]["id"]) ? 'Home' : $featured[$key - 1]["name"];
				$nextName = is_null($featured[$key + 1]["id"]) ? 'Home' : $featured[$key + 1]["name"];
				break;
			}
		}

	?>
</head>
<!-- ********** /HEAD ********** -->

<main class="portfolio-page <?php echo $p ?>">
	<header class="small-header <?php echo $p ?>">
			<a class="back hide" onclick="window.history.back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i>Portfolio</a>
			<a class="header-title" href="<?php echo $root_path; ?>/">Adam Thompson</a>
			<script type="text/javascript">
			if (document.referrer == "<?php echo $root_path ?>/Portfolio/")
				$('a.back').removeClass('hide');
			</script>
	</header>
	<nav>
		<div class="folio-nav prev <?php echo $prev ?>">
			<a href="<?php echo $prevURL ?>"><?php echo $prevName ?></a>
		</div>
		<div class="folio-nav next <?php echo $next ?>">
			<a href="<?php echo $nextURL ?>"><?php echo $nextName ?></a>
		</div>
	</nav>

	<article class="gallery-content <?php echo $p ?>">
		<div class="col single-column">
		<?php
			echo $Parsedown->text($markdown);
		?>
		</div>
	</article>
</main>