function bestPlayer(input) {

    let maxgoals = 0;
    let bestPlayerName = '';
    let index = 0;
    let command = input[index];
    index++;

    while (command !== 'END') {

        let name = command;

        command = Number(input[index]);
        let goals = command;
        if (goals > maxgoals) {
            bestPlayerName = name;
            maxgoals = goals;
        }
        if (goals >= 10) {
            console.log(`${bestPlayerName} is the best player!`);
            console.log(`He has scored ${maxgoals} goals and made a hat-trick !!!`);
            return;
        }







        command = input[index];
        index++;
    }
    if (maxgoals >= 3 ) {
        console.log(`${bestPlayerName} is the best player!`);
        console.log(`He has scored ${maxgoals} goals and made a hat-trick !!!`);
    }
    else {
        console.log(`${bestPlayerName} is the best player!`);
        console.log(`He has scored ${maxgoals} goals.`);
    }

}

bestPlayer(["Rooney",
"1",
"Junior",
"2",
"Paolinio",
"2",
"END"])







/* Пепи иска да напишете програма, чрез която да разбере кой е най-добрият играч от световното първенство.
 Информацията, която получавате ще бъде играч и колко гола е отбелязал.
  От вас се иска да отпечатате кой е играчът с най-много голове и дали е направил хет-трик.
   Хет-трик е, когато футболистът е вкарал 3 или повече гола. Ако футболистът е вкарал 10 или повече гола,
    програмата трябва да спре.
Вход:
От конзолата се четат по два реда до въвеждане на команда "END":
•	Име на играч – текст
•	Брой вкарани голове  – цяло положително число в интервала [1 … 10000]
Изход:
На конзолата да се отпечатат 2 реда :
•	На първия ред:
            "{име на играч} is the best player!"
•	На втория ред :
o	 Ако най-добрият футболист е направил хеттрик:
                   "He has scored {брой голове} goals and made a hat-trick !!!"
o	Ако най-добрият футболист не е направил хеттрик:
                   "He has scored {брой голове} goals."
 */


