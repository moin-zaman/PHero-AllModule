console.log("First File");
const allLi = document.getElementsByTagName('li');
console.log(allLi);

const allTitles = document.getElementsByClassName('section-title');
console.log(allTitles);

const secondSection = document.getElementById('second-section');
console.log(secondSection);

secondSection.style.color = 'white';
secondSection.style.backgroundColor = 'tomato';

const secondList = document.getElementById('second-list');

const li1 = document.createElement('li');
li1.innerText = "My Dynamic Item";

secondList.appendChild(li1);


const mainConatiner = document.getElementById('main-container');

const section = document.createElement('secetion');


section.innerHTML = `

    <h1>My Dynamic Section</h1>
    <p>Extra Text added inside paragraph</p>

    <ul>
        <li>1 - Item</li>
        <li>2 - Item</li>
        <li>3 - Item</li>
        <li>4 - Item</li>
    </ul>

`;

mainConatiner.appendChild(section);
