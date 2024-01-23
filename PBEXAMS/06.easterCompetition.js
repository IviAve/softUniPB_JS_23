function easterCompetition(input) {
    let numEastedBread = Number(input[0]);

    let pointChef = 0;
    
    let index = 1;
    let totalPoints = 0;
    let maxPointChef = 0;
    let nameOfFirst = '';

    for (let i = 1; i <= numEastedBread; i++) {

        let command = input[index];

        let nameChef = command;

        index++;
        command = (input[index]);
        index++;
        while (command !== 'Stop') {


            let point = Number(command);

            pointChef += point;

            command = input[index];
            // index++;

            if (command === 'Stop') {
               // totalPoints += pointChef;

                if (pointChef > maxPointChef) {
                    maxPointChef = pointChef;
                     nameOfFirst = nameChef;

                    console.log(`${nameChef} has ${maxPointChef} points.`);
                    console.log(`${nameChef} is the new number 1!`);
                    pointChef = 0;
                   // nameChef = '';
                } else {
                    console.log(`${nameChef} has ${pointChef} points.`);
                    pointChef = 0;
                    //nameChef = '';
                }

            }



            command = input[index];

            index++;
        }

        

    }

    console.log(`${nameOfFirst} won competition with ${maxPointChef} points!`);

}

easterCompetition(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"])



/* С наближаването на Великден, пекарна организира конкурс за направата на най-хубав козунак. 
Напишете програма, която да намира сладкаря с най-висок резултат.
 В началото на конкурса се въвежда броя на козунаците,
  които ще бъдат дегустирани от посетителите на пекарната,
   като за всеки козунак различен брой посетители, ще дадат оценка от 1 до 10.
Вход
Първоначално от конзолата се прочита броя на козунаците – цяло число в интервала [1… 100]
След това за всеки козунак се прочита:
•	Името на пекаря, който е направил козунака – текст
•	До получаване на командата "Stop" се прочита 
o	оценка за козунак от един човек  – цяло число в интервала [1... 10]
Изход
След получаване на командата "Stop" се печата един ред:
•	"{името на пекаря} has {общият брой получени точки} points."
Ако след командата "Stop", пекарят е с най-много точки до момента, да се отпечата допълнителен ред:
•	"{името на пекаря} is the new number 1!"
След дегустация на всички козунаци, да се отпечата един ред:
•	"{името на пекаря с най-много точки} won competition with {точките на пекаря} points!"
 */