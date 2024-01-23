function weatherForecast (input)
{
  let text = input[0];

  switch (text){
    case 'sunny':console.log("It's warm outside!");break;
    default:console.log("It's cold outside!");break;

  }
    
  
  
}

weatherForecast(['cloudy'])

/* Напишете програма, която познава дали е топло или студено навън.
 От конзолата се чете един ред – текст, който подсказва какво е времето. 
 При въвеждане на "sunny" трябва да се отпечата "It's warm outside!". 
 Във всички останали случаи трябва да се отпечата "It's cold outside!".  */