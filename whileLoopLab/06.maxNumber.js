function maxNumber(input) {
    let num = (input[0]);
    let index = 1;
    let maxNum = Number.MIN_SAFE_INTEGER;

    while (num !== 'Stop') {
        let currentNum = Number(num);

        if (currentNum > maxNum) {
            maxNum = currentNum;

        }
       
        num = input[index];
        index++;
    }
    console.log(maxNum);


}

maxNumber(["-10",
"20",
"-30",
"Stop"])





/* Напишете функция, която до получаване на командата "Stop", 
чете цели числа и намира най-голямото измежду тях. 
Въвежда се по едно число на ред.  */

