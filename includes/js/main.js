//Toggle V1
var design_types = ["UX", "Interaction", "Product", "Industrial", "Web"];

var filterResume = false;

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


	// MixItUp Portfolio filter
	$(function(){
	// Instantiate MixItUp:
		$('#gallery').mixItUp({
			// Set what elements are the selectors
			selectors: {
				target: '.folio-item',
				filter: '.filter'
			},
			// Set default filter
			load: {
				filter: '.all'
			}
		});
	});

	if (filterResume) {
		//Mixitup Resume filter
		$(function(){
			// Instantiate MixItUp:
			$('#resume').mixItUp({
				// Set what elements are the selectors
				selectors: {
					target: '.resume-item',
					filter: '.filter'
			  	}
			});
		});

		  $('#resume').on('mixEnd' ,function(){
		    console.log('Done Mixing');
			$('.resume-item:visible').css('display','list-item');
			var filter = $('.active').attr('data-filter');
			if (filter) filter = filter.substr(1, filter.length-1);
			filterNotification = getFilterNotification(filter);

			$(".filter-notification").html(filterNotification);
		  });


	} else {
		$('.resume-item').css('display','list-item');
	}

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
			return ' - Showing All items';
	}

}









