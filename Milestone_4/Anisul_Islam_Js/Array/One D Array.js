// node "One D Array.js"

function highScore(scores, n)
{
    var max = scores[0];
    var min = scores[0];

    for(var i = 1; i < n; i++)
    {
        if(max < scores[i])
        {
            max = scores[i];
        }

        if(min > scores[i])
        {
            min = scores[i];
        }
    }

    return [max, min];
    
}

var scores = [5, 3, 9, 8, 1];

var values = highScore(scores, 5);

console.log(values[0]);
console.log(values[1]);