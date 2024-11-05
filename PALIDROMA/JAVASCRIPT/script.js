//CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA
//DATI
const word = prompt("Dimmi una parola");
let invertedWord = reverseWord(word);
console.log(word);
console.log(invertedWord);

//ESECUZIONE LOGICA
let isPalindrome = palindromeCheck(word, invertedWord);

// OUTPUT
let result = '';
if(isPalindrome) {
    result = `La parola "${word}" è Palindroma`;
}
else {
    result = `La parola "${word}" non è Palindroma`;
}
document.writeln(result);
