document.getElementById('btn-add-money')
    .addEventListener('click', function(event){

        event.preventDefault();

        const enterAmount = getInputValueById('enter-amount');

        if(isNaN(enterAmount))
        {
            alert(`Please enter a valid Number`);
            return;
        }

        const enterPin = getInputValueById('enter-pin');


        const accountBalance = getInnerTextById('account-balance');


        if(enterPin.toString() === '1234')
        {
            if(enterAmount >= 1 && enterAmount <= 50000)
            {
                const totalAmount = accountBalance + enterAmount;

                document.getElementById('account-balance').innerText = totalAmount;

                const p = document.createElement('p');
                p.innerText = `Added ${enterAmount} and Total Balance is ${totalAmount}`;

                document.getElementById('transactions-container').appendChild(p);

                alert(`${enterAmount} is successfully Added`)
            }
            else{
                alert("Please enter amount 1 to 50000");
            }
        }
        else{
            alert("Amount orr Pin is correct");
        }

        
})