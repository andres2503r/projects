const menu = document.getElementById('container-menu')
const svg = document.getElementById('svg')

function show(){
    menu.style.padding='16px 16px 100% 100% '
    menu.style.borderRadius='0'
}

svg.onclick = show