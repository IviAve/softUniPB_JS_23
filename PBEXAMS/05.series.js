function series (input){

    let budget = Number(input[0]);
    let numSerials = Number(input[1]);

    let totalPrice = 0;

    for ( let i = 2;i <= numSerials* 2;i++){

        let nameOfSerial = input[i++];
        let price = Number(input[i]);

        if (nameOfSerial === 'Thrones'){
            price *= 0.50;
            totalPrice +=price; 

        }else if (nameOfSerial === 'Lucifer'){
price *= 0.60;
totalPrice += price;
        }else if (nameOfSerial === 'Protector'){
            price *= 0.70;
            totalPrice += price;
        }else if ( nameOfSerial === 'TotalDrama'){
            price *= 0.80;
            totalPrice += price;
        }else if (nameOfSerial === 'Area'){
            price *= 0.90;
            totalPrice += price;
        }else{
            totalPrice += price;
        }



    }

if (budget >= totalPrice){
    console.log(`You bought all the series and left with ${(budget - totalPrice).toFixed(2)} lv.`);
}
else {
    console.log(`You need ${(totalPrice - budget).toFixed(2)} lv. more to buy the series!`);
}

}

series(["25",
"6",
"Teen Wolf",
"8",
"Protector",
"5",
"TotalDrama",
"5",
"Area",
"4",
"Thrones",
"5",
"Lucifer",
"9"])



/* От телевизионна компания ви наемат да създадете програма, 
която да изчислява дали за клиентите ще е възможно да си закупят желаните сериали.
 Разполагате с бюджет и брой сериали, които потребителят ще желае да закупи. 
 Всеки сериал съответно има заглавие и цена.
Някои от сериалите имат намаление:
•	Thrones – 50%
•	Lucifer – 40%	
•	Protector – 30%
•	TotalDrama – 20%
•	Area – 10%
Вход
От конзолата се четат:
•	Бюджет  - реално  число в интервала [10.0… 100.0]
•	Брой сериали - n - цяло положително число в интервала [1… 10]
За всеки сериал се четат по два реда:
o	Име на сериал - текст
o	Цена за сериал -  реално  число в интервала [1.0… 15.0]
Изход
На конзолата да се изпише един ред:
•	Ако бюджета ви е по-голям или равен на цената на сериалите:
	"You bought all the series and left with {останали пари} lv."
•	Ако бюджета ви е по-малък от цената на сериалите:
	"You need {нужни пари} lv. more to buy the series!"
Резултатът да бъде закръглен до втората цифра след десетичния знак.
 */