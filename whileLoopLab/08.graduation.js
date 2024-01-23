function graduation(input) {
    let name = input[0];
    let grade = 1;
    let sumGrade = 0;
    let excluded = 0;

    let curentGrade = Number(input[grade]);

    while (grade <= 12) {

        if (curentGrade < 4) {
            excluded++;
        }
        if (excluded > 1) {

            console.log(`${name} has been excluded at ${grade-1} grade`);
            break;
        }
        sumGrade += curentGrade;
        grade++;
        curentGrade = Number(input[grade]);
    }
    let averageGrade = sumGrade / 12;
    if ( excluded < 2){
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
    
}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])



/* Напишете програма, която изчислява средната оценка на ученик от цялото му обучение.
 На първия ред ще получите името на ученика, а на всеки следващ ред неговите годишни оценки. 
 Ученикът преминава в следващия клас, ако годишната му оценка е по-голяма или равна на 4.00. 
 Ако ученикът бъде скъсан повече от един път, то той бива изключен и програмата приключва,
  като се отпечатва името на ученика и в кой клас бива изключен.
 При успешно завършване на 12-ти клас да се отпечата : 
"{име на ученика} graduated. Average grade: {средната оценка от цялото обучение}"
В случай, че ученикът е изключен от училище, да се отпечата:
"{име на ученика} has been excluded at {класа, в който е бил изключен} grade"
Стойността трябва да бъде форматирана до втория знак след десетичната запетая. 
 */