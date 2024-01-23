function fuelTank (input)
{
  let fuel = input[0];
  let litresFuel = Number(input[1]);
   if ( fuel == 'Diesel' || fuel == 'Gasoline' || fuel == 'Gas'){
    
    if (litresFuel >= 25){
        console.log(`You have enough ${fuel.toLowerCase()}.`);
     }
     else if ( litresFuel < 25){
       console.log (`Fill your tank with ${fuel.toLowerCase()}!`)
     }
        
  }
  else {
    console.log('Invalid fuel!');
  }
    
}

fuelTank(['Gasoline',
    30])
 
    

/* Напишете програма, която познава дали резервоара на едно превозно средство
 има нужда от презареждане на горивото или не. 
 От конзолата се четат два реда – текст и реално число, 
 на първия ред се чете типа на горивото – текст с възможности: "Diesel", "Gasoline" или "Gas", 
 а на втория литрите гориво, които има в резервоара. 
 Ако литрите гориво са повече или равни на 25, 
 на конзолата да се отпечата "You have enough {вида на горивото}.", 
 ако са по-малко от 25, да се отпечата "Fill your tank with {вида на горивото}!". 
 В случай, че бъде въведено гориво, различно от посоченото, да се отпечата "Invalid fuel!". */