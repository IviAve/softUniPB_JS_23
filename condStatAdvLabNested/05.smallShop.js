function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let num = Number(input[2]);
    let totalSum = 0;

    if (town === 'Sofia') 
    {
        switch (product) //0.50	0.80	1.20	1.45	1.60
        {
            case 'coffee':totalSum = num * 0.50 ; break;
            case 'water':totalSum = num *  0.80    ;break;
            case 'beer':totalSum = num * 1.20     ;break;
            case 'sweets':totalSum = num *  1.45    ;break;
            case 'peanuts':totalSum = num *  1.60    ;break;
        }

    }
    else if (town === 'Plovdiv')  //0.40	0.70	1.15	1.30	1.50
    {
        switch (product) 
        {
            case 'coffee':totalSum = num * 0.40 ; break;
            case 'water':totalSum = num *  0.70    ;break;
            case 'beer':totalSum = num * 1.15     ;break;
            case 'sweets':totalSum = num *  1.30    ;break;
            case 'peanuts':totalSum = num *  1.50    ;break;
        }
    }
    else if (town === 'Varna')  //0.45	0.70	1.10	1.35	1.55
    {
        switch (product) 
        {
            case 'coffee':totalSum = num * 0.45 ; break;
            case 'water':totalSum = num *  0.70    ;break;
            case 'beer':totalSum = num * 1.10   ;break;
            case 'sweets':totalSum = num *  1.35    ;break;
            case 'peanuts':totalSum = num *  1.55    ;break;
        }
    }
console.log(totalSum);

}
smallShop(["coffee",
    "Varna",
    "2"])

/* Предприемчив българин отваря квартални магазинчета в няколко града и продава на различни цени според града:
град / 	coffee	water	beer	sweets	peanuts
Sofia	0.50	0.80	1.20	1.45	1.60    
Plovdiv	0.40	0.70	1.15	1.30	1.50
Varna	0.45	0.70	1.10	1.35	1.55
Напишете функция, която получава аргументи: продукт (низ), град (низ) и количество (число),
 и пресмята и отпечатва колко струва съответното количество от избрания продукт в посочения град. 
*/