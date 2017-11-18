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

<?php sectionHeader("Resume") ?>

<section class="resume" id="resume">
	
	<section class="experience container">

	<?php
    	foreach ($experience as $item) {
    		resumeItem($item);
		}
    	foreach ($education as $item) {
    		resumeItem($item);
    	}	
    ?>

		<!-- <a class="button large" target="_blank" href="http://www.linkedin.com/in/adammthompson">LinkedIn Profile</a> -->
		
	</section>
</section>