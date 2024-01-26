let id;
const url = "http://localhost:3000/employeds/";

fetch(url)
.then(response => {return response.json()})
.then(data => {
    tabla = document.getElementById("tabla")
    tbody = tabla.querySelector("tbody")
    data.forEach(element =>{
    tbody.innerHTML += `
    <tr>
    <td>${element.id}</td>
    <td>${element.name}</td>
    <td>${element.last_name}</td>
    <td>${element.email}</td>
    <td>${element.puesto}</td>
    <td>${element.entry_date}</td>
    <td><a href="${element.cv}">Descargar CV</a></td>
    <td><a href="${element.website}">Visitar sitio</a></td>

    <td>
    <button class="btn btn-primary" onclick="detalles((this.parentElement).parentElement)" data-bs-toggle="modal" data-bs-target="#exampleModal">Detalles</button>
        <button class="btn btn-danger" onclick="borrar((this.parentElement).parentElement)">Eliminar</button>
        <button class="btn btn-success" onclick="detalles((this.parentElement).parentElement,true)" data-bs-toggle="modal" data-bs-target="#modal_update">Editar</button>
    </td>
</tr>`

});
});

function enviar(){
    datos = ["name", "last_name", "email", "puesto", "entry_date", "cv", "status", "website", "company"]
    let registro = {}
    let control = 0
    form = document.querySelector("#form1")
    inputs = form.querySelectorAll(".form-control")
    Array.from(inputs).forEach(element => {
        registro[datos[control]] = element.value
        control++
    });

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registro),
    })
}

function borrar(element){
    let id = element.children[0].innerHTML
    fetch(url + id, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {

      });
    element.remove()
}

function obtenerID(elemento){
  const form = document.getElementById("form2")
  let inputs = form.querySelectorAll(".form-control")
  let objeto = Object.values(elemento)

  for(let i = 0; i < inputs.length; i++){
    inputs[i].value = objeto[i+1]
  }
  id = elemento.id
}

function editar(){

  datos = ["name", "last_name", "email", "puesto", "entry_date", "cv", "status", "website", "company"]
  let registro = {}
  let control = 0
  form = document.querySelector("#form2")
  inputs = form.querySelectorAll(".form-control")
  Array.from(inputs).forEach(element => {
      registro[datos[control]] = element.value
      control++
  });
    fetch(url+id, {
      method : "PUT",
      headers:{
        "Content-Type": "application/json"
      },
      body : JSON.stringify(registro)
    })
}


function detalles(element, control){
    const lugar = document.getElementById("modal-body")
    let id = element.children[0].innerHTML
    fetch(url + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if(control){
            
          obtenerID(data)
        }
        else{
            for (let key in data) {
            lugar.innerHTML += `${key} : ${data[key]} <br>`;
            }
    }
      });
}

function reset(){
    const modalcontent = document.getElementById("modal-body");
    modalcontent.innerText = "";
}