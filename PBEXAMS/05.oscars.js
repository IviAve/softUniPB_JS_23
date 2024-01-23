
    function oscars (input)
    {
      let nameOfActor = input[0];
      let  pointsFromAcademy = Number(input[1]);
      let nJury = Number(input[2]);
      let totalPoints = 0;
    
    
      for (let i = 3 ; i< input.length;i++){
        
            let nameOfJury = input[i++];
            let pointFromJury = Number(input[i]);

            let points = Number(nameOfJury.length);

            totalPoints = pointsFromAcademy + ((points * pointFromJury) / 2);
            pointsFromAcademy = totalPoints;

            if (totalPoints >= 1250.5) {
                break;

            }
        }
        if (totalPoints >= 1250.5) {
            console.log(`Congratulations, ${nameOfActor} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
        }
        else {
            console.log(`Sorry, ${nameOfActor} you need ${(1250.5 - totalPoints).toFixed(1)} more!`);
        }
    }


oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])


/* Поканени сте от академията да напишете софтуер, който да пресмята точките за актьор/актриса. Академията ще ви даде първоначални точки за актьора. След това всеки оценяващ ще дава своята оценка. Точките, които актьора получава се формират от: дължината на името на оценяващия умножено по точките, които дава делено на две. 
Ако резултатът в някой момент надхвърли 1250.5 програмата трябва да прекъсне и да се отпечата, че дадения актьор е получил номинация.
Вход
•	Име на актьора – текст
•	Точки от академията - реално число в интервала [2.0... 450.5]
•	Брой оценяващи n – цяло число в интервала[1… 20]
На следващите n-на брой реда:
o	Име на оценяващия – текст
o	Точки от оценяващия – реално число в интервала [1.0... 50.0]
Изход
Да се отпечата на конзолата един ред:
•	Ако точките са над 1250.5:
"Congratulations, {име на актьора} got a nominee for leading role with {точки}!"
•	Ако точките не са достатъчни:
	"Sorry, {име на актьора} you need {нужни точки} more!"
Резултатът да се форматирана до първата цифра след десетичния знак!
 */