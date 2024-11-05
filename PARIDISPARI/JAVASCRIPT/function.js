//GENERO IL NUMERO RANDOM DA 1 A 5 PER IL COMPUTER USANDO LA FUNZIONE
let result = randomNum (1, 5);
function randomNum(min, max) {
  const randomInt = Math.floor(Math.random() * (max - min + 1) + min);
  return randomInt;
}


//STABILISCO SE LA SOMMA E' PARI O DISPARI
//Parto da un numero, mi restituisce una stringa
function sumEvenOdd(sum) {
    let final = "";
    if(sum % 2 === 0) {
        final = "Pari";
    } else {
        final = "Dispari";
    }
    return final;
}
console.log(`La somma dei due numeri è ${sumEvenOdd()}`);








