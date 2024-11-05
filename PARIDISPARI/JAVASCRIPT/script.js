//Chiedo all'utente di scegliere tra pari e dispari, chiedo di inserire un numero da 1 a 5
//DATI
const evenOdd = prompt("Scegli se pari o dispari");
const number = parseInt(prompt("Scegli un numero da 1 a 5"));  // --> da stringa a numero
console.log(`L'utente ha scelto di essere ${evenOdd}`);
console.log(`Il numero scelto è ${number}`);

//Numero random computer
console.log(`Il numero del computer è ${result}`);

//Dato il numero random function, lo sommo al numero scelto dall'utente
//ESECUZIONE LOGICA
let sum = number + result;
console.log(`La somma dei due numeri è ${sum}`);

//Verifico se la somma del numero random e del numero scelto dall'utente è pari o dispari (funzione)
console.log(`La somma dei due numeri è ${sumEvenOdd(sum)}`);

//OUTPUT VINCITORE
let vincitore;
if(number > randomNum) {
    vincitore = `Vince il giocatore`
}




