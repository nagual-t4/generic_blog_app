/*========== NAVBAR TRANSPARENT TO SOLID ==========*/
// $(document).ready(function() { //when document(DOM) loads completely
//   checkScroll(); //check if page is scrolled
//   $(window).scroll(checkScroll); //get scroll position of window
// });
function checkScroll() { //check if page is scrolled
  if ($(window).scrollTop() >= 300) { //if window is scrolled 300px or more
    $('.navbar').addClass('solid'); // add class 'solid' from navbar element with class 'navbar'
  } else { //if page is not scrolled 300px from top
    $('.navbar').removeClass('solid'); //remove class 'solid' from navbar element
  }
}

/*========== ADD SOLID CLASS TO NAVBAR WHEN TOGGLED ==========*/
$(document).ready(function() {
  checkScroll();
  $(window).scroll(checkScroll);
  $('.navbar-toggler').click(function() { //when navbar-toggler is clicked
    if ($(window).scrollTop() <= 300) { //if window is scrolled 300px or less from top
      $('nav.navbar').toggleClass('solid-toggle');
    } //add the solid class to navbar
  });
});

/*========== CLOSE MOBILE MENU ON CLICK & SMOOTH SCROLL TO LINK ==========*/
$(document).on('click', 'a[href^="#"]', function(event){
  event.preventDefault();
  $('.navbar-toggler').addClass('collapsed');
  $('#navbarResponsive').removeClass('show');

setTimeout(function () {
  $('nav.navbar').removeClass('solid-toggle');
}, 300);


  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 2000);

});
