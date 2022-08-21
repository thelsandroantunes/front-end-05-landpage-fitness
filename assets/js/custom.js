(function($){
	"use strict";
	
	$(document).ready(function() {
		  new WOW().init();
	});
	
	
   		
		/* testimonial slider */
				$('.testimonial-slider').bxSlider({
				  pagerCustom: '#bx-pager',
				  mode: 'horizontal',
				  startSlide:1,
				  auto:'true',
				  controls: false
				});
	
	
})(jQuery);

