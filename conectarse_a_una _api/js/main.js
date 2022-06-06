const cargarInfo=async()=>{
const response= await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
.then(res=>res.json());
mostrarInfo(response);
}
cargarInfo();

function mostrarInfo(objResultado){
    alert(JSON.stringify(objResultado));
    
}