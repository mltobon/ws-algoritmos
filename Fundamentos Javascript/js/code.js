/*
Variables
*/
let string="esto es una cadena";
let string1= "1";//esto también es una cadena
let string2='esto también es una cadena';
let string3= `esto también es una cadena`;
let num= 1; // esto es un número
let booleano= true; //esto es una variable lógica
//tambien puedo crear varias variables al tiempo
let var1,var2=0, var3=4;
var1=0;
const element=document.querySelector("#numero");
console.log(element);
document.getElementById("cadena").innerHTML=string+"<br>"+string2+"<br>"+string2+"<br>"+string3;
document.getElementById("numero").innerHTML=""+var2+var3+var1+num;
document.getElementById("booleano").innerHTML=booleano;
/**
 * Tipos de datos especiales
 * Undefined, NaN, null
 */
let num2;
let num3=4;
//esto imprime undefined, la variable esta declarada pero aún no tiene valor
document.getElementById("undefined").innerHTML="num es: "+num2; 
//document.write("************"+num2);
//esto imprime NaN, no se puede operar con textos
document.getElementById("nan").innerHTML="numero * cadena es: "+num3*string3; 
//null es una variable declarada como vacia, el vacio puede ser declarado de forma intencional
let numNull=null;
document.getElementById("null").innerHTML="esto es :"+numNull;

let nombreBackticks=prompt("Ingrese su nombre");
let stringBackTicks=`Hola ${nombreBackticks} bienvenida`;
document.getElementById("backticks").innerHTML=stringBackTicks;
/**
 * Condicionales
 */

let numTest1=4;
let numString="4";
if(nombreBackticks=="nicolas"){
    alert("el nombre es nicolas");
}else if(nombreBackticks=="santiago"){
    alert("el nombre es santiago");
}else{
    alert("el nombre es otro nombre");
}

//switch es otro tipo de condicional
validarSwitch();
//también es posible hacer if anidados

function validarSwitch(){
 let opcion= parseInt(prompt("Ingrese su edad"));
 switch(opcion){
case 12:
    alert("su edad es 12");
    break;
case 10:
    alert("su edad es 10");
    break;
    default:
        alert("su edad no es ni 10 ni 12");
 }
}
/**
 * Arreglos
 * Los arreglos son objetos, guardamos varios datos
 */

//puedo crear arreglos que contengan tipos de datos diferentes
let test=["Claudia",20,"F","Ingeniería de Software"];
//document.write("arreglo comun: <b>"+test+"</b>");
let posicion=0;
document.write("la posición"+posicion+" contiene: "+test[0]+"<br>");

document.getElementById("arrayComun").innerHTML="<b>Esto es un arreglo comun:</b> <br> "+test+"<br>";
/**
 * Arreglos asociativos
 * se le asocian nombres a las posiciones
 * La sintaxis es similiar al formato JSON*
 */ 
let estudiante1=
    {
    nombre: "Carolina",
    edad:23,
    genero:"F",
    carrera:"Ingeniería de Software"};

//document.write("******************"+estudiante1[0]+"<br>");

document.getElementById("arrayAsociativo").innerHTML="arreglo asociativo: "+estudiante1+"<br>";
document.write(estudiante1["edad"]+"<br>");

let nombre= estudiante1["nombre"];
let edad= estudiante1["edad"];
let fraseSaludo=`Hola ${nombre} cómo estas?... veo que tienes ${edad} años`;

document.write(fraseSaludo+"<br>");

/**
 * Ciclos
 * Break y continue
 */

// ciclo while
let numero=20;
while(numero>0){
  //  document.write(numero+"<br>");
    if(numero==10){
        document.write("<b>"+numero+"</b><br>");
        break; //termina el ciclo
        //no se ejecutan las líneas de codigo despues del break, 
        //se termina inmediatamente el ciclo
    }
    if(numero==18){
       numero--;
       continue; //salta el ciclo
    } 
    document.write(numero+"<br>");
    numero--;
}
// ciclo for 
document.write ("Este es un ciclo for:<br>")
let i=25;
for(let i=0;i<10; i++){
    if(i==7){
        break;
    }
    document.write("dentro del ciclo la i es: "+i+"<br>")
}
//fuera del ciclo for, la i tiene el valor que fue asignado, 
//la asignación let tiene su ambito local, dentro del ciclo for
document.write("la i vale: "+i+"<br>");

/**************** revisar do while **********/

/**
 * For in y for of
 * let test=["Claudia",20,"F","Ingeniería de Software"];
 */

document.write("<h2>for in <br></h2>");
//devuelve la posición de los elementos
for(let valor in test){
    document.write(valor+"<br>");
}
document.write("<h2>for of </h2><br>");
//devuelve el valor de los elementos
for(let valor of test){
    document.write(valor+"<br>");
}
//for tradicional
document.write("<h1>For tradicional</h1>");
for(let i=0; i<test.length;i++){
    document.write(test[i]+"<br>");
}

//para sacar el valor de la casilla con un for in
//let test=["Claudia",20,"F","Ingeniería de Software"]; 
document.write("<h2>Para obtener valores de un for in</h2>");

for(let valor in test){
    document.write(test[valor]+"<br>");
}
document.write("<h2>Un arreglo dentro de otro y etiquetas label</h2>");

estudiantesAlgoritmos=["Maria Fernanda H", "Maria Fernanda L", "Santiago Jaramillo", "Alvaro Marin"];
estudiantesIntroduccion=["Valentina", "Carlos", "Javier", "Mariana",estudiantesAlgoritmos,"Otro Estudiante"];
document.write("******************************* <br>");

for(let estudiante of estudiantesIntroduccion){
        document.write(estudiante+"<br>");

}
document.write("*********+++++++++++++++++++++++*************** <br>");


estudiantesTest=["a","b", "c"];
estudiantesTest.array.forEach(element => {
    console.log(element);
});
//label
estudiantesIntroduccion:
for(let estudiante in estudiantesIntroduccion){
    if(estudiante==4){
       // document.write(estudiantesIntroduccion[estudiante]);
        //continue; //se salta el arreglo de estudiantes de algoritmos y continua con otro estudiante
        estudiantesAlgoritmos:
        for(let estudiante2 of estudiantesAlgoritmos)
        {
           /* Saltamos a Maria Fernanda H
            if(estudiante=="Maria Fernanda H"){
                continue;
            }*/ 
           
            if(estudiante2=="Maria Fernanda L"){
                //break estudiantesIntroduccion;
                break;
            }
           // break estudiantesAlgoritmos;
            document.write(estudiante2+"<br>")
           // break estudiantesIntroduccion; //termino los dos bucles luego de imprimir el primer estudiante de algoritmos
             
        }
        break; //terminamos antes de imprimir otro estudiante
    }
    else{
        document.write(estudiantesIntroduccion[estudiante]+"<br>");
    }
}
/***************** funciones *********************/

document.write("<h2>Funciones</h2>");
//declarar una función
function saludarTarde(){
 alert("Hola buenas tardes");
}
//llamando/invocando la funciónes, le estoy pidiendo que se ejecute
saludarTarde();

function saludarEstudiantes(estudiante){
    document.write("Hola: "+estudiante+"</br>");
   // alert("Hola: "+estudiante);
}
//estudiantesAlgoritmos=["Maria Fernanda H", "Maria Fernanda L", "Santiago Jaramillo", "Alvaro Marin"];

for(let estudiante of estudiantesAlgoritmos){
    saludarEstudiantes(estudiante);
}

//otra forma de declarar funciones
let saludar=function(){
document.write("Hola de nuevo<br>");
//alert("Hola");
return 5+5;// puedo retornar un valor aqui
}
//alert(saludar());

/**
 * 
 * @returns funciones con retorno
 */

function testReturn(){
   // alert("esta funcion no tiene retorno");
    return "estamos retornando la función";
    //no se pone nada despues del return, ya que no se va ejecutar.
}
//alert("El valor de la funcion es: "+testReturn());
let testRetorno= testReturn();
document.write(testRetorno +"<br>");

/**
 * Parametros en las funciones
 */
let resultadoSuma=0;;
function sumar(a,b){
    let resultadoSuma=a+b;
    return resultadoSuma;
}
document.write("el resultado de la suma funcion sumar() es: "+sumar(5,10));

/**
 * Funciones Flecha
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

document.write("<h2>Funciones Flecha</h2>");

//sin parametros
//functions se conviernte en ()=>
const saludarF= ()=>{
  //  alert("hola funcion flecha");
}
saludarF();

//cuando la función requiere parametros
const saludarFlecha= (nombre)=>{
    let frase= `<br>Hola ${nombre} cómo estas?`;
    document.write(frase);
}
 saludarFlecha("Santiago");

//cuando solo recibe un parametro los parentesis no son necesarios
 const saludarFlechaUnParametro=nombre=>{
    let frase= `<br>Hola ${nombre} cómo estas?`;
    document.write(frase);
 }
 saludarFlechaUnParametro("Alvaro");
//si solo tenemos una línea de codigo para ejecutar no es necesario las llaves {}
// esta funcion con una sola línea retorna implicitamente, sin la palabra return
const saludarUnaSentencia=nombre=>document.write("<br> Hola como estas "+nombre);
 
 saludarUnaSentencia("Maria Fernanda L");
