var hideResumeText = true

$(document).ready(function(){
	// resizePortfolio()
	// Toggle the Show More/Less buttons in Resume
	function toggleContent(ths){
		$('.resume-list',ths).slideToggle();
		$('.show', ths).toggleClass('more').toggleClass('less')
	}
	$('.job').click(function(){
		toggleContent(this)
	});
	$('.school').click(function(){
		toggleContent(this)
	});

	// var mixer = mixitup('#gallery', {
	//     selectors: {
	//         target: '.folio-item'
	//     },
	//     load: {
	//         filter: '.featured',
	//         sort: 'feature-rank:asc'
	//     }
	// });

	// $('.filter').click(function(){
	// 	$('.filter.active').removeClass('active');
	// 	$(this).addClass('active')
	// });
});

// $(window).resize(function(){
// 	resizePortfolio();
// });

function resizePortfolio(){
	// Portfolio grid misalignment fix on Firefox
	// (display: inline-table works for Chrome/Safari)
	var ratio = 3.0/4.0;
	$('.gallery ul').children().each(function(){
		$('img', this).width('100%');
		console.log($('img', this).width())
		$('img', this).height(Math.floor($('img', this).width() * ratio))
	})

}
// function toggleMorePortfolio() {
// 	$('.more-portfolio').slideToggle(); // Toggle display
// 	$('.button .show').toggleClass('more').toggleClass('less');
// 	if ($('.button .show').hasClass('more')) {
// 		$(window).scrollTop($('.about').position().top)
// 	}
// }