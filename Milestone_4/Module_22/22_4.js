
function isOdd(num, n)
{
    let sum = 0;
    let count = 0;
    for(const key in num)
    {
        if(num[key] % 2 !== 0)
        {
            sum += num[key];
            count++;
        }
    }
    console.log("Total ", count, ' Odd Numbers');
    const avg = sum / 2;
    return avg;
}

const arr = [5, 5, 8, 1, 10, 3, 9];

const avgOdd = isOdd(arr , arr.length);
console.log(avgOdd);