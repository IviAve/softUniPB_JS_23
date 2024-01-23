function footballKit  (input){

    let priceForTshirt = Number(input[0]);
    let sumForAward = Number(input[1]);

let priceForShorts = priceForTshirt * 0.75;
let priceForSocks = priceForShorts * 0.20;
let priceForButtons = (priceForTshirt + priceForShorts) * 2;

let sum = priceForTshirt + priceForShorts + priceForSocks + priceForButtons;
let discount = sum * 0.15;
let totalSum = sum - discount;
if (totalSum >= sumForAward){
    console.log(`Yes, he will earn the world-cup replica ball!`);
    console.log(`His sum is ${totalSum.toFixed(2)} lv.`);

}else{
    console.log(`No, he will not earn the world-cup replica ball.`);
    console.log(`He needs ${(sumForAward - totalSum).toFixed(2)} lv. more.`);
}


}



footballKit(["59.99",
"500"])




/* Като един истински запалянко Пепи решил да се подготви за световното първенство,
 като си закупи екип на любимия си футболен отбор. 
 В магазина, в който пазарувал предлагали тениски, шорти, чорапи и бутонки. 
 Знае се, че цената на шортите е 75% от цената на тениските, а цената на чорапите е 20% от цената на шортите.
  Бутонките струват два пъти колкото тениската и шортите взети заедно. 
  Тъй като Пепи редовно пазарува от този магазин,
   той има карта за отстъпка на стойност 15% от общата сума на покупката.
    Ако сметката на Пепи е по-висока или равна на дадена сума, 
    той получава подарък – точно копие на топката от световното. Напишете програма,
     която изчислява дали Пепи е спечелил топката. 
Вход:
Входът се чете от конзолата и съдържа точно 2 реда:
•	На първия ред - цената на тениската – реално число в интервала [1.00 ... 1000.00]
•	На втория ред - сумата, която трябва да достигне, за да спечели топка – реално число в интервала [100.00 ... 10 000.00]
Изход:
На конзолата се отпечатват два реда:
•	Ако топката Е спечелена:
o	"Yes, he will earn the world-cup replica ball!"
o	"His sum is {сумата} lv."
•	Ако  топката НЕ Е спечелена:
o	"No, he will not earn the world-cup replica ball."
o	"He needs {недостигащи пари} lv. more."
Резултатът да бъде форматиран до втората цифра след десетичната запетая.
 */