var price = 2300;

if(price >= 5000)
{
    var discount = price * 10 / 100;
    var payAmount = price - discount;

    console.log("Discount : ", discount);
    console.log("Price After Discount : ", payAmount);
}

else if(price >= 2500 && price < 5000)
{
    var discount = price * 5 / 100;
    var payAmount = price - discount;

    console.log("Discount : ", discount);
    console.log("Price After Discount : ", payAmount);
}
else
{
    console.log("No Discount");
    console.log("Price is : ", price);
}


const age = 76;

const price1 = 500;

if(age <= 12)
{
    var discount = price1 * 50 / 100;
    var payAmount = price1 - discount;
    console.log("Discount : ", discount);
    console.log("Price After Discount : ", payAmount);
}
else if(age >= 60)
{
    var discount = price1 * 10 / 100;
    var payAmount = price1 - discount;
    console.log("Discount : ", discount);
    console.log("Price After Discount : ", payAmount);
}

else
{
    console.log("No Discount");
    console.log("Price is : ", price1);
}