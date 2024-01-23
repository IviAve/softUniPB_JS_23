function numbersDivisibleBy9 (input)
{
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let sumOfDigit = 0;
   
    for (let i = n1; i <=n2 ;i++){
        
       if(i % 9 === 0){

        sumOfDigit +=i;
       }
    }
    console.log(`The sum: ${sumOfDigit}`);
    for (let i = n1; i <=n2 ;i++){
        
        if(i % 9 === 0){
 
            console.log(`${i}`);
        }
     }
     
    
}
   


numbersDivisibleBy9(["100", "200"])

/*Напишете функция, която получава две числа и принтира  на конзолата,
 всички числа в диапазона, които се делят на 9 без остатък, както и тяхната сума. 
  На първия ред отпечатайте сумата на числата, 
  а на следващите редове отговарящите на условието числа.  */