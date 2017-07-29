//Toggle V1
var design_types = ["Product", "UX", "Web", "Interaction"];

var filterResume = false;

var hideResumeText = true

$(document).ready(function(){
	
	//Rotate through the header 
	var x = 0;
	setInterval(function(){
		$(".tagline em#tag1").fadeOut(function() {
			$(this).text(design_types[x]);
		}).fadeIn(1000);
		x++;
		// reset counter to avoid overflow
		if (x == design_types.length)
			x = 0;
	}, 4000);

	// show Resume content
	if ($(window).width() <= 768 || hideResumeText) {
		$('.job').click(function(){
			$('.resume-list',this).slideToggle();
		});
		$('.school').click(function(){
			$('.resume-list',this).slideToggle();
		});
	}

	var mixer = mixitup('#gallery', {
	    selectors: {
	        target: '.folio-item'
	    },
	    load: {
	        filter: '.featured',
	        sort: 'feature-rank:asc'
	    }
	});

	$('.filter').click(function(){
		$('.filter.active').removeClass('active');
		$(this).addClass('active')
	});
});

function getFilterNotification(filter) {
	var prefix = ' - Filtered by '
	switch (filter){
		case 'ux':
			return prefix + 'UX/Product Design';
		case 'web':
			return prefix + 'Web Development';
		case 'graphics':
			return prefix + 'Graphic Design';
		case 'industrial':
			return prefix + 'Industrial Design';
		case 'soft':
			return prefix + 'App Development';
		case 'pm':
			return prefix + 'Product Management';
		default:
			return ' - Showing top items';
	}

}