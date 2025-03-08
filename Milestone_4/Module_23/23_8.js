function cubeNumber(input) {
    if(typeof(input) !== 'number')
    {
        return `${input} this is an invalid number`;
    }

    return input ** 3;
}

console.log(cubeNumber(3));
console.log(cubeNumber(4));
console.log(cubeNumber('asd'));
console.log(cubeNumber(4+1));

function multiply(n1, n2)
{
    if(typeof(n1) !== 'number' || typeof(n2) !== 'number')
    {
        return `${n1} and ${n2} not a valid number`;
    }
    return n1 * n2;
}
console.log(result = multiply(2, 6));
console.log(result = multiply(2, 'ad'));




function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Invalid string";
    }

    if (string1.includes(string2)) {
        return true;
    } else {
        return false;
    }
}

console.log(matchFinder("John Doe", "ohn"));
console.log(matchFinder("JavaScript", "Code"));
console.log(matchFinder("Peter Parker", "Pen"));
console.log(matchFinder("Peter Parker", "pet"));
console.log(matchFinder("Hello", "world")); 
console.log(matchFinder(123, "abc"));
console.log(matchFinder("Hello", 456)); 