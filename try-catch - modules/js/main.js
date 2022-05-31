let array=[1,2,3,4,5];

let sumaArray= array.reduce((acum,index)=>{
    return acum+=index;
},0);
console.log(sumaArray);

try{
    let maxArray= array.reduce((acum,index)=>{
        return Math.max(acum,index);
    },0);
    console.log(maxArray);
}
catch(error){
    console.log("no fue posible obtener el máximo del arrego");
    console.log("el error es: "+error);
}
console.log("Hola a todos");