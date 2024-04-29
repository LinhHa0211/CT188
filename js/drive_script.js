

function setType(type){
    localStorage.setItem('type', type);
}

function getType(){
    if (localStorage.getItem('type') == undefined) {
        localStorage.setItem('type', 'error');
        return 'error';
    }
    else return localStorage.getItem('type');
    
}

setType('error');

function hideDriveModal() {
    let type = getType();
    console.log(type);
    document.getElementById('driveModal').style.display = 'none';
    document.getElementsByTagName('body')[0].style.overflow = 'auto';

    if (type === 'success') {
        document.getElementById('myForm').submit();
    }
}

function showDriveModal(message, type = 'error') {
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


    let inputList = document.getElementsByName('input')


    for (let i = 0; i < inputList.length; i++) {
        if (inputList[i].tagName == "INPUT" && inputList[i].value === '') {
            showDriveModal(`Bạn chưa nhập ${inputName[inputList[i].id]}`);
            inputList[i].focus();
            return false;
        }
        if (inputList[i].tagName == "SELECT" && inputList[i].value == 9) {
            showDriveModal(`Bạn chưa chọn ${inputName[inputList[i].id]}`);
            inputList[i].focus();
            return false;
        }
    }

    let fullName = document.getElementById('fullName');
    let telephone = document.getElementById('telephone');
    let email = document.getElementById('email');

    if (fullName.value.length < 5) {
        showDriveModal("Họ và tên phải chứa ít nhất 5 ký tự.");
        return false;
    }

    if (/[a-zA-Z]/.test(telephone.value)) {
        showDriveModal("Số điện thoại không được chứa ký tự chữ.");
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        showDriveModal("Email không hợp lệ.");
        return false;
    }

    setType('success');
    showDriveModal("Thanh cong", 'success');

    return true;
}




