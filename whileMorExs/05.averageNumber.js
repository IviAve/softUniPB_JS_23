function averageNumber (input){
    let n = Number(input[0]);

    let sum = 0;
    let index = 1;
    let num = Number(input[index]);
    

    while(index <= n){

        sum += num;
        index++;
        num = Number(input[index]);
       

    }
 console.log(`${(sum/ n).toFixed(2)}`);
}

averageNumber([4,
    95,
    23,
    76,
    23
    
    
    
    
    
    ])

/* Напишете програма, която прочита едно число n,
 след това прочита n на брой цели числа и принтира средно аритметичното на тяхната сума число,
  форматирано до втората цифра след десетични знак. */