// Search form submit reloading Page

const buttonLogin = document.getElementById('button-login');

const phoneNumber = document.getElementById('phone-number');

const pinNumber = document.getElementById('pin-number');

buttonLogin.addEventListener('click', function(event){
    // step-2: prevent default behavior (prevent reloading browser)

    event.preventDefault(); //........ Bhejal line
    console.log("Login Button clicked");

    // step-3: get the phone number and the pin number

    // console.log(phoneNumber.value);
    // console.log(pinNumber.value);
    console.log(phoneNumber.value, pinNumber.value);

    // step-4: validate phone and Pins
    // this is temporary. You should do like this.

    if(phoneNumber.value === '5' && pinNumber.value === '1234')
    {
        console.log("You are Logged in");
        window.location.href = './home.html'

    }
    else{
        alert("Wrong phone number or pin");
    }

    // setting the value of input field as empty
    // phoneNumber.value = '';
    // pinNumber.value = '';

});