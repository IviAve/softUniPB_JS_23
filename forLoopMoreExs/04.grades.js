function grades(input) {

    let totalStudents = Number(input[0]);

    let sumOfGrade = 0;
    let grade2 = 0;
    let grade3 = 0;
    let grade4 = 0;
    let grade5 = 0;

    for (let i = 1; i <= totalStudents; i++) {
        let gradeOneStudent = Number(input[i]);

        if (gradeOneStudent >= 2.00 && gradeOneStudent <= 2.99) {
            sumOfGrade += gradeOneStudent;
            grade2++;
        }
        else if (gradeOneStudent >= 3 && gradeOneStudent <= 3.99) {
            sumOfGrade += gradeOneStudent;
            grade3++;
        }
        else if (gradeOneStudent >=4 && gradeOneStudent <= 4.99){
            sumOfGrade += gradeOneStudent;
            grade4 ++;
        }
        else {
            sumOfGrade += gradeOneStudent;
            grade5 ++;
        }
    }

    let averageGrade = sumOfGrade / totalStudents;
    let percentGrade2 =(grade2 / totalStudents)* 100;
    let percentGrade3 = (grade3 / totalStudents)* 100;
    let percentGrade4 =(grade4 / totalStudents)* 100;
    let percentGrade5 =(grade5 / totalStudents)* 100;

     console.log(`Top students: ${percentGrade5.toFixed(2)}%`);
     console.log(`Between 4.00 and 4.99: ${percentGrade4.toFixed(2)}%`);
     console.log(`Between 3.00 and 3.99: ${percentGrade3.toFixed(2)}%`);
     console.log(`Fail: ${percentGrade2.toFixed(2)}%`);
     console.log(`Average: ${averageGrade.toFixed(2)}`);
}

grades([6,
    2,
    3,
    4,
    5,
    6,
    2.2
    
])

/* Напишете програма, която да пресмята статистика на оценки от изпит. 
В началото програмата получава броят на студентите явили се на изпита и за всеки студент неговата оценка.
 На края програмата трябва да изпечата процента на студенти с оценка между 2.00 и 2.99, между 3.00 и 3.99,
  между 4.00 и 4.99, 5.00 или повече. Също така и средният успех на изпита.
Вход
От конзолата се четат поредица от числа, всяко на отделен ред:
•	На първия ред – броя на студентите явили се на изпит – цяло число в интервала [1...1000]
•	За всеки един студент на отделен ред – оценката от изпита – реално число в интервала [2.00...6.00]
Изход
Да се отпечатат на конзолата 5 реда, които съдържат следната информация:
Ред 1 -	"Top students: {процент студенти с успех 5.00 или повече}%"
Ред 2 -	"Between 4.00 and 4.99: {между 4.00 и 4.99 включително}%"
Ред 3 -	"Between 3.00 and 3.99: {между 3.00 и 3.99 включително}%"
Ред 4 -	"Fail: {по-малко от 3.00}%"
Ред 5 -	"Average: {среден успех}"
Всички числа трябва да са форматирани до вторият знак след десетичната запетая.
 */