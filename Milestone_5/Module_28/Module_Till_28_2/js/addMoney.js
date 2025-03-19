const addMoneyBtn = document.getElementById('btn-add-money');

const inputMoney = document.getElementById('input-add-money');

const inputPin = document.getElementById('input-pin-number');

const accountbalance = document.getElementById('account-balance');

addMoneyBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const balance = parseFloat(inputMoney.value);
    const pin = inputPin.value;

    if (pin === '12345') {
        if (balance >= 0 && balance <= 50000) {
            const existentAmount = parseFloat(accountbalance.innerText);

            const totalMoney = balance + existentAmount;
            accountbalance.innerText = totalMoney



            console.log(balance, "taka added");
            console.log(totalMoney);

            inputMoney.value = '';
            inputPin.value = '';

        }
        else {
            console.log("You can add only 50000 not more than that");
        }

    }

    else {
        inputMoney.value = '';
        inputPin.value = '';

        console.log("Sorry!!! Your Pin is incorrect .Please Try Again");
    }


});