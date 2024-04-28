$(document).ready(function() {
    $('.sub-menu').parent('li').addClass('has-child');
});    

var list = document.querySelector('.slider-img .list-img');
var items = document.querySelectorAll('.slider-img .list-img .item-img');
var dots = document.querySelectorAll('.slider-img .dots li');

let active = 0;
let lastItems = items.length - 1;

function nextImage() {
    if(active == lastItems) {       
        active = 0;
    }
    else {
        active++;
    }
    reloadSlider();
}
let refreshSlider = setInterval(() => {nextImage()}, 5000);
function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.transition = '1.5s';
    list.style.left = -checkLeft + 'px';
    
    let lastActiveDot = document.querySelector('.slider-img .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {nextImage()}, 5000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    });
});




