
// 1) Inch to Feet

function inchToFeet(inch)
{
    const feet = inch / 12;
    return feet;
}

console.log(inchToFeet(75));


// 1) Inch to Feet 2

function inchToFeet2(inch)
{
    const feetNum = parseInt(inch / 12);
    const inchNum = inch % 12;

    console.log(feetNum, ' ft ', inchNum, ' inch ');
    
}

inchToFeet2(75);


// 3) Mile to Kilo


function mileToKilo(mile)
{
    const kilo = mile * 1.60934;
    return kilo;
}

console.log(mileToKilo(32));