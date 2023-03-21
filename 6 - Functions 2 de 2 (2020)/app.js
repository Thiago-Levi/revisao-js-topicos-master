//functions parte 02

const User = function () {
  this.name = "Thiago";
  this.age = 35;
  this.soma = function (a, b) {
    return a + b;
  };
};

console.log(new User());

const usuario = new User();
console.log(usuario.soma(10, 10));

const returnMyObj = (pets = false) => ({ nome: "Levis", idade: 35, pets });

console.log(returnMyObj());
