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

var slideIndexOne = 1;
showSlides(slideIndexOne);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndexOne += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndexOne = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName(".com");
  var square = document.getElementsByClassName(".square");
  if (n > slides.length) {slideIndexOne = 1}
  if (n < 1) {slideIndexOne = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < square.length; i++) {
	square[i].className = square[i].className.replace(" active", "");
  }
  slides[slideIndexOne-1].style.display = "block";
  square[slideIndexOne-1].className += " active";
}


