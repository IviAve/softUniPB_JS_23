function cinemaTickets(input) {
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    let index = 0;
    let command = input[index];
    index++;

    while (command !== 'Finish') {

        let nameOfCinema = command;

        let totalSeats = Number(input[index]);
        index++;

        let takenSeat = 0;

        let command1 = input[index];
        index++;
        while (command1 !== 'End') {
            let ticketType = command1;

            if (ticketType === 'student') {
                studentTickets++;

            } else if (ticketType === 'standard') {
                standardTickets++;
            } else if (ticketType === 'kid') {
                kidTickets++;
            }
            takenSeat++;

            if (takenSeat === totalSeats) {
                break;
            }
            command1 = input[index];
        index++;
        }
let percentFull =((takenSeat/totalSeats)*100);
console.log(`${nameOfCinema} - ${percentFull.toFixed(2)}% full.`);

        command = input[index];
        index++;

    }
    let totalTickets = standardTickets + studentTickets + kidTickets;
    let percentStudTickets = (studentTickets/totalTickets)* 100;
    let percentStandardTickets = (standardTickets/totalTickets)* 100;
    let percentKidsTickets = (kidTickets/totalTickets)* 100;

console.log(`Total tickets: ${totalTickets}`);
console.log(`${percentStudTickets.toFixed(2)}% student tickets.`);
console.log(`${percentStandardTickets.toFixed(2)}% standard tickets.`);
console.log(`${percentKidsTickets.toFixed(2)}% kids tickets.`);


}

cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])


/* Вашата задача е да напишете програма, която да изчислява процента на билетите 
за всеки тип от продадените билети: студентски(student), стандартен(standard) и детски(kid), 
за всички прожекции. Трябва да изчислите и колко процента от залата е запълнена за всяка една прожекция.
Вход
Входът е поредица от цели числа и текст:
•	На първия ред до получаване на командата "Finish" - име на филма – текст
•	На втори ред – свободните места в салона за всяка прожекция – цяло число [1 … 100]
•	За всеки филм, се чете по един ред до изчерпване на свободните места в залата 
или до получаване на командата "End":
o	Типа на закупения билет - текст ("student", "standard", "kid")
Изход
На конзолата трябва да се печатат следните редове:
•	След всеки филм да се отпечата, колко процента от кино залата е пълна
"{името на филма} - {процент запълненост на залата}% full."
•	При получаване на командата "Finish" да се отпечатат четири реда:
o	"Total tickets: {общият брой закупени билети за всички филми}"
o	"{процент на студентските билети}% student tickets."
o	"{процент на стандартните билети}% standard tickets."
o	"{процент на детските билети}% kids tickets."
 */