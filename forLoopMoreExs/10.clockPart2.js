function clockPart2 (){


    for (let hour = 0; hour < 24; hour++){
        for (let minutes = 0; minutes < 60;minutes++){
            for (let seconds = 0;seconds < 60 ;seconds++)
                {
                      console.log(`${hour} : ${minutes} : ${seconds}`);
            }
        }


    }
}
clockPart2()

/* Напишете програма, която да отпечатва часовете в денонощието от 0:0:0 до 23:59:59, всеки на отделен ред.
Часовете да се изписват във формат "{час} : {минути} : {секунди} ".
 */
