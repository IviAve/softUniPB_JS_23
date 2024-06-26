function basketballTournament(input) {

     let winDesi = 0;
     let winEnemy = 0;
     let countGames = 0;
     let pointsDesi = 0;
     let pointsEnemy = 0;
     let game = 0;

     let index = 0;
     let command = input[index];
     index++;
     while (command !== 'End of tournaments') {

          let nameOfTour = command;

          command = Number(input[index]);
          index++;
          let numOfGames = command;
          for (let i = 1; i <= numOfGames; i++) {
               command = Number(input[index]);

                pointsDesi = command;
               index++;
               command = Number(input[index]);
                pointsEnemy = command;
               index++;
               
               countGames++;
               game = i;
               if (pointsDesi > pointsEnemy) {
                    console.log(`Game ${game} of tournament ${nameOfTour}: win with ${pointsDesi - pointsEnemy} points.`);
                    winDesi++;
               } if (pointsEnemy> pointsDesi){
                    
                    console.log(`Game ${game} of tournament ${nameOfTour}: lost with ${pointsEnemy - pointsDesi} points.`);
                    winEnemy++;
                   
               }


          }


          command = input[index];
          index++;
     }
     let percentWin =( winDesi /countGames)* 100;
     let percentLost = (winEnemy/countGames)*100;

if( command === 'End of tournaments'){
     console.log(`${percentWin.toFixed(2)}% matches win`);
     console.log(`${percentLost.toFixed(2)}% matches lost`);
}
}

basketballTournament(["Ballers",
"3",
"87",
"63",
"56",
"65",
"75",
"64",
"Sharks",
"4",
"64",
"76",
"65",
"86",
"68",
"99",
"45",
"78",
"End of tournaments"])



/* Деси и отборът ѝ по баскетбол участват в турнири всеки месец, като всеки турнир се състои 
от определен брой мачове. Всеки мач има краен резултат, на базата на който се определя победителят. 
Отборът, вкарал повече точки, се смята за победител. 
Помогнете на Деси да направи статистика за турнирите,
 в които участва с отбора си. 
 Като вход ще получавате имена на турнири до получаване на команда "End of tournaments". 
 За всеки турнир ще получавате цяло число, което ще показва броя на мачовете, които се играят за турнир.
  За всеки мач ще получавате: на първия ред точките, които е вкарал отборът на Деси,
   а на втория ред - точките, които е вкарал противниковият отбор. 
   След получаване на точките за всеки мач отпечатайте:
	Ако отборът на Деси е спечелил (т.е. точките, които е вкарал нейният отбор, 
    са повече от точките на противниковия отбор):
     "Game {кой е номерът на мача, който са изиграли за текущия турнир} of tournament {име на турнира}: win with {разликата между точките на отбора на Деси и противниковия отбор} points."
	Ако отборът на Деси е загубил (т.е. точките, които е вкарал нейният отбор,
     са по-малко от точките, които е вкарал противниковият отбор): "Game {кой е номерът на мача, който са изиграли за текущия турнир} of tournament {име на турнира}: lost with {разликата между точките на противниковия отбор и отбора на Деси} points."
Няма да има случаи на равенство.
Вход
От конзолата се четат поредица от турнири до получаване на командата "End of tournaments":
•	Име на турнира – текст
•	За всеки турнир n на брой мача – цяло число в интервала [1…15]
•	За всеки мач се четат по два реда:
o	Точки, вкарани от отбора на Деси – цяло число в интервала от [0…150]
o	Точки, вкарани от противниковия отбор – цяло число в интервала от [0…150]
Изход
На конзолата да се отпечатат следните редове:
•	След всеки мач да се отпечатва дали отборът на Деси е спечелил или загубил и съответно с каква разлика. 
•	При получаване на команда "End of tournaments" да се отпечатат два реда:
o	{процент спечелени мачове от всички турнири}% matches win
o	{процент загубени мачове от всички турнири}% matches lost
Всички проценти трябва да са форматирани до втората цифра след десетичния знак.
 */