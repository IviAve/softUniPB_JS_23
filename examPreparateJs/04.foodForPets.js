function foodForPets (input){

    let totalDays = Number(input[0]);
    let totalFood = Number(input[1]);

    let buscuits = 0;
    let totalFoodDog = 0;
    let totalFoodCat =0;
    let index = 2;
    let counter = 0;

    for(let i = 1;i <= totalDays;i++){

       let dogEats = Number(input[index]);
        index++;
       let catEats = Number(input[index]);
        index++;

        totalFoodDog += dogEats;
        totalFoodCat += catEats;
        counter++;
        if(counter % 3 == 0){
            buscuits += (dogEats + catEats)* 0.10;
            counter=0;
        }


    }
let totalFoodEat = totalFoodDog + totalFoodCat;
    let percentTotalFoodEat = (totalFoodEat/totalFood)* 100;
    let percentEatDog = (totalFoodDog/totalFoodEat)* 100;
    let percentEatCat = (totalFoodCat/totalFoodEat)* 100;
    
    console.log(`Total eaten biscuits: ${Math.round(buscuits)}gr.`);
    console.log(`${percentTotalFoodEat.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentEatDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentEatCat.toFixed(2)}% eaten from the cat.`);

}

foodForPets([3,
    500,
    100,
    30,
    110,
    25,
    120,
    35
    
    ])

/* Ани има два домашни любимеца - куче и котка. Напишете програма, 
която изготвя статистика за храната на домашните любимци за определен брой дни.
 Всеки ден кучето и котката изяждат различно количество от общата им храна. 
 На всеки трети ден получават награда - бисквитки.
  Количеството на бисквитките е 10% от общо изядената храна за деня.
Вашата програма трябва да отпечатва статистика за количеството бисквитки, които са изяли, 
колко процента от първоначалното количество обща храна са изяли и 
колко процента от изядената храна е изяло кучето и 
колко е изяла котката.
Вход
Първоначално се чете един ред:
•	Брой дни – цяло число в диапазона [1…30]
•	Общо количество храна – реално число в диапазона [0.00…10000.00]
След това за всеки ден се чете:
o	Количество изядена храна от кучето – цяло число в диапазона [10…500]
o	Количество изядена храна от котката – цяло число в диапазона [10…500]
Изход
На конзолата да се отпечатват четири реда:
•	"Total eaten biscuits: {количество изядени бисквитки}gr."
•	"{процент изядена храна}% of the food has been eaten."
•	"{процент изядена храна от кучето}% eaten from the dog."
•	"{процент изядена храна от котката}% eaten from the cat."
Количеството изядени бисквитки трябва да бъде закръглено до най – близкото цяло число,
 а процентът храна трябва да бъде форматиран до втората цифра след десетичния знак.
 */