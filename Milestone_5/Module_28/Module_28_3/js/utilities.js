// Common Shraed Function Here


// function getInputFieldValueByID()
// {
//     console.log("Will get value by id")

//     const inputAmount = document.getElementById('input-amount');
//     const inputPin = document.getElementById('input-pin');

//     const balance = inputAmount.value;
//     const pin = inputPin.value;

//     return [balance, pin];
// }


function getInputFieldValueByID(id)
{
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    // console.log(id, inputNumber, inputFieldValue);

    return inputNumber;
}

function getTextFieldValueById(id)
{
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);

    return textNumber;
}