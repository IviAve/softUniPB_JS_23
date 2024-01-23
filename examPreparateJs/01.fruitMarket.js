function fruitMarket (input) {

    let priceStrawberry = Number(input[0]);
    let kgBananas = Number(input[1]);
    let kgOrange = Number(input[2]);
    let kgBRaspbarry = Number(input[3]);
    let kgBStrawpbarry = Number(input[4]);

    let totalPrice = 0;
    let totalPriceForStrawberry = kgBStrawpbarry * priceStrawberry;
    let priceForRaspberry =  (priceStrawberry /2);
    let priceForOrange =  priceForRaspberry* 0.60;
    let priceForBananas = priceForRaspberry * 0.20;

    totalPrice = totalPriceForStrawberry + (kgBRaspbarry * priceForRaspberry) + (kgOrange * priceForOrange)+ (kgBananas * priceForBananas);

    console.log(totalPrice.toFixed(2));
}

fruitMarket([48,
    10,
    3.3,
    6.5,
    1.7
    ])

/* Мария решава да мине на диета и отива до близкия пазар, за да купи ягоди, банани, портокали и малини.
 На конзолата се въвежда цената на ягодите в лв./кг.
  и количеството на бананите, портокалите, малините и ягодите, които трябва да закупи.
   Да се напише програма, която пресмята колко пари са ѝ необходими за да плати сметката, като знаете, че:
•	цената на малините е на половина по-ниска от тази на ягодите;
•	цената на портокалите е с 40% по-ниска от цената на малините;
•	цената на бананите е с 80% по-ниска от цената на малините.
Вход
От конзолата се четат 5 реда:
1.	Цена на ягодите в лева – реално число в интервала [0.00 … 10000.00]
2.	Количество на бананите в килограми – реално число в интервала [0.00 … 1 0000.00]
3.	Количество на портокалите в килограми – реално число в интервала [0.00 … 10000.00]
4.	Количество на малините в килограми – реално число в интервала [0.00 … 10000.00]
5.	Количество на ягодите в килограми – реално число в интервала [0.00 … 10000.00]
Изход
Да се отпечата на конзолата едно число:
•	парите, които са необходими на Мария.
Резултатът да се форматира до вторта цифра след десетичната запетая.
 */