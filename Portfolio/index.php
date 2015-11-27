<?php
include('../includes/php/global-head.php');
include('portfolio_switch.php');
?>
<title>Adam Thompson - <?php echo($p_title) ?></title>
<link rel="stylesheet" href= "<?php echo $root_path; ?>/includes/css/header.css" type="text/css">
<link rel="stylesheet" href= "<?php echo $root_path; ?>/includes/css/mobile.css" type="text/css">
<link rel="stylesheet" type="text/css" href="<?php echo $root_path; ?>/includes/css/portfolio-hilight.css">

<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="<?php echo $root_path; ?>/includes/js/vendor/jquery.mixitup.min.js"></script>
<script type="text/javascript" src="<?php echo $root_path; ?>/includes/js/portfolio.js"></script>
</head>
<!-- ********** /HEAD ********** -->


<!-- <header>
	<div class="sub-header">
		<div class="container">
			<div class="title"><?php echo $p_title ?></div>
			<ul>
				<li class="back-to-main"><a href="<?php echo $root_path?>">Back</a></li>
			</ul>
		</div>
	</div>	
</header> -->
<main>
<?php include('../includes/php/header.php'); ?>
<article class="gallery-content">
	<h2 class="portfolio-title"><?php echo $p_title ?></h2>
	<div class="col left-column">
		<p class="folio_paragraph" id="paragraph1"><?php echo $p_p1; ?></p>
		<p class="folio_paragraph" id="paragraph2"><?php echo $p_p2; ?></p>
		<figure class="folio_image" id="img2">
			<a href="<?php echo $img2 ; ?>" target="_blank">
				<img src="<?php echo $img2; ?>">
			</a>
		<figcaption><?php echo $img2_caption ?></figcaption>
		</figure>
		<p class="folio_paragraph" id="paragraph4"><?php echo $p_p4; ?></p>
		<p class="folio_paragraph" id="paragraph5"><?php echo $p_p5; ?></p>
		<figure class="folio_image" id="img4">
			<a href="<?php echo $img4 ; ?>" target="_blank">
				<img src="<?php echo $img4; ?>">
			</a>
			<figcaption><?php echo $img4_caption ?></figcaption>
		</figure>
	</div>
	<div class="col right-column">
		<figure class="folio_image" id="img1">
			<a href="<?php echo $img1 ; ?>" target="_blank">
				<img src="<?php echo $img1; ?>">
			</a>
			<figcaption><?php echo $img1_caption ?></figcaption>
		</figure>
		<p class="folio_paragraph" id="paragraph3"><?php echo $p_p3; ?></p>
		<figure class="folio_image" id="img3">
			<a href="<?php echo $img3 ; ?>" target="_blank">
				<img src="<?php echo $img3; ?>">
			</a>
			<figcaption><?php echo $img3_caption ?></figcaption>
		</figure>
		<p class="folio_paragraph" id="paragraph6"><?php echo $p_p6; ?></p>
		<figure class="folio_image" id="img5">
			<a href="<?php echo $img5 ; ?>" target="_blank">
				<img src="<?php echo $img5; ?>">
			</a>
			<figcaption><?php echo $img5_caption ?></figcaption>
		</figure>
	</div>
</article>
<script type="text/javascript">
	// // Scroll to the h2
	// h2_location = $('h2').offset().top;
 //    $('body').animate({scrollTop: h2_location}, 650);
</script>
</main>
</body>
</html>
