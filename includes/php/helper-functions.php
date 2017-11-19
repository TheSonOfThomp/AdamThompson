<?php function sectionHeader($title, $id='') { ?>
	<?php 
		if ($id == '') {
			$id = $title;
		}
	?>

	<div class="section-header" id="<?php echo $id ?>">
		<div class="header-underline">
			<h1><?php echo $title ?></h1>
		</div>
	</div>	
<?php }; ?>


<?php function resumeItem($item) { ?>

	<article class="job" id="<?php echo $item['id']?>">
    		<div class="content-header">
    			<div class="logo-container">
    				<a href="http://<?php echo $item['url'] ?>" target="_blank">
    					<div class="logo vertical-center"></div>
    				</a>
    			</div>
    			<div class="header-text">
    				<div>
    					<h1 class="item-institution">
	    					<?php echo $item['place']; ?>
	    				</h1>
						<h2 class="item-title">
							<?php echo $item['position']; ?>
						</h2>
    				</div>
    				<div>
    					<div class="item-summary">
							<?php echo $item['summary']; ?>
						</div>
						<button class="show more">Show</button>
    				</div>
				</div>
    		</div>
    		<div class="more-resume-content">
				<ul class="resume-list">
					<?php 
					if (array_key_exists('header', $item['responsibilities'][0])) {

						foreach ($item['responsibilities'] as $value)
						{ ?>
							<h4><?php echo $value['header'];?></h4>
						<?php 
							iterateTasks($value['responsibilities']);
						}
					} else {
						iterateTasks($item['responsibilities']);
					}
					?>
				</ul>
			</div>
		</article>
<?php } ?>

<?php function portfolioCard($item) { ?>
	<?php 
		$link_path = $root_path."Portfolio/?p=".$item['id'];
		$img_path = $root_path."includes/portfolio_images/".$item['image_url']; 
	?>

	<li class="folio-item featured
		<?php foreach ($item['tags'] as $tag) { echo ' '.$tag;}?>" 
		id="<?php echo $item['id']?>" 
		data-published-date="<?php echo $item['date']?>">

		<a class="portfolio-card" href="<?php echo $link_path ?>">

			<div class="hover-state"></div>
			<div class="folio-info">
				<span class="folio-title"><?php echo $item["name"]?></span>
				<br/>
				<span class="folio-description"><?php echo $item["description"]?></span>
				<span class="folio-type"><?php echo $item["type"]?></span>
			</div>
			<figure class="folio-img">
				<img src="<?php echo $img_path ?>">
			</figure>
		</a>
	</li>
<?php } ?>

<?php function toolboxItem($item) { ?>

	<li class="animate toolbox-ttem" id="<?php echo $item[1][0] ?>">
		<div class="app-logo"></div>
		<p class="app-name"><?php echo $item[0] ?></p>
	</li>

<?php } ?>