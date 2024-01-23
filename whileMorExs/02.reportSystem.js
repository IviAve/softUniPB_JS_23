function reportSystem (input){
 let  sumNeeded = Number(input[0]);
 let counter = 0;
 let payWithCard = 0;
 let payInCash = 0;
 let countCash = 0;
 let countCard = 0;
 let totalPays = 0;

 let index = 1;
 let command = input[index];
 index++;

 while ( command !== 'End'){
     let payment = Number( command);
     counter++;

     if (counter % 2 === 0){
         if ( payment <= 10){
           console.log('Error in transaction!');
         }
         else {
            payWithCard += payment;
            totalPays += payment;
            countCard++;
            console.log('Product sold!');
         }
     }
     else {
        if (payment > 100){
            console.log('Error in transaction!');
        }
        else {
            payInCash += payment;
            totalPays += payment;
            countCash++;
            console.log('Product sold!');
        }

     }
     if(totalPays >= sumNeeded){
        console.log(`Average CS: ${((payInCash/countCash)).toFixed(2)}`);
        console.log(`Average CC: ${((payWithCard/countCard)).toFixed(2)}`);
        break;

     }


     command = input[index];
 index++;
 }
 if (command === 'End'){
    console.log('Failed to collect required money for charity.');
 }

}

reportSystem([500,
    120,
    8,
    63,
    256,
    78,
    317

    ])

/* На благотворително събитие плащанията за закупените продукти винаги се редуват: 
плащане в брой и плащане с карта. Установени са следните правила за заплащане:
•	Ако продуктът надвишава 100лв., за него не може да се плати в брой
•	Ако продуктът е на цена под 10лв., за него не може да се плати с кредитна карта
Програмата приключва или след като получим команда "End" или след като средствата бъдат събрани.
Вход
От конзолата се четат:
•	Сумата, която се очаква да бъде събрана от продажбите - цяло число в интервала [1 ... 10000]
На всеки следващ ред, до получаване на командата "End" или докато не се съберат нужните средства:
 цените на предметите, които ще бъдат закупени - цяло число в интервала [1 ... 500]
Изход
На конзолата да се отпечата:
•	При успешна транзакция: "Product sold!"
•	При неуспешна транзакция: "Error in transaction!"
•	Ако сумата на всички закупени продукти надвиши или достигне очакваната сума, 
програмата трябва да приключи и на конзолата да се изпишат два реда:
o	"Average CS: {средно плащане в кеш на човек}"
o	"Average CC: {средно плащане с карта на човек}" 
              Плащанията трябва да бъдат форматирани до втората цифра след десетичния знак.
•	При получаване на команда "End", да се изпише един ред:
o	"Failed to collect required money for charity."
 */