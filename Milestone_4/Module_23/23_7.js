function add(a,b)
{
    return a+b;
}

function subtract(a,b)
{
    return a-b;
}

function multiply(a,b)
{
    return a*b;
}

function divided(a,b)
{
    if(b !== 0)
    {
        return a/b;
    }
    else{
        return `Divided by ${b} not possible`;
    }
}

function reminder(a,b)
{
    return a % b;
}

function calculator(a, b, operation)
{
    if(operation === 'add')
    {
        const result = add(a,b);
        return result;
    }
    else if(operation === 'sub')
    {
        const result = subtract(a,b);
        return result;
    }
    else if(operation === 'multi')
    {
        const result = multiply(a,b);
        return result;
    }
    else if(operation === 'divi')
    {
        const result = divided(a,b);
        return result;
    }
    else if(operation === 'rem')
    {
        const result = reminder(a,b);
        return result;
    }
    else{
        return `add , sub, multi, divi and rem possible`;
    }
}

const result = calculator(2, 7, "rem");


console.log(result);