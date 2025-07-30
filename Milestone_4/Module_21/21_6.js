function doMath(num1, num2)
{
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply/2;

    return result;
}

const result = doMath(10, 3);

console.log(result);


function isEven(n)
{
    if(n % 2 === 0)
    {
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(10));
console.log(isEven(7));