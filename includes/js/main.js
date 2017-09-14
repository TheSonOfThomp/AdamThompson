var hideResumeText = true

$(document).ready(function(){

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

// function toggleMorePortfolio() {
// 	$('.more-portfolio').slideToggle(); // Toggle display
// 	$('.button .show').toggleClass('more').toggleClass('less');
// 	if ($('.button .show').hasClass('more')) {
// 		$(window).scrollTop($('.about').position().top)
// 	}
// }