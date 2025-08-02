function calculateFinalScore(obj) {
    

    if(typeof(obj) === 'object')
    {
        let totalScore = 0;

        if(obj.isFFamily)
        {
            let bonus = 20;
            totalScore += obj.testScore + obj.schoolGrade + bonus;

            if(totalScore >= 80)
            {
                return true;
            }
            else{
                return false;
            }

        }
        else{

            totalScore += obj.testScore + obj.schoolGrade;

            if(totalScore >= 80)
            {
                return true;
            }
            else{
                return false;
            }
        }
    }

    else{
        return `Invalid Input`;
    }

}





const obj = {
    name: "Rajib",
    testScore: 50,
    schoolGrade: 30,
    isFFamily: false
};

// const obj = {
//     name: "Rajib",
//     testScore: 45,
//     schoolGrade: 25,
//     isFFamily: false
// };

// const obj = "hello";

// const obj = {
//     name: "Rajib",
//     testScore: 15,
//     schoolGrade: 25,
//     isFFamily: true
// };


console.log(calculateFinalScore(obj));


// Another Approach


// function calculateFinalScore(obj) {
//     if (typeof obj !== 'object' || obj === null) {
//         return "Invalid Input";
//     }

//     let bonus = obj.isFFamily ? 20 : 0;
//     let totalScore = obj.testScore + obj.schoolGrade + bonus;

//     return totalScore >= 80;
// }