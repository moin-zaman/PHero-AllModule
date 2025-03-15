
// 5
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink()
{
    document.body.style.backgroundColor = 'pink';
}

// 6
const makeGreen = document.getElementById('make-green');
makeGreen.addEventListener('click',function(){
    document.body.style.backgroundColor = 'green';
})

// Final Important: We will use this sometimes

document.getElementById('makeGoldenRod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
});