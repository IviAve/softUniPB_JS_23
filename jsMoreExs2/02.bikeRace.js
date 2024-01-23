function bikeRace (input)
{
 let numJuniors = Number(input[0]);
 let numSeniors = Number(input[1]);
 let traceType = input[2];


 let totalSum = 0;


 switch (traceType){
    case 'trail':
         totalSum =( numJuniors * 5.50) + (numSeniors * 7);
        
        break;
    case 'cross-country':
        totalSum =( numJuniors * 8) + (numSeniors * 9.50);
        if ((numJuniors + numSeniors) >= 50){
            totalSum *= 0.75;
        }
        break;
    case 'downhill':
        totalSum =( numJuniors * 12.25) + (numSeniors * 13.75);
        break;
    case 'road':
        totalSum =( numJuniors * 20) + (numSeniors * 21.50);
        break;
        
 }
 totalSum *= 0.95;

 console.log(`${totalSum.toFixed(2)}`);
}

bikeRace([21,
    26,
    'cross-country'
    
    ])

/* Предстои Вело състезание за благотворителност в което участниците са разпределени в младша("juniors")
 и старша("seniors") група. Парите се набавят от таксата за участие на велосипедистите.
  Според възрастовата група и вида на трасето на което ще се провежда състезанието, таксата е различна.
Група	   trail	cross-country	downhill	road
juniors 	5.50	   8	          12.25	     20
seniors	     7	      9.50	          13.75	   21.50
Ако в "cross-country" състезанието се съберат 50 или повече участника(общо младши и старши), 
таксата  намалява с 25%. Организаторите отделят 5% процента от събраната сума за разходи.
Вход
От конзолата се четат 2 числа и един стринг, всяко на отделен ред:
•	Първият ред – броят младши велосипедисти. Цяло число в интервала [1…100]
•	Вторият ред – броят старши велосипедисти. Цяло число в интервала [1… 100]
•	Третият ред – вид трасе – "trail", "cross-country", "downhill" или "road"
Изход
Да се отпечата на конзолата едно число:
"{дарената сума}" - форматирана с точност до 2 знака след десетичната запетая.
 */