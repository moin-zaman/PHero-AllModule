// 2

function makeRed() {
    document.body.style.backgroundColor = 'red';
}


// 3

const makeBlueButton = document.getElementById('make-blue');
console.log(makeBlueButton);

makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


// 4

const makePurpleButton = document.getElementById('make-purple');

makePurpleButton.onclick =  function makePurple()
{
    document.body.style.backgroundColor = 'purple';
};




