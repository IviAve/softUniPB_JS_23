function toyShop (input)
{
   
    let priceForTrip = Number(input[0]);
    let pcsPuzzle = Number(input[1]);
    let pcsDolls = Number(input[2]);
    let pcsBears = Number(input[3]);
    let pcsMinions = Number(input[4]);
    let pcsTrucks = Number(input[5]);

    let TotalSum =(pcsPuzzle * 2.60) + (pcsDolls * 3) + (pcsBears * 4.10) + (pcsMinions * 8.20) + (pcsTrucks * 2 );
    let totalPcs = pcsPuzzle + pcsDolls + pcsBears + pcsMinions + pcsTrucks ;

    if(totalPcs >= 50)
    {
        TotalSum -= TotalSum * 25/100; 
    }

    let rentForShop = TotalSum * 10/100;

    let profit = TotalSum - rentForShop;

    if (profit >= priceForTrip)
    {
       console.log(`Yes! ${(profit - priceForTrip).toFixed(2)} lv left.`)
    }
    else
    {
       console.log(`Not enough money! ${(priceForTrip - profit).toFixed(2)} lv needed.`)
    }

}

toyShop(["320",
"8",
"2",
"5",
"5",
"1"])



/* Петя има магазин за детски играчки. Тя получава голяма поръчка, която трябва да изпълни. 
С парите, които ще спечели иска да отиде на екскурзия. 
Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена. 
От спечелените пари Петя трябва да даде 10% за наема на магазина. 
Да се пресметне дали парите ще ѝ стигнат да отиде на екскурзия.
Вход

Изход
На конзолата се отпечатва:
•	Ако парите са достатъчни се отпечатва:
o	"Yes! {оставащите пари} lv left."
•	Ако парите НЕ са достатъчни се отпечатва:
o	"Not enough money! {недостигащите пари} lv needed."

Резултатът трябва да се форматира до втория знак след десетичната запетая.
*/