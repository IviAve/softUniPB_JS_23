function happyCatParking(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);

    let sumToPayAfterParking = 0;
    let currentSum = 0;

    for (let daysCount = 1; daysCount <= days; daysCount++) {
        for (let hoursCount = 1; hoursCount <= hours; hoursCount++) {
            if (daysCount % 2 == 0 && hoursCount % 2 != 0) {
                currentSum += 2.50;
                sumToPayAfterParking += 2.50;
            }
            else if (daysCount % 2 != 0 && hoursCount % 2 == 0) {
                currentSum += 1.25;
                sumToPayAfterParking += 1.25;
            }
            else {
                currentSum += 1;
                sumToPayAfterParking += 1;
            }
        }
        console.log(`Day: ${daysCount} - ${currentSum.toFixed(2)} leva`);
        currentSum = 0;
    }
    console.log(`Total: ${sumToPayAfterParking.toFixed(2)} leva`);

}

happyCatParking([5,
    2
    ])

/*  Деси трябва да заведе котката си на ветеринар в клиниката "Happy Cat", но паркингът се заплаща.
 Напишете програма, която пресмята колко общо трябва да се плати за престоя на колата на Деси на паркинга, 
 за да заведе котката си на ветеринар. Паркингът е различен от останалите и има разнообразен ценоразпис.
  За всеки четен ден и нечетен час, паркингът таксува 2.50 лева. 
  Във всеки нечетен ден и четен час таксата е 1.25 лева, във всички останали случаи се заплаща 1 лев.
   Таксуването става на всеки изминал час от деня. 
   Всеки един от изходите трябва да бъде закръглен до втория знак след десетичната запетая.
Вход
От конзолата се четат два реда:
•	Брой дни – цяло число в интервала [1 … 5]
•	Брой часове за всеки един от дните - цяло число в интервала [1 … 24]
Изход:
Да се отпечата на конзолата:
•	За всеки изминал ден, общата сума, 
която трябва да се плати – "Day: {индексът на деня} – {общата сума за деня} leva"
•	Когато програмата приключи - "Total: {общата сума за всички дни} leva"
*/