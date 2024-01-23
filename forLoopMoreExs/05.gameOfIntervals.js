function gameOfIntervals(input) {

    let numOfMoves = Number(input[0]);

    let sumOfNum = 0;
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;
    let num5 = 0;
    let invalidNum = 0;
    

    for (let i = 1; i <= numOfMoves; i++) {
        let num = Number(input[i]);


        if (num >= 0 && num <= 9) {
            sumOfNum += num * 0.20;
            num1++;
        }
        else if (num >= 10 && num <= 19) {
            sumOfNum += num * 0.30;
            num2++;
        }
        else if (num >=20 && num <= 29){
            sumOfNum += num * 0.40;
           num3 ++;
        }
        else if (num >=30 && num <=39){
            sumOfNum +=50;
            num4 ++;
        }
        else if (num >=40 && num <= 50){
            sumOfNum += 100;
            num5 ++;
        }
        else if (num < 0 || num > 50){
             
            sumOfNum /= 2;
            invalidNum ++;
        }
    }

    let percentNums1 =(num1 / numOfMoves)* 100
    let percentNums2 =(num2 / numOfMoves)* 100;
    let percentNums3 = (num3 / numOfMoves)* 100;
    let percentNums4 =(num4 / numOfMoves)* 100;
    let percentNums5 =(num5 / numOfMoves)* 100;
    let percentInvalidNum =(invalidNum / numOfMoves)* 100

     console.log(`${sumOfNum.toFixed(2)}`);
     console.log(`From 0 to 9: ${percentNums1.toFixed(2)}%`);
     console.log(`From 10 to 19: ${percentNums2.toFixed(2)}%`);
     console.log(`From 20 to 29: ${percentNums3.toFixed(2)}%`);
     console.log(`From 30 to 39: ${percentNums4.toFixed(2)}%`);
     console.log(`From 40 to 50: ${percentNums5.toFixed(2)}%`);
     console.log(`Invalid numbers: ${percentInvalidNum.toFixed(2)}%`);
}

gameOfIntervals([10,
    43,
    57,
    -12,
    23,
    12,
    0,
    50,
    40,
    30,
    20
])

/*•	От 0 до 9  20 % от числото
•	От 10 до 19  30 % от числото
•	От 20 до 29  40 % от числото
•	От 30 до 39  50 точки
•	От 40 до 50  100 точки
•	Невалидно число  резултата се дели на 2
 Напишете програма, която да пресмята резултата от игра. 
Първо получавате число, което показва колко хода ще продължи играта. 
После за всеки ход на играта ще получавате по едно ново число. 
Според интервала в който попада числото се прибавят точки. 
Ако числото е отрицателно или по-голямо 50, тогава то е невалидно. 
В началото на играта резултата е 0 и на всеки ход се прибавят точки по следният начин:
 

 
Освен резултата програмата трябва да изкарва статистика за проценти числа в дадените интервали.
Вход
Входът се чете от конзолата:
•	Първи ред - колко хода ще има по време на играта – цяло число в интервала [1...100]
•	За всеки ход – числата, които се проверяват в кой интервал са – цели числа в интервала [-100...100]
Изход
Да се отпечата на конзолата 7 реда:
•	1ви ред: "{Краен резултат}"
•	2ри ред: "From 0 to 9: {процент в интервала}%"
•	3ти ред: "From 10 to 19: {процент в интервала}%"
•	4ти ред: "From 20 to 29: {процент в интервала}%"
•	5ти ред: "From 30 to 39: {процент в интервала}%"
•	6ти ред: "From 40 to 50: {процент в интервала}%"
•	7ми ред: "Invalid numbers: {процент в интервала}%"
Всички числа трябва да са форматирана до вторият знак след запетаята.
 */