function godzillaVsKong (input)
{
  let budgetForFilm = Number(input[0]);
  let numStatist = Number(input[1]);
  let priceForOneClot = Number(input[2]);

  let priceForDecor = budgetForFilm * 10/100;
  let totalPriceClots = numStatist * priceForOneClot;

  if(numStatist > 150)
  {
    totalPriceClots -= totalPriceClots * 10/100;
  }
      let totalCosts = priceForDecor + totalPriceClots;

  if (totalCosts <= budgetForFilm)
  {
  console.log ("Action!");
  console.log (`Wingard starts filming with ${(budgetForFilm - totalCosts).toFixed(2)} leva left.`);
  }
  else
  {
    console.log ("Not enough money!");
    console.log (`Wingard needs ${( totalCosts- budgetForFilm).toFixed(2)} leva more.`);
  }

  

}

godzillaVsKong(["9587.88",
"222",
"55.68"])










/* Снимките за дългоочаквания филм "Годзила срещу Конг" започват. 
Сценаристът Адам Уингард ви моли да напишете функция, която да изчисли, 
дали предвидените средства са достатъчни за снимането на филма. 
За снимките  ще бъдат нужни определен брой статисти, облекло за всеки един статист и декор.
Известно е, че:
•	Декорът за филма е на стойност 10% от бюджета. 
•	При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.
Изход
На конзолата трябва да се отпечатат два реда:
•	Ако  парите за декора и дрехите са повече от бюджета:
o	"Not enough money!"
o	"Wingard needs {парите недостигащи за филма} leva more."
•	Ако парите за декора и дрехите са по малко или равни на бюджета:
o	"Action!" 
o	"Wingard starts filming with {останалите пари} leva left."
Резултатът трябва да е форматиран до втория знак след десетичната запетая.
*/