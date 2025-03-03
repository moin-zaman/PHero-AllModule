//  node loop_reverse_18_7.js

var num = 5;
while(num > 0)
{
    console.log(num)
    num--;
}

for(var i = 5; i > 0; i--)
{
    console.log(i);
}

let n = 0;
while(n <= 15)
{
    n++;
    if(n % 5 !== 0)
    {
        continue;
    }
    console.log(n);
}