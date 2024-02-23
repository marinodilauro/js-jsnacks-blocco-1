// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWordElement = document.getElementById("firstWord");
const secondWordElement = document.getElementById("secondWord");

const buttonElement = document.querySelector(".btn");

const outputElement = document.getElementById("output");

buttonElement.addEventListener("click", function () {

  /*   for (let i = 0; i < firstWordElement.value; i++) {
      const chars = firstWordElement.value[i];
  
  
  
    } */

  const firstWord = firstWordElement.value.length;
  const secondWord = secondWordElement.value.length

  console.log(firstWordElement.value.length);
  console.log(secondWordElement.value.length);

  if (firstWord.length > secondWord.length) {

    outputElement.innerHTML = `<div>${firstWordElement.value}</div>`;
    outputElement.innerHTML += `<div>${secondWordElement.value}</div>`;

  } else if (firstWord.length < firstWord.length) {

    outputElement.innerHTML = `<div>${secondWordElement.value}</div>`;
    outputElement.innerHTML += `<div>${firstWordElement.value}</div>`;

  } /* else {

        outputElement.innerHTML = `<div>${firstWord}</div>`;
        outputElement.innerHTML += `<div>${secondWord}</div>`; 
    outputElement.innerHTML += `<div>Words have the same lenght</div>`;

  } */

})

