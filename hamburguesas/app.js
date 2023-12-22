const modo = document.getElementById("modo");

try {
    const value = localStorage.getItem("tema")
    
if (value == "noche"){
    document.body.classList.add("noche")
    document.body.classList.remove("free")

}
else if (value == "libre"){
    document.body.classList.remove("noche")
    document.body.classList.add("free")
}
else{
    document.body.classList.remove("noche")
    document.body.classList.remove("free")
}
} catch (error) {}

modo.addEventListener("change", (valor) => {
    
    if (valor.target.value == "noche"){
        document.body.classList.add("noche")
        document.body.classList.remove("free")
        
    }
    else if (valor.target.value == "libre"){
        document.body.classList.remove("noche")
        document.body.classList.add("free")
    }
    else{
        document.body.classList.remove("noche")
        document.body.classList.remove("free")
    }

    localStorage.setItem("tema", modo.value)
})

const idioma = document.getElementById("selectIdioma")
const p = document.querySelectorAll("#siteContent")
let textos = Array.from(p)
const h5 = document.querySelectorAll("h5")
let titulos = Array.from(h5)

idioma.addEventListener("change", valor => {
    // Create a function to change the hash 
// value of the page and reload it
    location.hash = valor.target.value;
    location.reload();
});
  
    
  // Define the language reload anchors
  var language = {
    es: {
      menu: "hamburguesa súper especial con papas y texto de prueba",
      title: "hamburguesa"
        },

    hin: {
      menu: "फ्राइज़ और टेस्ट टेक्स्ट के साथ सुपर स्पेशल बर्गर",
      title: "हैमबर्गर"
    },
  };
    
  // Check if a hash value exists in the URL
  if (window.location.hash) {
    
    // Set the content of the webpage
    // depending on the hash value
    if (window.location.hash == "#es") {
      textos.forEach(text => {
        text.innerHTML = language.es.menu
      })
      titulos.forEach(text => {
        text.innerHTML = language.es.title
    })
    } else if (window.location.hash == "#hin") {
        textos.forEach(text => {
            text.innerHTML = language.hin.menu
        })
        titulos.forEach(text => {
            text.innerHTML = language.hin.title
        })
    }
  }
