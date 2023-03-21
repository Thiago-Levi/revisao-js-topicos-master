console.log(mult(2, 8));

function mult(firstNum, secondNum) {
  return firstNum * secondNum;
}

const sumArray = function (array) {
  let sum = 0;
  for (const number of array) {
    sum += number;
  }

  return sum;
};

const arrowDiv = (firstNum, secondNum) => {
  return firstNum / secondNum;
};
console.log(arrowDiv(100, 2));
console.log(sumArray([1, 10, 100, 1000, 10000, 100000]));

//rest parameter
// O rest parameter é uma feature dp javascript que acumula parâmetros
// de uma função em uma quantidade indeterminada.

//Abaixo eu tenho uma função que recebe várias strings "soltas", após o parametro páis.

const endereco = function (planeta, continente, país, ...rest) {
  console.log(planeta, continente, país);
  console.log(rest);
};

endereco("Terra", "Sulamericano", "Brasil", "Ceará", "Maracanaú");

// Funções de callback são funcções que recebem outras funções como parãmetros
// abaixo estou invocando mult e div dentro da função exemplo

const exemplo = (firstNum, secondNum, calllbackone, callbacktwo) => {
  let result = calllbackone(firstNum, secondNum);
  result += callbacktwo(firstNum, secondNum);
  return result;
};

const resultado = exemplo(10, 2, mult, arrowDiv);

console.log(resultado);
