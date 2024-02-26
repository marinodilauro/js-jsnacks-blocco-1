// Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

let sum = 0;

let numbers = [];

/*
for (let i = 1; i <= 10; i++) {

  number = Number(prompt("Inserire un numero"));
  numbers.push(number);

  const element = numbers[i];

  sum += element;

}; 

console.log(sum);

*/


let i = 1

while (i <= 10) {

  number = Number(prompt("Inserire un numero"));
  numbers.push(number);

  const element = numbers[i];

  sum += element;

  i++

}

console.log(sum);