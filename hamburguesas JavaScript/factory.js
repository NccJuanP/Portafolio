class etiquetas {
    constructor(atributos,valores){
        this.atributos = atributos;
        this.valores = valores;
    }
}

class div extends etiquetas{
    constructor(atributos,valores){
        super(atributos,valores)
        let creador = document.createElement("div");
        atributos.forEach(element => {
            if (element == "class") {
                if (typeof valores[atributos.indexOf(element)] == Object) {
                    valores[atributos.indexOf(element)].forEach((element2) => {
                        creador.classList.add(element2);
                    });
            } else {
                creador.classList.add(valores[atributos.indexOf(element)]);
            }
            } else if (element == "id") {
                creador.id = valores[atributos.indexOf(element)];
            }
        });
        creador.classList = creador.classList.toString().replace(",", " ");
        return creador
    }
}
class img extends etiquetas{
    constructor(atributos,valores){
        super(atributos,valores)
        let creador = document.createElement("img");
        atributos.forEach(element => {
            if(element == "class"){
                creador.classList.add(valores[atributos.indexOf(element)])
            }

            else if(element == "id"){
                creador.id = valores[atributos.indexOf(element)]
            }
            else if(element == "inner"){
                creador.innerHTML = valores[atributos.indexOf(element)]
            }
            else if(element == "src"){
                creador.src = valores[atributos.indexOf(element)]
            }
            else if(element == "width"){
                creador.style.width = valores[atributos.indexOf(element)]
            }
        });
        return creador
    }
}
class br extends etiquetas{
    constructor(atributos,valores){
        super(atributos,valores)
        let creador = document.createElement("br");
        return creador
    }
}
class select extends etiquetas{
    constructor(atributos,valores){
        super(atributos,valores)
        let creador = document.createElement("select");
        atributos.forEach(element => {
            if(element == "class"){
                creador.classList.add(valores[atributos.indexOf(element)])
            }

            else if(element == "id"){
                creador.id = valores[atributos.indexOf(element)]
            }
        });
        return creador
    }
}
class option extends etiquetas{
    constructor(atributos,valores){
        super(atributos,valores)
        let creador = document.createElement("option");
        atributos.forEach(element => {
            if(element == "class"){
                creador.classList.add(valores[atributos.indexOf(element)])
            }

            else if(element == "id"){
                creador.id = valores[atributos.indexOf(element)]
            }
            else if(element == "inner"){
                creador.innerHTML = valores[atributos.indexOf(element)]
            }
            else if(element == "value"){
                creador.value = valores[atributos.indexOf(element)]
            }
        });
        return creador
    }
}
class p extends etiquetas{
    constructor(atributos,valores){
        super(atributos,valores)
        let creador = document.createElement("p");
        atributos.forEach(element => {
            if(element == "class"){
                creador.classList.add(valores[atributos.indexOf(element)])
            }

            else if(element == "id"){
                creador.id = valores[atributos.indexOf(element)]
            }
            else if(element == "inner"){
                creador.innerHTML = valores[atributos.indexOf(element)]
            }
        });
        return creador
    }
}
class h5 extends etiquetas{
    constructor(atributos,valores){
        super(atributos,valores)
        let creador = document.createElement("h5");
        atributos.forEach(element => {
            if(element == "class"){
                creador.classList.add(valores[atributos.indexOf(element)])
            }

            else if(element == "id"){
                creador.id = valores[atributos.indexOf(element)]
            }

            else if(element == "inner"){
                creador.innerHTML = valores[atributos.indexOf(element)]
            }
        });
        return creador
    }
}
class button extends etiquetas{
    constructor(atributos,valores){
        super(atributos,valores)
        let creador = document.createElement("button");
        atributos.forEach(element => {
            if (element == "class") {
              if (typeof valores[atributos.indexOf(element)] == Object) {
                valores[atributos.indexOf(element)].forEach((element2) => {
                  creador.classList.add(element2);
                });
              } else {
                creador.classList.add(valores[atributos.indexOf(element)]);
              }
            } else if (element == "id") {
              creador.id = valores[atributos.indexOf(element)];
            } else if (element == "inner") {
              creador.innerHTML = valores[atributos.indexOf(element)];
            } else if (element == "type") {
              creador.setAttribute("type", valores[atributos.indexOf(element)]);
            } /* else if (element == "onclick") {
              creador.addEventListener("click",valores[atributos.indexOf(element)]);
            } */
        });
        creador.classList = creador.classList.toString().replace(",", " ")
        return creador
    }
}

export class fabricaEtiquetas {
    crear(type,atributos,valores){
        if(type == "div"){
            return new div(atributos,valores)
        }
        if(type == "img"){
            return new img(atributos,valores)
        }
        if(type == "br"){
            return new br(atributos,valores)
        }
        if(type == "select"){
            return new select(atributos,valores)
        }
        if(type == "option"){
            return new option(atributos,valores)
        }
        if(type == "p"){
            return new p(atributos,valores)
        }
        if(type == "h5"){
            return new h5(atributos,valores)
        }
        if(type == "button"){
            return new button(atributos,valores)
        }        
    }
}
