const mi_objeto = {
    nombre: "Cristian",
    edad:24,
    soltero: false
  };
  //buscar una propiedad del objeto
  if('nombre' in mi_objeto){
    console.log("la propiedad nombre existe");
  }else{
    console.log("nombre no existe");
  }

  var arrayofObjects = [
    { name:"Adam", profession:"Engineer", company: "Google" },
    { name:"Sam", profession:"Manager", company: "Amazon" },
    { name:"Gerogia", profession:"Designer", company: "Netflix" },
    { name:"Kate", profession:"Engineer", company: "Microscoft" },
    { name:"James", profession:"Sales", company: "Amazon" },
];

//print array
arrayofObjects.forEach(object =>{
    console.log(object.name + " is " + object.profession +" who works at " + object.company);
});

//print name of the people who work at amazon
arrayofObjects.forEach(object =>{
    if(object.company === "Amazon"){
        console.log("Amazon Employee:", object.name);
    }
});

/********************* * Filter * *************/

let numbers = [1,5,23,4,12,45,78,8,8.9,10,11,3.4,10.1,84,6]

//ES6
let greaterTen = numbers.filter(number => { number > 10 });
console.log(greaterTen); // []

// with return
let greaterTen2 = numbers.filter(number => number > 10 ); // return implicito
console.log(greaterTen2); // [23, 12, 45, 78, 11, 10.1, 84]

//con objetos 

let students = [
    {
      name: 'Alvaro',
      score: 3,
    },
    {
      name: 'Daniel',
      score: 2,
    },
    {
      name: 'Alexys',
      score: 1,
    },
    {
      name: 'Rafa',
      score: 4,
    },
    {
      name: 'Alejandro',
      score: 3.5,
    },
    {
      name: 'Sofia',
      score: 1,
    }
  ]
  
  let approved = students.filter(student => student.score >= 3);
  console.log(approved);
  
  let equipo = [
	{
  		nombre: "aaron",
    	posicion: "developer"
 	 },
  	{
  		nombre: "beth",
    	posicion: "ui designer"
  	},
  	{
  		nombre: "cara",
    	posicion: "developer"
  	},
 	{
  		nombre: "daniel",
    	posicion: "content manager"
 	 },
  	{
  		nombre: "ella",
    	posicion: "cto"
  	},
  	{
  		nombre: "fin",
    	posicion: "backend engineer"
  	},
  	{
  		nombre: "george",
    	posicion: "developer"
  }

]

let desarrolladores = equipo.filter(miembro => miembro.posicion == "developer")
console.log(desarrolladores);

let noDesarrolladores = equipo.filter(miembro => miembro.posicion !== "developer")
console.log(noDesarrolladores);

let ganadores = ["Anna", "Beth", "Cara"];

let oro = ganadores.filter((ganador, indice) => indice == 0);
let plata = ganadores.filter((ganador, indice) => indice == 1);
let bronce = ganadores.filter((ganador, indice) => indice == 2);

console.log(`Oro ganador: ${oro}, ganador de plata: ${plata}, ganador de bronze: ${bronce}`);

// "Oro ganador: Anna, Plata ganadora: Beth, Bronce ganador: Cara"

let competidores = ["Anna", "Beth", "Cara", "David"];

function mostrarGanadores(nombre, indice, arreglo) {
    let esSiguienteItem = indice + 1 < arreglo.length ? true : false;
    if (esSiguienteItem) {
    	console.log(`El ganador #${indice+1} es ${nombre}.`);
    } else {
    	console.log(`Perdón, ${nombre} no es uno de los ganadores.`);
    }
}

competidores.filter((nombre, indice, arreglo) => mostrarGanadores(nombre, indice, arreglo))

/*
"El ganador #1 es Anna."
"El ganador #2 es Beth."
"El ganador #3 es Cara."
"Perdón, David no es uno de los ganadores."
*/


/***************localstorage */

if(localStorage.getItem("usuario")!=null){
  alert("Bienvenid@ "+localStorage.getItem("usuario"));
}
else{
  let nombre= prompt("ingrese nombre");
  localStorage.setItem("usuario",nombre);
}
