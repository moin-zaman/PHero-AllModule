// 1. Reassign to an Empty Array

let arr1 = [1, 2, 3];
arr1 = [];  // Now arr is an empty array

// 2. Set Length to Zero

let arr = [1, 2, 3];
arr.length = 0;
console.log(arr); // []



// 3. Use .splice()

let arr2 = [1, 2, 3];
arr.splice(0, arr2.length);
console.log(arr2); // []



// 4) Use .pop() in a Loop (Less Efficient)

let arr = [1, 2, 3];
while (arr.length > 0) {
    arr.pop();
}
console.log(arr); // []
