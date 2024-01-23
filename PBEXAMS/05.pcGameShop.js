function pcGameShop (input){
let numSalesGames = Number(input[0]);
count1 = 0;
count2 = 0;
count3 = 0;
count4 = 0;

for(let i = 1;i <= numSalesGames;i++){
    let game = input[i];

    if(game === 'Hearthstone'){
count1++;
    }else if (game === 'Fornite'){
        count2++;
    }
    else if(game === 'Overwatch'){
        count3++;
    }else{
        count4++;
    }

}

let percent1 =(count1/numSalesGames)*100;
let percent2 =(count2/numSalesGames)*100;
let percent3 =(count3/numSalesGames)*100;
let percent4 =(count4/numSalesGames)*100;
console.log(`Hearthstone - ${percent1.toFixed(2)}%`);
console.log(`Fornite - ${percent2.toFixed(2)}%`);
console.log(`Overwatch - ${percent3.toFixed(2)}%`);
console.log(`Others - ${percent4.toFixed(2)}%`);

}

pcGameShop(["4",
"Hearthstone",
"Fornite",
"Overwatch",
"Counter-Strike"])


/* Магазин за компютърни игри ви наема за да направите статистика на процента продажби на игрите 
от последния месец, като изчислите по колко процента от общите продажби са за някоя от игрите.
Процентите трябва да бъдат разделени на четири части, три заглавия на игри и всички останали :
•	Hearthstone
•	Fornite
•	Overwatch
•	Others
Вход
От конзолата се четат:
•	Брой продадени игри- n - цяло положително число в интервала [1… 100]
За следващите n реда се чете по един ред:
o	Име на игра - текст
Изход
На конзолата да се изпишат четири реда:
	"Hearthstone - {процент продажби на Hearthstone}%"
	"Fornite - {процент продажби на Fornite}%"
	"Overwatch - {процент продажби на Overwatch}%"
	"Others - {процент продажби на всички останали игри}%"
Резултатът да бъде закръглен до втората цифра след десетичния знак.
 */