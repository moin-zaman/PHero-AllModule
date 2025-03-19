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
    const inputFieldValue = document.getElementById(id).value;
    return inputFieldValue;
}