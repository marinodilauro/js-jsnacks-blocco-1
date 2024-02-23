// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

const firstNumberElement = document.getElementById("firstNumber");
const secondNumberElement = document.getElementById("secondNumber");

const buttonElement = document.querySelector(".btn");

const outputElement = document.getElementById("output");

buttonElement.addEventListener("click", function () {

  if (firstNumberElement.value > secondNumberElement.value) {

    outputElement.innerHTML = firstNumberElement.value;

  } else if (firstNumberElement.value < secondNumberElement.value) {

    outputElement.innerHTML = secondNumberElement.value;

  } else {

    outputElement.innerHTML = "Numbers are equal"

  }

})

