
    
        function onTimeForTheExam (input)
        {
            //Вход
            //От конзолата се четат 4 цели числа (по едно на ред), въведени от потребителя:
            //•	Първият ред съдържа час на изпита – цяло число от 0 до 23.
            //•	Вторият ред съдържа минута на изпита – цяло число от 0 до 59.
            //•	Третият ред съдържа час на пристигане – цяло число от 0 до 23.
            //•	Четвъртият ред съдържа минута на пристигане – цяло число от 0 до 59.
            let hourForExam = Number(input[0]);
            let minutesForExam = Number(input[1]);
           let hourForArrival = Number(input[2]);
           let minutesForArrival = Number(input[3]);

            let difference = 0;
            let hour = 0;
           let minutes = 0;

            minutesForExam += hourForExam * 60;
            minutesForArrival += hourForArrival * 60;

            if (minutesForArrival > minutesForExam)
            {
                difference = minutesForArrival - minutesForExam;

                console.log('Late');

                if (difference >= 60){

                    hour =Math.floor (difference / 60);
                    minutes = difference % 60;
                    if(minutes < 10){
                        console.log(`${hour}:0${minutes} hours after the start`);
                    }else {
                        console.log(`${hour}:${minutes} hours after the start`);
                    }
                }
                else{
                
                        console.log(`${difference} minutes after the start`);
                    
                }

            }
            else if ((minutesForExam - minutesForArrival ) >30){

            
                difference = minutesForExam - minutesForArrival;
                console.log('Early');

                if (difference >= 60){
                    hour =Math.floor( difference / 60);
                    minutes = difference % 60;
                    if (minutes < 10){
                        console.log(`${hour}:0${minutes} hours before the start`);

                    }else{
                        console.log(`${hour}:${minutes} hours before the start`);

                    }
                    
                }
                else
                {
                    console.log(`${difference} minutes before the start`);
                }
            }
            else
            {
                console.log('On time');
                difference = minutesForExam - minutesForArrival;
                if(difference > 0){
                    
                        console.log(`${difference} minutes before the start`);
                    
                }
                
                
            }

            
        }
        onTimeForTheExam(["11",
        "30",
        "8",
        "12"])
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    


//Студент трябва да отиде на изпит в определен час (например в 9:30 часа). 
//Той идва в изпитната зала в даден час на пристигане (например 9:40).
//Счита се, че студентът е дошъл навреме, ако е пристигнал в часа на изпита или до половин час преди това.
 //Ако е пристигнал по-рано повече от 30 минути, той е подранил.
//Ако е дошъл след часа на изпита, той е закъснял. Напишете програма, 
//която прочита време на изпит и време на пристигане и отпечатва дали студентът е дошъл навреме,
//дали е подранил или е закъснял и с колко часа или минути е подранил или закъснял.
//Изход
//На първият ред отпечатайте:
//•	“Late”, ако студентът пристига по-късно от часа на изпита.
//•	“On time”, ако студентът пристига точно в часа на изпита или до 30 минути по-рано.
//•	“Early”, ако студентът пристига повече от 30 минути преди часа на изпита.
//Ако студентът пристига с поне минута разлика от часа на изпита, отпечатайте на следващия ред:
//•	
//“mm minutes after the start” за закъснение под час.
//•	“hh:mm hours after the start” за закъснение от 1 час или повече. Минутите винаги печатайте с 2 цифри, например “1:03”.

