const inputColor = document.getElementById("inputColor");
const boton = document.getElementById("boton");
const textoHexa = document.getElementById("textoHexa");
const cardColor = document.getElementById("cardColor");
const newElement= document.getElementById("newElements");


console.log(inputColor.value);

boton.addEventListener("click", () => {
    console.log(inputColor.value);
    textoHexa.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;
    addElement();
    testQuerySelector();
    testTagName();
});


function showColor(){
    console.log(inputColor.value);
    textoHexa.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;
    addElement();
    testQuerySelector();
}

function addElement(){
    let listaSinOrden = document.createElement("ul");
    document.body.appendChild(listaSinOrden);
   //newElement.appendChild(listaSinOrden);

    let elemento1Lista = document.createElement("li");
    elemento1Lista.textContent = "It's Free";
    listaSinOrden.appendChild(elemento1Lista);

    let elemento2Lista = document.createElement("li");
    elemento2Lista.textContent = "It's Awesome";
    listaSinOrden.appendChild(elemento2Lista);
}

function testQuerySelector(){
    console.log(document.querySelector("h1"));
    console.log(document.querySelector(".text-primary"));
    console.log(document.querySelector("#tituloWeb"));
    // El primer elemento que encuentre
    console.log(document.querySelector(".text-danger"));
    // Todos
    console.log(document.querySelectorAll(".text-danger"));
    // Todo lo que esté en "container"
    console.log(document.querySelectorAll(".container .text-danger"));
}

function testTagName(){
    const tagName= document.getElementsByTagName("div");
    console.log("**TagName** ");
    console.log(tagName);
    window.scrollTo(200, 0);    
}
