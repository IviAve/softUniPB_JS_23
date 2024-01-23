function accountBalance (input){

  let totalSum = 0;
  let index = 0;
  let contribution = input[index];
  

  while (contribution !== 'NoMoreMoney'){
    let command = Number(contribution);
    

    if (command <0){
        console.log('Invalid operation!');
        break;
    }
   
    console.log(`Increase: ${command.toFixed(2)}`);
    totalSum+= command;
    index++;
    contribution = input[index];
  }
  console.log('Total: ' + totalSum.toFixed(2));

}

accountBalance(["120",
"45.55",
"-150"])


/* 5.	Баланс по сметка
Напишете функция, която пресмята колко общо пари има в сметката,
 след като направите определен брой вноски.
  Във всеки елемент ще получавате сумата, която трябва да внесете в сметката,
   до получаване на команда "NoMoreMoney" . 
   При всяка получена сума на конзолата трябва да се извежда "Increase: " + сумата и тя да се прибавя в сметката. 
   Ако получите число по-малко от 0 на конзолата трябва да се изведе "Invalid operation!" и програмата да приключи.
    Когато програмата приключи трябва да се принтира "Total: " + общата сума в сметката.
Всички суми, които се печатат, трябва да се форматират до втория знак след десетичната запетая.
 */