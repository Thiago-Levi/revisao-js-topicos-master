/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/

/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/
const form = document.querySelector('[data-js="form"]');

const validateUserName = (userName) => {
  const userNameregex = /^[a-zA-Z]{6,}$/;
  const resultOfUserNameregex = userNameregex.test(userName);
  return resultOfUserNameregex;
};

const renderUserNamePlaceHolder = (placeHolderClass, placeHolderText) => {
  const newParagraph = document.createElement("p");
  newParagraph.classList.add(placeHolderClass);
  newParagraph.setAttribute("data-js", "feedbackParagraph");
  newParagraph.innerText = placeHolderText;
  return newParagraph;
};
form.addEventListener("keyup", (event) => {
  event.preventDefault();
  const inputValue = username.value;
  const isValid = validateUserName(inputValue);
  console.log(isValid);

  if (document.querySelector("[data-js='feedbackParagraph']")) {
    document.querySelector("[data-js='feedbackParagraph']").remove();
  }

  if (isValid) {
    form.insertAdjacentElement(
      "afterend",
      renderUserNamePlaceHolder(
        "username-success-feedback",
        "Username válido =)."
      )
    );
  } else {
    form.insertAdjacentElement(
      "afterend",
      renderUserNamePlaceHolder(
        "username-help-feedback",
        "O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas"
      )
    );
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (document.querySelector("[data-js='feedbackParagraph']")) {
      document.querySelector("[data-js='feedbackParagraph']").remove();
    }
    isValid
      ? form.insertAdjacentElement(
          "afterend",
          renderUserNamePlaceHolder(
            "submit-success-feedback",
            "Dados enviados =)"
          )
        )
      : form.insertAdjacentElement(
          "afterend",
          renderUserNamePlaceHolder(
            "submit-help-feedback",
            "Por favor, insira um username válido"
          )
        );
    return;
  });
});

/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/

/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.

*/

const someFunction = function (param, func) {
  return func(param) ? true : false;
};

console.log(someFunction(2, (item) => item === 2));
