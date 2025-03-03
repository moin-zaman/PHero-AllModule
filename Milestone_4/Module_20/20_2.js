// String And  Object

const sub = "Chemistry";

const book = "chemistry";

var sub1 = sub.toLowerCase(); //It returns a new String

if(sub1 === book)
{
    console.log(sub, " = ", book);
}

else{
    console.log(sub, " !== ", book);
}


const drink = "    water  ";
const liquid = "  water";


if(drink.trim() === liquid.trim())
{
    console.log("pani er opor nam life");
}
else{
    console.log("Somudro pani blah blah");
}

// Trim function just removes white of both sides of the character