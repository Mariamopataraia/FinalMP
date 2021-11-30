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
// percentage area
const skillsSection = document.querySelector(".skilpercentage");

const progressBars = document.querySelectorAll(".progress--bar");

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
	const screenPos = window.innerHeight / 2;

	if (sectionPos < screenPos) {
		showProgress();
	} else {
		hideProgress();
	}
})
