$(document).ready(function(event){
    // all js
    $('.like').click(function(event){
      event.preventDefault();
      $(this).toggleClass('active');
    });

    $('.addcart').click(function(event){
      event.preventDefault();
      $('.buy_cart').addClass('animate__animated animate__rubberBand');
    });

    $('.buy_cart').on('animationend', function(event){
      $(this).removeClass('animate__animated animate__rubberBand');
    });

    // tablet js
    $('.dropdown').click(function(event){
        event.preventDefault();
        $('dropdown').toggleClass('active');
        $('.dropdown-open').slideToggle();
      });

    // mobile js
    $('.navbar_link_mobile').on('click', function(event){
      event.preventDefault();
      $('body').toggleClass('navbar_link_mobile_show');
  }); 
    
});