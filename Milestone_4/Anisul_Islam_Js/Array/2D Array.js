// node "2D Array.js"

// var arr = [
//     [2, 5, 7],
//     [1, 8, 9],
//     [3, 4, 6]
// ]

// console.log(arr[1][2]);


function highScores(scores, n, m)
{

    var max = scores[0][0];
    var min = scores[0][0];

    for(var i = 0; i < n; i++)
    {
        for(var j = 0; j < m; j++)
        {
            if(max < scores[i][j])
            {
                max = scores[i][j];
            }

            if(min > scores[i][j])
                {
                    min = scores[i][j];
                }
        }
    }
    return [max, min];

}

var scores = [
    [2, 5, 7],
    [1, 8, 10],
    [3, 4, 15]
]

var values = highScores(scores, 3, 3);
console.log(values[0]);
console.log(values[1]);


function highestRunScorer(playersInfo, n)
{
    var highScorer = playersInfo[0][0];
    var highScore = playersInfo[0][1];

    for(var x = 1; x < n; x++)
    {
        if(highScore < playersInfo[x][1])
        {
            highScore = playersInfo[x][1];
            highScorer = playersInfo[x][0];
        }
    }

    return [highScorer, highScore];
}

var playersInfo = [
    ["A", 95],
    ["B", 125],
    ["C", 45],
    ["D", 105]
];


var values2 = highestRunScorer(playersInfo, playersInfo.length);

console.log(values2[0]);
console.log(values2[1]);






