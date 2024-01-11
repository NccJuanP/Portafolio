//rellenar formulario

let informacion = ["element.id","element.name","element.email"]
let idTrabajo;
let nameTrabajo;
let emailtrabajo;
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");

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
                    tr.appendChild(lista.children[i])
                }
                tr.id = element.id
                tr.appendChild(acciones2)
                tbody.appendChild(tr);
            });
            tbody.removeChild(tbody.children[0]) 
        })

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

function tieneID(otro){
    idTrabajo = otro.id
    nameTrabajo = otro.children[1].innerText;
    emailtrabajo = otro.children[2].innerText;
    inputEmail.value = emailtrabajo;
    inputName.value = nameTrabajo;
}

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


function detalles(otro){
    const modalcontent = document.getElementById("modal-body");
    fetch('https://memin.io/public/api/users/'+otro.id)
.then(response => {
    return response.json();
})
.then(data=>{
    for (let key in data) {
            modalcontent.innerText += key + " : " + (data)[key] + "\n";
    }
    console.log(data)
})
}


function eliminar(otro){
    const modalcontent = document.getElementById("modal-body");
    fetch('https://memin.io/public/api/users/'+otro.id, { method: "DELETE"})
.then(() => {
    const padre = document.getElementById("tbody")
    padre.removeChild(otro);
})
}