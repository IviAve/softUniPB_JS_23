function sequence2kPlus1 (input){

    let n = Number(input[0]);

    
    let k = 1;
    

    while (k<= n){
        console.log(k);
        k = k*2+1;

    }
    
}

sequence2kPlus1(["31"])

/*  Напишете програма, която чете число n, 
въведено от потребителя и отпечатва всички числа ≤ n от редицата: 1, 3, 7, 15, 31, ….
 Всяко следващо число се изчислява като умножим предишното с 2 и добавим 1.*/