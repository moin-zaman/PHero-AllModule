const placesCont = document.getElementById('placesContainer');

console.log(placesCont);

const chN = placesCont.childNodes;
console.log(chN);

const chN1 = chN[1];
console.log(chN1);

const chN3 = chN[3];
console.log(chN3);

const ulChN3 = chN3.childNodes[3];
console.log(ulChN3);

const nextSibl = ulChN3.nextSibling;
console.log(nextSibl);

const prevSibl = nextSibl.previousSibling;
console.log(prevSibl);

const placeUl =document.querySelector('#placesContainer ul');
console.log(placeUl);

// const li = document.createElement('p');
// const li = document.createElement('span');
// const li = document.createElement('div');
const li = document.createElement('li');
// const li = document.createElement('section');

// const liText = li.innerText = 'Brand New Place to go';
// console.log(liText);

li.innerText = 'Brand New Place to go';

placeUl.appendChild(li);

const li2 = document.createElement('li');
li2.innerText = 'Brand New Place to go 2';

placeUl.appendChild(li2);

placeUl.parentNode;
placeUl.parentNode.parentNode;
placeUl.parentNode.parentNode.parentNode;
placeUl.parentNode.parentNode.parentNode.parentNode;

