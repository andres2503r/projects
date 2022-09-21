function iniciarJuego(){
    let botonMascota = document.getElementById("boton_mascota")
    botonMascota.addEventListener("click", seleccionar)
}
function seleccionar(){
    let inputHipoge = document.getElementById("Hipoge")
    let inputcapipego = document.getElementById("capipego")
    let inputratigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("tuMascota")

    if (inputHipoge.checked){
        alert("seleccionaste a Hipoge")
        spanMascotaJugador.innerHTML = " Hipoge"
    }else if (inputcapipego.checked){
        alert("seleccionaste a capipego")
        spanMascotaJugador.innerHTML = " capipego"
    }else if(inputratigueya.checked){
        alert("seleccionaste a ratigueya")
        spanMascotaJugador.innerHTML = " ratigueya"
    }else{
        alert("selecciona tu mascota")
    }
    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio (1,3)
    let spanMascotaEnemigo = document.getElementById("mascotaRival")
    if(ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML = " Hipoge"
    }else if(ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = " capipego"
    }else{
        spanMascotaEnemigo.innerHTML = " ratigueya"
    }
}
function aleatorio(min, max){
    return Math.floor(Math.random() + (max - min + 1) + min)
}
window.addEventListener("load", iniciarJuego)
