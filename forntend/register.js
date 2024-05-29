$(document).ready(function() {
    // Register Form Submission
    $('#registerForm').submit(function(e) {
        e.preventDefault();
        var name = $('#registerName').val();
        var email = $('#registerEmail').val();
        var password = $('#registerPassword').val();
        var confirmPassword = $('#confirmPassword').val();

        // Perform client-side validation
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Perform AJAX request for registration
        $.ajax({
            url: 'http://127.0.0.1:8000/api/register/',
            method: 'POST',
            data: {
                'username': name,
                'email': email,
                'password': password
            },
            success: function(response) {
                alert("Registration successful");
                $('#registerForm')[0].reset();
            },
            error: function(xhr, status, error) {
                var errorMessage = xhr.responseJSON.message;
                alert(errorMessage);
            }
        });
    });

    // Login Form Submission
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        var email = $('#loginEmail').val();
        var password = $('#loginPassword').val();

        // Perform AJAX request for login
        $.ajax({
            url: '/api/login/',
            method: 'POST',
            data: {
                'email': email,
                'password': password
            },
            success: function(response) {
                alert("Login successful");
                $('#loginForm')[0].reset();
            },
            error: function(xhr, status, error) {
                var errorMessage = xhr.responseJSON.message;
                alert(errorMessage);
            }
        });
    });

    // Switch between sign-up and sign-in forms
    $('#signInLink').click(function(e) {
        e.preventDefault();
        $('#container').removeClass('right-panel-active');
    });

    $('#signUpLink').click(function(e) {
        e.preventDefault();
        $('#container').addClass('right-panel-active');
    });
});