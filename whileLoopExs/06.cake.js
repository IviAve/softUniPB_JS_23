function cake (input){

    let  width = Number (input[0]);
    let length = Number (input[1]);
    let volumeCake = width*length;
    let volumePeace = 1*1;
    let totalVolumePeace = 0;
 let totalPeaceCake = 0;
    let index = 2;
    let command = (input[index]);
    index++;

    while (command !== 'STOP'){
        let peaceOfCake = Number(command);
        totalVolumePeace +=volumePeace * peaceOfCake;

        
        totalPeaceCake +=peaceOfCake;

        if ( volumeCake  <= totalVolumePeace){
            console.log(` No more cake left! You need ${totalVolumePeace - volumeCake} pieces more.`);
            break;
        }

        command = (input[index]);
         index++;
    }
    if (command === 'STOP'){
        if (volumeCake >= totalPeaceCake){
 console.log(`${volumeCake - totalVolumePeace} pieces are left.`);
        }
        else{
            console.log(`No more cake left! You need ${totalVolumePeace - volumeCake} pieces more.`);
        }

    }
}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])






/* Поканени сте на 30-ти рожден ден, на който рожденикът черпи с огромна торта. 
Той обаче не знае колко парчета могат да си вземат гостите от нея. 
Вашата задача е да напишете функция, която изчислява броя на парчетата,
 които гостите са взели, преди тя да свърши. 
 Ще получите размерите на тортата (широчина и дължина – цели числа в интервала [1...1000]) 
 и след това на всеки ред, до получаване на командата "STOP" или докато не свърши тортата,
  броят на парчетата, които гостите вземат от нея. 
Бележка: Едно парче торта е с размер 1х1 см.
Да се отпечата на конзолата един от следните редове:
•	"{брой парчета} pieces are left." - ако стигнете до STOP и не са свършили парчетата торта
•	"No more cake left! You need {брой недостигащи парчета} pieces more."
 */