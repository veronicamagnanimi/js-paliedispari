//VERIFICARE SE LA PAROLA E' PALINDROMA
//partiamo da una stringa
//continuiamo con la seconda stringa (invertita)
//ci restituisce un booleano

function reverseWord(word) {
    let palindroma = '';
    for(i = word.length - 1; i >= 0; i-- ) {
        palindroma += word[i];
    }
    return palindroma;
}

/////////

function palindromeCheck(word, invertedWord) {
    let isPalindrome = false;
    if (word === invertedWord) {
        isPalindrome = true;
    }
}