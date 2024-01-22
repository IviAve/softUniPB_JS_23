function hotelRoom (input)
{
let month = input[0];
let numOvernight = Number(input[1]);

let totalPriceApt= 0;
let totalPriceStudio = 0;

switch (month){
    case 'May':
        case 'October':
            totalPriceApt = numOvernight * 65;
            totalPriceStudio =numOvernight * 50;
            if (numOvernight > 7 && numOvernight <= 14){
                totalPriceStudio *= 0.95;
            }
            else if (numOvernight > 14){
                totalPriceStudio *= 0.70;
            }
            break;
            case 'June':
                case 'September':
            totalPriceApt = numOvernight * 68.70;
            totalPriceStudio =numOvernight * 75.20;
            if (numOvernight > 14){
                totalPriceStudio *= 0.80;
            }
                    break;
                    case 'July':
                        case 'August':
                         totalPriceApt = numOvernight * 77;
                        totalPriceStudio =numOvernight * 76;
                            break;
}
if (numOvernight > 14){
    totalPriceApt *= 0.90;
}


console.log(`Apartment: ${totalPriceApt.toFixed(2)} lv.`);
console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);
}

hotelRoom(["May",
"14"])






/* Хотел предлага 2 вида стаи: студио и апартамент.
 Напишете функция, която изчислява цената за целия престой за студио и апартамент.
  Цените зависят от месеца на престоя:
Май и октомври	              Юни и септември	               Юли и август
Студио – 50 лв./нощувка	  Студио – 75.20 лв./нощувка	Студио – 76 лв./нощувка
Апартамент – 65 лв./нощ	Апартамент – 68.70 лв./нощувка	Апартамент – 77 лв./нощувка
Предлагат се и следните отстъпки:
•	За студио, при повече от 7 нощувки през май и октомври : 5% намаление.
•	За студио, при повече от 14 нощувки през май и октомври : 30% намаление.
•	За студио, при повече от 14 нощувки през юни и септември: 20% намаление.
•	За апартамент, при повече от 14 нощувки, без значение от месеца : 10% намаление.
Вход
Получават се 2 аргумента:
•	 месецът – May, June, July, August, September или October
•	броят на нощувките – цяло число в интервала [0 … 200]
Изход
Да се отпечатат на конзолата 2 реда:
•	На първия ред: “Apartment: {цена за целият престой} lv.”
•	На втория ред: “Studio: {цена за целият престой} lv.”
Цената за целия престой форматирана с точност до два знака след десетичната запетая.
 */