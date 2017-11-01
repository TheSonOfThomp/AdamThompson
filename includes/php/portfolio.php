<?php 
	$json_path = $root_path."/Portfolio/portfolio.json";
	$json_string = file_get_contents($json_path);
	$folio_obj = json_decode($json_string, true);
	$featured = $folio_obj["portfolio-featured"];
	$folio_rest = $folio_obj["portfolio"];
?>

<section class="portfolio default full-width" id="portfolio">
  <div class="gallery featured" id="gallery">
    <ul>
    <?php
    	foreach ($featured as $item) {
    ?>

	<li class="folio-item featured 
		<?php foreach ($item['tags'] as $tag) { echo ' '.$tag;}?>" 
		id="<?php echo $item['id']?>" 
		data-published-date="<?php echo $item['date']?>">
		
		<a href="<?php echo $root_path ?>/Portfolio/?p=<?php echo $item['id']?>">
			<div class="hover-state">
				<div class="folio-hover">
					<span class="folio-title"><?php echo $item["name"]?></span>
					<br/>
					<span class="folio-description"><?php echo $item["description"]?></span>
					<span class="folio-type"><?php echo $item["type"]?></span>
				</div>
			</div>
			<img src="<?php echo $root_path ?>/includes/portfolio_images/<?php echo $item['image_url']?>">
		</a>
	</li>

<?php } ?>

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
    ?>

 	<li class="folio-item folio-rest
		<?php foreach ($item['tags'] as $tag) { echo ' '.$tag;}?>" 
		id="<?php echo $item['id']?>" 
		data-published-date="<?php echo $item['date']?>">
		
		<a href="<?php echo $root_path ?>/Portfolio/?p=<?php echo $item['id']?>">
			<img src="<?php echo $root_path ?>/includes/portfolio_images/<?php echo $item['image_url']?>">
			<div class="hover-state">
			<div class="folio-hover">
				<span class="folio-title"><?php echo $item["name"]?></span>
				<br/>
				<span class="folio-description"><?php echo $item["description"]?></span>
				<span class="folio-type"><?php echo $item["type"]?></span>
			</div>
			</div>
		</a>
	</li>
 	<?php } }?>

 	</ul>
 	</div>
</section>