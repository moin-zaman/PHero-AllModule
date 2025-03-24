const numbers1 = [1, 5, 6, 4, 15];

//forEach doesn't return anything

// const result = numbers.forEach(n => console.log(n))
const result = numbers1.forEach(n => {
    // console.log("hello");
})
// console.log(result); //undefined



// 2) 
// Filter
// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.
const numbers = [1, 5, 6, 4, 15];
const players = [75, 65, 67, 72, 55, 59];

// const selected = players.filter(p => p > 60);
// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 80);
// const selected = players.filter(p => p % 2 === 0);
const selected = players.filter(p => p % 2 === 1);
console.log(selected);

const friends = ['Tom', 'John', 'Micheal', 'Oliver'];
const oddFriends = friends.filter(f => f.length % 2 === 1);
console.log(oddFriends);


// 3)
// find

const findPlayers = [75, 65, 67, 72, 55, 59];

// const find = findPlayers.find(p => p > 70)
const find = findPlayers.find(p => p > 80)
console.log(find);

