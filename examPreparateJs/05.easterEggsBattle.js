function easterEggsBattle(input) {

    let numEggs1 = Number(input[0]);
    let numEggs2 = Number(input[1]);

    let index = 2;
    let command = input[index];
    index++;

    while (command !== 'End') {

        if (command === 'one') {
            numEggs2 -= 1;
        }
        else if (command === 'two') {
            numEggs1 -= 1;
        }
        if (numEggs1 === 0 || numEggs2 === 0) {
            if (numEggs1 === 0) {
                console.log(`Player one is out of eggs. Player two has ${numEggs2} eggs left.`);
                break;
            } else {
                console.log(`Player two is out of eggs. Player one has ${numEggs1} eggs left.`);
                break;
            }

        }

        command = input[index];
        index++;
    }
    if (command === 'End') {
        console.log(`Player one has ${numEggs1} eggs left.`);
        console.log(`Player two has ${numEggs2} eggs left.`);
    }
}

/*easterEggsBattle([5,
    4,
    'one',
    'two',
    'one',
    'two',
    'two',
    'End'
])*/


easterEggsBattle([2,
    6,
    'one',
    'two',
    'two',


])
/* На Великден семейството на Деси се събира и тя решава да организира "битка" между великденски яйца. 
Правилата на "битката" са следните:
•	Участват двама играчи
•	Всеки от тях започва с определен брой яйца
•	При получаване на команда "one" -> първият играч печели => яйцата на втория намаляват с едно 
•	При получаване на команда "two" -> вторият играч печели => яйцата на първия намаляват с едно
•	Играта приключва, ако някой от играчите остане без яйца или до получаване на команда "End"
Вход
Първоначално се четат два реда:
1.	Брой яйца, които има първият играч - цяло число в интервала [1 … 99]
2.	Брой яйца, които има вторият играч - цяло число в интервала [1 … 99]
След това до получаване на команда "End" се четe многократно един ред:
3.	Победител - текст - "one" или "two"
Изход
Ако първият играч остане без яйца:
•	"Player one is out of eggs. Player two has {брой останали яйца на втория играч} eggs left."
Ако вторият играч остане без яйца:
•	"Player two is out of eggs. Player one has {брой останали яйца на първия играч} eggs left."
При команда "End" да се отпечатат два реда:
•	"Player one has {брой останали яйца на първия играч} eggs left."
•	"Player two has {брой останали яйца на втория играч} eggs left."
 */