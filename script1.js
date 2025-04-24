document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        formMessage.textContent = '';
        formMessage.className = 'form-message';

        const name = form.name ? form.name.value.trim() : '';
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        const firstName = form.firstName.value.trim();
        const lastName = form.lastName.value.trim();
        const department = form.department.value;
        const branch = form.branch.value;
        const rollNo = form.rollNo.value.trim();
        const phone = form.phone.value.trim();
        const year = form.year.value;

        if (!firstName) {
            alert('Please enter your first name.');
            return;
        }

        if (!department) {
            alert('Please select your department.');
            return;
        }

        if (!branch) {
            alert('Please select your branch.');
            return;
        }

        if (!year) {
            alert('Please select your year of study.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (phone && !validatePhone(phone)) {
            alert('Please enter a valid phone number.');
            return;
        }

        if (!message) {
            alert('Please enter your message.');
            return;
        }

        // Simulate form submission
        alert('Thank you for contacting us, ' + firstName + '! We will get back to you shortly.');
        form.reset();
    });

    function validateEmail(email) {
        // Simple email regex for validation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }

    function validatePhone(phone) {
        // Simple phone number regex (allows digits, spaces, dashes, parentheses, plus)
        const re = /^[\d\s\-\+\(\)]+$/;
        return re.test(phone);
    }
});
