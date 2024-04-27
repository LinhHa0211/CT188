$(document).ready(function() {
    $('.sub-menu').parent('li').addClass('has-child');
});    

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}

setInterval(changeSlide, 3000); // Change image every 3 seconds







