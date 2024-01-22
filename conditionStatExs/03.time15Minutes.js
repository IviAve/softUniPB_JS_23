function time15Minutes (input)
 {
   let hour = Number (input[0]);
   let minutes = Number ( input[1]);

   let totalMin = (hour * 60) + minutes +15 ;

   let newHour = Math.floor(totalMin / 60);
   let newMin =totalMin % 60 ;

   if (newHour == 24)
   {
     newHour = 0;
   }
   if (newMin < 10)
   {
    console.log(`${newHour}:0${newMin}`);

   }
   else 
   {
    console.log(`${newHour}:${newMin}`);
   }
 }

 time15Minutes(["1", "46"])

/* Да се напише функция, която получава час и минути от 24-часово денонощие и
 изчислява колко ще е часът след 15 минути. Резултатът да се отпечата във формат часове:минути.
  Часовете винаги са между 0 и 23, а минутите винаги са между 0 и 59. 
  Часовете се изписват с една или две цифри. 
  Минутите се изписват винаги с по две цифри, с водеща нула, когато е необходимо. */