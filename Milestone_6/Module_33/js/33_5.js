// index.js
const loadUsers2 = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
        .then(res => res.json())
        .then(data => displayUsers2(data))
}

const displayUsers2 = (data) => {

    

    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;

        document.getElementById('users-list').appendChild(li);

        // console.log(user.name);
    }
}