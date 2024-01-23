function equalSumsEvenOddPosition (input){

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

   
    let buff = '';
   

    for (let curNum = startNum ; curNum <= endNum;curNum++){
        let oddSum = 0;
        let evenSum = 0;
        let curNumStr = String(curNum);
         for (let i = 0; i < curNumStr.length;i++){
            let num = Number(curNumStr[i]);
            if(i %2 === 0){
                evenSum += num;
            }
            else{
                oddSum += num;
            }
            
         
         }
         if(evenSum === oddSum){
            buff += curNum + ' ';

     }
     
    }
    console.log(buff);
    
}

equalSumsEvenOddPosition(["100000",
"100050"])


/*  Напишете функция, която получава две шестцифрени цели числа в диапазона от 100000 до 300000.
 Винаги първото въведено число ще бъде по малко от второто. 
 На конзолата да се отпечатат на 1 ред разделени с интервал всички числа, които се намират между двете,
  прочетени от конзолата числа и отговарят на следното условие:
•	сумата от цифрите на четни и нечетни позиции да са равни.
 Ако няма числа, отговарящи на условието на конзолата не се извежда резултат. 
*/