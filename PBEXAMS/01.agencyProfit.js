function agencyProfit (input)
{
  let nameOfCompany = input[0];
  let totalTicketsForOld = Number(input[1]);
  let totalTicketsForKids = Number(input[2]);
  let priceTicketForOld = Number(input[3]);
  let priceForService = Number(input[4]);

  let totalSumForOlds = totalTicketsForOld * (priceTicketForOld + priceForService);
  
  let totalSumForKids = totalTicketsForKids * ((priceTicketForOld * 0.30)+ priceForService);
  let totalSum = totalSumForOlds + totalSumForKids;
  
  


  let profit = totalSum * 0.20;


  console.log(`The profit of your agency from ${nameOfCompany} tickets is ${profit.toFixed(2)} lv.`);
}

agencyProfit(["Ryanair",
"60",
"23",
"158.96",
"39.12"])




/* Напишете програма, която изчислява печалбата на агенция за продажба на самолетни билети.
 Агенцията продава самолетни билети на различни авиокомпании.
  Ще получите информация за броя продадени билети за възрастни и броя продадени детски билети. 
  Нетната цена на билета за възрастен се определя от авиокомпанията, а детският билет е със 70% по-евтин. 
  Агенцията добавя към нетната цена на всеки билет такса обслужване.  
  Крайната печалба на Агенцията е 20% от общата цена на всички билети.
Вход:
От конзолата се четат 5 реда:
1.	Име на авиокомпанията - текст
2.	Брой билети за	 възрастни – цяло число в диапазона [1…400]
3.	Брой детски билети – цяло число в диапазона [25…120]
4.	Нетна цена на билет за възрастен – реално число в диапазона [100.0…1600.0]
5.	Цената на такса обслужване - реално число в диапазона [10.0…50.0]
Изход:
Да се отпечата на конзолата крайната печалбата от продажбите, в следния формат:
•	"The profit of your agency from {име на авиокомпанията} tickets is {печалба за агенцията} lv."
Цената на печалбата да бъде форматирана до втората цифра след десетичния знак.
 */