const add = "Mohammadpur";
const part = add.slice(2,5);
console.log(part);

const sen = "I am a good, and hardworking person";
// console.log(sen.split(""));
// console.log(sen.split());

console.log(sen.split(" "));

console.log(sen.split(","));

console.log(sen.split("a"));

const friendsStr = "Rahim,kahim,dahim,Lahim,Fahim,Sahim";

console.log(friendsStr.split(","));

const realFriend = ['Rahim', 'kahim', 'dahim', 'Lahim', 'Fahim', 'Sahim' ];

console.log(realFriend.join());
console.log(realFriend.join(" | "));

const f = "Moin";
const l = "Zaman";
const fN = f + " " + l;

const FN = f.concat(" ").concat(l);
console.log(fN);
console.log(FN);

console.log(fN.includes('in'));

// let str = "JavaScript";
// console.log(str.substring(0, 4)); // "Java"
// console.log(str.substring(4, 0)); // "Java" (swaps start and end cause eend value is greater than start value)
// console.log(str.substring(4));    // "Script"