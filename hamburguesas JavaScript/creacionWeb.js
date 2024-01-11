import {fabricaEtiquetas} from "./factory.js"
const factory = new fabricaEtiquetas();
const optionsIdiomas = ["seleccionar idioma","español","ingles","hindi"];
const optionsStilos = ["seleccionar tema","dia","noche","libre"];

//-------------------------------------inicializacion-------------------------------------------------

let container = factory.crear("div",["class"],["container"]);
let row = factory.crear("div",["class"],["row"]);
let col = factory.crear("div", ["class"],["col-md-12"]);
let img = factory.crear("img", ["src","width"], ["./images/logo.png","30%"]);
let br = factory.crear("br", [],[]);
let select = factory.crear("select",["class", "id"], ["form-select", "selectIdioma"]);
let card = factory.crear("div", ["class"],["card"])
let cardBody = factory.crear("div",["class"],["card-body"])
let h5 = factory.crear("h5",["class","inner"],["card-title","Burguer"]);
let p = factory.crear("p", ["class","inner"],["font-italic","89.000"]);
let grid12 = factory.crear("div",["class"],["d-grid"])
let button = factory.crear("button", ["class", "type", "inner"], [["btn","btn-danger"], "button", "comprar"]);

//-------------------------------------primera row-------------------------------------------------
col.appendChild(img);
row.appendChild(col);
container.appendChild(row);
for(let i = 0; i < 3; i++){br = factory.crear("br", [],[]);container.appendChild(br)}

//-------------------------------------segunda row-------------------------------------------------
//-------------------------------------primer select-------------------------------------------------
row = factory.crear("div",["class"],["row"]);
col = factory.crear("div", ["class"],["col-md-6"]);
optionsIdiomas.forEach(elemento => {
    const option = factory.crear("option", ["value","inner"], [elemento, elemento]);
    select.appendChild(option);
}) ;
col.appendChild(select);
row.appendChild(col);

//-------------------------------------segundo select-------------------------------------------------
col = factory.crear("div", ["class"],["col-md-6"]);
select = factory.crear("select",["class", "id"], ["form-select", "modo"]);
optionsStilos.forEach(elemento => {
    const option = factory.crear("option", ["value","inner"], [elemento, elemento]);
    select.appendChild(option);
});
col.appendChild(select);
row.appendChild(col);
container.appendChild(row);

br = factory.crear("br", [],[]);
container.appendChild(br);

//-------------------------------------tercera row-------------------------------------------------
let contador = 1;
for(let j = 0; j < 2; j++){
    row = factory.crear("div",["class"],["row"]);
    for (let i = 0; i < 4; i++) {
        h5 = factory.crear("h5", ["class", "inner"], ["card-title", "Burguer"]);
        p = factory.crear("p", ["class", "inner"], ["font-italic", "89.000"]);
        col = factory.crear("div", ["class"], ["col-md-3"]);
        img = factory.crear(
            "img",
            ["src"],
            ["./images/hamburguesa-" + (contador) + ".webp"]
        );
        card = factory.crear("div", ["class"], ["card"]);
        cardBody = factory.crear("div", ["class"], ["card-body"]);
        grid12 = factory.crear("div", ["class"], ["d-grid"]);
        button = factory.crear(
            "button",
            ["class", "type", "inner","onclick"],
            [["btn", "btn-danger"], "button", "comprar","prueba"]
        );
        grid12.appendChild(button);
        card.appendChild(img);
        cardBody.appendChild(p);
        cardBody.appendChild(h5);
        p = factory.crear(
        "p",
        ["class", "inner"],
        ["siteContent", "super special burger with fries and test text"]
        );
        cardBody.appendChild(p);
        cardBody.appendChild(grid12);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
        contador++
    }
    container.appendChild(row)
    br = factory.crear("br", [], []);
    container.appendChild(br)
    br = factory.crear("br", [], []);
    container.appendChild(br);
}
document.body.appendChild(container);