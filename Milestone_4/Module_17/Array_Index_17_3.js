var arr = [1, 3, 6, 56, 21, 43];
arr[1] = 66;

console.log(arr);

console.log(arr[4]);
console.log(arr[6]);

var indexNum = arr.indexOf(43);
console.log(indexNum);

var count = -1;

for(var x = 0; x < arr.length; x++)
{
    if(56 === arr[x])
    {
        count = x;
    }
}
if(count === -1)
{
    console.log("Value is not avialable");
}
else{
    console.log("Index is ", count);
}
