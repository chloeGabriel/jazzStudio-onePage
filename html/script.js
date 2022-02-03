$(document).ready(function() {
  //Hamburger toggle button
  $(".toggle-btn").on("click", function() {
    $(".nav-links").toggleClass("active");
  });
  //Click function to arrive at the clicked section on page
  $("a").on("click", function() {
    const section = $(this).attr('href');
    const speed = 600;

    $("html, body").animate({
      scrollTop: $(section).offset().top - 90
    }, speed);
    return false;
  });
//Go to top of the site when clicking on logo
  $("#logo").on("click", function() {
    $('html, body').animate({
      scrollTop: 0
    }, 600);
  });
  //Add class to Header => switch style of navbar when scrolling
  $(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
      $("nav").addClass("back_nav");
    } else {
      $("nav").removeClass("back_nav");
    }
  });



});
