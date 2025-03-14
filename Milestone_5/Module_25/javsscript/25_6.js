// .fruitsContainer #fruitsTitle
// .someClass .randomClass .blueBg


const sections = document.querySelectorAll('section');

console.log(sections);

for(const sec of sections)
{
    console.log(sec);
    sec.style.border = '2px solid tomato';
    sec.style.marginBottom = '5px';
    sec.style.borderRadius = '15px';
    sec.style.paddingLeft = '7px';
    sec.style.backgroundColor = 'lightgray';
}

// const placesCont = document.getElementById('placesContainer');

// placesCont.style.backgroundColor = 'tomato';

const placesCont = document.getElementById('placesContainer');

console.log(placesCont.getAttribute('class'));

placesCont.classList.add('textCenter')

console.log(placesCont.getAttribute('class'));
console.log(placesCont.classList);

placesCont.classList.remove('textCenter');
