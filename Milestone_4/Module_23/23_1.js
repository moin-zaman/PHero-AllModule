
function getmax(num1, num2, num3)
{
    if(num1 > num2 && num1 > num3)
    {
        return num1;
    }
    else if(num2 > num1 && num2 > num3)
    {
        return num2;
    }
    else{
        return num3;
    }
}

const max1 = getmax(20,43,101);
console.log(max1);

const max2 = getmax(98,21,86);
console.log(max2);

const max3 = getmax(110, 245, 2);


const ultimateMax = getmax(max1, max2, max3);
console.log("Max = ", ultimateMax);

console.log(Math.max(2,65,101,54,87,21,43));
console.log(Math.min(2,65,101,54,87,21,43));