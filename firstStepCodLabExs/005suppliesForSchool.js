/* Учебната година вече е започнала и отговорничката на 10Б клас - 
Ани трябва да купи определен брой пакетчета с химикали, пакетчета с маркери, 
както и препарат за почистване на дъска. Тя е редовна клиентка на една книжарница,
 затова има намаление за нея, което представлява някакъв процент от общата сума. 
 Напишете програма, която изчислява колко пари ще трябва да събере Ани, за да плати сметката,
  като имате предвид следния ценоразпис: 
•	Пакет химикали - 5.80 лв. 
•	Пакет маркери - 7.20 лв. 
•	Препарат - 1.20 лв (за литър)
Вход
От конзолата се четат 4 числа:
•	Брой пакети химикали - цяло число в интервала [0...100]
•	Брой пакети маркери - цяло число в интервала [0...100]
•	Литри препарат за почистване на дъска - цяло число в интервала [0…50]
•	Процент намаление - цяло число в интервала [0...100]
Изход
Да се отпечата на конзолата колко пари ще са нужни на Ани, за да си плати сметката.
 */
/*Цена на пакетите химикали => 2 * 5.80 = 11.60 лв.
Цена на пакетите маркери => 3 * 7.20 = 21.60 лв.
Цена на препарата => 4 * 1.20 = 4.80 лв.
Цена за всички материали => 11.60 + 21.60 + 4.80 = 38.00 лв.
25% = 0.25
Цена с намаление = 38.00 – (38.00 * 0.25) = 28.50 лв.*/

function suppliesForSchool5 (input )
{
  let numberOfPens = Number (input[0]);
  let numberOfMarkers = Number(input[1]);
  let numLitres = Number(input[2]);
  let percentDiscount = Number(input[3]);

  let totalSum = (numberOfPens * 5.80) + (numberOfMarkers * 7.20) + (numLitres * 1.20);
  let discount =  totalSum * (percentDiscount /100);


  console.log(totalSum - discount)

}

suppliesForSchool5(["2 ",
"3 ",
"4 ",
"25 "]
)