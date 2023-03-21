const novoUsuario1 = {
  nome: "Ayrton",
  idade: 27,
  pais: "Brasil",
};

const { idade: minhaIdade } = novoUsuario1;
//ou
const { idade } = novoUsuario1;

console.log(minhaIdade);

console.log(idade);

const novoUsuario2 = {
  nome: {
    primeiroNome: "Thiago Levi",
    ultimonome: "Ramos da Costa",
  },
  apelido: "Pinguin",
  temPets: true,
};

const {
  nome: { primeiroNome },
} = novoUsuario2;
console.log(primeiroNome);

const imprimeNomeUsuario = ({
  nome: { primeiroNome = "semnome", ultimonome = "semnome" },
}) => {
  console.log(`Esse é meu nome completo: ${primeiroNome} ${ultimonome}`);
};

//imprimeNomeUsuario(novoUsuario2);

console.log(Object.keys(novoUsuario2.nome));
console.log(Object.values(novoUsuario2.nome));
