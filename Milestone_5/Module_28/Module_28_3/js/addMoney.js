const addMoneyBtn = document.getElementById('add-money-btn');


console.log("add Money file loaded");

addMoneyBtn.addEventListener('click', function(event){

    const inputAmount = document.getElementById('input-amount');
    const inputPin = document.getElementById('input-pin');

    const balance = inputAmount.value;
    const pin = inputPin.value;

    console.log(balance);
    console.log(pin);

});