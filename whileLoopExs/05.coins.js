function coins (input){

    let change = Number(input[0]);
     let convertedChange = Number((change * 100).toFixed(2));
      let  cents = convertedChange;
    let coins = 0;

    while (cents > 0)
{
    if (cents - 200 >= 0)
    {
        coins++;
        cents -= 200;
    }
    else if (cents - 100 >= 0)
    {
        coins++;
        cents -= 100;
    }
    else if (cents - 50 >= 0)
    {
        coins++;
        cents -= 50;
    }
    else if (cents - 20 >= 0)
    {
        coins++;
        cents -= 20;
    }
    else if (cents - 10 >= 0)
    {
        coins++;
        cents -= 10;
    }
    else if (cents - 5 >= 0)
    {
        coins++;
        cents -= 5;
    }
    else if (cents - 2 >= 0)
    {
        coins++;
        cents -= 2;
    }
    else if (cents - 1 >= 0)
    {
        coins++;
        cents -= 1;
    }
}
console.log(coins);

}

coins(["1.23"])

/* Производителите на вендинг машини искали да направят машините си
 да връщат възможно най-малко монети ресто. Напишете функция, 
 която приема сума - рестото, което трябва да се върне и изчислява 
 с колко най-малко монети може да стане това. 
 Монетите може да са от 2 лева, 1 лев, 50 стотинки, 20 стотинки, 10 стотинки, 5 стотинки, 
 2 стотинки или 1 стотинка  */