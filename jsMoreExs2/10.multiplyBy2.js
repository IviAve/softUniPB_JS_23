function multiplyBy2 (input)
{
 let num = Number(input[0]);

 let result = 0;

 let index = 0;
 let command = Number(input[index]);
 index++;
 while( command >= 0){

   
    
   
    result= command * 2;
    command = Number(input[index]);
 index++;
 console.log(`Result: ${result.toFixed(2)}`);
 }
 if ( command < 0){
    console.log(`Negative number!`);
    
}

}

multiplyBy2([23.43,
    12.3245,
    0,
    65.23432,
    23,
    65,
    -12
    
    
    ])

/* Напишете програма, която да умножава положителни числа по 2.
 От конзолата се четат поредица от реални числа, всяко на нов ред, 
 докато не се въведе отрицателно. След всяко умножено число на нов ред 
 да се отпечата "Result: {резултата от умножението}".
  Резултата от умножението да бъде форматиран до втория знак след десетичния разделител. 
  При получаване на негативно число, на конзолата да се отпечата "Negative number!"
   и програмата да приключи изпълнение. */