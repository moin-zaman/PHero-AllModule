// Search form submit reloading Page

const buttonLogin = document.getElementById('button-login');

const phoneNumber = document.getElementById('phone-number');

const pinNumber = document.getElementById('pin-number');

buttonLogin.addEventListener('click', function(event){
    // step-2: prevent default behavior (prevent reloading browser)
    event.preventDefault(); //........ Bhejal line
    console.log("Login Button clicked");

    // step-3: get the phone number and the pin number

    console.log(phoneNumber.value);
    console.log(pinNumber.value);
});