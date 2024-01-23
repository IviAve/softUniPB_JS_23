function vacation(input) {

    let moneyForExcursion = Number(input[0]);
    let budget = Number(input[1]);

    let action = '';

    let totalDays = 0;
    let totalDaysSpend = 0;

    let index = 2;


    while (budget < moneyForExcursion) {
        let command = input[index];
        index++;

        let sum = Number(input[index]);

        if (command === 'save') {
            budget += sum;
            totalDaysSpend = 0;
        }
        else if (command === 'spend') {
            budget-= sum;
            if (budget <= 0) {
                budget = 0;
            }
           // else {
               // budget -= sum;
           // }
            totalDaysSpend++;

        }
        totalDays++;
        if ( totalDaysSpend === 5){
           console.log(`You can't save the money.`); 
           console.log(totalDays);
           break;
        }

        command = input[index];
        index++;

    }

if ( budget >= moneyForExcursion){
    console.log(`You saved the money for ${totalDays} days.`);
}
}

vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])





/* Джеси е решила да събира пари за екскурзия и иска от вас да ѝ помогнете 
да разбере дали ще успее да събере необходимата сума. 
Тя спестява или харчи част от парите си всеки ден. 
Ако иска да похарчи повече от наличните си пари,
 то тя ще похарчи всичко, което има и ще ѝ останат 0 лева.
Вход
От масива се четат:
•	Пари нужни за екскурзията - реално число в интервала [1.00.. .25000.00]
•	Налични пари - реално число в интервала [0.00... 25000.00]
След това многократно се четат по два реда:
•	Вид действие – текст с възможности "spend" и "save".
•	Сумата, която ще спести/похарчи - реално число в интервала [0.01… 25000.00]
Изход
Функцията трябва да приключи при следните случаи:
•	Ако 5 последователни дни Джеси само харчи, на конзолата да се изпише:
o	"You can't save the money."
o	"{Общ брой изминали дни}"
•	Ако Джеси събере парите за почивката на конзолата се изписва:
o	"You saved the money for {общ брой изминали дни} days."
 */