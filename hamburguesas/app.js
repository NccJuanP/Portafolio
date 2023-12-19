const modo = document.getElementById("modo");
modo.addEventListener("change", (valor) => {
const listaDeElementos = document.querySelectorAll(".card")
    
    if (valor.target.value == "noche"){
        document.body.classList.add("noche")
        listaDeElementos.forEach(etiqueta => {
            etiqueta.classList.add("noche-carta")
        })
    }
    else{
        document.body.classList.remove("noche")
        listaDeElementos.forEach(etiqueta => {
            etiqueta.classList.remove("noche-carta")
        })
    }
})