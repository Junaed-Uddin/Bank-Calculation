
document.getElementById('submit-btn').addEventListener('click', function () {
    const emailField = document.getElementById('email-field').value;
    const passFiled = document.getElementById('password-field').value;

    if (emailField === '123@gmail.com' && passFiled === '12345') {
        window.location.replace('./bank.html');
    }
    else {
        alert('Invalid User.!');
        document.getElementById('email-field').value = '';
        document.getElementById('password-field').value = '';
    }
});
