// Pegando o item que irá se mover
const move = document
  .querySelector('#move');
  
// Pegando a caixa do item para saber o limite das margens
const boxMove = document
  .querySelector(".box-move");



// Pegando os valores das propriedades no CSS 
// https://bit.ly/346OmvE
var heightString = window.getComputedStyle(boxMove).height;
var widthString = window.getComputedStyle(boxMove).width;



// Convertendo string em número 
// https://bit.ly/346Bk13
var heightLimit = parseFloat(heightString);
var widthLimit = parseFloat(widthString);



let moveS = move.style;
let pxUp = 0, pxLeft = 0;
const razao = 15;

function up() {
  if (pxUp < 10) {
    console.log("limite");
  } else {
    pxUp -= razao;
    moveS.top = pxUp+"px";
  }
}

function left() {
  if (pxLeft < 10) {
    console.log("limite");
  } else {
    pxLeft -= razao;
    moveS.left = pxLeft+"px";
  }
}

function right() {
  if (pxLeft >= widthLimit - 40) {
    console.log("limite");
  } else {
    pxLeft += razao;
    moveS.left = pxLeft+"px";
  }
}

function bot() {
  if (pxUp >= heightLimit - 40) {
    console.log("limite");
  } else {
    pxUp += razao;
    moveS.top = pxUp+"px";
  }
}