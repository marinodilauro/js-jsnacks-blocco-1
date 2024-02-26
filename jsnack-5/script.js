// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

const numbers = [];

/* for (let i = 1; i <= 6; i++) {

  number = Number(prompt("Inserire un numero"));

  if (number % 2 !== 0) {

    numbers.push(number);

  }

};

console.log(numbers); */

let i = 1

while (i <= 6) {

  number = Number(prompt("Inserire un numero"));

  if (number % 2 !== 0) {

    numbers.push(number);

  }

  i++

}

console.log(numbers);