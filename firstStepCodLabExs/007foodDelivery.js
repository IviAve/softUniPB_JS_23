function foodDelivery (input)
{
   let chickenMenu = Number (input[0]);
   let fishMenu = Number (input[1]);
   let veganMenu = Number (input[2]);

   let sumFoods = chickenMenu * 10.35 + fishMenu * 12.40 + veganMenu * 8.15 ;
   let desertPrice = sumFoods * 20/100;
   let totalPrice = sumFoods + desertPrice +2.50;

   console.log(totalPrice)

}

foodDelivery(["9 ",
"2 ",
"6 "])


/* Ресторант отваря врати и предлага няколко менюта на преференциални цени: 
•	Пилешко меню –  10.35 лв. 
•	Меню с риба – 12.40 лв. 
•	Вегетарианско меню  – 8.15 лв. 
Напишете програма, която изчислява колко ще струва на група хора да си поръчат храна за вкъщи.
Групата ще си поръча и десерт, чиято цена е равна на 20% от общата сметка (без доставката). 
Цената на доставка е 2.50 лв и се начислява най-накрая.  
Вход
От конзолата се четат 3 реда:
•	Брой пилешки менюта – цяло число в интервала [0 … 99]
•	Брой менюта с риба – цяло число в интервала [0 … 99]
•	Брой вегетариански менюта – цяло число в интервала [0 … 99]
Изход
Да се отпечата на конзолата един ред:  "{цена на поръчката}"
 */