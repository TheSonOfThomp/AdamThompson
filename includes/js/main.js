//Toggle V1
var design_types = ["Experience", "Interaction", "Product", "Industrial", "Web"];
$(document).ready(function(){
	//Rotate through the header 
	var x = 0;
	setInterval(function(){
		console.log(x + ", " + x);
		$(".tagline em#tag1").fadeOut(function() {
			$(this).text(design_types[x]);
		}).fadeIn(1000);
		x++;
		// reset counter to avoid overflow
		if (x == design_types.length)
			x = 0;
	},6000);

	// // Toggle V2
	// for (var i =  2 ; i <= 4; i++) {
	// 	$('.tagline em#tag' + i).slideToggle();
	// };

	// var y = 1;
	// setInterval(function(){
	// 	console.log(y + ',')
	// 	$('.tagline em#tag' + y).slideToggle();
	// 	y++;
	// 	if (y>=5) {
	// 		y=1;
	// 	};
	// 	console.log(y + ';')
	// 	$('.tagline em#tag' + y).slideToggle();

	// }, 6000);

	// var port_height = $('.portfolio .menu').height() + 2 * $('.portfolio .gallery li').height();
	// $('.portfolio').height(port_height);

	// Mobile - show Resume content
	if ($(window).width() <= 768) {
		$('.job').click(function(){
			$('.resume-list',this).slideToggle();
		});
		$('.school').click(function(){
			$('.resume-list',this).slideToggle();
		});
	}
});