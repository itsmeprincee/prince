$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky")

		}
		if(this.scrollY>100){
			$('.scroll-up-btn').addClass("show")
		}else{
			$(".scroll-up-btn").removeClass("show")
		}
	});
	//slide up script
	$(".scroll-up-btn").click(function(){
		$('html').animate({scrollTop:0})
	})
	$(".menubar").click(function(){
		$('.navbar .menu').toggleClass("active")
		$('.navbar i').toggleclass("active")
	});
	// owl carousel script
	$(".carousel").owlCarousel({
		margin:20,
		loop:false,
		autoplayTimeOut:2000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			800:{
				items:2,
				nav:false
			},
			1070:{
				items:3,
				nav:false
			}
		}
	}); 
});
