function equalPairs(input) {
    index = 0;
    let numberOfPairs = Number(input[index++]);
    let firstNum = 0;
    let secondNum = 0;
    let sum = 0;
    let diff = 0;
    let valueMin = 100;
    let valueMax = -100;
    let max1 = 0;
    let min1 = 0;
   
    for (let i = 0; i < numberOfPairs; i++) {
      firstNum = Number(input[index++]);
      secondNum = Number(input[index++]);
      sum = firstNum + secondNum;
   
      if (sum > valueMax) {
        valueMax = sum;
      } else if (sum < valueMax) {
        max1 = sum;
      }
   
      if (sum < valueMin) {
        valueMin = sum;
      } else if (sum > valueMin) {
        min1 = sum;
      }
    }
   
    diff = Math.abs(valueMin - valueMax);
    let diff2 = Math.abs(min1 - max1);
    if (valueMin === valueMax) {
      console.log(`Yes, value=${valueMin}`);
    } else {
      if (diff > diff2 && numberOfPairs > 3) {
        console.log(`No, maxdiff=${diff2}`);
      } else {
        console.log(`No, maxdiff=${diff}`);
      }
    }
  }


equalPairs([3,
    1,
    2,
    0,
    3,
    4,
    -1
    ])

/* Дадени са 2*n-на брой числа. Първото и второто формират двойка,
 третото и четвъртото също и т.н. Всяка двойка има стойност – сумата от съставящите я числа. 
 Напишете програма, която проверява дали всички двойки имат еднаква стойност
  или печата максималната разлика между две последователни двойки. 
  Ако всички двойки имат еднаква стойност, отпечатайте "Yes, value={Value}" + стойността.
   В противен случай отпечатайте "No, maxdiff={Difference}" + максималната разлика.

   Прочитаме входните числа по двойки. За всяка двойка пресмятаме сумата ѝ.
    Докато четем входните двойки, за всяка двойка, без първата, 
    трябва да пресметнем разликата с предходната.
     За целта е необходимо да пазим в отделна променлива сумата на предходната двойка.
      Накрая намираме най-голямата разлика между две двойки. Ако е 0, печатаме “Yes” + стойността, 
      в противен случай - “No” + разликата.
   */