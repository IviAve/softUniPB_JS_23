function dishwasher (input){
  let bottles = Number(input[0]);

  let mlDetergent = bottles* 750;
  let totaldishes = 0 ;
  let totalPots = 0;
  let usedDetergent = 0;
  let charging = 0;
  let index = 1;
  let command = input[index];
 index++;

  while (command !== 'End'){
    let dishesOrPots =Number(command);
    charging++;
    
  if ( charging % 3 == 0){
 usedDetergent += dishesOrPots * 15;
 totalPots += dishesOrPots;
  }
  else{
    usedDetergent += dishesOrPots * 5;
    totaldishes += dishesOrPots;
  }

  if (usedDetergent> mlDetergent){
  console.log(`Not enough detergent, ${usedDetergent - mlDetergent} ml. more necessary!`);
  break;
  }

    command = input[index];
    index++;
  }

  if (command === 'End'){
    if ( mlDetergent >= usedDetergent){
        console.log('Detergent was enough!');
    console.log(`${totaldishes} dishes and ${totalPots} pots were washed.`);
    console.log(`Leftover detergent ${mlDetergent - usedDetergent} ml.`);
    }
    else if (usedDetergent> mlDetergent ){
        console.log(`Not enough detergent, ${usedDetergent - mlDetergent} ml. more necessary!`);
      }
    

  }
  
}

dishwasher([2,
    53,
    65,
    55,
    'End'
    
    
    
    
    ])

/* Гошо работи в ресторант и отговаря за зареждането на съдомиялната накрая на деня.
Вашата задача е да напишете програма, която изчислява,
 дали дадено закупено количество бутилки от препарат за съдомиялна е достатъчно, 
 за да измие определено количество съдове. 
 Знае се, че всяка бутилка съдържа 750 мл. препарат, за 1 чиния са нужни 5 мл.,
  а за тенджера 15 мл.  Приемете, че на всяко трето зареждане със съдове, 
  съдомиялната се пълни само с тенджери, а останалите пъти с чинии.
   Докато не получите команда "End" ще продължите да получавате бройка съдове,
    които трябва да бъдат измити.
Вход
От конзолата се четат:
•	Брой бутилки от препарат, който ще бъде използван за миенето на чинии - цяло число в интервала [1…10] 
На всеки следващ ред, до получаване на командата "End" 
или докато количеството препарат не се изчерпи, брой съдове, 
които трябва да бъдат измити - цяло число в интервала [1…100]
Изход
В случай, че количеството препарат е било достатъчно за измиването на съдовете:
"Detergent was enough!"
"{брой чисти чинии} dishes and {брой чисти тенджери} pots were washed."
"Leftover detergent {количество останал препарат} ml."
В случай, че количеството препарат не е било достатъчно за измиването на съдовете:
"Not enough detergent, {количество не достигнал препарат} ml. more necessary!"
 */