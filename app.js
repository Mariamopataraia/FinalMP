var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide-item");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// progress bar

const skillsSection = document.querySelector(".progressbar");

const progressBars = document.querySelectorAll(".lineprogres");

function showProgress() {
	progressBars.forEach(progressBar => {
		const value = progressBar.dataset.progress;
		progressBar.style.opacity = 1;
		progressBar.style.width = `${value}%`;

	});
}

function hideProgress() {
	progressBars.forEach(p => {
		p.style.opacity = 0;
		p.style.width = 0;
	});
}

window.addEventListener("scroll", () => {
	const sectionPos = skillsSection.getBoundingClientRect().top;
	const screenPos = window.innerHeight;

	if (sectionPos < screenPos) {
		showProgress();
	} else {
		hideProgress();
	}
})
// END progress bar
// Start feedback section

var sliderDot = 1;
showFeedback(sliderDot);

function plusSlides(n) {
	showFeedback(sliderDot += n);
}

function currentSlide(n) {
	showFeedback(sliderDot = n);
}

function showFeedback(n) {
  let i;
  let feedback = document.getElementsByClassName("com");
  let feed = document.getElementsByClassName("feedslide");
  if (n > feedback.length) {sliderDot = 1}
  if (n < 1) {sliderDot = feedback.length}
  for (i = 0; i < feedback.length; i++) {
	feedback[i].style.display = "none";
  }
  feedback[sliderDot - 1].style.display = "flex";
}

// END feedback section
// START My Projects

filterObjects("all");

function filterObjects(c){
	var z, i; 
	z = document.getElementsByClassName("box");
	if (c == "all") c = "";
	for (i = 0; i < z.length; i++) {
		removeClass (z[i], "show");
		if (z[i].className.indexOf(c) > -1) addClass(z[i], "show");
	}
}

function addClass(element, name){
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++){
		if (arr1.indexOf(arr2[i]) == -1){
			element.className += " " + arr2[i];
		}
	}
}

function removeClass(element, name){
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++){
		while (arr1.indexOf(arr2[i]) > -1){
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}
// console.log (removeClass)

