function workingHours(input)
{
 let hourTime = Number(input[0]);
 let dayOfWeek = input[1];

 switch (dayOfWeek)
 {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
    case "Saturday":
        if ( hourTime >=10 && hourTime < 18)
        {
            console.log('open');

        }
       else 
        {
            console.log('closed');
        }
       
        break;
        
        default:
        {
            console.log('closed');
        }
 }

}

workingHours(["19",
"Friday"])






/* Да се напише функция, която получава час от денонощието(цяло число) и ден от седмицата(текст) и 
проверява дали офисът на фирма е отворен, като работното време на офисът е от 10-18 часа, 
от понеделник до събота включително. */