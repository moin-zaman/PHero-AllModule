document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){

        event.preventDefault();

        const cashOutAmount = getInputValueById('enter-cash-out-amount');

        if(isNaN(cashOutAmount))
        {
            alert(`Please enter a valid Number`);
            return;
        }

        const enterPin = getInputValueById('enter-cash-out-pin');

        const accountBalance = getInnerTextById('account-balance');
 


        if(enterPin.toString() === '1234')
        {
            if(cashOutAmount >= 1 && cashOutAmount <= accountBalance)
            {
                const totalAmount = accountBalance - cashOutAmount;

                document.getElementById('account-balance').innerText = totalAmount;

                const div = document.createElement('div');

                div.classList.add('bg-yellow-400', 'space-y-5');

                div.innerHTML = `
                    <h1>Cash Out</h1>
                    <p>${cashOutAmount} withdraw and Total Balance ${totalAmount}</p>

                `

                document.getElementById('transactions-container').appendChild(div);




                alert(`${cashOutAmount} is successfully Cash Out`)
            }
            else{
                alert("Please enter 1 to ", accountBalance);
            }
        }
        else{
            alert("Amount orr Pin is correct");
        }

        
})