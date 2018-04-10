//open options in navigation
(function(){
	var listelem0 = document.getElementsByClassName("homepage-option1");
	var listelem1 = document.getElementsByClassName("homepage-option2");
	var listelem2 = document.getElementsByClassName("homepage-option3");
	var listelem3 = document.getElementsByClassName("homepage-option4");
	var listelem4 = document.getElementsByClassName("homepage-option5");
	var list = document.getElementsByClassName("homepage-option");
	
		
		
		for(var j = 0; j < listelem0.length; j++){
		listelem0[j].style.animationDelay = 50*j + "ms";

		}
		for(var j = 0; j < listelem0.length; j++){
		listelem1[j].style.animationDelay = 50*j + "ms";

		}
		for(var j = 0; j < listelem0.length; j++){
		listelem2[j].style.animationDelay = 50*j + "ms";

		}
		for(var j = 0; j < listelem0.length; j++){
		listelem3[j].style.animationDelay = 50*j + "ms";

		}
		for(var j = 0; j < listelem0.length; j++){
		listelem4[j].style.animationDelay = 50*j + "ms";

		}
})();

//display slides in slideshow 

	var slides = document.getElementsByClassName("slide");
	var next = document.getElementById("arrow-forward");
	var prev = document.getElementById("arrow-backword");
	var dots = document.getElementsByClassName("dot");
	var zoomslidebg = document.getElementById("zoomslide-bg");
	var zoomslides = document.getElementsByClassName("slide-zoom");
	var slidesoff = document.getElementById("close-zoom");
	var active = 0;
	

	
	
	next.addEventListener("click",function(){changeSlide(1);});
	prev.addEventListener("click",function(){changeSlide(-1);});
	slidesoff.addEventListener("click", zoomSlidesOff);

	
	showSlides();

	function changeSlide(n){
		active += n;
			if(active < 0){
			active = 4;
			}
		else if(active > 4){
			active = 0;
		}
		
		showSlides();
	}
	function currentSlide(n){
		active = n;
		showSlides();
	}

	function showSlides(){
		for(var i =0;i < slides.length;i++){
		slides[i].style.display = "none";
		dots[i].classList.remove("active");
		
		}
		slides[active].style.display = "block";
		dots[active].classList.add("active");
		
	}

	function zoomSlidesOn(){
		zoomslidebg.style.display = "flex";
		for(var i = 0;i < zoomslides.length; i++){
			zoomslides[i].style.display = "none";
		}
		zoomslides[active].style.display = "flex";
		
	}

	function zoomSlidesOff(){
		zoomslidebg.style.display = "none";
	}