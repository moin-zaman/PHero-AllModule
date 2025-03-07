function discountPrice(quantity)
{

    if(quantity > 100)
    {
        if(quantity <= 150)
        {
            const discountedItems = quantity - 100;
            const total = 100 * 100 + discountedItems * 90;
            return total;
        }
        else if(quantity > 150 && quantity <= 200)
        {
            const total = (100 * 100 ) + (50 * 90) + (quantity - 150) * 70;
            return total;
        }
        else
        {
            const total = (100 * 100 ) + (50 * 90) + (50 * 70) + (quantity - 200) * 60;
            return total;
        }
    }
    else{
        const total = quantity * 100;
        return total;
    }
    
}

const cost = discountPrice(227);
console.log(cost);