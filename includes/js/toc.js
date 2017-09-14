// var toc = <?php echo markdown_toc('markdown/'.$p.'.md');?>;

$(document).ready(function() {
	// Create Links for TOC
	$('h2').attr('id', function(){
		return $(this).text().toLowerCase().replace(' ', '-');
	});
	$('h3').attr('id', function(){
		return $(this).text().toLowerCase().replace(' ', '-');
	});
	$('h4').attr('id', function(){
		return $(this).text().toLowerCase().replace(' ', '-');
	});
	$('h5').attr('id', function(){
		return $(this).text().toLowerCase().replace(' ', '-');
	});

	// Create TOC (only if more than 6 sections)
	if (toc.length > 8)
		for (var i = 0; i <= toc.length-1; i++) {
			level= toc[i]["level"] - 1;
			text = toc[i]["text"];
			id = text.toLowerCase().replace(' ', '-');
			if (level < 5)
				$("#toc").append("<a class='toc-h" + level + "' href='#" + id + "'> " + text + "</a>");
		}
	else $("#toc").addClass('hide')

	// Image lighbox
	$('.folio_image.image').each(function() {
		if ($('a', this).attr('href') == '') {
			console.log($(this).attr('id') + ' does not exist');
			$(this).remove();
		}
	});

	$('.folio_paragraph').each(function() {
		if ($(this).text() == '') {
			console.log($(this).attr('id') + ' does not exist');
			$(this).remove();
		}
	});

	$('.folio_image.video').each(function() {
		if ($('iframe', this).attr('src') == '') {
			console.log($(this).attr('id') + ' does not exist');
			$(this).remove();
		}
	});
	
	// $('.folio_image a').vanillabox({
	// 	loop: true,
	// });
});

// Add make all links open a new tab
$('p a').attr('target', '_blank');