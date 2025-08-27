
function calculateFinalScore(obj)
{
    if(typeof(obj) === 'object')
    {
        if(!Array.isArray(obj))
        {
            const examScore = obj.testScore;
            const grade = obj.schoolGrade;
            const parenProfession = obj.isFFamily;
            const quotaMarks = 20;
            let totalGrade = 0;

            if(parenProfession === true)
            {
                

                totalGrade = examScore + grade + quotaMarks;
                return totalGrade >= 80;
            }
            else{
                
                totalGrade = examScore + grade;
                return totalGrade >= 80;

            }
        }
    }
    else{
        return `Invalid Input`
    }
}


const obj = {
    name: "Rajib",
    testScore: 15,
    schoolGrade: 25,
    isFFamily: true
};

console.log(calculateFinalScore("hello"));


// Another Approach

// function calculateFinalScore(obj) {
//     if (typeof obj !== "object" || Array.isArray(obj) || obj === null) {
//         return "Invalid Input";
//     }

//     const examScore = obj.testScore ?? 0;
//     const grade = obj.schoolGrade ?? 0;
//     const parentProfession = obj.isFFamily ?? false;
//     const quotaMarks = 20;

//     let totalGrade = examScore + grade;
//     if (parentProfession === true) {
//         totalGrade += quotaMarks;
//     }

//     return totalGrade >= 80;
// }

// // ✅ Examples:
// console.log(calculateFinalScore({
//     name: "Rajib",
//     testScore: 15,
//     schoolGrade: 25,
//     isFFamily: true
// }));  // false

// console.log(calculateFinalScore("hello"));  




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


// console.log(calculateFinalScore(obj));


// Another Approach


// function calculateFinalScore(obj) {
//     if (typeof obj !== 'object' || obj === null) {
//         return "Invalid Input";
//     }

//     let bonus = obj.isFFamily ? 20 : 0;
//     let totalScore = obj.testScore + obj.schoolGrade + bonus;

//     return totalScore >= 80;
// }