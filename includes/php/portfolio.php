<?php 
	$json_path = $root_path."/Portfolio/portfolio.json";
	$json_string = file_get_contents($json_path);
	$folio_obj = json_decode($json_string, true);
	$featured = $folio_obj["portfolio-featured"];
	$folio_rest = $folio_obj["portfolio"];

	if (isset($_GET['p'])) {
		$p = $_GET['p'];
	}
	else {
		$p = 'default full-width';
	}
?>

<?php sectionHeader("Portfolio") ?>

<section class="portfolio <?php echo $p ?>" id="portfolio">
  <div class="gallery featured" id="gallery">
    <ul>
    <?php
    	foreach ($featured as $item) {
			portfolioCard($item);
		}
	?>

    </ul>
  <!-- Are we looking at the portfolio on the home page, or in the portfolio page? -->
 	<?php 
 	if (!$see_more) { ?>
 		<!-- <a class="button large" href="<?php echo $root_path ?>/Portfolio" >See more work <i class="fa fa-arrow-right" aria-hidden="true"></i>
 		</a> -->
 	</div>
 	<?php }
 	else { ?>
 	  <div class="gallery more-portfolio" id="gallery">
 	  <ul>
	 	<?php
	    	foreach ($folio_rest as $item) {
	 			portfolioCard($item);	
			}
	}
	?>

 	</ul>
 	</div>
</section>