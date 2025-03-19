const cashOutBtn = document.getElementById('cash-out-btn').addEventListener('click', function()
{
    const cashOutAmount = getInputFieldValueByID('input-cash-out-amount');

    const cashOutPin = getInputFieldValueByID('input-cash-out-pin');

    

    if(cashOutPin === 12345)
    {
        const balance = getTextFieldValueById('account-balance');
        if(cashOutAmount >= 0 && cashOutAmount <= (balance - 500) )
        {
            const remainingAmount = balance - cashOutAmount;
            document.getElementById('account-balance').innerText = remainingAmount;
        }
        else{
            console.log("Your balance is : ", balance);
            const remainingAmount = balance - cashOutAmount;
            console.log("You can olly withdraw : ", remainingAmount);
        }
    }


});