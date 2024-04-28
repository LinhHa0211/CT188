function contactValidate(contactForm){
  // Check if the email is valid
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const namePattern = /^[\p{L}'\-\s]+$/u;

  if(!namePattern.test(contactForm["first-name"].value)){
    alert("Sai Định Dạng Họ!!!\n");
    contactForm["first-name"].focus();
    return false;
  }

  if(!namePattern.test(contactForm["last-name"].value)){
    alert("Sai Định Dạng Tên!!!\n");
    contactForm["last-name"].focus();
    return false;
  }

  if(!emailPattern.test(contactForm.email.value)) {
    alert("Sai Định Dạng Email!!!\n");
    contactForm.email.focus();
    return false;
  }

  if(contactForm.topic.value.length < 5) {
    alert("Chủ Đề Liên Hệ Phải Có Từ 5 Kí Tự Trở Lên\n");
    contactForm.topic.focus();
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


