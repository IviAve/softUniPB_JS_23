function matchTickets (input)
{
 let budget = Number(input[0]);
 let category = input[1];
 let numOfPeople =Number(input[2]);

 let moneyForTransport = 0;
 let moneyForTicket = 0;
 let totalSum = 0;

if (numOfPeople >=1 && numOfPeople <=4){
 moneyForTransport = budget * 0.75;
}
else if (numOfPeople>= 5 && numOfPeople <= 9){
moneyForTransport = budget * 0.60;
}
else if (numOfPeople >= 10 && numOfPeople <= 24){
moneyForTransport = budget * 0.50;
}
else if (numOfPeople >=25 && numOfPeople <= 49){
moneyForTransport = budget * 0.40;
}
else if (numOfPeople >=50){
 moneyForTransport = budget * 0.25;
}
switch (category){
    case 'VIP':
        moneyForTicket = numOfPeople * 499.99;
        break;
        case 'Normal':
            moneyForTicket = numOfPeople * 249.99;
            break;
}
totalSum = moneyForTransport + moneyForTicket;

if (budget >= totalSum){
    console.log(`Yes! You have ${(budget - totalSum).toFixed(2)} leva left.`);
}
else{
    console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva.`);
}

}

matchTickets([30000,
    'VIP',
    49
    
    ])

/* Когато пуснали билетите за Евро 2016, група запалянковци решили да си закупят. 
Билетите имат две категории с различни цени:
•	IP – 499.99 лева.
•	Normal – 249.99 лева.
Запалянковците имат определен бюджет, а броят на хората в групата определя какъв процент от бюджета 
трябва да се задели за транспо
 От    1 до 4 – 75% от бюджета.
•	От 5 до 9 – 60% от бюджета.
•	От 10 до 24 – 50% от бюджета.
•	От 25 до 49 – 40% от бюджета.
•	50 или повече – 25% от бюджета.
Напишете програма, която да пресмята дали с останалите пари от
 бюджета могат да си купят билети за избраната категория. 
 И колко пари ще им останат или ще са им нужни.
Вход
Входът се чете от конзолата и съдържа точно 3 реда:
•	На първия ред е бюджетът – реално число в интервала [1 000.00 ... 1 000 000.00]
•	На втория ред е категорията – "VIP" или "Normal"
•	На третия ред е броят на хората в групата – цяло число в интервала [1 ... 200]
Изход
Да се отпечата на конзолата един ред:
•	Ако бюджетът е достатъчен:
o	"Yes! You have {останалите пари на групата} leva left."
•	Ако бюджетът НЕ Е достатъчен:
o	"Not enough money! You need {сумата, която не достига} leva."
Сумите трябва да са форматирани с точност до два знака след десетичната запетая.
 */