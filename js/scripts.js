 $(window).scroll(function () {
   if ($(this).scrollTop() > 100) {
     $('#header').addClass('white-header');
   }
   else{
     $('#header').removeClass('white-header');
   }
 });

$('.header-menu ul li').on('click', function(){
  $(".header-submenu").slideToggle("slow");
  //$(this).toggleClass('faqs-active');
  //$(this).addClass('faqs-active');
});

 $('.thanks-slider').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   arrows: true,
   prevArrow: '<img class="thanks-prevArrow" src="img/thanks/slider-arrow.png"/>',
   nextArrow: '<img class="thanks-nextArrow" src="img/thanks/slider-arrow.png"/>',
   responsive: [
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
     // You can unslick at a given breakpoint now by adding:
     // settings: "unslick"
     // instead of a settings object
   ]
 });

$('.price-btn').on('click', function(){
  $('.hidden-column').toggleClass('price-active');
  $(this).removeClass('price-active');
});