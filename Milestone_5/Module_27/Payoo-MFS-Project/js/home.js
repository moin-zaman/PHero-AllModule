const inputAddMoney = document.getElementById('input-add-money');

const inputPinNumber = document.getElementById('input-pin-number');

const addMoneyBtn = document.getElementById('btn-add-money');


const accountBalance = document.getElementById('account-balance');






addMoneyBtn.addEventListener('click', function (event) {
    event.preventDefault();

    // Value get from input field;

    const valueAddMoney = parseFloat(inputAddMoney.value);
    const valuePinNumber = inputPinNumber.value;

    // Convert Account value value to double
    let accountBalanceValue = parseFloat(accountBalance.innerText);

    // console.log(accountBalanceValue);
    // console.log(typeof accountBalanceValue);


    // console.log(valueAddMoney, valuePinNumber);

    if (valuePinNumber === '12345') {
        if (valueAddMoney <= 20000 && valueAddMoney >= 0) {
            console.log("Money added");
            const newBalance = accountBalanceValue + valueAddMoney;

            accountBalance.innerText = newBalance;
            // console.log(typeof (accountBalance.innerText));

            // console.log(accountBalanceValue);
        }
        else {
            alert("Amount is not valid");
        }
    }
    else {
        console.log("Pin is incorrect");
    }




});






