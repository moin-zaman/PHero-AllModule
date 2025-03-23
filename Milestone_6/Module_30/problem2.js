// 1)

const arr = friends => {
    const newFriend = [];
    for(const friend of friends)
        {
            if(friend.length % 2 === 0)
            {
                newFriend.push(friend);
            }
        }
        return newFriend;
};
    
    
const friends = ['Moin', 'Zamainna', 'Khanina', 'Tanshen'];
const names = arr(friends);
console.log(names);

// 2) 


const square = squareElements => {
    let sum = 0;

    for(const key of squareElements)
    {
        sum += key * key;
    }

    return sum / squareElements.length;
}

const squareElements = [2, 3, 5, 1, 4];
const avgArray = square(squareElements);
console.log(avgArray);


// 3)

const maximum = (firstArray, secondArray) => {
    const combinedArray = [...firstArray, ...secondArray];

    const max = Math.max(...combinedArray);
    return max;

};

const firstArray = [2, 10, 5, 7];
const secondArray = [15, 6, 4];

const max = maximum(firstArray, secondArray);
console.log(max);

