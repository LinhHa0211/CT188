function contactValidate(contactForm){
  // Check if the email is valid
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(contactForm.email.value)) {
    alert("Sai Định Dạng Email!!!\n");
    contactForm.email.focus();
    return false;
  }

  if(contactForm.content.value.length < 10){
    alert("Nội Dung Liên Hệ Phải Có Từ 10 Kí Tự Trở Lên\n");
    contactForm.content.focus();
    return false;
  }

  alert("Đã Nộp Đơn Liên Hệ Thành Công!");
  return true;
}


