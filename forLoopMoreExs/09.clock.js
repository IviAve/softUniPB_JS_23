function clock (input){
 for (let hour = 0; hour < 24 ;hour++){

    for (let minutes = 0; minutes < 60 ;minutes++){
         console.log(`${hour} : ${minutes}`);
    }
 }
}

clock([])

/* Напишете програма, която отпечатва часовете в денонощието от 0:0 до 23:59,
 всеки на отделен ред. Часовете трябва да се изписват във формат "{час} : {минути}".  */