 function pipesInPool (input)
 {
   let V = Number(input[0]);
   let P1 = Number(input[1]);
   let P2 = Number(input[2]);
   let H = Number(input[3]);

   let litresP1 =P1 * H;
   let litresP2 = P2 * H;
   let totalLitres = litresP1 + litresP2;
   let percentP1 =(litresP1/totalLitres) * 100;
   let percentP2 = (litresP2/totalLitres) * 100;
   let totalPercent = (totalLitres /V) * 100;

   
   let volume = V - totalLitres;

   if ( totalLitres <= V){
  console.log(`The pool is ${totalPercent.toFixed(2)}% full. Pipe 1: ${percentP1.toFixed(2)}%. Pipe 2: ${percentP2.toFixed(2)}%.`);
   }
   else {
    console.log(`For ${H} hours the pool overflows with ${(totalLitres - V).toFixed(2)} liters.`);
   }
   
 }

 pipesInPool([100,
    100,
    100,
    2.5
    
    ])

 /* Басейн с обем V има две тръби от които се пълни. Всяка тръба има определен дебит 
 (литрите вода минаващи през една тръба за един час).
  Работникът пуска тръбите едновременно и излиза за N часа. Напишете програма,
   която изкарва състоянието на басейна, в момента, когато работникът се върне. 
Вход
От конзолата се четат четири реда:
•	Първият ред съдържа числото V – Обем на басейна в литри – цяло число в интервала [1…10000].
•	Вторият ред съдържа числото P1 – дебит на първата тръба за час – цяло число в интервала [1…5000].
•	Третият ред съдържа числото P2 – дебит на втората тръба за час– цяло число в интервала [1…5000].
•	Четвъртият ред съдържа числото H – часовете които работникът отсъства – реално число в интервала [1.0…24.00]
Изход
Да се отпечата на конзолата едно от двете възможни състояния:
•	До колко се е запълнил басейна и коя тръба с колко процента е допринесла.
o	"The pool is {запълненост на басейна в проценти}% full. Pipe 1: {процент вода от първата тръба}%. Pipe 2: {процент вода от втората тръба}%."
Aко басейнът се е препълнил – с колко литра е прелял за даденото време.
o	"For {часовете, които тръбите са пълнили вода} hours the pool overflows with {литрите вода в повече} liters."
 */