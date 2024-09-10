console.log(localStorage.length);

let stringJSON = `
{
    "tituloReceta": "algo",
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
