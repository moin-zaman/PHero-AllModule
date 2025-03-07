


// function noDuplicate(names)
// {
//     const uniques = [];
//     let i = 0;
//     for(const key of names)
//     {
//         if(uniques.includes(key) === true)
//         {
//             continue;
//         }
//         else{
//             uniques.push(key);

//         }
//     }
//     return uniques;
// }



function noDuplicate(names)
{
    const uniques = [];
    let i = 0;
    for(const key of names)
    {
        // if(uniques.includes(key) === false)
        if(!uniques.includes(key))
        {
            uniques.push(key);
        }
    }
    return uniques;
}






const names1 = ["Moin","Zaman","Khan", "Moin", "Raisan", "Khan"];

// const numb = [2, 5, 7, 1,2, 5, 9, 7, 6, 1];

const uniquesArray = noDuplicate(names1);
console.log(uniquesArray);