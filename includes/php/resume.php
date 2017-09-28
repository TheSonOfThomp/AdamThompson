<?php 
	$json_path = $root_path."/Resume/resumeContent.json";
	$json_string = file_get_contents($json_path);
	$folio_obj = json_decode($json_string, true);
	$experience = $folio_obj["experience"];
	$education = $folio_obj["education"];

	function iterateTasks($task_array){
		foreach($task_array as $key) {
		?>
			<li class="resume-item">
				<?php echo $key['task']; ?>
			</li>

		<?php } 
	}
?>

<section class="resume" id="resume">
	<div class="container">
		<div class="section-header">Resume</div>
	</div>
	
	<section class="experience container">

	<?php
    	foreach ($experience as $item) {
    ?>
    	<article class="job" id="<?php echo $item['id']?>">
    		<div class="content-header">
    			<div class="logo-container">
    				<a href="http://<?php echo $item['url'] ?>" target="_blank">
    					<div class="logo vertical-center"></div>
    				</a>
    			</div>
    			<div class="header-text">
    				<h1 class="item-institution">
    					<?php echo $item['company']; ?>
    				</h1>
					<h2 class="item-title">
						<?php echo $item['position']; ?>
					</h2>
					<span class="block-note">
						<span class="item-location">
						<?php echo $item['location']; ?>
						</span>
						<span class="item-duration">
						<?php echo $item['term']; ?>
						</span>
					</span>
					<button class="show more">Show</button>
				</div>
    		</div>
    		<div class="resume-content">
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
    <?php
    	foreach ($education as $item) {
    ?>
    	<article class="school" id="<?php echo $item['id']?>">
    		<div class="content-header">
    			<div class="logo-container">
    				<a href="http://<?php echo $item['url'] ?>" target="_blank">
    					<div class="logo vertical-center"></div>
    				</a>
    			</div>
    			<div class="header-text">
    				<h1 class="item-institution">
    					<?php echo $item['school']; ?>
    				</h1>
					<h2 class="item-title">
						<?php echo $item['program']; ?>
					</h2>
					<span class="block-note">
						<span class="minor">
								<?php echo $item['minor']?> Minor
						</span>
						<span class="item-duration">
							<?php echo $item['class']; ?>
						</span>
					</span>
					<button class="show more">Show</button>
				</div>
    		</div>
    		<div class="resume-content">
				<ul class="resume-list">
					<?php 
						foreach ($item['courses'] as $course) 
						{ ?>
							<li class="resume-item">
								<?php echo $course['name']; ?>
								<span class="item-code">
									<?php echo $course['code']; ?>
								</span>
								<span class="item-duration">
									<?php echo $course['term']; ?>
								</span>
								<div class="list-description">
									<?php echo $course['description']; ?>
								</div>
							</li>
					<?php } ?>
				</ul>
			</div>

    	</article>
    <?php } ?>

		<!-- <a class="button large" target="_blank" href="http://www.linkedin.com/in/adammthompson">LinkedIn Profile</a> -->
		
	</section>

	<section class="skills container" id="toolbox">
		<div class="subsection-header">My Toolbox
		</div>
		<ul class="program-list"> 
			<li class="animate resume-item featured ux" id="sketch">
				<div class="app-logo"></div><p class="app-name">Sketch</p>
			</li>
			<li class="animate resume-item featured ux graphics" id="photoshop">
				<div class="app-logo"></div><p class="app-name">Photoshop</p>
			</li>
			<li class="animate resume-item ux graphics" id="ai">
				<div class="app-logo"></div><p class="app-name">Illustrator</p>
			</li>
			<li class="animate resume-item soft ux" id="framer">
				<div class="app-logo"></div><p class="app-name">Framer</p>
			</li>

			<li class="animate resume-item soft ux" id="origami">
				<div class="app-logo"></div><p class="app-name">Origami</p>
			</li>	
			<li class="animate resume-item ux" id="balsamiq">
				<div class="app-logo"></div><p class="app-name">Balsamiq</p>
			</li>
			<li class="animate resume-item ux web soft" id="javascript">
				<div class="app-logo"></div><p class="app-name">JavaScript</p>
			</li>		
			<li class="animate resume-item featured ux web soft" id="html5">
				<div class="app-logo"></div><p class="app-name">HTML</p>
			</li>		
			<li class="animate resume-item web soft us" id="python">
				<div class="app-logo"></div><p class="app-name">Python</p>
			</li>
			<li class="animate resume-item featured web soft ux" id="swift">
				<div class="app-logo"></div><p class="app-name">Swift</p>
			</li>
			<li class="animate resume-item web soft" id="react">
				<div class="app-logo"></div><p class="app-name">React</p>
			</li>
			<li class="animate resume-item featured soft" id="arduino">
				<div class="app-logo"></div><p class="app-name">Arduino</p>
			</li>
			<li class="animate resume-item graphics" id="ae">
				<div class="app-logo"></div><p class="app-name">After Effects</p>
			</li>
			<li class="animate resume-item graphics" id="indesign">
				<div class="app-logo"></div><p class="app-name">InDesign</p>
			</li>
			<li class="animate resume-item featured industrial" id="autocad">
				<div class="app-logo"></div><p class="app-name">AutoCad</p>
			</li>
			<li class="animate resume-item featured industrial" id="inventor">
				<div class="app-logo"></div><p class="app-name">Inventor</p>
			</li>
		</ul>
	</section>
</section>