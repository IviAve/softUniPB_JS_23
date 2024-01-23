function santasHoliday (input){


    let dayOfStay = Number(input[0]);
let typeOfRoom = input[1];
let rating = input[2];

let nights = dayOfStay - 1;
let totalPrice = 0;

switch (typeOfRoom)
{
    case "room for one person":
        totalPrice = nights * 18;
        break;
    case "apartment":
        totalPrice = nights * 25;
        if (dayOfStay < 10)
        {
            totalPrice *=  0.70;
        }
        else if (dayOfStay >= 10 && dayOfStay <= 15)
        {
            totalPrice -= totalPrice * 0.35;
        }
        else
        {
            totalPrice -= totalPrice * 0.50;
        }
        break;
    case "president apartment":
        totalPrice = nights * 35;
        if (dayOfStay < 10)
        {
            totalPrice -= totalPrice * 0.10;
        }
        else if (dayOfStay >= 10 && dayOfStay <= 15)
        {
            totalPrice -= totalPrice * 0.15;
        }
        else
        {
            totalPrice -= totalPrice * 0.20;
        }
        break;
}
switch (rating)
{
    case "positive":
        totalPrice += totalPrice * 0.25;
        break;
    case "negative":
        totalPrice -= totalPrice * 0.10;
        break;
}
console.log(`${totalPrice.toFixed(2)}`);

}

santasHoliday(["2",
"apartment",
"positive"])





/* Всяка година Дядо Коледа избира различни дестинации за почивка. 
Тази година той решава да прекара почивните си дни в България. Неговите верни приятели – джуджетата,
 му предлагат да се настани в един от най-престижните хотели, а именно "Четири сезона". 
 По време на престоя си там, той трябва да избере между следните видове помещения, 
 със следните цени за престой:
•	"room for one person" – 18.00 лв за нощувка
•	"apartment" – 25.00 лв за нощувка 
•	"president apartment" – 35.00 лв за нощувка
Според броят на дните, в които Дядо Коледа ще остане в хотела (пример: 11 дни = 10 нощувки)
 и видът на помещението, което ще избере, той може да ползва различно намаление. 
 Намаленията спрямо дните и помещението са както следва:
вид помещение	по-малко от 10 дни	между 10 и 15 дни	повече от 15 дни
room for one person	не ползва намаление	не ползва намаление	не ползва намаление
apartment	30% от крайната цена	35% от крайната цена	50% от крайната цена
president apartment	10% от крайната цена	15% от крайната цена	20% от крайната цена

След престоя си в хотела, оценката на Дядо Коледа за услугите на хотела може да е
 позитивна (positive) или негативна (negative). Ако оценката му е позитивна,
  към цената с вече приспаднатото намаление Дядо Коледа добавя 25%  към нея.
   Ако оценката му е негативна приспада от цената 10%.
Вход
Входът се чете от конзолата и се състои от три реда:
•	Първи ред – дни за престой – цяло число в интервала [0...365]
•	Втори ред –  вид помещение –  "room for one person",  "apartment" или "president apartment"
•	Трети ред –  оценка - "positive"  или "negative"
Изход
На конзолата трябва да се отпечата един ред.
•	Цената за престоят му в хотела, форматирана до втория знак след десетичната запетая
 */