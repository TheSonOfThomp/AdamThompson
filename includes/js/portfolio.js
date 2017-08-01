$(document).ready(function(){
	$('li#all').hide();
  
  // When the label is clicked
  $('.menu-label').click(function(){
    $('.dropdown').slideToggle();
  });
	
  $(".horizontal-sort li").click(function(){
    $(".horizontal-sort li").removeClass("selected");
    $(this).addClass("selected")
  });

  var scroll_location = 0;
  // When a portfolio element is clicked
  $('li.folio-item').click(function(){
    $('.gallery-modal').slideToggle('slow');
    scroll_location = $('body').scrollTop();
    $('body').animate({scrollTop: 0}, scroll_location/1.6);
    // Blur everything else
  })
  $('.close-modal').click(function(){
    $('.gallery-modal').slideToggle('slow');
    $('body').animate({scrollTop: scroll_location}, scroll_location/1.6);
  });


});

// --- Sticky header --- //
var last_st = 0
var DELTA = 10
$(document).scroll(function(){
  var st = $(this).scrollTop()
  var diff = st - last_st
  var window_hgt = $(window).height()
  var doc_hgt = $(document).height()
  // console.log(diff)
  // No sticky header if the window is too small
  if (window_hgt >= 735){
    if (st > 100) {
      if (Math.abs(diff) > DELTA) {
        console.log(diff)
        if (diff > 0) {
          // Scroll up
          $('.main-header').addClass('header-up')
        }
        else {
          $('.main-header').removeClass('header-up')
        }
      }
    }
    else if (st > (doc_hgt - 1.5*window_hgt)) {
      $('.main-header').removeClass('header-up')
    }
    else {
      $('.main-header').removeClass('header-up')
    }
  }
  last_st = st
});