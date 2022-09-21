// const average = (arrayForAverage) =>{
//     let sumaTotal = 0;
//     arrayForAverage.forEach((value)=>{
//         sumaTotal += value;
//     })
//     return (sumaTotal/arrayForAverage.length);
// }
// const averageGirls = average(girlsAge);
// const averageMens = average(mensAge);
// console.log("el promedio de la edad de las mujeres es: "+averageGirls);
// console.log("el promedio de la edad de los hombres es: "+averageMens);
$(function (){
    oculto = false;
    $(`#btn1`).click(() =>{
        let table = $(`#table1`);
        if (oculto){
            table.show();
        }else {
            table.hide();
        }
        oculto = !oculto;
    });
    $(`#btn2`).click(() =>{
        let table = $(`#table2`);
        if (oculto){
            table.show();
        }else {
            table.hide();
        }
        oculto = !oculto;
    });
})