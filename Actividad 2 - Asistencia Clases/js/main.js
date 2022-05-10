/**
 * Crear un sistema para registrar las asistencias y ausencias de un estudiante, 
 * el profesor indicará cuántas clases se dan en el semestre y 
 * un estudiante solo tiene permitido ausentarse el 10% del total de clases.
 */
const inicializarPrograma= ()=>{
    let cantidadAlumnos= prompt("Cuántos estudiantes tienes en clase");
    //creamos un arreglo para almacenar la información de los alumnos y las asistencias
    let alumnosAsignatura=[];
    let clases= prompt("¿Cuántas clases tiene el curso?");
    
     for(let i=0; i<cantidadAlumnos;i++){
         //arreglo bidimensional , nombre del estudiante y cantidad de asistencias
         // las asistencias se inicializan en 0
        let nombre= prompt("Nombre estudiante "+(i+1));
        alumnosAsignatura[i]= [nombre,0];
        
     }
     //recorrer la matriz de estudiantes
     for(let i=0; i<clases; i++){
        for(let alumno in alumnosAsignatura){
            let presente=prompt("El estudiante "+alumnosAsignatura[alumno][0]+" esta presente en la clase"+(i+1)+"? marque p/P");
            tomarAsistencia(presente,alumnosAsignatura,alumno);
        }
     }
     imprimir(alumnosAsignatura,clases);
}
/**
 * 
 * @param {nombre del estudiante} nombre 
 * @param {posicion donde esta ubicado en la matriz} posicion 
 */
 const tomarAsistencia=(presente,alumnosAsignatura,posicion)=>{
     if(presente=="p" || presente=="P"){
      // alumnosAsignatura[posicion][1]++;
      let numeroAsistencia= alumnosAsignatura[posicion][1];
      alumnosAsignatura[posicion][1]=numeroAsistencia+1;
     }
 }
/**
 * Este metodo imprime en pantalla los datos ingresados
 * identifica si un estudiante pierde por inasistencias
 * @param {matriz de alumnos y asistencias} alumnosAsignatura 
 * @param {numero de clases de la asignatura} numClases 
 */
const imprimir=(alumnosAsignatura,numClases)=>{
    for(let alumno in alumnosAsignatura){
    
        let resultado= `${alumnosAsignatura[alumno][0]}:<br>
        _______Presentes: ${alumnosAsignatura[alumno][1]} <br>
        _______Ausencias: ${numClases-alumnosAsignatura[alumno][1]}`;
        let porcentajeAsistencias=Math.ceil(numClases*0.1);
        if(numClases-alumnosAsignatura[alumno][1]>porcentajeAsistencias){
            resultado+="<b style='color:red'> REPROBADO POR INASISTENCIAS </b></br>"
        }
        else{
            resultado+="<br><br>";
        }
        document.write(resultado);
    }
}