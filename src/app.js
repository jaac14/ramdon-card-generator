let fig2 = document.createElement("div");
let number = document.createElement("div");
let fig1 = document.createElement("div");
let contentCard = document.createElement("div");
let body = document.querySelector("body");
/* eslint-disable */
import "./style.css";

window.onload = function() {
  let button = document.createElement("button");
  button.innerText = "Click me";
  button.style.width = "100%";
  button.style.height = "3rem";
  button.style.borderRadius = "5px";
  button.style.backgroundColor = "gray";
  button.style.border = "none";
  button.style.color = "white";
  button.addEventListener("click", generateValues);
  body.appendChild(button);
  intializeCard();
  generateValues();
  setInterval(generateValues, 10000);
};

function generateValues() {
  //write your code here
  let icons = ["♣", "♠", "♥", "♦"];
  //sacar el numero aleatorio de los iconos
  let randomIndex = Math.floor(Math.random() * icons.length);
  let randomIcon = icons[randomIndex];
  console.log(randomIcon);
  //funcion para cambio de color de icons
  let color = randomIndex <= 1 ? "black" : "red";

  //sacar el numero aleatorio de las cartas
  let valuecard = Math.floor(Math.random() * 12);
  // Agregar el primer icono
  fig1.innerText = randomIcon;

  //agregando el numero
  number.innerText = valuecard;
  fig2.innerText = randomIcon;
  contentCard.style.color = color;
}

function intializeCard() {
  //estilos en el body
  body.style.background = "rgb(15, 126, 17)";
  body.style.height = "100vh";
  body.style.display = "flex";
  body.style.flexDirection = "column";
  body.style.justifyContent = "center";
  body.style.alignItems = "center";

  //agregando estilos a la carta
  let card = document.querySelector("#card");
  contentCard.style.background = "white";
  contentCard.style.height = "400px";
  contentCard.style.width = "300px";
  contentCard.style.borderRadius = "5px";
  contentCard.style.fontSize = "100px";
  contentCard.style.display = "flex";
  contentCard.style.flexDirection = "column";
  contentCard.style.justifyContent = "space-between";
  contentCard.style.padding = "1rem";
  contentCard.style.marginBottom = "3rem";

  number.style.textAlign = "center";

  //agregando el segundo icono
  fig2.style.transform = "rotate(180deg)";
  //agregando el boton

  // Agregar los elementos al dom

  card.appendChild(contentCard);
  contentCard.appendChild(fig1);
  contentCard.appendChild(number);
  contentCard.appendChild(fig2);
}
