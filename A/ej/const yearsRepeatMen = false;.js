// var girlsAge = [12, 23, 20, 30, 45];
// var mensAge = [15, 33, 10, 40, 25];

// const average = (arrayForAverage) =>{
//   let sumTotal = 0;
//   arrayForAverage.forEach((value)=>{
//     sumTotal += value;
//   })
//   return  (sumTotal/arrayForAverage.length);
// }

// const averageGirl = average(girlsAge);
// const averageMens = average(mensAge)
// console.log(averageGirl);
// console.log(averageMens);
const yearsRepeatMen = false;
const yearsRepeatGirls = false;
const girlsAge = [12,23,20,30,45];
const mensAge = [15,33,10,40,25];

// girlsAge.forEach((a) =>{
//     sumaGirls += a;
    
//     b = girlsAge.length
    
// })
// averageGirls = (sumaGirls / b);
const average = (arrayForAverage) =>{
    let sumaTotal = 0;
    arrayForAverage.forEach((value)=>{
        sumaTotal += value;
    })
    return (sumaTotal/arrayForAverage.length);
}
const averageGirls = average(girlsAge);
const averageMens = average(mensAge);
console.log("el promedio de la edad de las mujeres es: "+averageGirls);
console.log("el promedio de la edad de los hombres es: "+averageMens);
// console.log("la suma de las edades de las mujeres es: "+sumaGirls);
// console.log("la caantidad de alementos del array es: "+b);
// console.log("el promedio de edades de las mujeres es: "+averageGirls)


// mensAge.forEach((c) =>{
//     sumaMens += c;

//     d = mensAge.length
// })
// averageMens = (sumaMens / d);
// console.log("la suma de las edades de los hombres es: "+sumaMens);
// console.log("la caantidad de alementos del array es: "+d);
// console.log("el promedio de edades de los hombres es: "+averageMens);
// G = averageGirls;
// M = averageMens
if (averageGirls > averageMens ) {
    console.log("el mayor promedio es el de las mujeres: "+averageGirls);
}else {
    console.log("el mayor promedio es el de los hombres: "+averageMens);
}
// const organizeG = girlsAge.sort();
// const organizeM =  mensAge.sort();
// for(i=0; i<=girlsAge.length; i++){
//     if(organizeG[i]==organizeG[i - 1]){
//         yearsRepeatGirls = true;
//         console.log("hay un elemento que se repite");
//     }else {
//         console.log("girls "+yearsRepeatGirls);
//     }
// }
// for(j=0; j< mensAge.length; j++){
//     if(organizeM[i]==organizeM[i - 1]){
//         yearsRepeatMen = true;
//         console.log("hay un elemento que se repite");
//     }else {
//         console.log("mens"+yearsRepeatMen);
//     }
// }