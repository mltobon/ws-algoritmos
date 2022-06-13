const divContainer= document.getElementById("container");
const buttonAdd= document.getElementById("addBtn");
const buttonDelete= document.getElementById("deleteBtn");
const buttonListUser= document.getElementById("listUsersBtn");

buttonAdd.addEventListener("click",addUser);
buttonDelete.addEventListener("click",deleteUser);
buttonListUser.addEventListener("click",getUsers);

const url= "https://629f80b38b939d3dc2994aa1.mockapi.io/api/v1/";
let users=[];

const getInfo=async(resource)=>{
    const response= await fetch(url+resource);
    return response.json();
}

async function getUsers(){
    users=await getInfo("users");
    showInfo();
}

async function showInfo(){
    divContainer.innerHTML="";
    users.forEach(item=>{
        divContainer.innerHTML+=item.nombre+"<br>";
    })
}

function addUser(){
    let nombre=prompt("Ingrese el nombre");
    let edad= parseInt(prompt("ingrese la edad"));
    let user={
        nombre:nombre,
        edad:edad
    }
    users.push(user);
    showInfo();
    saveUser(user);
}
function deleteUser(){
    let id= prompt("ingrese el ID");
    deleteFinalUser(id);
}

function deleteFinalUser(id){
    fetch(url+"users/"+id,{
        method:'DELETE'
    })
    .then(response=>response.json());
    getUsers();
}

function saveUser(user){
    fetch(url+"users",{
        method:'POST',
        body:JSON.stringify(user),
        headers:{
            "Content-type":"application/json"
        }
    })
    .then(response=>response.json());
}
