<?php
include('../includes/php/global-head.php');
include('portfolio_switch.php');
?>
<title>Adam Thompson - <?php echo($p_title) ?></title>
<link rel="stylesheet" type="text/css" href="<?php echo $root_path; ?>/includes/css/portfolio-hilight.css">
</head>
<!-- ********** /HEAD ********** -->


<header>
	<div class="sub-header">
		<div class="container">
			<div class="title"><?php echo $p_title ?></div>
			<ul>
				<li class="back-to-main"><a href="<?php echo $root_path?>">Back</a></li>
			</ul>
		</div>
	</div>	
</header>
<article class="gallery-content">
	<div class="col left-column">
		<p class="folio_paragraph" id="paragraph1"><?php echo $p_p1; ?></p>
		<p class="folio_paragraph" id="paragraph2"><?php echo $p_p2; ?></p>
		<figure class="folio_image" id="img2">
			<img src="<?php echo $img2; ?>">
		<figcaption><?php echo $img2_caption ?></figcaption>
		</figure>
		<p class="folio_paragraph" id="paragraph4"><?php echo $p_p4; ?></p>
		<p class="folio_paragraph" id="paragraph5"><?php echo $p_p5; ?></p>
		<figure class="folio_image" id="img4">
			<img src="<?php echo $img4; ?>">
			<figcaption><?php echo $img4_caption ?></figcaption>
		</figure>
	</div>
	<div class="col right-column">
		<figure class="folio_image" id="img1">
			<img src="<?php echo $img1; ?>">
			<figcaption><?php echo $img1_caption ?></figcaption>
		</figure>
		<p class="folio_paragraph" id="paragraph3"><?php echo $p_p3; ?></p>
		<figure class="folio_image" id="img3">
			<img src="<?php echo $img3; ?>">
			<figcaption><?php echo $img3_caption ?></figcaption>
		</figure>
		<p class="folio_paragraph" id="paragraph6"><?php echo $p_p6; ?></p>
		<figure class="folio_image" id="img5">
			<img src="<?php echo $img5; ?>">
			<figcaption><?php echo $img5_caption ?></figcaption>
		</figure>
	</div>
</article>

<?php 
include $root_path.'/includes/php/footer.php';
?>
