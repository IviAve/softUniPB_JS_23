function logistics(input) {
    let numOfLoad = Number(input[0]);


    let priceForMicrobus = 0;
    let priceForTruck = 0;
    let priceForTrain = 0;
    let totalTone = 0;
    let microbusTone = 0;
    let truckTone = 0;
    let trainTone = 0;

    for (let i = 1; i <= numOfLoad; i++) {
        let numTone = Number(input[i])
        if (numTone <= 3) {
            microbusTone += numTone;
            priceForMicrobus += numTone * 200;
            totalTone += numTone;

        }
        else if (numTone >= 4 && numTone <= 11) {
            truckTone += numTone;
            priceForTruck += numTone * 175;
            totalTone += numTone;
        }
        else if(numTone >= 12){
            trainTone += numTone;
            priceForTrain += numTone * 120;
            totalTone += numTone;
        }

      
    }
    let percentMicrobus = (microbusTone / totalTone) * 100; 
    let percentTruck = (truckTone / totalTone) * 100; 
    let percentTrain = (trainTone/ totalTone) * 100; 
    let averagePrice = (priceForMicrobus + priceForTruck + priceForTrain)/totalTone;

    console.log(averagePrice.toFixed(2));
    console.log(`${percentMicrobus.toFixed(2)}%`);
    console.log(`${percentTruck.toFixed(2)}%`);
    console.log(`${percentTrain.toFixed(2)}%`);
}

logistics([5,
    2,
    10,
    20,
    1,
    7
    

])

/* Отговаряте за логистиката на различни товари.
В зависимост от теглото на товара е нужно различно превозно средство.
 Цената на тон, за която се превозва товара е различна за всяко превозно средство:
•	До 3 тона – микробус (200 лева на тон)
•	От 4 до 11 тона – камион (175 лева на тон)
•	12 и повече тона – влак (120 лева на тон)
Вашата задача е да изчислите средната цена на тон превозен товар, 
както и процента на тоновете  превозвани с всяко превозно средство,
спрямо общото тегло(в тонове) на всички товари.
Вход
От конзолата се четат поредица от числа, всяко на отделен ред:
•	На първия ред – броя на товарите за превоз – цяло число в интервала [1...1000]
•	За всеки един товар на отделен ред – тонажа на товара – цяло число в интервала [1...1000]
Изход
Да се отпечатат на конзолата 4 реда, както следва:
•	Първи ред – средната цена на тон превозен товар (закръглена до втория знак след дес. запетая);
•	Втори ред – процентът тона превозвани с микробус (процент между 0.00% и 100.00%);
•	Трети ред – процентът  тона превозвани с камион (процент между 0.00% и 100.00%);
•	Четвърти ред – процентът тона превозвани с влак (процент между 0.00% и 100.00%).
*/