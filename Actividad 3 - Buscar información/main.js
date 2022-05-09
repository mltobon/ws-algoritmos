//Buscar una asignatura y mostrar los estudiantes registrados
let asignaturas={
    algoritmos:["Monica","Santiago","Nicolas"],
    programacion:["Monica","Alvaro","Maria Fernanda","Santiago J"],
    introduccion:["Monica","Juan Pablo", "Juan Camilo", "Juan Jose"]
}
const buscarInformacion=asignatura=>{
    if(asignaturas[asignatura]!==undefined){
        return asignaturas[asignatura];
    }
    else{
        return false;   
    }
}
/**
 * Imprimir en DOM la asignatura el profesor y los estudiantes
 */
const imprimir=()=>{
    let asignatura=prompt("Ingrese la asignatura a buscar");
    let busqueda=buscarInformacion(asignatura);
    if(busqueda!=false){
        //asumiendo que el primer dato corresponde con el profesor
        let profesor= asignaturas[asignatura][0];
        asignaturas[asignatura].shift();
        document.write(`El profesor de ${asignatura} es: <b> ${profesor} </b><br>`);
        document.write(`Los estudiantes de ${asignatura} son: ${asignaturas[asignatura]}`);
    }
    else{
        document.write("No se encuentra esa materia");
    }
}
//En qué materias está registrado un estudiante?
