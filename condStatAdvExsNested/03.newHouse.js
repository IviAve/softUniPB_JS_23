function newHouse (input)
{
  let flowers = input[0];
  let numFlowers = Number(input[1]);
  let budget = Number(input[2]);

  let totalSum = 0;

  switch(flowers)
  {
    case 'Roses':
  totalSum = numFlowers * 5;
  if (numFlowers > 80){
totalSum *= 0.90;
  }
        break;
        case 'Dahlias':
            totalSum = numFlowers * 3.80;
            if (numFlowers > 90){
                totalSum *= 0.85;
            }
            break;
            case 'Tulips':
                totalSum = numFlowers * 2.80;
                if (numFlowers > 80){
                    totalSum *= 0.85;
                }
                break;
                case 'Narcissus':
                    totalSum = numFlowers * 3;
                    if (numFlowers < 120){
                        totalSum *= 1.15;
                    }
                break;
                case 'Gladiolus':
                    totalSum = numFlowers * 2.50;
                    if (numFlowers < 80){
                        totalSum *= 1.20;
                    }
                break;
  }

  //цвете	Роза	Далия	Лале	Нарцис	Гладиола
  //Цена на	 5	    3.80	2.80	  3	      2.50
//   •	Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена
// •	Ако Нели купи повече от 90  Далии - 15% отстъпка от крайната цена
// •	Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена
// •	Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%
// •	Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%

  

  if (budget >= totalSum)
  {
    console.log(`Hey, you have a great garden with ${numFlowers} ${flowers} and ${(budget - totalSum).toFixed(2)} leva left.`);
  }
  else
  {
   console.log(`Not enough money, you need ${(totalSum - budget).toFixed(2)} leva more.`);
  }
}

/*newHouse(["Roses",
"55",
"250"])*/
newHouse(["Tulips",
"88",
"260"])



/* Марин и Нели си купуват къща не далеч от София. Нели толкова много обича цветята,
 че Ви убеждава да напишете функция, която да изчисли колко  ще им струва, 
 да си засадят определен брой цветя и дали наличния бюджет ще им е достатъчен.
  Различните цветя са с различни цени. 
Съществуват следните отстъпки:
Функцията получава 3 аргумента:
•	Вид цветя - текст с възможности - "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
•	Брой цветя - цяло число в интервала [10…1000]
•	Бюджет - цяло число в интервала [50…2500]
Да се отпечата на конзолата на един ред:
•	Ако бюджета им е достатъчен - "Hey, you have a great garden with {броя цвета} {вид цветя} and {останалата сума} leva left."
•	Ако бюджета им е НЕ достатъчен - "Not enough money, you need {нужната сума} leva more."
Сумата да бъде форматирана до втория знак след десетичната запетая.
 */