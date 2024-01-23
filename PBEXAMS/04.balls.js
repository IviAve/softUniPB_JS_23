function balls (input){
let numBall = Number(input[0]);
let totalPoints = 0;

let redCount = 0;
let orangeCount = 0;
let yellowCount = 0;
let whiteCount = 0;
let blackCountD2 = 0;
let anyCount = 0;
 //let index = 1;
 //let command = input[index];
// index++;
for (let i = 1;i <= numBall;i++){
    let ball = String(input[i]);
      if (ball === 'red'){
         totalPoints += 5;
         redCount++;
      }
      else if (ball === 'orange'){
        totalPoints += 10;
         orangeCount++;
      }else if (ball === 'yellow'){
        totalPoints += 15;
         yellowCount++;
      }else if (ball === 'white'){
        totalPoints += 20;
         whiteCount++;
      }else if (ball === 'black'){
        totalPoints =Math.floor(totalPoints/2);
         blackCountD2++;
      }else  {
        
         anyCount++;
      }
}
console.log(`Total points: ${totalPoints}`);
console.log(`Red balls: ${redCount}`);
console.log(`Orange balls: ${orangeCount}`);
console.log(`Yellow balls: ${yellowCount}`);
console.log(`White balls: ${whiteCount}`);
console.log(`Other colors picked: ${anyCount}`);
console.log(`Divides from black balls: ${blackCountD2}`);
}

balls(['10',
    'white',
    'white',
    'ee',
    'red',
    'orange',
    'red',
    'black',
    'black',
    'black',
    'black'])



/* В кутия имаме неопределен брой топки с различни цветове, които ни носят различен брой точки.
 Задачата ни е да извадим Х бр. топки, които ще бъдат въведени от конзолата, 
 като се има в предвид, че всеки различен цвят влияе на точките ни по следния начин:
•	Ако топката е “red” точките ни се повишават с 5.
•	Ако топката е “orange” точките ни се повишават с 10.
•	Ако топката е “yellow” точките ни се повишават с 15.
•	Ако топката е “white” точките ни се повишават с 20.
•	Ако топката е “black” точките ни се делят на 2, като закръгляме към по-малкото цяло число.
Ако топката е с какъвто и да е цвят, различен от по-горните, 
точките не се манипулират и програмата продължава да работи.
Вход:
1.	От конзолата се чете 1 цяло число N, което е броят на топките в диапазон (0-1000).
2.	След това се четат N на брой цветове.
Изход:
Отпечатват се следните редове:
"Total points: {всичките събрани точки}"
"Red balls: {броят червени топки}"
"Orange balls: {броят оранжеви топки}"
"Yellow balls: {броят жълти топки}"
"White balls: {броят бели топки}"
"Other colors picked: {броят на избраните топки извън зададените цветове}"
"Divides from black balls: {броят на пътите, в които точките са били разделяни на 2}"
 */