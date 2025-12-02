const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];

const userList = document.getElementById('userList');

for (const user of users) {

    const li = document.createElement('li');
    li.textContent = `Nom : ${users.name}, Âge : ${users.age}`;


    userList.appendChild(li);
}
