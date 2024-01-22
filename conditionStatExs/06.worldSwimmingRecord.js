function worldSwimmingRecord (input)
{
   let recordInSeconds = Number(input[0]);
   let distanceInMeters = Number(input[1]);
   let timeForOneMeters = Number(input[2]);

   let totalTime = distanceInMeters * timeForOneMeters ;
   let delay = Math.floor(distanceInMeters /15 ) * 12.5;
   totalTime += delay;
   
   if (totalTime < recordInSeconds)
   {
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
   }
   else
   {
     console.log(`No, he failed! He was ${(totalTime - recordInSeconds).toFixed(2)} seconds slower.`)
   }

}

worldSwimmingRecord(["55555.67",
"3017",
"5.03"])


/*Иван решава да подобри Световния рекорд по плуване на дълги разстояния. 
Функцията получава: рекордът в секунди,  който Иван трябва да подобри, 
 разстоянието в метри, което трябва да преплува и времето в секунди, за което плува разстояние от 1 м. 
 Да се напише функция, която изчислява дали се е справил със задачата, като се има предвид, че:
  съпротивлението на водата го забавя на всеки 15 м. с 12.5 секунди. 
  Когато се изчислява колко пъти Иванчо ще се забави, 
  в резултат на съпротивлението на водата, резултатът трябва да се закръгли надолу до най-близкото цяло число.
Да се изчисли времето в секунди, за което Иванчо ще преплува разстоянието и разликата спрямо Световния рекорд. 

Функцията получава 3 аргумента:
1.	Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
2.	Разстоянието в метри – реално число в интервала [0.00 … 100000.00]
3.	Времето в секунди, за което плува разстояние от 1 м. - реално число в интервала [0.00 … 1000.00]
Изход
Отпечатването на конзолата зависи от резултата:
•	Ако Иван е подобрил Световния рекорд (времето му е по-малко от рекорда) отпечатваме:
o	" Yes, he succeeded! The new world record is {времето на Иван} seconds."
•	Ако НЕ е подобрил рекорда (времето му е по-голямо или равно на рекорда) отпечатваме:
o	"No, he failed! He was {недостигащите секунди} seconds slower."
Резултатът трябва да се форматира до втория знак след десетичната запетая.
  */