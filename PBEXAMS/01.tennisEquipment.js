function tennisEquipment (input){
let priceForOneRacket = Number(input[0]);
let totalRackets = Number(input[1]);
let totalSneakers = Number(input[2]);


let price1 = 0;
let price2 = 0;

let totalsumForRackets =  totalRackets* priceForOneRacket ;
let totalsumForSneackers = totalSneakers * (priceForOneRacket / 6) ;
let other = (totalsumForRackets + totalsumForSneackers)* 0.20;
let totalSum = totalsumForRackets + totalsumForSneackers + other;
price1 = totalSum /8;
price2 =price1 * 7;


console.log(`Price to be paid by Djokovic ${Math.floor(price1)}`);
console.log(`Price to be paid by sponsors ${Math.ceil(price2)}`);


}

tennisEquipment([850,
    4,
    2
    ])

/* Световният номер едно в мъжкия тенис Новак Джокович е решил да подмени оборудването,
 с което играе своите мачове. За целта той ви моли да напишете програма,
  която да изчисли стойността на покупките, като се има предвид, 
  че той трябва да заплати 1/8 от цената, а останалите 7/8 трябва да бъдат заплатени от неговите спонсори.
Джокович иска да закупи n на брой тенис ракети и m чифта маратонки, 
както и друга екипировка, на стойност 20% от общата цена на закупените ракети и маратонки.
Известно е, че:	
•	1 чифт маратонки = 1/6 от цената на една тенис ракета
Вход
От конзолата се прочитат 3 реда:
•	Цена на една тенис ракета – реално число в интервала [0.00…100000.00]
•	Брой тенис ракети - цяло число в интервала [0…100]
•	Брой чифтове маратонки - цяло число в интервала [0…100]
Крайната цена се сформира от сумата от цената на ракетите,
 цената на маратонките и цената на останалата екипировка.
Изход
На конзолата се отпечатват 2 реда:
•	"Price to be paid by Djokovic {1/8 от общата цена, закръглена към по-малкото цяло число}"
•	"Price to be paid by sponsors {7/8 от общата цена, закръглена към по-голямото цяло число}"
*/