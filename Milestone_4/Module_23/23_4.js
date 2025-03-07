
function totalCost(products)
{
    let max = products[0];
    for(const key of products)
    {
        if(max.price < key.price)
        {
            max = key
        }
    }
    return max;
}


const shoppingCart = [
    {name: 'Shoes', price: 1200, quantity: 2},
    {name: 'Shirts', price: 600, quantity: 3},
    {name: 'Pant', price: 1500, quantity: 1},
    {name: 'Belt', price: 350, quantity: 1}
];

const expensive = totalCost(shoppingCart);
console.log("Expensive one is : ", expensive);



// const min = shoppingCart[0];
// console.log(min);