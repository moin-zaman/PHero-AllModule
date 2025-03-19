const showCashOut = document.getElementById('btn-show-cash-out');

const showAddAmount = document.getElementById('btn-show-add-money');

const cashOutForm = document.getElementById('cash-out-form');
const addMoneyForm = document.getElementById('add-money-form');


showCashOut.addEventListener('click', function(event){
    // event.preventDefault();

    cashOutForm.classList.remove('hidden');

    addMoneyForm.classList.add('hidden');
})


showAddAmount.addEventListener('click', function(event){
    // event.preventDefault();

    addMoneyForm.classList.remove('hidden');

    cashOutForm.classList.add('hidden');
})