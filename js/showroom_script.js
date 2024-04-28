'use strict';

const changeShowroomLocation = () => {
    const locationArray = [
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9135807034622!2d106.71870417480437!3d10.741143689405535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2a4cc6c589%3A0x2c1e75e03385fe4a!2zQk1XIFBow7ogTeG7uSBIxrBuZw!5e0!3m2!1svi!2s!4v1711032926054!5m2!1svi!2s" width="700" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.4592839412826!2d105.88464917503221!3d21.054310780601476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313500e46a2d89fd%3A0x7c4cd42fdac9f0f7!2sBMW%20LONG%20BI%C3%8AN!5e0!3m2!1svi!2s!4v1711032964265!5m2!1svi!2s" width="700" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.499844745342!2d106.72138387480476!3d10.772976589375517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317525133f96d2ab%3A0x21848ca79b96628f!2sBMW%20Motorrad%20-%20Sala!5e0!3m2!1svi!2s!4v1711032992969!5m2!1svi!2s" width="700" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.986432236207!2d108.18694867836224!3d16.066193844938116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c1b9f0b2cd%3A0x8020da26ddde5dac!2zQk1XIMSQw6AgTuG6tW5n!5e0!3m2!1svi!2s!4v1711033023586!5m2!1svi!2s" width="700" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1938775228377!2d106.67228917480519!3d10.796458089353496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752937dc38ecd7%3A0x1f786930831a4195!2zQk1XIE5HVVnhu4ROIFbEgk4gVFLhu5ZJ!5e0!3m2!1svi!2s!4v1711033053549!5m2!1svi!2s" width="700" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    ]

    var selectBox = $('.showroom__select-box');
    var mapContainer = $('.showroom__container-map');

    selectBox.on('change', function(e) {
        var selectedIndex = $(this).val();
        mapContainer.html(locationArray[selectedIndex]);
    });
}

function hideDriveModal(){
    document.getElementById('driveModal').style.display = 'none';
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
}

function showDriveModal(message, type='error'){
    document.getElementById('driveModal').style.display = 'flex';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    document.getElementById('driveModalMessage').innerHTML = message;
    if (type === 'error') {
        document.getElementById('driveModalMessage').style.color = 'red';
        document.getElementById('driveModalTitle').innerHTML = 'Lỗi';
    } else {
        document.getElementById('driveModalMessage').style.color = 'green';
        document.getElementById('driveModalTitle').innerHTML = 'Thành công';
        document.getElementById('driveModalTitle').style.color = 'green';
        document.getElementById('driveModalButton').style.backgroundColor = 'green';
    }
}

function validateDriveForm() {
    let inputName = {
        salutation: 'cách xưng hô',
        fullName: 'họ và tên',
        telephone: 'số điện thoại',
        email: 'email',
        address: 'địa chỉ',
        birthday: 'ngày sinh',
        obtainedCar: 'dòng xe đã sở hữu',
        obtainedTime: 'thời gian sở hữu',
        timeBuy: 'thời gian dự kiến mua xe',
        tryCar: 'dòng xe muốn thử'
    }


    let inputList  = document.getElementsByName('input')
   

    for (let i = 0; i < inputList.length; i++) {
        if (inputList[i].tagName=="INPUT" && inputList[i].value === '' ) {
            showDriveModal(`Bạn chưa nhập ${inputName[inputList[i].id]}`);
            inputList[i].focus();
            return;
        }
        if (inputList[i].tagName=="SELECT" && inputList[i].value == 9 ) {
            showDriveModal(`Bạn chưa chọn ${inputName[inputList[i].id]}`);
            inputList[i].focus();
            return;
        }
    }

    let fullName = document.getElementById('fullName');
    let telephone = document.getElementById('telephone');
    let email = document.getElementById('email');
    let address = document.getElementById('address');
    
    if (fullName.value.length < 10) {
        showDriveModal("Họ và tên phải chứa ít nhất 10 ký tự.");
        return;
    }

    if (/[a-zA-Z]/.test(telephone.value)) {
        showDriveModal("Số điện thoại không được chứa ký tự chữ.");
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email.value)) {
    showDriveModal("Email không hợp lệ.");
    return;
}

   


    showDriveModal('Đăng ký lái thử thành công!', 'success');
    setTimeout(() => {
        location.reload();
    }, 1000);
}

function transferPolicy(){
    let transferList = document.querySelectorAll('.sell-policy__menu ul li');
    transferList.forEach((item) => {
        item.addEventListener('click', () => {
            var target = item.getAttribute('data-target');
            var targetElement = document.getElementById(target);

            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        })
    })
}

(function($){
    $(document).ready(function(){
        
        changeShowroomLocation();

        var imagePaths = [
            '../images/showroom/showroomImgBackground.jpg',
            '../images/showroom/showroomImgBackground2.jpg',
            '../images/showroom/showroomImgBackground3.jpg',
            '../images/showroom/showroomImgBackground4.jpg',
            '../images/showroom/showroomImgBackground5.jpg',
        ];
        
        var currentIndex = 0;
        var imgContainer = $('.showroom__image');
        var imgElement = $('.showroom__img');
        var intervalId; // Để lưu ID của setInterval
        
        function changeImage() {
            currentIndex = (currentIndex + 1) % imagePaths.length;
            var newImagePath = imagePaths[currentIndex];
            imgElement.attr('src', newImagePath)
        }
        
        function startSlideshow() {
            intervalId = setInterval(changeImage, 2000);
        }
        function stopSlideshow() {
            clearInterval(intervalId);
        }
        startSlideshow(); 
        imgContainer.hover(stopSlideshow, startSlideshow);
        

        //Hàm 
        var listItems = document.querySelectorAll('.sell-policy__content-element ol li');

      
        listItems.forEach(function(item) {
            var content = item.textContent;
            var colonIndex = content.indexOf(':');
    
            if (colonIndex !== -1) {
                var boldText = content.substring(0, colonIndex);
                item.innerHTML = '<strong>' + boldText + '</strong>' + content.substring(colonIndex);
            }
        });

        transferPolicy();
    });
})(jQuery); 


window.addEventListener('scroll', function() {
   
    var footer = document.getElementById('footer'); 
    var menuHeader = document.getElementById('policy-menu-header');
    var menu = document.getElementById('policy-menu');
    var distanceToTop = footer.getBoundingClientRect().top; 
    var windowHeight = window.innerHeight; 

    var distanceToBottom = windowHeight - distanceToTop;

    if (distanceToBottom >= 80) {
        menu.style.top = '5%';
        menuHeader.style.display = 'none';
    } 
    else {menu.style.top = '35%'
        menuHeader.style.display = 'block';};
       
});