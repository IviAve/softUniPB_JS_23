function highJump(input) {
   // let highJump = Number(input[0])

    let index = 0;
    let highJump = Number(input[index]);
    index++;
//let currentHight = command;
    let currentTarget = highJump - 30;
    let jumpCounter = 0;
    while (highJump >= currentTarget) {
        let isFailed = true;
        for (let i = 0; i < 3; i++) {
            jumpCounter++;
            let command = Number(input[index]);
            index++;
            currentHight = command;
            
            //jumpCounter++;
            //let countFailed = 0;

            if (currentHight > currentTarget) {
                currentTarget += 5;
                isFailed = false;
                break;

            } 
             


        }
if(isFailed){
    break;
}


        
    }
    if(currentTarget >highJump){
        console.log(`Tihomir succeeded, he jumped over ${highJump}cm after ${jumpCounter} jumps.`);
    }
    else{
        console.log(`Tihomir failed at ${currentTarget}cm after ${jumpCounter} jumps.`);
    }

    
}

highJump(["250",
"225",
"224",
"225",
"228",
"231",
"235",
"234",
"235"])



/* Българският лекоатлет Тихомир Иванов започва тренировки за предстоящото европейско първенство
 по лека атлетика на закрито в Глазгоу, Шотландия.
Вашата задача е да напишете софтуер, с който Иванов да следи своя прогрес и дали е достигнал желаните резултати.
 В началото програмата получава желаната височина на летвата от Тихомир,
  той започва тренировката си като поставя летвата на височина 30см по-ниско от целта. 
  За всяка височина той има право на 3 скока, като за да бъде един скок успешен, 
  той трябва да бъде над височината на летвата. При успешен скок (над летвата), 
  височината й се вдига с 5 сантиметра. 
  При три неуспешни скока на една и съща височина, тренировката приключва с неуспех. 
  При достигане на желаната височина и нейното успешно прескачане, тренировката приключва с успех.
Вход
Входът е поредица от цели числа в интервала [100…300]:
•	На първия ред се прочита желаната от Тихомир Иванов височина в сантиметри
•	На всеки следващ ред до приключване на програмата се прочита височината от скока на Иванов 
Изход
На конзолата трябва да се отпечата един ред:
•	Ако Тихомир не успее да преодолее желаната височина:
o	"Tihomir failed at {височина на летвата към момента на провала}cm after {брой скокове от началото на тренировката} jumps."
•	Ако Тихомир успее да преодолее височината:
o	"Tihomir succeeded, he jumped over {височина на прескочената последно летва}cm after {брой скокове за цялата тренировка} jumps."
 */