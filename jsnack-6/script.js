// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

let numbers = [];

numbers.lenght = Number(prompt("Inserire un numero"));
/* 
for (let i = 1; i <= numbers.lenght; i++) {

  number = numbers.push(Number(i));


  const numberCube = Math.pow(number, 3);

  console.log(numberCube);

}; */



let i = 1

while (i <= numbers.lenght) {

  number = numbers.push(Number(i));


  const numberCube = Math.pow(number, 3);

  console.log(numberCube);

  i++

}
