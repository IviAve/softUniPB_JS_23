function sumNumbers(input) {

    let sum = Number(input[0]);

    let safeSum = 0;
    let index = 1;
    let nextNum = Number(input[index]);
    

    while (safeSum < sum) {
      
        nextNum = Number(input[index]);
        safeSum += nextNum;
        index++;
        

    }
console.log(safeSum);
}

sumNumbers(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"])



/* Напишете функция, която чете цяло число от масив и на всеки следващ ред цели числа, 
докато тяхната сума стане по-голяма или равна на първоначалното число. 
След приключване да се отпечата сумата на въведените числа. */