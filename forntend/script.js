document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const signUpLink = document.getElementById('signUpLink');
    const signInLink = document.getElementById('signInLink');

    signUpLink.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.add('right-panel-active');
    });

    signInLink.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.remove('right-panel-active');
    });

    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const privacyPolicy = document.getElementById('privacyPolicy').checked;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        if (!privacyPolicy) {
            alert('You must accept the privacy policy!');
            return;
        }

        alert(`Registration successful! Name: ${name}, Email: ${email}`);
        // Implement your signup logic here, e.g., send the data to the server
    });

    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        alert(`Login successful! Email: ${email}`);
        // Implement your login logic here, e.g., send the data to the server
    });
});
