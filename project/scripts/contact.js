document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('form-success');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();

            // This will save to localStorage, the idea is in the future send it to a database or link it to an email account.
            const contactMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
            contactMessages.push({ name, email, message, date: new Date().toISOString() });
            localStorage.setItem('contactMessages', JSON.stringify(contactMessages));

            form.reset();
            successMsg.style.display = 'block';
            setTimeout(() => { successMsg.style.display = 'none'; }, 4000);
        });
    }
});