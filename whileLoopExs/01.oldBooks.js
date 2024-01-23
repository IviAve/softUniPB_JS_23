function oldBooks(input) {

     let searchBook = input[0];

     let checkedBooks = 0;
     let i = 1;
     let currentBook = input[i];
    // i++;
     

     while (currentBook !== 'No More Books') {

          
          if (currentBook === searchBook) {
               console.log(`You checked ${checkedBooks} books and found it.`);
               break;
          }
          checkedBooks++;


          i++;
           currentBook = input[i];
           //i++;
     }
  if (currentBook === 'No More Books'){
    console.log('The book you search is not here!');
    console.log(`You checked ${checkedBooks} books.`);
  }


}

oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])








/* Ани отива до родния си град след много дълъг период извън страната.
 Прибирайки се вкъщи тя вижда старата библиотека на баба си и си спомня за любимата си книга.
  Помогнете на Ани, като напишете функция в която тя въвежда търсената от нея книга(текст).
   Докато Ани не намери любимата си книга или не провери всички в библиотеката,
    програмата трябва да чете всеки път на нов ред името на всяка следваща книга (текст).
     Книгите в библиотеката са свършили щом получите текст "No More Books".
•	Ако не открие книгата да се отпечата на два реда: 
o	"The book you search is not here!"
o	"You checked {брой} books."
•	Ако открие книгата си се отпечатва един ред:
o	"You checked {брой} books and found it."  
 */