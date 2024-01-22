function areaOfFigures (input)
{
   let figure = (input[0]);
   let sideA = Number(input[1]);
   let sideB = Number(input[2]);
   let S = 0;

  if( figure == "square")
  {
     S = sideA * sideA ;
   
  }
  else if ( figure == "rectangle")
  {
     S = sideA * sideB ;
  }
  else if (figure == "circle")
  {
    S = sideA * sideA * Math.PI;
  }
  else if (figure == "triangle")
  {
    S = sideA * (sideB / 2);
  }


  console.log(S.toFixed(3));
}
areaOfFigures(["triangle",
"4.5",
"20"])






/* Да се напише функция,  която получава като вида и размерите на геометрична фигура и пресмята лицето й. 
Фигурите са четири вида: квадрат (square), правоъгълник (rectangle), кръг (circle) и триъгълник (triangle). 
На първия ред на входа се чете вида на фигурата (текст със следните възможности: square, rectangle, circle или triangle). 
•	Ако фигурата е квадрат (square): на следващия ред се чете едно дробно число - дължина на страната му
•	Ако фигурата е правоъгълник (rectangle): на следващите два реда четат две дробни числа - дължините на страните му
•	Ако фигурата е кръг (circle): на следващия ред чете едно дробно число - радиусът на кръга
•	Ако фигурата е триъгълник (triangle): на следващите два реда четат две дробни числа - 
дължината на страната му и дължината на височината към нея
Резултатът да се закръгли до 3 цифри след десетичната запетая. 
*/