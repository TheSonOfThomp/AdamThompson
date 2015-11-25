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

	// Mobile - show Resume content
	if ($(window).width() <= 768) {
		$('.job').click(function(){
			$('.resume-list',this).slideToggle();
		});
		$('.school').click(function(){
			$('.resume-list',this).slideToggle();
		});
	}

	// $('.gallery .folio-item a').vanillabox();

});