$(document).ready(function() {

  $('img.js-lazyload').show()
                      .lazyload({
                        container: '.layout',
                        effect:    'fadeIn',
                        threshold: 200
                      });


  $(window).load(function() {
      $('.flexslider').flexslider({
        animationSpeed: 200,
        directionNav: false
      });
    });

});
