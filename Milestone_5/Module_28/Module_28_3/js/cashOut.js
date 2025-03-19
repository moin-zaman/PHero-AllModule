const cashOutBtn = document.getElementById('cash-out-btn').addEventListener('click', function()
{
    const cashOutAmount = getInputFieldValueByID('input-cash-out-amount');

    const cashOutPin = getInputFieldValueByID('input-cash-out-pin');


    if(isNaN(cashOutAmount)){
        alert("Not a Valid amount for Withdraw . Please try Again");
        return;
    }
    

    if(cashOutPin === 12345)
    {
        const balance = getTextFieldValueById('account-balance');
        if(balance > 500 && cashOutAmount >= 0 && cashOutAmount <= (balance - 500) )
        {
            const remainingAmount = balance - cashOutAmount;
            document.getElementById('account-balance').innerText = remainingAmount;

            // Add Transaction History
            const div = document.createElement('div');
            div.classList.add('bg-yellow-300');

            div.innerHTML = `
                <h4 class="text-2xl font-bold">Cash Out</h4>
                <p>${cashOutAmount} Tk. withdraw and New Balance =  ${remainingAmount}</p>
            `

            console.log(div.innerText);

            document.getElementById('transaction-container').appendChild(div);
        }
        else{
            console.log("Your balance is : ", balance);
            const remainingAmount = balance - cashOutAmount;
            
            if(remainingAmount >= 0)
            {
                console.log("You can only withdraw : ", remainingAmount);
            }
            else{
                console.log("Not a Valid Amount");
            }
        }
    }else{
        console.log("Pin or amount is incorrect or not valid");
    }


});