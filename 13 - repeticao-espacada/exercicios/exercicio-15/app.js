/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/
const ulVideos = document.querySelector('[data-js="videos"]');
const lis = [...ulVideos.children];
const insertVideoClass = (li) => li.classList.add("video");

lis.forEach(insertVideoClass);
console.log(lis);

/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/

console.log(document.querySelector('[data-js="h2"]').parentElement);

/*
  03

  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/
console.log(document.querySelector('[data-js="h1"]').nextElementSibling);
/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/
console.log(ulVideos.previousElementSibling);

/*
  05

  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/

ulVideos.addEventListener("click", (event) => {
  console.log(event.target);
});

/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [
  {
    name: "Como o promise all funciona | JavaScript",
    length: "00:01:52",
  },
  {
    name: "Como refatorar um for loop | JavaScript",
    length: "00:04:18",
  },
  {
    name: "Como fazer requisições HTTP com o método fetch | JavaScript",
    length: "00:02:55",
  },
];

const buttonAdd = document.querySelector('[data-js="button-add"]');

// const renderVideoName = () => {
//   videos.forEach(({ name }) => {
//     const newVideo = document.createElement("li");
//     newVideo.innerText = `${name}`;
//     ulVideos.insertAdjacentElement("beforeend", newVideo);
//   });
// };

const renderVideoNames = () => {
  const addNameOfVideos = ({ name }) =>
    (ulVideos.innerHTML += `<li>${name}</li>`);

  videos.forEach(addNameOfVideos);
};
buttonAdd.addEventListener("click", renderVideoNames);

/*
  07

  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/

const h1 = document.querySelector('[data-js="h1"]');

h1.addEventListener("click", (event) => {
  document.querySelector('[data-js="body"]').innerHTML = "";
});
