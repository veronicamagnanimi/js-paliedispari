//GENERO IL NUMERO RANDOM DA 1 A 5 PER IL COMPUTER USANDO LA FUNZIONE

function randomNum(min, max) {
  const randomInt = Math.floor(Math.random() * (max - min + 1) + min);
  return randomInt;
}




//Test
const result = randomNum (1, 5);
console.log(result);



