function discountPrice(quantity)
{
    if(quantity <= 100)
    {
        const cost  = quantity * 100;
        return cost;
    }
    else if(quantity >= 101 && quantity <= 200)
    {
        const cost = quantity * 90;
        return cost;
    }
    else{
        const cost = quantity * 70;
        return cost;
    }
}

const cost = discountPrice(201);
console.log(cost);