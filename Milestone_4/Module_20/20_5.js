// Object

const mobile = {
    type: "IOS",
    model: "Iphone 16",
    release: "2024",
    color: "white",
    new: true,
    iphone: ["Iphone 16", "Iphone 16 mini", "Iphone 16 pro"],
    Others:{
        type: "Android",
        model: "S23"
    },
    bestt: function(){
        console.log ("Iphone, Samsung");
    }
};

// console.log(mobile);

console.log(mobile.Others.model);
console.log(mobile.iphone[1]);
var bb = mobile.bestt();
// console.log(bb);
