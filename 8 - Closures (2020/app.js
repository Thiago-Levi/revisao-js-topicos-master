function impimeNome() {
  let nome = "Ayrton";
  return function () {
    return nome;
  };
}

//const func = impimeNome();
//console.log(func());

function minhaBiblioteca() {
  function auxiliar(valor) {
    return 10 + valor;
  }
  return {
    add5() {
      return auxiliar(5);
    },
    add7() {
      return auxiliar(7);
    },
  };
}

const biblioteca = minhaBiblioteca();

console.log(biblioteca.add5());

function impimeNome(nome) {
  return function () {
    console.log(nome, "Teshima");
  };
}

function inicializa() {
  let nome = "Ayrton";
  console.log("Meu nome é:");
  setTimeout(impimeNome(nome), 1000);
}

inicializa();
