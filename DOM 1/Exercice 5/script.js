const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];

const userList = document.getElementById('userList');

for (let i = 0; i < users.length; i++) {

    const li = document.createElement('li');
    li.textContent = `Nom : ${users[i].name}, Âge : ${users[i].age}`;


    userList.appendChild(li);
}
