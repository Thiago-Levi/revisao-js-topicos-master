//Objetos - Revisão

const gender = "gender";
const user = {
  name: "Ayton",
  age: 26,
  youtube: "Programador a Bordo",
  [gender]: "Male",
};

user["last-name"] = "Teshima";

user.languages = ["Português", "Inglês", "koreano"];

user.competencias = {
  "soft-skills": ["Emotional Inteligency", "Best Genius"],
  "hard-skills": "Javascript master blaster of galaxy",
};

user.digaOi = function (name) {
  return `Oi ${this.name}`;
};

const A = "A";
const B = "B";
const myNumber = 100;

const sintaxShugar = {
  A,
  B,
  myNumber,
};

console.log(sintaxShugar);
console.log(user);

const mergeOfSitaxShugarAndUser = Object.assign({}, sintaxShugar, user);
console.log(mergeOfSitaxShugarAndUser);

const mergeWithSpreaad = { ...user, ...sintaxShugar };
console.log(mergeWithSpreaad);

const usuarios = [
  { name: "Thiago", age: 35 },
  { name: "Diego", age: 34 },
  { name: "Atila", age: 34 },
];

const usuario = {
  posicao: 0,
  get atual() {
    return usuarios[this.posicao];
  },
  set atual(posicao) {
    return (this.posicao = posicao);
  },
  get proximo() {
    return ++this.posicao;
  },
  get anterior() {
    return --this.posicao;
  },
};

console.log(usuario.atual);
console.log(usuario.proximo);
console.log(usuario.atual);
usuario.atual = 1;
console.log(usuario.atual);
