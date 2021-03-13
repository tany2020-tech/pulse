$(document).ready(function(){
    $('.slider__inner').slick({
        dots: true, 
        adaptiveheight: false,
        speed: 2000,
        fade: true,
        cssEase: 'linear',
        autoplay: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/levo.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/pravo.png"></button>',
        responsive: [
            {
              breakpoint: 900,
              settings: {
                arrows: true,
                           
                dots: true
               
                }
              }
        ]
      });



      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        
        $(this).addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
       .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      // $ ('.catalog-item__link').each(function(i) {

      //       $(this).on ('click', function(e) {

      //         e.preventDefault();
      //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      //         $ ('.catalog-item__list') .eq(i).toggleClass('catalog-item__list_active');

      //       }) ;
      //        });
      


      //        $ ('.catalog-item__back').each(function(i) {

      //         $(this).on ('click', function(e) {
  
      //           e.preventDefault();
      //           $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      //           $ ('.catalog-item__list') .eq(i).toggleClass('catalog-item__list_active');
  
      //         }) ;
      //          });


               function toggleSlide(item) {
                $(item).each (function(i){
                  $(this).on('click', function(e) {
                    e.preventDefault();
                  $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                  $ ('.catalog-item__list') .eq(i).toggleClass('catalog-item__list_active');
    
                }) ;
                 });
               }

         toggleSlide('.catalog-item__link');
         toggleSlide ('.catalog-item__back');
      
      //MODAL
      
      $('[data-modal=consultation]').on('click', function() {
        $('.overlay,#consultation').fadeIn('slow');
           
      });

       $('.modal__close').on('click', function(){
        $('.overlay, #consultation,#thanks, #order').fadeOut('slow');

       });
      

       $('.catalog-item__btn').each(function(i){
       $(this).on('click',function(){
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay,#order').fadeIn('slow');
       });

      });
    

                                    //  $('.feed-form').validate(); 
                                    //  $('#consultation form').validate({
                                    //     rules:{
                                    //         name: "required",  
                                    //         phone: "required",
                                    //         email: {
                                    //                required: true,
                                    //                email: true

                                    //         }     
                                    //         },

                                    //         messages: {
                                    //           name: "Please specify your name",
                                    //           email: {
                                    //             required: "We need your email address to contact you",
                                    //             email: "Your email address must be in the format of name@domain.com"
                                    //           }
                                    //         }
                                    //     });

                                    //  $('#order form').validate();

      //  function valideForms(form) {
      //      $(form).validate({
      //     rules:{
      //         name: "required",  
      //         phone: "required",
      //         email: {
      //                required: true,
      //                email: true
      //         }     
      //         },

      //         messages: {
      //           name: "Please specify your name",
      //           email: {
      //             required: "We need your email address to contact you",
      //             email: "Your email address must be in the format of name@domain.com"
      //           }
      //         }
      //     });
      //  }

      //   valideForms('#order form');
      //  valideForms('#consultation form');
      //   valideForms('#consultation-form');
         
             $('form').submit(function(e){
                e.preventDefault();
               $.ajax({
                   type: 'POST',
                   url: 'mailer/smart.php',
                   data: $(this).serialize()
                  }).done(function() {
                     $(this).find('input').val("");     
                    $('#consultation, #order').fadeOut();
                     $('.overlay, #thanks').fadeIn('slow');
                     $('form').trigger('reset');
                     
                });
          
               return false;
        
               });
   

          $(window).scroll( function() {

           if($(this).scrollTop() > 1000 ) {

                $('.pageup').fadeIn();
           }
           else {
            $('.pageup').fadeOut();
           }


          })  ;                    
                            
    

          
            $("a[href^='#']").click(function(){
                    var _href = $(this).attr("href");
                    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                    return false;
            });
   


        
        });
  
      