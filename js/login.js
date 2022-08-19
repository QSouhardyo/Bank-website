document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('email-user')
    const email = emailField.value

    const passwordField = document.getElementById('password-user')
    const password = passwordField.value
    if (email == 'abul@gmail.com' && password == 'abul21%') {
        window.location.href = 'bank.html'
    }
    else {
        console.log('invalid')
    }
})