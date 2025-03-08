function getPrice(product)
{
    if(typeof(product) !== 'object')
    {
        return "Please provide an object";
    }
    let price;
    return price = product.price;
}

const price = getPrice({name: 'chuljani dandi', price: 35, close: 'blue'});
// const price = getPrice(234);
console.log(price);



function getSecond(numbers)
{
    if(!Array.isArray(numbers))
    {
        return "Please provide an array";
    }
    const second = numbers[1];
    return second;
    
}

const second = getSecond([125, 65]);
console.log(second);

const s = getSecond(34);
console.log(s);