let formTitle = document.getElementById("formTitle");
let formDesc = document.getElementById("formDesc");
let formCost = document.getElementById("formCost");
let formPrice = document.getElementById("formPrice");

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
});

console.log(localStorage.length);

let stringJSON = `
{
    "tituloReceta": "algo",
    "descripcion": "",
    "costo": 23,
    "precio":456
}
`;

//localStorage.setItem(localStorage.length + 1, stringJSON);

let stirngObtenido = localStorage.getItem(3);

let objetoConvertido = JSON.parse(stirngObtenido);

console.log(stirngObtenido);
console.log();
console.log(objetoConvertido.tituloReceta);
