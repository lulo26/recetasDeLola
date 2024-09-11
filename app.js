//variants
let formTitle = document.getElementById("formTitle");
let formDesc = document.getElementById("formDesc");
let formCost = document.getElementById("formCost");
let formPrice = document.getElementById("formPrice");
let formImg = document.getElementById("formImg");
let saveData = document.getElementById("saveData");
let containerCards = document.getElementById("containerCards");
let btnSearch = document.getElementById("btnSearch");
let formSearch = document.getElementById("formSearch");

const getData = window.localStorage;
//localStorage.clear();
//localStorage.removeItem();

btnSearch.addEventListener("click", () => {
  searchRec();
});

function searchRec() {
  let recipe = JSON.parse(getData.getItem("tituloReceta"));

  for (let i = 1; i < localStorage.length + 1; i++) {
    if (localStorage.getItem(i) == formSearch.value) {
    }
  }
}

PrintInfo();

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

  console.log("hola :3");

  getData.setItem(localStorage.length + 1, JSON.stringify(newObject));
  PrintInfo();
});

function PrintInfo() {
  //containerCards.innerHTML = "";
  let getKeys = Object.keys(getData);
  getKeys.map((thisKey) => {
    let recipe = JSON.parse(getData.getItem(thisKey));
    let infoHere = `<div class="col s12 m7">
        <div class="card horizontal">
          <div class="card-image">
            <img src="${recipe.imagen}" height="300px" width="300px"/>
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <b>${recipe.tituloReceta}</b>
              <ul>
                <li>${recipe.descripcion}</li>
                <li>costo de fabricacion: ${recipe.costo}</li>
                <li>precio sugerido de venta: ${recipe.precio}</li>
              </ul>
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
