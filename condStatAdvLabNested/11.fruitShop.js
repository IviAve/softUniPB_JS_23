function fruitShop(input) {
    let item = input[0];
    let dayOfWeek = input[1];
    let num = Number(input[2]);

    let totalSum = 0;

    if (dayOfWeek === 'Monday' || dayOfWeek === 'Tuesday' || dayOfWeek === 'Wednesday' || dayOfWeek === 'Thursday' ||
        dayOfWeek === 'Friday') {
        switch (item) {
            case 'banana': totalSum = num * 2.50; break;
            case 'apple': totalSum = num * 1.20; break;
            case 'orange': totalSum = num * 0.85; break;
            case 'grapefruit': totalSum = num * 1.45; break;
            case 'kiwi': totalSum = num * 2.70; break;
            case 'pineapple': totalSum = num * 5.50; break;
            case 'grapes': totalSum = num * 3.85; break;
            default: console.log('error')

        }

    }
    else if (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday') {
        switch (item) {
            case 'banana': totalSum = num * 2.70; break;
            case 'apple': totalSum = num * 1.25; break;
            case 'orange': totalSum = num * 0.90; break;
            case 'grapefruit': totalSum = num * 1.60; break;
            case 'kiwi': totalSum = num * 3.00; break;
            case 'pineapple': totalSum = num * 5.60; break;
            case 'grapes': totalSum = num * 4.20; break;
            default: console.log('error');
        }

    }
    else 
    {
        console.log('error');

    }
    if (totalSum !==0)
    {
        console.log(totalSum.toFixed(2));
    }

}
    fruitShop(["beer",
        "Tuesday",
        "2"])





/* Магазин за плодове през работните дни работи на следните цени:
плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
цена	2.50	1.20	0.85	  1.45	    2.70	  5.50	    3.85
Събота и неделя магазинът работи на по-високи цени:
плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
цена	2.70	1.25	0.90	  1.60	    3.00	  5.60	     4.20
Напишете функция, която получава аргументи:
плод (banana / apple / orange / grapefruit / kiwi / pineapple / grapes), 
ден от седмицата (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday) 
и количество (число) 
и пресмята цената според цените от таблиците по-горе. 
Резултатът да се отпечата закръглен с 2 цифри след десетичната точка.
 При невалиден ден от седмицата или невалидно име на плод да се отпечата "error". 
 */