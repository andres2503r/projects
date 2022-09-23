// const prueba = (url) =>{
//     
//     window.location.href = url
// }

const URLS = ["../DEVICE/device.html", "../INPUT/input.html", "../LAN/lan.html", "../OUTPUT/output.html", "../WIEGAND/wiegand.html"]

const btn = document.querySelectorAll(".btn");
console.log(btn)
btn.forEach((value, i) =>{
    btn[i].addEventListener(`click`, () =>{
        window.location.href = URLS[i]
        
    })
})
// buttons method
const table = document.querySelectorAll(".table")
const button = document.querySelectorAll(".btnfunction")

button.forEach((cadaButton, i)=>{
    button[i].addEventListener(`click`, ()=>{
        table.forEach((cadaTable, i)=>{
            table[i].classList.add(`tablefunction`)
            
        })
        table[i].classList.remove(`tablefunction`)
    })
})
