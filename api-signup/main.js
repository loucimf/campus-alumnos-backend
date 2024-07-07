
let dataUser = [];
console.log('hello')
let buttonCreateUser = document.getElementById("buttonCreate")

buttonCreateUser.addEventListener("click", writeUserData);

function getUserData() {
    let inputName = document.getElementById("name")
    let inputLastName = document.getElementById("lastName")
    let inputPassword = document.getElementById("password")
    return inputName, inputLastName, inputPassword;
}


function writeUserData() {
    let [name, lastName, password] = getUserData()
    dataUser.push(name)
    dataUser.push(lastName)
    dataUser.push(password)

    console.log(name)
    
}


export { dataUser }