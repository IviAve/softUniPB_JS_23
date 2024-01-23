function fitnessCenter (input){
 
    let totalClients = Number(input[0]);

    let totalBack = 0;
    let totalChest = 0;
    let totalLegs = 0;
    let totalAbs = 0;

    let totalProteinShake = 0;
    let totalProteinBar = 0;

    let workoutPeople = 0;
    let buyers =  0;

    for(let i  = 1;i <=totalClients;i++){

        let command = input[i];

        if(command === 'Back'){
            totalBack ++;
            workoutPeople++;

        }else if(command === 'Chest'){
            totalChest ++;
            workoutPeople++;

        }else if(command === 'Legs'){
            totalLegs ++;
            workoutPeople++;

        }else if(command === 'Abs'){
            totalAbs ++;
            workoutPeople++;

        }else if(command === 'Protein shake'){
            totalProteinShake ++;
            buyers++;

        }else if(command === 'Protein bar'){
            totalProteinBar ++;
            buyers++;

        }


    }
let percentWorkout = (workoutPeople/totalClients) * 100;
let pecentBuyers = (buyers/totalClients)* 100;

console.log(`${totalBack} - back`);
console.log(`${totalChest} - chest`);
console.log(`${totalLegs} - legs`);
console.log(`${totalAbs} - abs`);
console.log(`${totalProteinShake} - protein shake`);
console.log(`${totalProteinBar} - protein bar`);
console.log(`${percentWorkout.toFixed(2)}% - work out`);
console.log(`${pecentBuyers.toFixed(2)}% - protein`);

}

fitnessCenter(["7",
"Chest",
"Back",
"Legs",
"Legs",
"Abs",
"Protein shake",
"Protein bar"])




/* Напишете програма, която да изчислява броя на посетителите в един фитнес център.
 В началото програмата получава броя на посетителите на фитнеса и за всеки човек - дейността, 
 която извършва във фитнеса.
  На края програмата трябва да отпечата броят трениращи за всяка една дейност
   ("Back", "Chest", 'Legs", "Abs") и броят клиенти, закупили продукт ("Protein shake", "Protein bar").
    Също така - процентът трениращи (спрямо общия брой посетители) и процентът на клиентите, 
    закупили продукт от фитнеса.
Вход
От конзолата се чете число, след това поредица от низове, всяко на отделен ред:
•	На първия ред – броят на посетителите във фитнеса – цяло число в интервала [1...1000]
•	За всеки един посетител на отделен ред – дейността във фитнеса – текст ("Back", "Chest", "Legs", "Abs", "Protein shake" или "Protein bar")
Изход
Да се отпечатат на конзолата 8 реда, които съдържат следната информация:
Ред 1 -	"{брой хора трениращи гръб} - back"
Ред 2 -	"{брой хора трениращи гърди} - chest"
Ред 3 -	"{брой хора трениращи крака} - legs"
Ред 4 -	"{брой хора трениращи коремни мускули} - abs"
Ред 5 -	"{брой хора закупили протеинов шейк} - protein shake"
Ред 6 -	"{брой хора закупили протеинов блок} - protein bar"
Ред 7 -	"{процент на хората дошли да тренират}% - work out"
Ред 8 -	"{процент на хората дошли да купят протеин}% - protein"
Всички проценти трябва да са форматирани до втората цифра след десетичния знак.
 */