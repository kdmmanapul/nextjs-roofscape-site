(function ($) {
 "use strict";
$(document).ready(function(){
	  
		/*
		Jquery Mobile Menu
		============================*/
		$('#main-menu').meanmenu({
			meanScreenWidth: "767",
			meanMenuContainer: '.mobile-nav-menu',
		});		
		/*
		Testimonial v1 Crousel
		============================*/ 	
		  $(".testimonial-v1-all").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:false, 
			dots:true, 
			margin:30,
			items :3,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:2
				},				
				992:{
					items:3
				}
			}
		  }); 	
		  
		/*
		Why Choose Us Crousel
		============================*/ 	
		  $(".why-choose-all").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:true, 
			dots:true, 
			margin:30,
			items :3,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:2
				},				
				992:{
					items:3
				}
			}
		  }); 		
		/*
		Recently Added Student Crousel
		============================*/ 	
		  $(".all-recently-added").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:true, 
			dots:false, 
			margin:20,
			items :4,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			responsive:{
				0:{
					items:3
				},
				600:{
					items:4
				},
				768:{
					items:6
				},				
				992:{
					items:4
				}
			}
		  }); 			
		/*
		Course Crousel
		============================*/ 	
		  $(".all-course").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:true, 
			dots:true, 
			items :3,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:2
				},				
				992:{
					items:3
				}
			}
		  }); 				
		/*
		Latest News Crousel
		============================*/ 	
		  $(".all-latest-news").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:true, 
			dots:false, 
			margin:30,
			items :3,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:2
				},				
				992:{
					items:3
				}
			}
		  }); 	  			
		/*
		Testimonial Crousel
		============================*/ 	
		  $(".all-testimonial").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:false, 
			dots:true,
			margin:30,
			items :2,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:1
				},		
				992:{
					items:2
				},				
				1000:{
					items:2
				}
			}			
		  }); 		
		/*
		Testimonial V3 Crousel
		============================*/ 	
		  $(".all-testimonial-v3").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:true, 
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			dots:true, 
			items :3,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				768:{
					items:2
				},				
				1000:{
					items:3
				}
			}			
		  }); 		
	
		/*
		Slider Crousel
		============================*/ 
		// $(".all-slide").owlCarousel({
        //     items: 1,
        //     // nav: true,
        //     dots: true,
        //     // autoplay: true,			
        //     loop: true,
        //     navText: ["<i class='icofont-thin-left'></i>", "<i class='icofont-thin-right'></i>"],
        //     mouseDrag: false,
        //     touchDrag: false,
        // });
        
        // $(".all-slide").on("translate.owl.carousel", function(){	
        //     $(".slider-text h1").removeClass("animated slideInLeft").css("opacity", "0");
        //     $(".slider-text p").removeClass("animated fadeInDown").css("opacity", "0");
        //     $(".slider-text ul").removeClass("animated fadeInDown").css("opacity", "0");
        // });
        
        // $(".all-slide").on("translated.owl.carousel", function(){
        //     $(".slider-text h1").addClass("animated slideInLeft").css("opacity", "1");
        //     $(".slider-text p").addClass("animated fadeInDown").css("opacity", "1");
        //     $(".slider-text ul").addClass("animated fadeInDown").css("opacity", "1");
        // });	
		
		/*
		Patner Crousel
		============================*/ 	
		  $(".all-patner").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:false, 
			dots:true, 
			items :4,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			responsive:{
				0:{
					items:2
				},
				600:{
					items:3
				},
				768:{
					items:4
				},				
				992:{
					items:4
				},				
				1000:{
					items:5
				}
			}
		  }); 
		/*
		scrollUp
		============================*/	
		// $.scrollUp({
		// 	scrollText: '<span class="lnr lnr-arrow-up"></span>',
		// 	easingType: 'linear',
		// 	scrollSpeed: 900,
		// 	animation: 'fade'
		// });	
		/*
		Counter Js
		============================*/ 
        $('.counter').counterUp({
            delay: 10,
            time: 1000			
        });
		
		/*
		Stikey Js
		============================*/ 
  		(function () {
			var nav = $('.hd-sec');
			var scrolled = false;
			$(window).scroll(function () {
				if (120 < $(window).scrollTop() && !scrolled) {
					nav.addClass('sticky_menu animated fadeInDown').animate({ 'margin-top': '0px' });
					scrolled = true;
				}
				if (120 > $(window).scrollTop() && scrolled) {
					nav.removeClass('sticky_menu animated fadeInDown').css('margin-top', '0px');
					scrolled = false;
				}
			});
		}()); 
		/*
		Magnific Video Popup
		============================*/ 		
        $('.mfp-iframe').magnificPopup({
            type: 'iframe'
        });			
		/*
		Magnific Popup
		============================*/ 		
        $('.gallery-photo').magnificPopup({
            type: 'image',
            gallery: {
              enabled: true
            },
        });	 

		/*
		Project Gallery Js
		============================*/	
		jQuery('.gallery-container').imagesLoaded( function() {			
			$(".gallery-container").isotope({
			itemSelector: '.filtr-item',
			layoutMode: 'fitRows',
			});
			$("ul.simplefilter li").on("click",function(){
			$("ul.simplefilter li").removeClass("active");
			$(this).addClass("active");
			 
			var selector = $(this).attr('data-filter');
			$(".gallery-container").isotope({
			filter: selector,
			animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false,
			}
			});
			return false;
			});
		});	
		/*
		Preeloader
		============================*/
		$(window).on("load", function() {
			$('#preloader').fadeOut();
			$('#preloader-status').delay(200).fadeOut('slow');
			$('body').delay(200).css({'overflow-x':'hidden'});
		});

		

		
		
	});	
})(jQuery);

const divInstall = document.getElementById('installContainer');
const butInstall = document.getElementById('butInstall');

/* Put code here */



/* Only register a service worker if it's supported */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}

/**
 * Warn the page must be served over HTTPS
 * The `beforeinstallprompt` event won't fire if the page is served over HTTP.
 * Installability requires a service worker with a fetch event handler, and
 * if the page isn't served over HTTPS, the service worker won't load.
 */
if (window.location.protocol === 'http:') {
  const requireHTTPS = document.getElementById('requireHTTPS');
  const link = requireHTTPS.querySelector('a');
  link.href = window.location.href.replace('http://', 'https://');
  requireHTTPS.classList.remove('hidden');
}