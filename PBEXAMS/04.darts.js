function darts(input) {
    let name = input[0];

    let points = 301;
    let successfulShots = 0;
    let unsuccessfulShots = 0;
    let index = 1;
    let command = input[index];
    index++;
    while (command != "Retire") {
        let currentPoints = Number(input[index]);
index++;
        let totalCurrentPoints = 0;

        if (command == "Single") {
            totalCurrentPoints = currentPoints;
        }
        else if (command == "Double") {
            totalCurrentPoints = currentPoints * 2;
        }
        else if (command == "Triple") {
            totalCurrentPoints = currentPoints * 3;
        }

        if (points >= totalCurrentPoints) {
            points -= totalCurrentPoints;
            successfulShots++;
        }
        else {
            unsuccessfulShots++;
        }

        if (points == 0) {
            console.log(`${name} won the leg with ${successfulShots} shots.`);
            break;
        }

        command = input[index];
        index++;
    }

    if (points != 0) {
        console.log(`${name} retired after ${unsuccessfulShots} unsuccessful shots.`);
    }
}


darts(["Michael van Gerwen",
    "Triple",
    "20",
    "Triple",
    "19",
    "Double",
    "10",
    "Single",
    "3",
    "Single",
    "1",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "20"])


/* Вашата задача е да напишете програма, която да изчислява, дали даден играч е успял да спечели лег.
 (Лег се нарича единична игра на дартс)
Първоначално играчът започва с 301 точки.
 Играчът хвърля стрелата върху таблото, като за всяко улучено поле, той получава определен брой точки.
  Всяко поле има по три сектора: единичен (Single) сектор от който се взимат броят точки от полето.
   Двоен (Double), от него се взимат удвоените точки от полето и троен (Triple) сектор,
    точките от който са умножени по 3.
Получените точки от всеки изстрел се изваждат от началните точки, до достигане на 0.
Забележка: При изстрел, даващ повече точки от наличните, 
той се зачита за неуспешен и играчът трябва да хвърля отново, 
докато не уцели точки равни на оставащите или по-малки, такъв удар се счита за успешен.
Пример: При налични точки 100, удар даващ повече от 100 точки, неуспешен
При налични точки 100, удар даващ по-малко или равни на 100 точки, успешен
Вход 
Първоначално се чете един ред:
•	Името на играча - текст
След това до получаване на команда "Retire" се четат многократно по два реда:
1.	Поле – текст ("Single", "Double" или "Triple")
2.	Точки – цяло число в интервала [0… 100]
Изход
Играта приключва при въвеждане на команда "Retire" или при изравняване на началните 301 точки към 0. На конзолата трябва да се напечата един ред:
•	Ако играчът е спечелил лега:
o	"{името на играча} won the leg with {успешните изстрели} shots."
•	Ако играчът се е отказал от играта:
o	"{името на играча} retired after {неуспешни изстрели} unsuccessful shots."
 */