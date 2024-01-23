function trainTheTrainers (input){
 let judgesCount = Number(input[0]);
 let totalGradeSum = 0;
 let totalGradeCount = 0;

 let index = 1;
 let command = input[index];
 index++;

 while (command !== 'Finish'){

    let nameOfPresent = command;

    let curGradeSum = 0;
    let curGradeCount = 0;

    for(let curJudge = 1;curJudge <= judgesCount;curJudge++){

      let  curGrade = Number(input[index]);
      index++;

      curGradeSum += curGrade;
      curGradeCount ++;

    }
    let curAverageGrade = curGradeSum/curGradeCount;

    totalGradeSum += curAverageGrade;
    totalGradeCount ++;
console.log(`${nameOfPresent} - ${curAverageGrade.toFixed(2)}.`);


    command = input[index];
     index++;
 }

console.log(`Student's final assessment is ${(totalGradeSum/totalGradeCount).toFixed(2)}.`);

}

trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])




/* Курсът "Train the trainers" е към края си и финалното оценяване наближава. 
Вашата задача е да помогнете на журито,  което ще оценява презентациите, като напишете функция, 
 която да изчислява средната оценка от представянето на всяка една презентация от даден студент,
  а накрая средният успех от всички тях.
От първия елемент на масива се прочита броят на хората в журито n - цяло число в интервала [1…20]
След това името на презентацията - текст
За всяка една презентация като нов елемент 
се чете n - на брой оценки - реално число в интервала [2.00…6.00]
След изчисляване на средната оценка за конкретна презентация, на конзолата се печата
 "{името на презентацията} - {средна оценка}."
След получаване на команда "Finish" на конзолата 
се печата "Student's final assessment is {среден успех от всички презентации}." и програмата приключва.
Всички оценки трябва да бъдат форматирани до втория знак след десетичната запетая.
 */