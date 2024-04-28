// Main menu
$(document).ready(function() {
    $('.sub-menu').parent('li').addClass('has-child');
});    

// Ảnh ở phần đầu của main
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

// Ảnh ở phần sản phẩm mới nhất
let nextBtn = document.querySelector('.part-1 .block-img-2 .button-img-2 .next-img-2');
let prevBtn = document.querySelector('.part-1 .block-img-2 .button-img-2 .prev-img-2');

nextBtn.addEventListener('click', function() {
    let items = document.querySelectorAll('.part-1 .block-img-2 .slide-img-2 .item-img-2');
    document.querySelector('.part-1 .block-img-2 .slide-img-2').appendChild(items[0]);
    
});

prevBtn.addEventListener('click', function() {
    let items = document.querySelectorAll('.part-1 .block-img-2 .slide-img-2 .item-img-2');
    document.querySelector('.part-1 .block-img-2 .slide-img-2').prepend(items[items.length - 1]);
});
