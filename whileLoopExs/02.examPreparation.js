function examPreparation(input) {

    let maxBadGrade = Number(input[0]);

    let sumOfGrade = 0;
    let totalGrades = 0;
    let totalBadGrades = 0;
    let nameOfProblem = '';

    let index = 1;
    let command = input[index];
    index++;

    while (command !== 'Enough') {
        nameOfProblem = command;

        let grade = Number(input[index]);
        index++;

        sumOfGrade += grade;
        totalGrades++;

        if (grade <= 4) {
            totalBadGrades++;


        }
        if (totalBadGrades === maxBadGrade) {
            console.log(`You need a break, ${totalBadGrades} poor grades.`);
            break;
        }


        command = input[index];
        index++;
    }
    let averageGrade = sumOfGrade / totalGrades;
    if (command === 'Enough') {
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${totalGrades}`);
        console.log(`Last problem: ${nameOfProblem}`);

    }


}

examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])



/* Напишете функция, в която Марин решава задачи от изпити
 докато не получи съобщение "Enough" от лектора си. 
 При всяка решена задача той получава оценка. 
 Функцията трябва да приключи прочитането на данни 
 при команда "Enough" или ако Марин получи определеният брой незадоволителни оценки.
Незадоволителна е всяка оценка, която е по-малка или равна на 4.
Вход
•	На първи ред - брой незадоволителни оценки - цяло число в интервала [1…5]
•	След това многократно се четат по два реда:
o	Име на задача - текст (низ)
o	Оценка - цяло число в интервала [2…6]
Изход
•	Ако Марин стигне до командата "Enough", отпечатайте на 3 реда: 
o	"Average score: {средна оценка}"
o	"Number of problems: {броя на всички задачи}"
o	"Last problem: {името на последната задача}"
•	Ако получи определеният брой незадоволителни оценки:
o	"You need a break, {брой незадоволителни оценки} poor grades."
Средната оценка да бъде форматирана до втория знак след десетичната запетая. 
 */