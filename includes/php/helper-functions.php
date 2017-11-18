<?php function sectionHeader($title) { ?>

	<div class="section-header">
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