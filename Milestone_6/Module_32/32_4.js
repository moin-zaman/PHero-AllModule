// always use ===
// equal comparison doesnt work for non-primitive

// const first = [45, 54, 98];
// const second = [45, 54, 98];
// if(first === second) //memory address are comparing
// {
//     console.log('values are equal')
// }
// else{
//     console.log('values are not equal');
// }

const first1 = {};
const second1 = {};

if(first1 == second1) //memory address are comparing
{
    console.log('values are equal')
}
else{
    console.log('values are not equal');
}


const first = 0;
const second = false;

if(first == second) 
{
    console.log('values are equal')
}
else{
    console.log('values are not equal');
}




// type coercion for == equal
// type conversion
// type casting