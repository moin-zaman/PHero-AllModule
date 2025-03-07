
function totalCost(products)
{
    let total = 0;
    for(const product of products)
    {
        // sum += product.price;

        const thisProductCost  = product.price * product.quatity;
        total += thisProductCost;

    }
    return total
}

const products = [
    {name: "shampoo", price: 800, quatity: 5}, // 4000
    {name: "chironi", price: 200, quatity: 7}, // 1400
    {name: "parent", price: 2000, quatity: 9}, // 18000
    {name: "shirt",  price: 1500, quatity: 3} //4500
]

const cost = totalCost(products);
console.log(cost);