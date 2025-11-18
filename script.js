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
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const successModal = document.getElementById('success-modal');
    const closeModal = document.getElementById('close-modal');

    let submitting = false;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Stop normal submission
        if (submitting) return; // prevent double submission
        submitting = true;

        const formData = new FormData(contactForm);
        const submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;

        try {
            // Use Formspree AJAX URL
            const response = await fetch('https://formspree.io/f/mblwlgry', {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                contactForm.reset();
                successModal.style.display = 'flex'; // show success modal
            } else {
                alert('Oops! Something went wrong. Please try again.');
            }
        } catch (error) {
            alert('Oops! Something went wrong. Please try again.');
        } finally {
            submitButton.disabled = false;
            submitting = false;
        }
    });

    // Close modal on X
    closeModal.addEventListener('click', () => {
        successModal.style.display = 'none';
    });

    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target === successModal) {
            successModal.style.display = 'none';
        }
    });
});

