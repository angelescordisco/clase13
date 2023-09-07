// const edadDelUsuario = parseInt(prompt("Cuál es tu edad?"));
// if (edadDelUsuario >= 18) {
//   alert("eres mayor de edad");
// } else {
//   alert("Ingresas a este sitio bajo tu responsabilidad.");
// }

let numero = 0;
const numeroCarrito = document.getElementById("numeroCarrito");
const botonagregar = document.querySelectorAll(".botonagregar");
botonagregar.forEach((boton) => {
  boton.addEventListener("click", () => {
    numeroCarrito.innerText = numero++;
  });
});
