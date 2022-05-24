window.onload=iniciarDatos;
var personas;
if(localStorage.getItem("personas")){
    personas=JSON.parse(localStorage.getItem("personas"));
}
else{
    personas=[];
}

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
        "apellido":apellido,
        "telefono":telefono
    }
    personas.push(persona);
    localStorage.setItem("personas",JSON.stringify(personas));
}

function mostrar(){
    let personasArreglo=JSON.parse(localStorage.getItem("personas"));
    console.log(personasArreglo);
    personasArreglo.forEach(persona => {
        document.getElementById("mostrar").innerHTML+=persona.nombre+"<br>";    
    });
    localStorage
}  