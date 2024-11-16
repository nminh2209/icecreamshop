// -*- coding: utf-8 -*-

//   index.html
let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}


var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
});

var swiper = new Swiper(".reviews-slider", {
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    grabCursor:true,
    loop:true,
    spaceBetween:20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});





// order.html


function validateOrderForm() {
    var deliveryOption = document.getElementById('deliveryOption').value;
    var deliveryAddress = document.getElementById('deliveryAddress').value;
    var billingAddress = document.getElementById('billingAddress').value;
    var contactNumber = document.getElementById('contactNumber').value;
    var email = document.getElementById('email').value;
    var paymentOption = document.getElementById('paymentOption').value;
    var creditCardNumber = document.getElementById('creditCardNumber').value;

    // Flag to track if there are any errors
    var error = false;
    var errorMessage = "";

    // Check if any required field is blank
    if (deliveryOption.trim() === '' || contactNumber.trim() === '' || email.trim() === '' || paymentOption.trim() === '' || creditCardNumber.trim() === '') {
        errorMessage += "All fields are required.\n";
        error = true;
    }

    // Check if delivery option is "delivery" and delivery address is empty
    if (deliveryOption === 'delivery' && deliveryAddress.trim() === '') {
        errorMessage += "Please enter your delivery address.\n";
        error = true;
    }

    // Check if "same as delivery address" is checked but delivery address is not filled
    if (document.getElementById('sameAsDelivery').checked && deliveryAddress.trim() === '') {
        errorMessage += "Please enter your delivery address first.\n";
        error = true;
    }

    // If there are errors, display them
    if (error) {
        alert(errorMessage);
        return false; // Prevent form submission
    }

    // If no errors, allow form submission
    return true;
}

function copyDeliveryAddress() {
    // If "same as delivery address" is checked, copy delivery address to billing address
    if (document.getElementById('sameAsDelivery').checked) {
        document.getElementById('billingAddress').value = document.getElementById('deliveryAddress').value;
    } else {
        document.getElementById('billingAddress').value = ''; // Clear billing address if checkbox is unchecked
    }
}
// Function to validate order form
function validateOrderForm() {
    var deliveryAddress = document.getElementById('deliveryAddress').value;
    var billingAddress = document.getElementById('billingAddress').value;
    var contactNumber = document.getElementById('contactNumber').value;
    var email = document.getElementById('email').value;
    var creditCardNumber = document.getElementById('creditCardNumber').value;

    var errors = [];

    // Check if delivery address is blank
    if (deliveryAddress.trim() === '') {
        errors.push('Delivery address is required');
    }

    // Check if billing address is blank
    if (billingAddress.trim() === '') {
        errors.push('Billing address is required');
    }

    // Check if contact number is blank
    if (contactNumber.trim() === '') {
        errors.push('Contact number is required');
    }

    // Check if email is blank
    if (email.trim() === '') {
        errors.push('Email is required');
    }

    // Check if credit card number is blank and if it's of valid length based on type
    var selectedCardType = document.getElementById('cardType').value;
var maxCardLength = 16; // Default for Visa and MasterCard
if (selectedCardType === 'amex') {
    maxCardLength = 15;
}
if (creditCardNumber.trim() === '' || creditCardNumber.length !== maxCardLength || isNaN(creditCardNumber)) {
    errors.push('Invalid credit card number');
}




    // Display errors if any
    if (errors.length > 0) {
        alert(errors.join('\n'));
        return false; // Prevent form submission
    }

    // If no errors, allow form submission
    return true;
}

// Event listeners for form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    if (!validateRegistrationForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

document.getElementById('orderForm').addEventListener('submit', function(event) {
    if (!validateOrderForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});




// registration.html

function validateRegistrationForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var gender = document.getElementById('gender').value;
    var iceCream = document.querySelectorAll('input[name="iceCream"]:checked').length;

    // Flag to track if there are any errors
    var error = false;
    var errorMessage = "";

    // Check if any required field is blank
    if (username.trim() === '' || password.trim() === '' || email.trim() === '' || gender.trim() === '' || iceCream === 0) {
        errorMessage += "All fields are required.\n";
        error = true;
    }

    // Check if password is at least 9 characters long
    if (password.length < 9) {
        errorMessage += "Password must be at least 9 characters long.\n";
        error = true;
    }

    // If there are errors, display them
    if (error) {
        alert(errorMessage);
        return false; // Prevent form submission
    }

    // If no errors, allow form submission
    return true;
}




