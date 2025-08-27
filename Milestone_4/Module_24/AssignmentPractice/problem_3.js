function checkDigitsInName(name) {

    if (typeof (name) === 'string') 
    {

        let count = 0;

        for (const n of name) 
        {
            
            if((n >= '0' && n <= '9'))
            {
                count++;
            }

        }

        if(count !== 0)
        {
            return true;
        }
        else{
            return false;
        }

    }
    else{
        return `Invalid Input`;
    }

}


// const name1 = ["Raj"];
// console.log(checkDigitsInName(name1));



// Another way

// function checkDigitsInName(name) {
//     if (typeof (name) === 'string') {
//         let count = 0;

//         for (const n of name) {
//             if (n >= '0' && n <= '9') {
//                 count++;
//             }
//         }

//         return count !== 0;
//     } else {
//         return `Invalid Input`;
//     }
// }


// Anoter Way 

// function checkDigitsInName(name) {
//     if (typeof name !== "string") {
//         return "Invalid Input";
//     }

//     for (const n of name) {
//         if (n >= '0' && n <= '9') {
//             return true;   // digit পেলেই সাথে সাথে return
//         }
//     }
//     return false;
// }

