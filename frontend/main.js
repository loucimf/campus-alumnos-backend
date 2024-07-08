
// let dataUser = [];
// console.log('hello')
// let buttonCreateUser = document.getElementById("buttonCreate")

// buttonCreateUser.addEventListener("click", writeUserData);

// function getUserData() {
//     let inputName = document.getElementById("name").value
//     let inputLastName = document.getElementById("lastName").value
//     let inputPassword = document.getElementById("password").value
//     console.log('Retrieved User Data')

//     return [inputName, inputLastName, inputPassword];
// }


// function writeUserData() {
//     let [name, lastName, password] = getUserData()
//     dataUser.push(name, lastName, password)
//     console.log('Wrote User Data')
// }

// Fetch data from the backend

let buttonCreateUser = document.getElementById("buttonCreate")
buttonCreateUser.addEventListener("click", getData);

function getData() {
    console.log("hello!")

    fetch('http://localhost:8080/api/test')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            // Create a new paragraph element
            // const p = document.createElement('p');
            // Set the text content to the 'hello' property of the item
            // p.textContent = item.hello;
            // Append the paragraph to the body
            // document.body.appendChild(p);
            console.log(item)
        });
    })
    .catch(error => console.error('Error:', error));
}

// export { dataUser };