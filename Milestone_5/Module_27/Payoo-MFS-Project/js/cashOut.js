const cashOutAmount = document.getElementById('input-cash-out');

const cashOutPin = document.getElementById('input-cash-out-pin');

const cashOutBtn = document.getElementById('btn-cash-out');


const balance = document.getElementById('account-balance');


cashOutBtn.addEventListener('click', function (event) {

    event.preventDefault();

     // Value get from input field;

     const amount = parseFloat(cashOutAmount.value);
     const pin = cashOutPin.value;
 
     // Convert Account value value to double
     let balanceAmount = parseFloat(accountBalance.innerText);
 
     // console.log(accountBalanceValue);
     // console.log(typeof accountBalanceValue);

     

     if(pin === '12345')
     {
        if(amount <= (balanceAmount -500) )
        {
            const newBalance = balanceAmount - amount;
            balanceAmount = newBalance;
            balance.innerText = balanceAmount;

            console.log("Money has been withraded");

            cashOutAmount.value = '';
            cashOutPin.value = '';

            
        }
        else{
            console.log("Your Account balace is " , balanceAmount);

            const withrawAmount = balanceAmount - 500;
            console.log("You can only withdraw", withrawAmount, "Taka");

            cashOutAmount.value = '';
            cashOutPin.value = '';
        }
     }
     else{
        alert("Pin is incorrect");

        cashOutAmount.value = '';
        cashOutPin.value = '';
     }

});