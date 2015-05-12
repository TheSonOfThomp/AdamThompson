 // portfolio

//Show More
$('.gallery .button #more').click(function(){
	$('.gallery ul li.two').show(500);
	$('.gallery ul li.three').show(500);
	$('.gallery ul li.four').show(500);
	$('.gallery ul li.button #more').hide(500);
	$('.gallery ul li.button #fewer').delay(300).show(500);
});
//Show less
$('.gallery .button #fewer').click(function(){
	$('.gallery ul li.two').hide(500);
	$('.gallery ul li.three').hide(500);
	$('.gallery ul li.four').show(500);
	$('.gallery ul li.button #fewer').hide(500);
	$('.gallery ul li.button #more').delay(300).show(500);
});

 //Change the title, image & description of the port
 $(".gallery ul li a").click(function() {
 	var title = $(this).attr('title');
 	var description = $(this).attr('alt');
 	var link = $(this).attr('link');
 	var linkname = $(this).attr('linkname');
 	var src = $('img', this).attr('src');
 	var youtube_src = $('img', this).attr('youtube');
 	var filename = '';

 	// Set Title
 	$('.port .description h1').text(title);

 	// Set Description
 	$('.port .description p').text(description);

 	//Set filename
 	filename = src.substring(0, src.search('.png'));

 	// Check if image or video
 		//If Image
 	if ($(this).hasClass('image')) { // IMAGE
 		$('#image.port img').css('display', 'inline');
 		$('#video.port video').css('display', 'none');
 		src = filename + '.png';
 		console.log('Image: ' + src);

 		// Set source
 		$('#image.port .main').attr('src', src); 
 	}
 		//Else Video
 	else if ($(this).hasClass('video')) { //VIDEO
 		$('#video.port video').css('display', 'inline');
 		$('#video.port #youtube').css('display', 'none');
 		$('#image.port img').css('display', 'none');

 		src = filename + '.mp4';
 		console.log('Video: ' + src);

 		if(filename == 'includes/portfolio_images/MediaGo'){
 			$('#video.port .main').css('margin-bottom', '17px');
 		}

		if(filename == 'includes/portfolio_images/Kwasind'){
 			$('#video.port video').attr('autoplay', 0);
 			$('#video.port video').attr('loop', 0);
 			$('#video.port video').attr('controls', 1);
 		}

 		// Set source
 		$('#video.port .main ').attr('src', src); 
 	}

 	//Set secondary image sources
 	for (var i = 2; i < 5; i++) {
 		var j = i.toString();
 		// If image exists, we place it in the port
 		if (UrlExists(filename + '-' + j + '.png')) {
 			$('.port #secondary #img' + j).css('display', 'inline');
 			$('.port #secondary #img' + j).attr('src', filename + '-' + j + '.png');
 			 	console.log('Loading: ' + filename + j);
 		}

 		// else, we don't display that element
 		else {
 			$('.port #secondary #img' + j).css('display', 'none');
 		}
 	}

 	//Set links
 	if (link) {
 		$('.port #portlink').css('display', 'inline');
 		$('.port #portlink').attr('href', link);
 		$('.port #portlink').text(linkname);
 	}
 	else {
 		$('.port #portlink').css('display', 'none');
 	}
});

// Open the port viewer
 $('.gallery ul li a').click(function() {
     var itemID = $(this).attr('href');
     $('.gallery ul').addClass('item_open');
     $(itemID).addClass('item_open');
     return false;
 });

// Close the Port viewer
 $('.close').click(function() {
     $('.port, .gallery ul').removeClass('item_open');
     return false;
 });

//Close the port viewer when user clisks about
 $('.about').click(function() {
 	console.log('closing');
     $('.port, .gallery ul').removeClass('item_open');
     return false;
 });


// Animate the port viewer ?
 $(".gallery ul li a").click(function() {
     $('html, body').animate({
         scrollTop: parseInt($("#top").offset().top)
     }, 400);
 });


 function UrlExists(url)
{   
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}