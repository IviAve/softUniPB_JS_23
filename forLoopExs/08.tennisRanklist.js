function tennisRanklist (input)
{
let  numOfTours = Number (input[0]);
let points = Number(input[1]);
let win = 0;
let pointsWon = 0;

for (let i = 2; i < numOfTours + 2; i++){

    let simbol = input[i];
    switch (simbol){
        case 'W':
       pointsWon += 2000;
       win ++;
        break;
        case 'F':
            pointsWon += 1200;
            break;
        case 'SF':
            pointsWon += 720;
            break;
    }
  
}
let totalPoints = points + pointsWon;
    let percentWin =(win/numOfTours)*100;
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(pointsWon/numOfTours)}`);
    console.log(`${percentWin.toFixed(2)}%`);

}

tennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])





/* Григор Димитров е тенисист, чиято следваща цел е изкачването в световната ранглиста по тенис за мъже. 
През годината Гришо участва в определен брой турнири, като за всеки турнир получава точки,
 които зависят от позицията, на която е завършил в турнира. Има три варианта за завършване на турнир:
	W - ако е победител получава 2000 точки
	F - ако е финалист получава 1200 точки
	SF - ако е полуфиналист получава 720 точки
Напишете програма, която изчислява колко ще са точките на 
Григор след изиграване на всички турнири, като знаете с колко точки стартира сезона. 
Също изчислете колко точки средно печели от всички изиграни турнири и колко процента от турнирите е спечелил. 
Вход
От конзолата първо се четат два реда:
•	Брой турнири, в които е участвал – цяло число в интервала [1…20] 
•	Начален брой точки в ранглистата - цяло число в интервала [1...4000]
За всеки турнир се прочита отделен ред:
•	Достигнат етап от турнира – текст – "W", "F" или "SF"
Изход
Отпечатват се три реда в следния формат:
•	"Final points: {брой точки след изиграните турнири}"
•	"Average points: {средно колко точки печели за турнир}"
•	"{процент спечелени турнири}%"
Средните точки да бъдат закръглени към най-близкото цяло число надолу,
 а процентът да се форматира до втората цифра след десетичния знак.
 */



