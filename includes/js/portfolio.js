$(document).ready(function(){
	
});

$(document).scroll(function(){
	console.log('scroll')
	if ($(this).scrollTop() > 100) {
		$('header.sticky').addClass('shadow')
	}
	else {
		$('header.sticky').removeClass('shadow')
	}
});

// --- Sticky header --- //
// var last_st = 0
// var DELTA = 10
// $(document).scroll(function(){
//   var st = $(this).scrollTop()
//   var diff = st - last_st
//   var window_hgt = $(window).height()
//   var doc_hgt = $(document).height()

//   // No sticky header if the window is too small
//   if (window_hgt >= 735){
//     if (st > 100) {
//       if (Math.abs(diff) > DELTA) {
//         console.log(diff)
//         if (diff > 0) {
//           // Scroll up
//           $('header.portfolio').addClass('sticky')
//           $('body.portfolio section.portfolio').addClass('sticky')
//         }
//         else {
//           // Scroll Down
//           $('header.portfolio').removeClass('sticky')
//           $('body.portfolio section.portfolio').removeClass('sticky')
//         }
//       }
//     }
//     // else if (st > (doc_hgt - 1.5*window_hgt)) {
//     //   $('.main-header').removeClass('header-up')
//     // }
//     // else {
//     //   $('.main-header').removeClass('header-up')
//     // }
//   }
//   last_st = st
// });