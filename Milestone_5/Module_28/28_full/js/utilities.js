
function getInputValueById(id)
{
    const inputValue = document.getElementById(id).value;
    const inputValueNum = Number(inputValue);
    return inputValueNum;
}

function getInnerTextById(id)
{

    const innerValue = document.getElementById(id).innerText;
    const innerValueNum  = Number(innerValue);
    return innerValueNum;
}

function showSectionById(id, id2)
{
    document.getElementById('show-add-money-form').classList.add('hidden');
    document.getElementById('show-cash-out-form').classList.add('hidden');
    document.getElementById('show-transactions-form').classList.add('hidden');


    document.getElementById('choose-add-money').classList.add('btn-primary');
    document.getElementById('choose-cash-out').classList.add('btn-primary');
    document.getElementById('choose-transactions').classList.add('btn-primary');


    document.getElementById(id).classList.remove('hidden');

    document.getElementById(id2).classList.remove('btn-primary');
}

