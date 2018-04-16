<?php sectionHeader("My Toolbox", 'toolbox'); ?>

<?php 
	$json_path = $root_path."/Resume/basicResumeContent.json";
	$json_string = file_get_contents($json_path);
	$folio_obj = json_decode($json_string, true);
	$skills = $folio_obj['skills'];
?>

<section class="skills container hide-mobile" id="toolbox">
		<ul class="program-list"> 
			<?php 
				for ($i=0; $i < 16; $i++) { 
					toolboxItem($skills[$i]);
				}
			?>

<!-- 			<li class="animate resume-item featured ux" id="sketch">
				<div class="app-logo"></div><p class="app-name">Sketch</p>
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
			<li class="animate resume-item featured ux graphics" id="photoshop">
				<div class="app-logo"></div><p class="app-name">Photoshop</p>
			</li>
			<li class="animate resume-item ux graphics" id="ai">
				<div class="app-logo"></div><p class="app-name">Illustrator</p>
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
			<li class="animate resume-item web soft" id="react">
				<div class="app-logo"></div><p class="app-name">React</p>
			</li>
			<li class="animate resume-item featured web soft ux" id="swift">
				<div class="app-logo"></div><p class="app-name">Swift</p>
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
			</li> -->
		</ul>
	</section>