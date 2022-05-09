"use strict";



const boton1= document.getElementById("boton1");
const boton2= document.getElementById("boton2");
const boton3= document.getElementById("boton3");
const boton4= document.getElementById("boton4");
const boton5= document.getElementById("boton5");
const boton6= document.getElementById("boton6");
const boton7= document.getElementById("boton7");
const boton8= document.getElementById("boton8");
const boton9= document.getElementById("boton9");
const boton10= document.getElementById("boton10");
const boton11= document.getElementById("boton11");
const boton12= document.getElementById("boton12");
const boton13= document.getElementById("boton13");
const boton14= document.getElementById("boton14");

//expression function
const saludar= ()=>{
    console.log("****** ")
    let from="Hola";
    var message=prompt("ingrese su nombre");
    showMessage(from, message);
};

//le ponemos un evento al boton mediante el atributo onclick del elemento
boton1.onclick=function(){
    alert("Hola");
};

//le ponemos un evento al boton mediante el método listener
boton2.addEventListener("click",saludar);

function showMessage(from, message="estudiante"){
    alert(from+" "+message);
    alert(saludar); //una función es un valor, no importa como sea creada
    alert(showMessage);
}

//copiar una función a una variable
function sayHi() {   // (1) crear
    alert( "SayHi" );
}
let func = sayHi;    // (2) copiar

boton4.onclick=function(){
  func(); // Hola          // (3) ejecuta la copia (funciona)!
  sayHi(); // Hola         // esto también funciona (por qué no lo haría)
}
  
// funciones callback
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
  
  function showOk() {
    alert( "Estás de acuerdo." );
  }
  
  function showCancel() {
    alert( "Cancelaste la ejecución." );
  } 
  // uso: las funciones showOk, showCancel son pasadas como argumentos de ask
boton5.onclick= function(){
    ask("Estás de acuerdo?", showOk, showCancel);
    ask(
        "Estás de acuerdo, otra manera?",
        function() { alert("Estás de acuerdo"); },
        function() { alert("Cancelaste la ejecución."); }
      );
};
boton6.onclick= function(){
    let age = prompt("Cuál es tu edad?", 18);
    // declarar condicionalmente una función
    if (age < 18) {
    
      function welcome() {
        alert("Hola!");
      }
    } else {
    
      function welcome() {
        alert("Saludos!");
      }
    }
    welcome(); // Error: welcome no está definida - Ver en consola
};
boton7.onclick= function(){
    let age = prompt("Cuál es tu edad?", 18);
    let welcome;
    if (age < 18) {
        welcome = function() {
            alert("Hola!");
        };
    } else {
            welcome = function() {
            alert("Saludos!");
            };
        }
    welcome(); // ahora ok
}
boton8.onclick= function(){
    let variable=prompt("ingrese un número para la variable");
    const mensaje;
    if(variable==0){
        mensaje="Buenos días";
    }
    else{
        mensaje="Buenas tardes";
    }
    alert(mensaje);
    //también puedo escribir esto así:
    let variable2=prompt("ingrese otro número");
   let mensaje4=(variable2==10)?"Buenos días":"Buenas tardes";
    alert("**"+mensaje+"**");
}

boton9.onclick= function(){
    let age = prompt("Cuál es tu edad?", 20);
    let welcome = (age < 20) ? function() { alert("Hola!"); } :
    function() { alert("Saludos!"); };
    welcome(); // ahora ok
}

/**
 * 
 * @returns funciones con retorno
 */

function testReturn(){
   // alert("esta funcion no tiene retorno");
   let mensaje12="hola";
   return mensaje12;
   // return "estamos retornando la función";
    //no se pone nada despues del return, ya que no se va ejecutar.
}
console.log(testReturn());
//alert("El valor de la funcion es: "+testReturn());
let testRetorno= testReturn();
boton10.onclick= function(){
    alert(testRetorno);
}

/**
 * Funciones Flecha
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

//sin parametros
//function se conviernte en ()=>
const saludarF= ()=>{
     alert("hola funcion flecha");
  }
boton11.onclick= function(){
    saludarF();
}
let ejemplo=`asdfasdf
<h1> asdfasdf </h1>
<p>asdfasdf</p>
asdfafdsa ${boton1}
`;
//cuando la función requiere parametros
const saludarFlecha= (nombre)=>{
    let frase= `Hola ${nombre} cómo estas?`;
    alert(frase);
}
boton12.onclick=function(){
    saludarFlecha("Santiago");
}
//cuando solo recibe un parametro los parentesis no son necesarios
 const saludarFlechaUnParametro=nombre=>{
    let frase= `Hola ${nombre} cómo estas?`;
    alert(frase);
 }
 boton13.onclick= function(){
    saludarFlechaUnParametro("Alvaro");
 }
//si solo tenemos una línea de codigo para ejecutar no es necesario las llaves {}
// esta funcion con una sola línea retorna implicitamente, sin la palabra return
const saludarUnaSentencia=nombre=>document.write("<br> Hola como estas "+nombre);
 boton14.onclick= function(){
    saludarUnaSentencia("Maria Fernanda L");
 }