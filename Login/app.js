const sesion = localStorage.getItem("sesionName")
if(sesion){
   location.href = "./logueo/log.html"
}

usuarios = [
    {
        correo: "juanpablolc414@gmail.com",
        contraseña: "123",
        nombre: "Juan Pablo",
        imagenes:["img1.jpg","img2.jpg","img3.jpg"]
    },

    {
        correo: "pepeelgrillo2004@yahoo.com",
        contraseña: "123",
        nombre: "Pepe El Grillo",
        imagenes:["img4.jpg","img5.jpg","img6.jpg"]
    },

    {
        correo: "ronaldMacdonald@hotmail.com",
        contraseña: "mi contraseña2",
        nombre: "Ronald Macdonalds",
        imagenes:["img1.jpg","img4.jpg","img2.jpg"]
    }
]

function login(){
    const txtCorreo = document.getElementById("inputEmail");
    const txtContraseña = document.getElementById("inputPassword");
    let control = true;

    usuarios.forEach(element => {
        if (element.correo == txtCorreo.value && element.contraseña == txtContraseña.value) {
            localStorage.setItem("sesionName", element.nombre)
            localStorage.setItem("imagenes",String(element.imagenes))
            location.href = "logueo/log.html"
        }
        else if(element.correo == txtCorreo.value){
            txtContraseña.classList.add("is-invalid");
            txtCorreo.classList.add("is-valid");
            txtCorreo.classList.replace("is-invalid","is-valid");
            control = false
        }
        else if(control){
            txtContraseña.classList.add("is-invalid");
            txtCorreo.classList.add("is-invalid");
        }
        
    });
}