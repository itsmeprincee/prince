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
	
});
var preloader = document.getElementById("spinner-box");
var slidess = document.getElementsByClassName("cards");
var dotss = document.getElementsByClassName("dot");
function spinnerfunction(){
		preloader.style.display = "none";
		currentSlide(1);
};
function currentSlide(n){
	var i;
	for(i = 0;i<slidess.length;i++){
		slidess[i].style.display = "none";
	}
	slidess[n-1].style.display = "block";
	for(i = 0;i<dotss.length;i++){
		dotss[i].className =dotss[i].className.replace(" active1", "");
	}
    dotss[n-1].className += " active1";
};