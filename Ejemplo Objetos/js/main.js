window.onload=iniciarDatos;
var personas=[];

function iniciarDatos(){
    const botonAgregar=document.getElementById("btnAgregar");
    botonAgregar.addEventListener("click",agregar);
    const botonMostrar= document.getElementById("btnMostrar");
    botonMostrar.addEventListener("click",mostrar);
}

function agregar(){
const nombre= document.getElementById("nombre").value;
const apellido= document.getElementById("apellido").value;
const telefono= document.getElementById("telefono").value;
const direccion= document.getElementById("direccion").value;

   let persona={
        "nombre":nombre,
        "apellido":apellido
    }
    personas.push(persona);
    localStorage.personas=JSON.stringify(personas);
}

function mostrar(){
    console.log(localStorage.getItem("personas"));
    var estudiantes1=JSON.parse(localStorage.personas);
    document.getElementById("mostrar").innerHTML=JSON.stringify(estudiantes1);
}  