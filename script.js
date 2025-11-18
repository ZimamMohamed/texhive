// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

// Simple form submission (demo)
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting TEXHIVE! We will get back to you soon.');
    form.reset();
});

// Simple form submission alert
document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

const contact = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        alert('✅ Thank you! Your message has been sent successfully.');
        form.reset();
      } else {
        alert('❌ Oops! Something went wrong. Please try again.');
      }
    });
  });

  const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuIcon.classList.toggle('active');
});

// Close menu when clicking a link (optional)
document.querySelectorAll('.nav-links li a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuIcon.classList.remove('active');
  });
});

