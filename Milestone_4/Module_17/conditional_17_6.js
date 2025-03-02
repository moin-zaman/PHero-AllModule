//  node "conditional_17_6.js"

var n1 = 19;
var n2 = 12;
var n3 = 13;
if(n1 > n2 && n1 > n3)
{
    console.log(n1);
}
else if(n2 > n3)
{
    console.log(n2);
}
else
{
    console.log(n3);
}

var gr = true;
var sal = 80000;
var car = 1;

if(gr === true && sal >= 100000)
{
    console.log("Biya kor beda");
}
else
{

    console.log("Thak Biya korar ddorkar nai");
} 

if(gr === true && (sal > 100000 || car >= 1))
{
    console.log("Taratari biya koren");
}
else
{
    console.log("Biya Putki da dimu");
}