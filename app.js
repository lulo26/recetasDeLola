//variants
let formTitle = document.getElementById("formTitle");
let formDesc = document.getElementById("formDesc");
let formCost = document.getElementById("formCost");
let formPrice = document.getElementById("formPrice");
let formImg = document.getElementById("formImg");
let saveData = document.getElementById("saveData");
let containerCards = document.getElementById("containerCards");

const getData = window.localStorage;

//Modal initialize
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
});

saveData.addEventListener("click", () => {
  let newObject = {
    tituloReceta: formTitle.value,
    descripcion: formDesc.value,
    costo: formCost.value,
    precio: formPrice.value,
    imagen: formImg.value,
  };

  getData.setItem(JSON.stringify(newObject));
  PrintInfo();
});

function PrintInfo() {
  containerCards.innerHTML = "";
  let getKeys = Object.keys(getData);
  getKeys.map((thisKey) => {
    let recipe = JSON.parse(getData.getItem(thisKey));
    let infoHere = `<div class="col s12 m7">
        <div class="card horizontal">
          <div class="card-image">
            <img src="${recipe.imagen}" />
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <!-- <p> -->
              <b>${recipe.tituloReceta}</b>
              <ul>
                <li>${recipe.descripcion}</li>
                <li>costo de fabricacion: ${recipe.costo}</li>
                <li>precio sugerido de venta: ${recipe.precio}</li>
              </ul>
              <!-- </p> -->
            </div>
          </div>
        </div>
      </div>`;
    containerCards.innerHTML += infoHere;
  });
}

//localStorage.setItem(localStorage.length + 1, stringJSON);
/* 
let stirngObtenido = localStorage.getItem(3);

let objetoConvertido = JSON.parse(stirngObtenido);

console.log(stirngObtenido);
console.log();
console.log(objetoConvertido.tituloReceta);
 */
