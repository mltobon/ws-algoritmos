/**
 * METODOS DE CADENAS
 */
let cadena1="   Monica Lorena   ";
let cadena2="Lorena"; 
let cadena3=cadena1.trim();

let cadenaResultado=cadena1.endsWith(cadena2);
document.write("Cádena 1 termina con cádena 2: "+cadenaResultado);
document.write("<br>");
document.write("Cadena1: Monica Lorena.trim()= "+cadena3);
document.write("<br>");

//otros metodos:
//endsWith
//includes
//indexof*
//split*
//substring
//tolowercase
//touppercase
//trim (remover espacios)
//tostring
//propiedad length

/**
 * METODOS DE ARRAYS
 */

let nombres =["Mariana","Alvaro","Valentina","Nicolas"];
let newArray=nombres.filter(nombre=>nombre.length>8);
document.write(newArray+"<br>");

nombres.splice(2,1,"Lorena");//elimino la primera posicion e inserto Lorena en su lugar
document.write("hola: "+nombres+"<br>");

/**** transformadores ***/
let guardar=nombres.pop(); //elimina el ultimo elemento del array, y retorna ese valor
document.write(nombres+"<br>");
document.write("El elemento eliminado fue: "+guardar+"<br>");
guardar=nombres.shift();//elimina el primer elemento del array
document.write(nombres+"<br>");
document.write("El elemento eliminado fue: "+guardar+"<br>");
nombres.push("Nuevo estudiante"); //agrega un elemento al final
document.write(nombres+"<br>");
nombres.reverse();//cambiar el orden de los elementos del array 
document.write(nombres+"<br>");
nombres.unshift("Monica");//agrega un elemento al inicio del array
document.write(nombres+"<br>");
nombres.sort();//ordena en orden alfabetico
document.write(nombres+"<br>");
nombres.splice(2,1,"Lorena");//elimino la primera posicion e inserto Lorena en su lugar
document.write(nombres+"<br>");
nombres.splice(2,0,"Alvaro");//no elimino nada, solo inserto en la "segunda" posición Alvaro
document.write(nombres+"<br>");

/*** Metodos accesores ***/
//no modifica el arreglo original, crea una cadena de texto a partir de los elementos del array y separa con el elemento que le indicamos
let cadenaNombres=nombres.join("***"); 
document.write(cadenaNombres+"<br>");
//crea un nuevo arreglo desde 0 hasta la posición 2, el 3 no está incluido (n-1)
let nuevoArray=nombres.slice(0,3);
document.write(nuevoArray+"<br>");

//Otros metodos:
//includes
//indexof
//lastindexof

//devuelve los elementos que coincidan con la condición especificada
nuevoArray=nombres.filter(nombre=>nombre.length>8);
document.write(nombres+"<br>");
document.write(nuevoArray+"<br>");
//otra forma de escribir
nombres.forEach((nombre)=>{
    document.write(nombre + "<br>");
});
document.write("Foreach: <br>")
//funciona igual que filter, pero no permite hacer filtros bajo una condicion
//no tiene un retorno
nuevoArray=nombres.forEach(nombre=>document.write(nombre+"<br>"));
document.write(nuevoArray); //va retornar undefined

//El método map() crea un nuevo vector (array, o matriz unidimensional)
// ejecutando una función en cada uno de los elementos del vector. 
//Al mismo tiempo no ejecuta la función en elementos sin valor y no cambia el vector original.