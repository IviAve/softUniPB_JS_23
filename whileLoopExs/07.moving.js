function moving (input){
 
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let totalVolumeApartment = width* length*height;
   

    let totalVolumeWithCartons = 0;
    let index = 3;
    let command = input[index];
    index++;

    while (command !== 'Done'){
        let totalCartons = Number(command);
        
        totalVolumeWithCartons+= totalCartons; 

        if (totalVolumeApartment < totalVolumeWithCartons){
            console.log(`No more free space! You need ${Math.abs(totalVolumeApartment - totalVolumeWithCartons)} Cubic meters more.`);
            break;
        }


        command = input[index];
        index++;

    }
     if(command === 'Done'){
        if (totalVolumeApartment >= totalVolumeWithCartons){
            console.log(`${totalVolumeApartment - totalVolumeWithCartons} Cubic meters left.`);
        }
        else{
            console.log(`No more free space! You need ${ totalVolumeWithCartons - totalVolumeApartment} Cubic meters more.`);
        }
      
     }


}

moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])





/* На осемнадесетия си рожден ден на Хосе взел решение, че ще се изнесе да живее на квартира. 
Опаковал багажа си в кашони и намерил подходяща обява за апартамент под наем. 
Той започва да пренася своя багаж на части, защото не може да пренесе целия наведнъж. 
Има ограничено свободно пространство в новото си жилище, където може да разположи вещите,
 така че мястото да бъде подходящо за живеене.
Напишете програма, която изчислява свободния обем от жилището на Хосе, 
който остава след като пренесе багажа си. 
Бележка: Един кашон е с точни размери:  1m. x 1m. x 1m.
Вход
Потребителят въвежда следните данни на отделни редове:
1.	Широчина на свободното пространство - цяло число в интервала [1...1000]
2.	Дължина на свободното пространство - цяло число в интервала [1...1000]
3.	Височина на свободното пространство - цяло число в интервала [1...1000]
4.	На следващите редове (до получаване на команда "Done") - брой кашони, 
които се пренасят в квартирата - цели числа в интервала [1...10000];
Функцията трябва да приключи прочитането на данни при команда "Done" или ако свободното място свърши.
Изход
Да се отпечата на конзолата един от следните редове:
-	Ако стигнете до командата "Done" и има още свободно място:
"{брой свободни куб. метри} Cubic meters left."
-	Ако свободното място свърши преди да е дошла команда "Done":
"No more free space! You need {брой недостигащи куб. метри} Cubic meters more."
 */