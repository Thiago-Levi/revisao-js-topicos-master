//Escopos e let
var myVar1 = 1;
var myVar2 = 0;
const myFunction = () => {
  var myVar2 = 20;
};

console.log(myVar2);
console.log(myVar1);

function imprimeThis() {
  console.log("imprimeThis", this);
}
function imprimeMessagem() {
  imprimeThis.call({ msg: "Sou um objeto" });
}
function imprimeMessagem2() {
  imprimeThis.call(["Sou um array"]);
}

imprimeThis();
imprimeMessagem();
imprimeMessagem2();

//escopo lexical
function usuario() {
  const nome = "Ayrton";
  return function () {
    const sobrenome = "Teshima";
    return nome, sobrenome;
  };
}

const usuarioTeste = usuario();

console.log(usuarioTeste());

//escopo de bloco

if (true) {
  var youtube = "@programador a bordo";
  let autor = "Ayton Teshima";
  console.log(youtube, autor);
}

console.log(youtube);
console.log(autor);

//diferenças entre let e var

//redeclaração

//o código abaixo não é permitido
//let declaracao1 = 1
//let declaracao1 = "1"

// já o código abaixo é permitido

var declaracao1 = 1;
var declaracao1 = "1";
