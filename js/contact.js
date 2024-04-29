var flagSuccess = false;

function hideContactModal(){
  document.getElementById('contact-modal').style.display = 'none';
}

function showContactModal(message, type = 'error'){
  document.getElementById('contact-modal').style.display = 'flex';
  document.getElementById('contact-modal-message').innerHTML = message;
  var submitBtn = document.getElementById('submit');
  if (type === 'error') {
      document.getElementById('contact-modal-message').style.color = 'red';
      document.getElementById('contact-modal-title').innerHTML = 'Lỗi';
      document.getElementById('contact-modal-title').style.color = 'black';
      document.getElementById('contact-modal-button').style.backgroundColor = '#f44336';
      document.getElementById('contact-modal-button').onclick = () => {
        hideContactModal();
        flagSuccess = false;
        submitBtn.type = '';
        submitBtn.style.cursor = 'not-allowed';
        submitBtn.style.backgroundColor = 'gray';
      }
  } else {
      document.getElementById('contact-modal-message').style.color = 'green';
      document.getElementById('contact-modal-title').innerHTML = 'Thành công';
      document.getElementById('contact-modal-title').style.color = 'green';
      document.getElementById('contact-modal-button').style.backgroundColor = 'green';
      document.getElementById('contact-modal-button').onclick = () => {
          hideContactModal();
          flagSuccess = true;  
          submitBtn.type = 'submit';
          submitBtn.style.cursor = 'pointer';
          submitBtn.style.backgroundColor = '#333232';
      }
  }
}

function contactValidate(){
  // let inputId = ["first-name", "last-name", "email", "topic", "content"];
  let inputName = ["Họ", "Tên", "Email", "Chủ Đề", "Nội Dung"];

  let inputList  = document.getElementsByName('input');
   

  for(let i = 0; i < inputList.length; i++) {
      if ((inputList[i].tagName == "INPUT" || inputList[i].tagName == "TEXTAREA") && inputList[i].value === '' ) {
          showContactModal(`Bạn Chưa Nhập ${inputName[i]}`);
          inputList[i].focus();
          return;
      }
  }

  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let email = document.getElementById('email');
  let topic = document.getElementById('topic');
  let content = document.getElementById('content');

  // Check if the email is valid
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const namePattern = /^[\p{L}'\-\s]+$/u;
  const digitPattern = /^[0-9]+$/;

  if(!namePattern.test(firstName.value) || digitPattern.test(firstName.value)){
    showContactModal("Sai Định Dạng Họ!");
    firstName.focus();
    return;
  }

  if(!namePattern.test(lastName.value) || digitPattern.test(lastName.value)){
    showContactModal("Sai Định Dạng Tên!");
    lastName.focus();
    return;
  }

  if(!emailPattern.test(email.value)) {
    showContactModal("Sai Định Dạng Email!");
    email.focus();
    return;
  }

  if(topic.value.length < 5) {
    showContactModal("Chủ Đề Liên Hệ Phải Có Từ 5 Kí Tự Trở Lên");
    topic.focus();
    return;
  }

  if(content.value.length < 10){
    showContactModal("Nội Dung Liên Hệ Phải Có Từ 10 Kí Tự Trở Lên");
    content.focus();
    return;
  }

  showContactModal("Đã Xác Nhận Đơn Liên Hệ Thành Công!", 'success');  
}
function submitContactForm(){
  document.getElementById("contact-form").onsubmit = function() {
    return flagSuccess;
  }
}
