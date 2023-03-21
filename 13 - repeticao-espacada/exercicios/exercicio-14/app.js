/*
  01

  - Faça com que o texto do h1 do index.html seja exibido com todas as letras  
    maiúsculas.
*/

const mainTitle = document.querySelector(`[data-js="main-title"]`);
mainTitle.innerHTML = mainTitle.textContent.toLocaleUpperCase();
//ou
mainTitle.classList.add("upper-case");

/*
  02

  - Adicione, na ul vazia do index.html, os números do array "numbers" abaixo;
  - Cada número deve estar dentro de uma <li> com a classe "number".
*/

const numbers = [53, 24, 3, 8, 1, 6, 57, 80, 77, 98, 55];
const ulOfNumbers = document.querySelector(`[data-js="ul-of-numbers"]`);
numbers.forEach((number) => {
  ulOfNumbers.innerHTML += `<li>${number}</li>`;
});

// ou

// const renderNumber = numbers.reduce(
//   (templateHtml, number) => (templateHtml += `<li>${number}</li>`),
//   ``
// );

//ulOfNumbers.innerHTML = renderNumber;

/*
  03

  - Modifique as cores dos números dentro da ul da seguinte forma:
    - Se o número é par, ele deve ser exibido na cor "lightblue";
    - Se o número é ímpar, exiba-o na cor "pink".
*/

//const listOfNumbers = Array.from(ulOfNumbers);
const liWithANumber = document.querySelectorAll("li");

function isEven(number) {
  return number % 2 === 0;
}
liWithANumber.forEach((li) => {
  isEven(li.textContent)
    ? li.classList.add("color-of-even")
    : li.classList.add("color-of-odd");
});

/*
  04

  - Adicione a classe "body-background" no corpo do index.html;

  P.s: a classe "body-background" já está declarada no style.css.
*/

const body = document.querySelector(`[data-js="document-body"]`);
body.classList.add("body-background");
/*
  05

  - Adicione o link 
    https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo no href  
    do link do index.html.
*/

const link = document.querySelector('[data-js="link"]');

link.href = "https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo";

/*
  06

  - Exiba o novo valor do atributo href do link no console.
*/

console.log(link.href);

/*
  07

  - Exiba, no console, um objeto com todas as propriedades CSS que podem ser  
    manipuladas via JS no h1.
*/

console.log(mainTitle.style);

/*
  08

  - Remova a classe "body-background", do elemento body.
*/

body.classList.remove("body-background");

/*
  09

  - Se o link da página possuir uma classe "link", remova-a;
  - Não utilize o método remove() para fazer isso.
*/

console.log(link.classList);

link.classList.toggle("link");

console.log(link.classList);

link.classList.toggle("link");

console.log(link);
