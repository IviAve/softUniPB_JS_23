function aluminumJoinery(input) {
    let numOfWindows = Number(input[0]);
    let typeOfWindows = input[1];
    let isDelivery = input[2];
    let totalSum = 0;

    switch (typeOfWindows) {

        case '90X130':
            if (numOfWindows > 10) {
                totalSum = numOfWindows * 110;
            }
             if (numOfWindows > 30 && numOfWindows <= 60) {
                totalSum *= 0.95;
            } else if (numOfWindows > 60) {
                totalSum *= 0.92;
            }


            break;
        case '100X150':
            if (numOfWindows > 10) {
                totalSum = numOfWindows * 140;
            }
             if (numOfWindows > 40 && numOfWindows <= 80) {
                totalSum *= 0.94;
            } else if (numOfWindows > 80) {
                totalSum *= 0.90;
            }

            break;
        case '130X180':
            if (numOfWindows > 10) {
                totalSum = numOfWindows * 190;
            }
            if (numOfWindows > 20 && numOfWindows <= 50) {
                totalSum *= 0.93;
            } else if (numOfWindows > 50) {
                totalSum *= 0.88;
            }

            break;
        case '200X300':
            if (numOfWindows > 10) {
                totalSum = numOfWindows * 250;
            }
             if (numOfWindows > 25 && numOfWindows <= 50) {
                totalSum *= 0.91;
            }
            else if (numOfWindows > 50) {
                totalSum *= 0.86;
            }

            break;
    }
    if (isDelivery === 'With delivery') {
        totalSum += 60;
    }
    if (numOfWindows > 99) {
        totalSum *= 0.96;
    }
    if (numOfWindows < 10) {
        console.log('Invalid order');
    } else {
        console.log(`${totalSum.toFixed(2)} BGN`);
    }


}


aluminumJoinery(["2",
"130X180",
"With delivery"])




/* Фирма-производител на алуминиева дограма приема поръчки за 
изработката и монтаж със следния ценоразпис за един брой. 
Фирмата приема само поръчки на едро (над 10 бр.). В зависимост от поръчания брой дограми,
 фирмата прави различна отстъпка на своите клиенти.
Фирмата предлага също и доставка на поръчките си срещу 60 лв.
Размер	Единична цена	Отстъпка от цената
90X130	110 лв.	 Над 30 броя – 5%
                                  Над 60 броя – 8%
100X150	140 лв.	 Над 40 броя – 6%
                                  Над 80 броя – 10%
130X180	190 лв.	 Над 20 броя – 7% 
                                  Над 50 броя – 12%
200X300	250 лв.	 Над 25 броя – 9%
                                 Над 50 броя – 14%







Ако поръчката надвишава 99 броя  – върху крайната цена се начисляват допълнителни 4% отстъпка
 (след като се начисли цената за доставка, ако има такава).
При поръчка под 10 бр. на конзолата да бъде изписано "Invalid order"
Вход:
Потребителят въвежда 3 реда:
1.	Брой дограми – цяло число в интервала [0..1000];
2.	Вид на дограмите – текст "90X130" или "100X150" или "130X180" или "200X300";
3.	Начин на получаване – текст
•	С доставка - "With delivery" 
•	Без доставка - "Without delivery"
Изход:
Извежда се едно число – стойността на поръчката, в следния формат:
o	"{Обща стойност на поръчката} BGN"
Резултатът да се форматира до втори знак след десетичната запетая.
 */