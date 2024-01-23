function tournamentOfChristmas(input) {
    let numDaysOfTorunm = Number(input[0]);

    let index = 1;

    let pointsWin = 0;
    let pointsLost = 0;
    let nameOfSport = '';
    let sumPerDay = 0;
    let totalSum = 0;
    let totalWin = 0;
    let totalLost  = 0;

    for (let i = 1; i <= numDaysOfTorunm; i++) {

        let command = input[index];

        nameOfSport = command;

        index++;

        while (command !== 'Finish') {
            let status = (input[index]);
            index++;
            if (status === 'win') {

                sumPerDay += 20;
                pointsWin++;
            } else if (status === 'lose') {
                pointsLost++;
            }

            command = (input[index]);
            index++;

        }
        if (pointsWin > pointsLost) {
            sumPerDay *= 1.10;

        }
        totalSum += sumPerDay;
        totalWin +=pointsWin;
        totalLost += pointsLost;
        sumPerDay = 0;
        pointsWin = 0;
        pointsLost = 0;

    }
    if (totalWin > totalLost) {
        totalSum *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalSum.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalSum.toFixed(2)}`);
    }
}

tournamentOfChristmas([3,
    'darts',
    'lose',
    'handball',
    'lose',
    'judo',
    'win',
    'Finish',
    'snooker',
    'lose',
    'swimming',
    'lose',
    'squash',
    'lose',
    'table tennis',
    'win',
    'Finish',
    'volleyball',
    'win',
    'basketball',
    'win',
    'Finish'])
/*tournamentOfChristmas([2,
    'volleyball',
    'win',
    'football',
    'lose',
    'basketball',
    'win',
    'Finish',
    'golf',
    'win',
    'tennis',
    'win',
    'badminton',
    'win',
    'Finish'])*/


/* Напишете програма, която проследява представянето на вашия отбор на благотворителен коледен турнир.
 Всеки ден получавате имена на игри до команда "Finish". 
 Със спечелването на всяка една игра печелите по 20лв. за благотворителност.
  Трябва да изчислите колко пари сте спечелили на края на деня. 
  Ако имате повече спечелени игри, 
  отколкото загубени – вие сте победители този ден и увеличавате парите от него с 10%. 
  При приключване на турнира ако през повечето дни сте били победители печелите турнира и 
  увеличавате всичките спечелени пари с 20%.

Никога няма да имате равен брой спечелени и загубени игри.

Вход

Първоначално от конзолата се прочита броя дни на турнира – цяло число в интервала [1… 20]

До получаване на командата "Finish" се чете:

· Спорт – текст

За всеки спорт се прочита:

o Резултат – текст с възможности: "win" или "lose"

Изход

Накрая се отпечатва един ред:

· Ако сте спечелили турнира:

"You won the tournament! Total raised money: {спечелените пари}"

· Ако сте загубили на турнира:

"You lost the tournament! Total raised money: {спечелените пари}"

Парите да бъдат форматирани до втората цифра след десетичния знак. */