$(document).ready(function() {
  $("#mmenu").mmenu({
    extensions: [ 'widescreen', 'effect-menu-slide', 'pagedim-black' ],
    navbar: {
      title: "lolipop"
    },
    offCanvas: {
      position: "right"
    },
    
  });
});

$('.kinds-slider__item').on('click', function(){
  $('.kinds-slider__item').removeClass('kinds-active');
  $(this).addClass('kinds-active');
});

var links = document.querySelectorAll('.kinds-slider__item');
var content = document.querySelectorAll('.kinds-content__item');
for(var i=0; i <links.length; i++) {
   (function(i) {
      var link = links[i];
      link.onclick = function() {
          for(var j=0; j <content.length; j++) {
             var display = window.getComputedStyle(content[j]).display;
             if(display == "block") {
                content[j].style.display = "none";
             }
          }
       content[i].style.display = "block";
       }
   })(i);
}

$('.portfolio__nav-item').on('click', function(){
  $('.portfolio__nav-item').removeClass('portfolio__nav-active');
  $(this).addClass('portfolio__nav-active');
});

$('.faqs-wrap__item').on('click', function(){
  $('.faqs-wrap__item').removeClass('faqs-active');
  $(this).toggleClass('faqs-active');
});