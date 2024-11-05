//VERIFICARE SE LA PAROLA E' PALINDROMA
//partiamo da una stringa
//ci restituisce una stringa

function èPalindroma(word) {
let result = "";
for(let i = 0; i < word.length; i++) {
    let wordInverted = word[i];
    if(i === 0) {
        wordInverted = wordInverted.reverse();
    }
    result += wordInverted;
} 
return result;
}

console.log(èPalindroma());