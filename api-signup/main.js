
let dataUser = [];
console.log('hello')
let buttonCreateUser = document.getElementById("buttonCreate")

buttonCreateUser.addEventListener("click", writeUserData);

function getUserData() {
    let inputName = document.getElementById("name").value
    let inputLastName = document.getElementById("lastName").value
    let inputPassword = document.getElementById("password").value
    console.log('Retrieved User Data')

    return [inputName, inputLastName, inputPassword];
}


function writeUserData() {
    let [name, lastName, password] = getUserData()
    dataUser.push(name, lastName, password)
    console.log('Wrote User Data')
}


export { dataUser };