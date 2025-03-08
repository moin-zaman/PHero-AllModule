
function smallestName(heights)
{
    let minName = heights[0];
    let minWordCount = heights[0].length;
    
    for(const key of heights)
    {
        let count = 0;

        count = key.length;

        if(count < minWordCount)
        {
            minName = key;
            minWordCount = count;
        }
    }
    return minName;

}



const heights2 = ['rahim', 'robin', 'ron', 'rafi', 'rashed', 're'];

const small = smallestName(heights2);
console.log(small);
