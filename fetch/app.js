//rellenar formulario

let informacion = ["element.id","element.name","element.email"]
let names = ["id", "name", "email"]
let idTrabajo;
let nameTrabajo;
let emailtrabajo;
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
//crear tabla
fetch('https://memin.io/public/api/users')
.then(response => {
    return response.json();
})
.then(data=>{
    data.forEach(element => {
                const acciones = document.getElementById("acciones")
                const acciones2 = acciones.cloneNode(true)
                const tr = document.createElement('tr');
                const tbody = document.querySelector("#tbody");
                for (let i = 0; i < 3; i++){
                    const plantilla = document.querySelector("#plantilla");
                    const lista = plantilla.cloneNode(true)
                    lista.children[i].innerHTML = eval(informacion[i]);
                    lista.children[i].setAttribute("name", names[i]);
                    tr.appendChild(lista.children[i])
                }
                tr.id = element.id
                tr.appendChild(acciones2)
                tbody.appendChild(tr);
            });
            tbody.removeChild(tbody.children[0]) 
        })

// funcion para crear nuevo usuario
function crear(){
    const nuevoNombre = document.getElementById("namecreado").value;
    const nuevoEmail = document.getElementById("emailcreado").value;
    const nuevopassword = document.getElementById("passwordcreado").value;



        datosNuevos = {
            name: nuevoNombre,
            email: nuevoEmail,
            password: nuevopassword
        }

        fetch('https://memin.io/public/api/users', {
            method : "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(datosNuevos)
        }).then(response => {
            return response.json();
        }).then(data=>{

            if(data){
                alert("Se creo con exito")
            }
        })
    }

//funcion controladora para manejar modal editar
function tieneID(otro){
    idTrabajo = otro.id
    nameTrabajo = otro.children[1].innerText;
    emailtrabajo = otro.children[2].innerText;
    inputEmail.value = emailtrabajo;
    inputName.value = nameTrabajo;
}


//funcion editar que corresponde al modal
function editar(){
    const nuevoNombre = inputName.value;
    const nuevoEmail = inputEmail.value;


    const id = idTrabajo

    if(id == null){
        console.log("por aqui no es")
    }
    else{
        datosNuevos = {
            name: nuevoNombre,
            email: nuevoEmail
        }

        fetch('https://memin.io/public/api/users/'+id, {
            method : "PUT",
            headers : {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(datosNuevos)
        }).then(response => {
            return response.json();
        }).then(data=>{

            if(data){
                alert("Se actualizo con exito")
            }
        })
    }

}

//funcion detalles
function detalles(otro){
    const modalcontent = document.getElementById("modal-body");
    fetch('https://memin.io/public/api/users/'+otro.id)
.then(response => {
    return response.json();
})
.then((data)=>{
    for (let key in (data)) {
            modalcontent.innerText += key + " : " + (data)[key] + "\n";
    }
})
}

function reset(){
    const modalcontent = document.getElementById("modal-body");
    modalcontent.innerText = "";
}

//funcion eliminar
function eliminar(otro){
    const modalcontent = document.getElementById("modal-body");
    fetch('https://memin.io/public/api/users/'+otro.id, { method: "DELETE"})
.then(() => {
    const padre = document.getElementById("tbody")
    padre.removeChild(otro);
    alert("Se elimino con exito")
})
}

//barra de busqueda
function buscar(){
    let buscado = document.getElementById("barraBusqueda").value;
    buscado = buscado.toLowerCase();
    let registrosName = document.getElementsByName("name");
    let registroEmail = document.getElementsByName("email");

    for (let i = 0; i < registrosName.length; i++){
        if(!((registrosName[i].textContent).toLowerCase()).includes(buscado) && !((registroEmail[i].textContent).toLowerCase()).includes(buscado)){
            (registrosName[i].parentElement).style.display = "none";
        }
        
        else{
            (registrosName[i].parentElement).style.display = "";
        }
    }
}