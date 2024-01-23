function schoolCamp (input)
{
   let season = input[0];
   let typeOfGroup = input[1];
   let numStudent = Number(input[2]);
   let numOverNights = Number(input[3]);

   let typeSport = '';
   let price = 0;

   if (season === 'Winter' ){
     switch (typeOfGroup){
      case 'boys':
         typeSport = 'Judo';
         price = (numStudent * 9.60)* numOverNights;
         break;
         case 'girls':
            typeSport ='Gymnastics';
            price = (numStudent * 9.60)* numOverNights;
            break;
            case 'mixed':
               typeSport = 'Ski';
               price = (numStudent * 10)* numOverNights;
               break;

     }
   }
    else if (season === 'Spring' ){
      switch (typeOfGroup){
       case 'boys':
          typeSport = 'Tennis';
          price = (numStudent * 7.20)* numOverNights;
          break;
          case 'girls':
             typeSport ='Athletics';
             price = (numStudent * 7.20)* numOverNights;
             break;
             case 'mixed':
                typeSport = 'Cycling';
                price = (numStudent * 9.50)* numOverNights;
                break;
 
      }
    }
    else if (season === 'Summer' ){
      switch (typeOfGroup){
       case 'boys':
          typeSport = 'Football';
          price = (numStudent * 15)* numOverNights;
          break;
          case 'girls':
             typeSport ='Volleyball';
             price = (numStudent * 15)* numOverNights;
             break;
             case 'mixed':
                typeSport = 'Swimming';
                price = (numStudent * 20)* numOverNights;
                break;
 
      }
    }
    if ( numStudent >= 10 && numStudent < 20){
       price *= 0.95;
    }
    else if(numStudent >= 20 && numStudent < 50){
      price *= 0.85;
    }
    else if (numStudent >= 50 ){
      price *= 0.50;
    }
    console.log(`${typeSport} ${price.toFixed(2)} lv.`);
   
}

schoolCamp(['Spring',
   'mixed',
   17,
   14
   
   ])

/* Частно училище организира лагери за учениците по време на ваканциите. 
В зависимост от вида на ваканцията (пролетна, лятна или зимна)
 и вида на групата (момчета/момичета или смесена) 
 цената на нощувката в хотела е различна, 
 както и спортът, който ще практикуват учениците.
	             Зимна ваканция	Пролетна ваканция	Лятна ваканция
момчета/момичета	    9.60	         7.20	              15
смесена група	        10	         9.50	              20
Училището получава отстъпка от крайната цена, в зависимост от броя на настанените в хотела ученици:
•	Ако броят на учениците е 50 или повече, училището получава 50% отстъпка
•	Ако броят на учениците е 20 или повече и в същото време по-малък от 50, училището получава 15% отстъпка
•	Ако броят на учениците е 10 или повече и в същото време по-малък от 20, училището получава 5% отстъпка
В таблицата по-долу са дадени спортовете, които ще се практикуват в 
зависимост от вида на ваканцията и групата:
	       Зимна ваканция	Пролетна ваканция	Лятна ваканция
момичета	  Gymnastics	        Athletics	      Volleyball
момчета	    Judo	               Tennis	       Football
смесена група	Ski	           Cycling	       Swimming
Да се напише програма, която пресмята цената, която ще заплати училището за нощувките и принтира спорта, който ще се практикува от учениците.
Вход
От конзолата се четат 4 реда:
1.	Сезонът – текст - “Winter”, “Spring” или “Summer”;
2.	Видът на групата – текст - “boys”, “girls” или “mixed”;
3.	Брой на учениците – цяло число в интервала [1 … 10000];
4.	Брой на нощувките – цяло число в интервала [1 … 100].
Изход
На конзолата се отпечатва 1 ред:
•	Спортът, който са практикували учениците и цената за нощувките, 
която е заплатило училището, форматирана до втория знак след десетичната запетая, в следния формат:
"{спортът} {цената} lv.“
 */