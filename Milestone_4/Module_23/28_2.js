function sortMaker(arr) {
    if(!Array.isArray(arr) || arr.length !== 2 || typeof(arr[0]) !== 'number' || typeof(arr[1]) !== 'number')
    {
        return `invalid input`;
    }
    else if(arr[0] === arr[1])
    {
        return 'equal';
    }
    else{
        return arr.sort((a, b) => a - b);
    }
}

console.log(sortMaker([2, 3]));
console.log(sortMaker([4, 2]));
console.log(sortMaker([3, "abc"]));



