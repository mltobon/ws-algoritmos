/**
 * @author Monica Lorena Tobón Clavijo
*Diseñe en Javascript un programa que permita resolver el siguiente problema
*Validar los estudiantes que se inscriben al semillero y premiar con el pago de la inscripción bajo las siguientes condiciones:
** debe vivir en Armenia
** solo se pueden inscribir estudiantes de grado 10 o 11
** el primer estudiante en registrarse en el semillero tiene derecho al formulario de inscripción de manera gratuita. (se le debe indicar al usuario)
*/
let free=false;
const validarIngreso=(grado,ciudad)=>{
    let mensaje="";
     if(ciudad=="ARMENIA" && (grado==10 || grado==11)){
        if(!free){ //free==false
            free=true;
            mensaje="Tu registro fue exitoso, eres la primer persona en el curso y te has ganado el formulario gratis!";
        }
        else{
            mensaje="Tu registro fue exitoso, al final del curso puedes inscribirte, el formulario cuesta $100.000";
        }
     }
     else if(ciudad!="ARMENIA"){
         mensaje="Tu registro no pudo ser realizado, debes vivir en Armenia";
     }
     else{
        mensaje="Tu registro no fue exitoso, debes estar en grado 10 o 11";
     }
     return mensaje;
 }
 /**
  * Ejecutamos varias veces para probar
  */
 for(let i=0; i<5; i++){
    let grado1=  parseInt((prompt("En qué grado estas?"));
    let ciudad1= prompt("En que ciudad vives").toUpperCase();
    let cadena= validarIngreso(grado1,ciudad1);
    alert(cadena);
    alert(validarIngreso(parseInt((prompt("En qué grado estas?")),prompt("En que ciudad vives").toUpperCase()));
}