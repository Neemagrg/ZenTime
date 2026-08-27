// Newsletter Form Validation
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
    if (!emailPattern.test(email)) {
      e.preventDefault();
      alert('Please enter a valid email address.');
    } else {
      alert('Thank you for subscribing!');
    }
  });
  