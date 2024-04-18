const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Get the email from contact form
    const email = document.getElementById('email').value;

    // Check if the email is valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Wrong Email Format!!!");
      return;
    }

    alert("Form Is Submitted Successfully");
    location.reload();
});



