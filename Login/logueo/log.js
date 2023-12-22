const sesion = localStorage.getItem("sesionName")
document.getElementById("mostrar").innerText += " " + sesion;
if(!sesion){
    window.location.href = "../index.html"
}
let cont = 1
const arrayImg = localStorage.getItem("imagenes").split(",")
arrayImg.forEach(elemento => {
    const imagen = document.createElement("img")
    const lugar = document.getElementById("carta"+cont)
    imagen.src = "./imagenes/"+elemento
    imagen.style.width = "100%"
    lugar.appendChild(imagen)
    cont++
})
function salir(){
    localStorage.clear();
    location.reload();
}

