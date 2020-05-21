$(document).ready(function(){
    $('.group-mobile-phone').hover(function(){
        $('.group-mobile-phone').toggleClass('active');
        $('.group-mobile-phone-hover').toggleClass('active');
    });

   

    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"> </span>';
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    
    $(document).on('click', ".swiper-button-next-link",function(){ 
        var carusel = $(this).parents('.swiper-container-links');
        right_carusel(carusel);
        return false;
    });

    $(document).on('click',".swiper-button-prev-link",function(){ 
        var carusel = $(this).parents('.swiper-container-links');
        left_carusel(carusel);
        return false;
    });
    function left_carusel(carusel){
        var block_width = $(carusel).find('.swiper-slide-link').outerWidth();
        $(carusel).find(".overlay .swiper-slide-link").eq(-1).clone().prependTo($(carusel).find(".overlay")); 
        $(carusel).find(".overlay").css({"left":"-"+block_width+"px"});
        $(carusel).find(".overlay .swiper-slide-link").eq(-1).remove();    
        $(carusel).find(".overlay").animate({left: "0px"}, 200);       
     }

    function right_carusel(carusel){
    var block_width = $(carusel).find('.swiper-slide-link').outerWidth();
    $(carusel).find(".overlay").animate({left: "-"+ block_width +"px"}, 200, function(){
        $(carusel).find(".overlay .swiper-slide-link").eq(0).clone().appendTo($(carusel).find(".overlay")); 
        $(carusel).find(".overlay .swiper-slide-link").eq(0).remove(); 
        $(carusel).find(".overlay").css({"left":"0px"}); 
    }); 
    }
     
    $('.left-button>.hamburger-menu>.menu-button>.squere').on('click', function(){
        $('.left-button>.hamburger-menu>.drop-down-menu').toggleClass('active');
        $('.left-button>.hamburger-menu>.menu-button>.squere>.hamburger-line').toggleClass('active');
        
        if ($('.right-button>.hamburger-menu>.drop-down-menu').hasClass('active')){
            $('.right-button>.hamburger-menu>.drop-down-menu').removeClass('active');
            $('.right-button>.hamburger-menu>.menu-button>.squere>.hamburger-line').removeClass('active');
        }
    });

    $('.right-button>.hamburger-menu>.menu-button>.squere').on('click', function(){
        $('.right-button>.hamburger-menu>.drop-down-menu').toggleClass('active');
        $('.right-button>.hamburger-menu>.menu-button>.squere>.hamburger-line').toggleClass('active');
        
        if ($('.left-button>.hamburger-menu>.drop-down-menu').hasClass('active')){
            $('.left-button>.hamburger-menu>.drop-down-menu').removeClass('active');
            $('.left-button>.hamburger-menu>.menu-button>.squere>.hamburger-line').removeClass('active');
        }
    });

    $('.button').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});

});