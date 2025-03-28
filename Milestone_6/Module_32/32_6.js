function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}

const firstServer = kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());

console.log();

const second = kitchen();
console.log(second());
console.log(second());
console.log(second());
console.log(second());

console.log();

console.log(firstServer());
console.log(firstServer());

console.log();

const third = kitchen();
console.log(third());
console.log(third());
console.log(third());
console.log(third());