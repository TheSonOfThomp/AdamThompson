<?php 
	$markdown = file_get_contents($p.'.md');
	echo $Parsedown->text($markdown);
?>