var num = [10, 20, 30, 40, 50];

var sum = 0;

for(var x = 0; x < 5; x++)
{
    sum = sum + num[x];
}
console.log("Sum = ", sum);

var n = Number(prompt("Please enter the size of an Array : "));


var arr = new Array(n);

for(var i = 0; i < n; i++)
{
    arr[i] = Number(prompt("Enter the number : "));
}

for(var i = 0; i < n; i++)
{
    console.log(arr[i]);
}