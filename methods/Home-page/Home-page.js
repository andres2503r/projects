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