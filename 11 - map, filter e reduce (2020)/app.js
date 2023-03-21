//////// MAP /////////
const numeros = [2, 3, 4, 5, 10];

const multply2 = (numero, index) => {
  return numero * 2;
};
const novoArray = numeros.map(multply2);
console.log(novoArray);

const arrayWords = ["ArtON", "TESHIMA", "LEVI", "TESTE"];

const toLowerWords = (word) => {
  return word.toLowerCase();
};

const lowerCaseArray = arrayWords.map(toLowerWords);

console.log(lowerCaseArray);

////////// FILTER /////////////

const getOdd = (number) => {
  return number % 2 === 0 ?? number;
};
const oddAray = numeros.filter(getOdd).map(multply2);
console.log(oddAray);

///////////// REDUCE /////////////

const arraySum = (acc, oddNumber) => {
  return acc + oddNumber;
};

const arrayOddSum = oddAray.reduce(arraySum, 0);

console.log(arrayOddSum);

const pessoas = [
  {
    nome: "Thiago",
    idade: 27,
  },
  {
    nome: "Levi",
    idade: 17,
  },
  {
    nome: "Ramos",
    idade: 10,
  },
  {
    nome: "Alisson",
    idade: 100,
  },
  {
    nome: "Diego",
    idade: 1,
  },
];

const obj = pessoas.reduce(
  (acumulador, pessoa) => {
    const maiorOuMenor = pessoa.idade >= 18 ? "maiores" : "menores";
    acumulador[maiorOuMenor].push(pessoa);
    return acumulador;
  },
  { maiores: [], menores: [] }
);

console.log(obj);
