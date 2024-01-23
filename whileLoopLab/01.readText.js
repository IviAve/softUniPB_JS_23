function readText (input){
   
    let index = 0;

    while (index !== 'Stop') {
      let str = input[index];
      index++;
      if (str === "Stop") {
        break;
      }
      console.log(str);
    }
}


 
    

readText(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])



/*  Напишете функция, която чете елементите на масив, докато не получи командата "Stop".*/