function cinema (input)
{
  let typeProjection = input[0];
  let numR = Number(input[1]);
  let numC = Number(input[2]);

   let result = 0;

  switch ( typeProjection)
  {
    case 'Premiere':result =numR * numC * 12.00;break;
    case 'Normal':result = numR * numC * 7.50;break;
    case 'Discount':result = numR * numC * 5;break;
  }

   console.log(result.toFixed(2));
   console.log('leva');
}

cinema(["Discount",
"12",
"30"])




/*В една кинозала столовете са наредени в правоъгълна форма в r реда и c колони. Има три вида прожекции 
с билети на различни цени:
•	Premiere – премиерна прожекция, на цена 12.00 лева.
•	Normal – стандартна прожекция, на цена 7.50 лева.
•	Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.
Напишете функция, която приема тип прожекция (стринг), брой редове и брой колони в залата (цели числа) 
и изчислява общите приходи от билети при пълна зала.
 Резултатът да се отпечата във формат като в примерите по-долу,
 с 2 знака след десетичната точка. 1440.00
  leva 
  */