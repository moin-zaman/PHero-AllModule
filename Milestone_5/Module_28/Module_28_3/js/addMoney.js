const addMoneyBtn = document.getElementById('add-money-btn');



// addMoneyBtn.addEventListener('click', function(event){

//     // event.preventDefault();

//     // console.log("Add Money Button Clicked");

//     // const inputFieldValues = getInputFieldValueByID();
//     // console.log("Add money value", inputFieldValues[0]);
//     // console.log("Pin value", inputFieldValues[1]);

//     // const inputAmount = document.getElementById('input-amount');
//     // const inputPin = document.getElementById('input-pin');

//     // const balance = inputAmount.value;
//     // const pin = inputPin.value;

//     // console.log(balance);
//     // console.log(pin);

// });


addMoneyBtn.addEventListener('click', function(event){

    const addMoney = getInputFieldValueByID('input-amount');

    const pinNumber = getInputFieldValueByID('input-pin');

    if(isNaN(addMoney)){
        alert("Not a Valid amount for Deposit . Please try Again");
        return;
    }


    // console.log("Deposite Amount", addMoney);
    // console.log("Pin Number", pinNumber);

    if(pinNumber === 12345)
    {
        const balance = getTextFieldValueById('account-balance');
        
        if(balance >= 0 && balance <= 50000)
        {
            const totalBalance = addMoney + balance;
            document.getElementById('account-balance').innerText = totalBalance;

            alert(`${addMoney} tk Added`);

            const p = document.createElement('p');

            p.innerText = `Added : ${addMoney} TK. and After adding money total amount is : ${totalBalance}`;

            document.getElementById('transaction-container').appendChild(p);


        }
        else{
            console.log("You can only add 50000 only at a time");
        }
    }
    else
    {
        alert("Pin number is not Currect");
    }

});