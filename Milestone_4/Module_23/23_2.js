



function MaxMin(heights)
{

    let max = heights[0];
    let min = heights[0];

    for(const key of heights)
        {
        
            if(max < key)
            {
                max = key;
            }
            if(min > key)
            {
                min = key;
            }
        
        }
        return [max, min];
    }



    const heights = [65,66,68,72,78,60];
    const maxMin = MaxMin(heights);

    console.log("Max = ", maxMin[0]);
    console.log("Min = ", maxMin[1]);


// console.log("Max = ", max);
// console.log("Min = ", min);

console.log(heights.slice(1));


// Another Approach

// function MaxMin(heights) {
//     let max = heights[0];
//     let min = heights[0];

//     for (const [index, key] of heights.entries()) {
//         if (index === 0) continue;  // Skip index 0

//         if (key > max) {
//             max = key;
//         }
//         if (key < min) {
//             min = key;
//         }
//     }

//     return [max, min];
// }