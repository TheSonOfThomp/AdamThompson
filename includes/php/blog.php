<?

$medium_user = "@thesonofthomp";
$min_posts = 2;
$url = "https://medium.com/feed/".$medium_user;
$rss = file_get_contents($url);
$x = new SimpleXmlElement($rss);
if (sizeof($x->channel->item) >= $min_posts) {
	
?>
<section class="blog" id="blog">
	<div class="sub-header">
		<div class="container">
			<div class="title">
				Blog
			</div>
		</div>
	</div>
	<div class="container">
	<ul>
<?
	foreach($x->channel->item as $entry) {
		echo "<li><a href='$entry->link' title='$entry->title' target='_blank'>" . $entry->title . "<span class='date_published'> " . date("M j, Y", strtotime($entry->pubDate)) . "</span></a></li>";
	}	
?>
	</ul>
	</div>
</section>
<?
}
?>