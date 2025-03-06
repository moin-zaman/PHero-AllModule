
// 1) Leap Year

function isLeapYear(year)
{
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
    {
        console.log(year, " is a Lear Year");
    }
    else{
        console.log(year, " is not  a Lear Year");
    }
}

isLeapYear(1900);

// 2) Leap Year 2

function isLeapYear2(year)
{
    if((year % 4 === 0 && year % 100 !== 0))
    {
        return `${year} is a Leap Year`;
        // console.log(year, " is a Lear Year");
    }
    else if(year % 100 === 0 && year % 400)
    {
        return `${year} is a Leap Year`;
        // console.log(year, " is a Lear Year");
    }
    else{
        // console.log(year, " is not  a Lear Year");
        return `${year} is not a Leap Year`;
    }
}

console.log(isLeapYear2(2023));
console.log(isLeapYear2(2024));