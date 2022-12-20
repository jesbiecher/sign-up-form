//VARIABLES
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const phoneNumber = document.querySelector('#phone-number');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#confirm-password');

const firstNameError = document.querySelector('#first-name-error');
const lastNameError = document.querySelector('#last-name-error');
const phoneNumberError = document.querySelector('#phone-number-error');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');
const passwordConfirmError = document.querySelector('#confirm-password-error');


//EVENT LISTENERS
firstName.addEventListener("input", function () {
    if (firstName.value === '') {
        firstNameError.textContent = 'Please type in your first name.';
    } else {
        firstNameError.textContent = '';
    }
});

lastName.addEventListener("input", function () {
    if (lastName.value === '') {
        lastNameError.textContent = 'Please type in your last name.';
    } else {
        lastNameError.textContent = '';
    }
});

phoneNumber.addEventListener("input", function () {
    if (phoneNumber.value === '') {
        phoneNumberError.textContent = 'Please type in your phone number.';
    } else {
        phoneNumberError.textContent = '';
    }
});

email.addEventListener("input", function () {
    if (email.value === '') {
        emailError.textContent = 'Please type in your email.';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Please type in a valid email.';
    } else {
        emailError.textContent = '';
    }
});

password.addEventListener("input", function () {
    if (password.value === '') {
        passwordError.textContent = 'Please type in your password.';
    } else if (password.validity.patternMismatch) {
        passwordError.textContent = 'Password must be at least 8 characters, contain 1 capital letter and 1 number.';
    } else {
        passwordError.textContent = '';
    }
});

passwordConfirm.addEventListener("input", function () {
    if (password.value !== passwordConfirm.value) {
        passwordConfirmError.textContent = 'Passwords do not match';
    } else if (passwordConfirm.value === '') {
        passwordConfirmError.textContent = 'Please type in your password again.';
    } else {
        passwordConfirmError.textContent = '';
    }
});

