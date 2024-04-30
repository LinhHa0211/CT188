function frmValadate5(frm) {
    return frm.checkValidity();
}
function loginValidate(frm) {
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(frm.email.value) == false) {
        alert("Vui lòng nhập email hợp lệ.");
        frm.email.focus();
        return false;
    }
    if (frm.password.value.length < 8) {
        alert("Mật khẩu có tối thiểu 8 ký tự.");
        frm.password.focus();
        return false;
    }
    alert("Đăng nhập thành công!");
    return true;
}
function registerValidate(frm) {
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(frm.email.value) == false) {
        alert("Vui lòng nhập email hợp lệ.");
        frm.email.focus();
        return false;
    }
    if (frm.username.value.length < 8) {
        alert("Tên người dùng có tối thiểu 8 ký tự.");
        frm.username.focus();
        return false;
    }
    if (frm.password.value.length < 8) {
        alert("Mật khẩu có tối thiểu 8 ký tự.");
        frm.password.focus();
        return false;
    }
    if (!document.querySelectorAll('input')[3].checked) {
        alert("Vui lòng đồng ý với các Điều Khoản & Điều Kiện");
        return false;
    }
    alert("Gửi dữ liệu đăng ký thành công!");
    return true;
}