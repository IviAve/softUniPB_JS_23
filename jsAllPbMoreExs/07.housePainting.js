function housePainting (input)
{
   let  x = Number(input[0]);
   let y = Number(input[1]);
   let h = Number(input[2]);

   let wall1 = ((x * y)- (1.5 * 1.5))* 2;
   let wall2 = ((x * x)*2) - (1.2 * 2);
   let greenPaint = (wall1 + wall2)/3.4;
   let roof1 = (x * y ) * 2;
   let roof2 = ((x * h)/2)* 2;
   let redPaint = (roof1 + roof2)/ 4.3;

   console.log(greenPaint.toFixed(2));
   console.log(redPaint.toFixed(2));
}

housePainting([10.25,
    15.45,
    8.88
    
    
    ])

/* От конзолата се четат 3 реда:
1.	x – височината на къщата – реално число в интервала [2...100]
2.	y – дължината на страничната стена – реално число в интервала [2...100]
3.	h – височината на триъгълната стена на прокрива – реално число в интервала [2...100]
Изход
Да се отпечатат на конзолата две числа всяко на нов ред:
•	Литрите зелена боя
•	Литритe червена боя
Форматирани до вторият знак след десетичната запетая.
 */