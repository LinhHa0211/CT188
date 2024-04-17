'use strict';


// Thay doi vi tri trong showroom
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
        var imgElement = $('.showroom__img');
    
        // Hàm thay đổi hình ảnh
        function changeImage() {
            // Tăng chỉ số hiện tại
            currentIndex = (currentIndex + 1) % imagePaths.length;
            // Lấy đường dẫn hình ảnh mới
            var newImagePath = imagePaths[currentIndex];
            // Thay đổi thuộc tính src của thẻ img
            imgElement.attr('src', newImagePath);
        }
    
        // Gọi hàm thay đổi hình ảnh mỗi 10 giây
        setInterval(changeImage, 2000); // 10 giây (10000 miligiây)

    });
})(jQuery); // Đảm bảo rằng jQuery được truyền vào như một tham số của IIFE


