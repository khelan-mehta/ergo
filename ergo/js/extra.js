$(document).ready(function() {
	$('.show-menu-btn').click(function() {
		$('header').toggleClass('mobMenu');
		//$("body").css('overflow', 'hidden');
	});
	
	//Slider Start
	var currentSlide = 1;
	var $slider = $('.slides');
	var slideCount = $slider.children().length;
	var windowwidth = $(window).width();
	var slideTime = 3000;
	var animationTime = 2000;
	
	setInterval(function(){
		$slider.animate({
			marginLeft : '-=100vw'
		}, animationTime, function(){
			currentSlide ++;
			if(currentSlide == slideCount){
				currentSlide = 1;
				$(this).css("margin-left", "0px");
			}
		});
	}, slideTime);
	//Slider End

	$('.homeslider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 20000,
		dotsClass: 'custom_paging',
		customPaging: function (slider, i) {
			return '0' + (i + 1);
		}
	});

	// Preloader
	// jQuery(window).on('load', function() {
	// 	$('.preloader').fadeOut();
	// });

	//Preloader
	preloaderFadeOutTime = 3000;
	function hidePreloader() {
	var preloader = $('.preloader');
	preloader.fadeOut(preloaderFadeOutTime);
	}
	hidePreloader();
});


// ScrollTop Effect Start
(function($) {
$.fn.visible = function(partial) {
    	var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top + 300,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };
})(jQuery);

var win = $(window);
var allMods = $(".ServiceBox");
win.scroll(function(event)
{
	allMods.each(function(i, el)
	{
		var el = $(el);
		if (el.visible(true))
		{
			el.addClass("visible animated fadeInTop"); 
		} 
	});
});
// ScrollTop Effect End


$(function() {
	$('#va-accordion').vaccordion({
		expandedHeight	: 350,
		animSpeed		: 400,
		animOpacity		: 0.7,
		visibleSlices	: 1
	});
});

var winScroll, headerHeight, winFlag = 0, winPos = 0;
jQuery(window).on('scroll', function () {
    headerHeight = jQuery('header').outerHeight();
    winScroll = jQuery(this).scrollTop();

    if (winScroll > winPos && winScroll > 80) {
        jQuery('header').addClass('menudown').css('top', -headerHeight + 'px');
        jQuery('header').removeClass('menuup');
    }
    else {
        jQuery('header').removeClass('menudown').css('top', 0);
        jQuery('header').addClass('menuup');
    }
    winPos = winScroll;
    if (winScroll == 0) {
        jQuery('header').removeClass('menuup');
    }
});
