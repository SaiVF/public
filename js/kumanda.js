function adjust(){
  if ($(window).width() > 768) {
    alto = []; 
    if ($('.adjust').find('.adjust-height').length) {
      $(".adjust").each(function () {
        $('.adjust-height', this).each(function () {
          var elem = $(this).height();
          //console.log(elem.length);
          if (elem) {
            alto.push(elem);
            max = Math.max.apply(Math, alto);
            //console.log(alto);
            return 0; 
          }
           
        });
        console.log(max);
        $('.adjust-height', this).height(max);
        alto = [];
      })
    }else {
      console.log('No hay elementos que ajustar :)');
    }
  }
}
$(document).ready(function() {
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });

  if ($(window).width() >= 768) {
      $('.items-slider').bxSlider({
        stopAutoOnClick: true,
        auto: false,
        autoControls: false,
        stopAutoOnClick: true,
        pager: false,
        pagination: true,
        slideWidth: 600,
        minSlides: 3,
        maxSlides: 4,
        nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      });
    }else {
      $('.items-slider').bxSlider({
        auto: false,
        autoControls: false,
        stopAutoOnClick: true,
        pager: false,
        pagination: true,
        nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      });
    }
  $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });
  new WOW().init();
  $(function(){
    $('a.smoothScroll').smoothScroll({
      offset: -78,
      scrollTarget: $(this).val()
    });
  });


  



  /*$('.sliderhabitaciones').bxSlider({
    auto: true,
    adaptiveHeight : false,
    speed: 500,
    pager: true,
    controls: false,
    nextText: '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>',
    prevText: '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
  });*/

  $(window).scroll(function(){
    var barra = $(window).scrollTop();
    if (barra >= 100) {
      $("#nav-nav").addClass("navbar-scroll");
    }else {
      $("#nav-nav").removeClass("navbar-scroll");
    }
  });


    if ($(window).width() > 767) {
      $(window).scroll(function(){
        var barra = $(window).scrollTop();

        if (barra >= 100) {
          
        }else {
          
        }
      });
      
    }
  $('.menu-button').click(function(e){
    e.preventDefault();
    $('body').css('overflow', 'hidden');
    $('.menu-content').toggleClass('in');
  })
  $('.menu-close').click(function(){
    $('body').css('overflow', 'initial');
    $('.menu-content').removeClass('in');
  })
  $('.menu-content a').click(function(e){
    $('body').css('overflow', 'initial');
    $('.menu-content').removeClass('in');
  })

  $('.buscar-button a').click(function(e){
    e.preventDefault();
    $('.navbar-form').toggleClass('in');
  })
      
  function alignVertical() {

    $('.align-vertical').each(function(){

      var that = $(this);
        height = that.height(),
        parentHeight = that.parent().height(),
        padAmount = (parentHeight / 2) - (height/2);
      
      that.css('padding-top', padAmount);

    });

  }

  if ($(window).width() >= 767) {
    alignVertical();
  }else {
    $('.welcome > .container').removeClass('align-vertical');
  }

  $(window).resize(function(){
    alignVertical();
  })

  /*$('.menu-button').click(function(e){
    e.preventDefault();
    $('.menu-content').addClass('in');
    $('body').css('overflow', 'hidden');
  })
  $('.menu-close').click(function(e){
    e.preventDefault();
    $('.menu-content').removeClass('in');
    $('body').css('overflow', 'initial');
  })*/




$('.radio-inline input').click(function(){
  if ($(this).parent().hasClass('check')) {
    return false;
  }else if($('.radio-inline input').is(':checked')) {
    console.log('sigue');
    $('.radio-inline input').parent().removeClass('check');
    $(this).parent().addClass('check');
  }else{
    $(this).parent().removeClass('check');
  }
  //$('.radio-inline').find($(this).is(':checked')).addClas('check');
})

$('.uncheck_btn').click(function(e){
  e.preventDefault();
  $(this).parents('.uncheck_group').find('.uncheck_input').prop('checked', false);
})

})