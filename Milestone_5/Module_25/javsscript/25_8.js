const placesLIst = document.getElementById('places-list');
console.log(placesLIst);

const li = document.createElement('li');
li.innerText = "Saint Martin";
placesLIst.appendChild(li);

const mainContainer = document.getElementById('main-container');

console.log(mainContainer);

const section = document.createElement('section');

// section.innerHTML = '<h2>Added New Section Using JS</h2>';

const h1 = document.createElement('h1');
h1.innerText = "Added New Section Using JS";

section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'biriyani';
ul.appendChild(li1);



const li2 = document.createElement('li');
li2.innerText = 'moglai';
ul.appendChild(li2);



const li3 = document.createElement('li');
li3.innerText = 'shemai';
ul.appendChild(li3);

section.appendChild(ul);


mainContainer.appendChild(section);


const sectionDress = document.createElement('section');

sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
    <li>T-shirt</li>
    <li>Genji</li>
    <li>Pant</li>
</ul>
`

mainContainer.appendChild(sectionDress);
