function trekkingMania (input)
{
    let numOfGroups = Number(input[0]);
   let  top = '';
    let group1 = 0;
    let group2 = 0;
    let group3= 0;
    let group4 = 0;
    let group5 = 0;
    

for (let i = 1; i <= numOfGroups ;i++){

    let groupPeople = Number(input[i]);

    if (groupPeople <=5) {
        top = 'Musala';
       group1 += groupPeople;
        
    }
    else if (groupPeople >= 5 && groupPeople <= 12){
    top = 'Monblan';
    group2 += groupPeople;
    }
    else if (groupPeople > 12 && groupPeople <= 25){
    top = 'Kilimanjaro';
    group3 += groupPeople;
    }
    else if (groupPeople > 25 && groupPeople <= 40){
    top = 'K2';
    group4 += groupPeople;
    }
    else if (groupPeople > 40 ){
    top = 'Everest';
    group5+= groupPeople;
    }
}
let totalPeople = group1 + group2 + group3 + group4 + group5;
 let percent1 = (group1 /totalPeople )* 100;
 let percent2 = (group2 /totalPeople )* 100;
 let percent3 = (group3 /totalPeople )* 100;
 let percent4 = (group4 /totalPeople )* 100;
 let percent5 = (group5 /totalPeople )* 100;

 console.log(`${percent1.toFixed(2)}%`);
 console.log(`${percent2.toFixed(2)}%`);
 console.log(`${percent3.toFixed(2)}%`);
 console.log(`${percent4.toFixed(2)}%`);
 console.log(`${percent5.toFixed(2)}%`);

 

}

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])



/* Катерачи от цяла България се събират на групи и набелязват следващите върхове за изкачване. 
Според размера на групата, катерачите ще изкачват различни върхове.
•	Група до 5 човека – изкачват Мусала
•	Група от 6 до 12 човека – изкачват Монблан
•	Група от 13 до 25 човека – изкачват Килиманджаро
•	Група от 26 до 40 човека –  изкачват К2
•	Група от 41 или повече човека – изкачват Еверест
Да се напише програма, която изчислява процента на катерачите изкачващи всеки връх.
Вход
От конзолата се четат поредица от числа, всяко на отделен ред:
•	На първия ред – броя на групите от катерачи – цяло число в интервала [1...1000]
•	За всяка една група на отделен ред – броя на хората в групата – цяло число в интервала [1...1000]
Изход
Да се отпечатат на конзолата 5 реда, всеки от които съдържа процент 
между 0.00% и 100.00% 
с точност до втората цифра след десетичната запетая.
•	Първи ред - процентът изкачващи Мусала
•	Втори ред – процентът изкачващи Монблан
•	Трети ред – процентът изкачващи Килиманджаро
•	Четвърти ред – процентът изкачващи К2
•	Пети ред – процентът изкачващи Еверест

Общ брой хора: 10 + 5 + 1 + 100 + 12 + 26 + 17 + 37 + 40 + 78 = 326
Изкачващи Мусала: 6 / 326 * 100 = 1.84%
Изкачващи Монблан: 22/326*100 = 6.75%
Изкачващи Килиманджаро: 17/326*100 = 5.21%
Изкачващи К2: 103/326*100 = 31.60%
Изкачващи Еверест: 178/326*100 = 54.60%

 */