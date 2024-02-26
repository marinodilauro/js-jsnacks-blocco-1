// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

let sum = 0;

stringNumber = prompt("Inserire un numero a 4 cifre");

/*

if (stringNumber.length >= 4) {

  for (let i = 0; i < stringNumber.length; i++) {

    const element = stringNumber[i];

    number = Number(element);

    sum += number;

  };

  console.log(sum);

} else {
  alert("Attenzione! Inserie un numero a 4 cifre!");
}

*/

let i = 0;

if (stringNumber.length >= 4) {

  while (i < stringNumber.length) {

    const element = stringNumber[i];

    number = Number(element);

    sum += number;

    i++

  }

  console.log(sum);

} else {
  alert("Attenzione! Inserie un numero a 4 cifre!");
}
