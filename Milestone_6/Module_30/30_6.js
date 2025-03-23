const max = Math.max(6, 23, 45, 1, 89, 23);
console.log(max);

const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
// const arrayMax = Math.max(numbers);
const arrayMax = Math.max(...numbers); /// (...) this 3 dots are called spread operator
console.log(arrayMax);

// use spread operator to copy
const friends = [4, 5, 87, 9];

const bondhu = friends;
bondhu.push(5,7);
console.log(bondhu);
console.log(friends);

const friends1 = [2, 10, 20, 30];
const dosto = [...friends1, 100] // copy

console.log(friends1);
console.log(dosto);



friends1.push(300);
console.log(friends1);
console.log(dosto);

const dosto1 = [friends];
dosto1.push(89);
console.log(dosto1);    
console.log(friends);    