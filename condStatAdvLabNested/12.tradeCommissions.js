function tradeCommissions(input) {
    let town = input[0];
    let volumeSales = Number(input[1]);

    let commissions = 0;

    if (town == 'Sofia') 
    {

        if (volumeSales > 0 && volumeSales <= 500) {
            commissions = volumeSales * 5 / 100;
        }
        else if (volumeSales > 500 && volumeSales <= 1000) {
            commissions = volumeSales * 7 / 100;
        }
        else if (volumeSales > 1000 && volumeSales <= 10000) {
            commissions = volumeSales * 8 / 100;
        }
        else if (volumeSales > 10000) {
            commissions = volumeSales * 12 / 100;
        }
        

    }

 else if (town == 'Varna')
  {
    if (volumeSales > 0 && volumeSales <= 500) {
        commissions = volumeSales * 4.5 / 100;
    }
    else if (volumeSales > 500 && volumeSales <= 1000) {
        commissions = volumeSales * 7.5 / 100;
    }
    else if (volumeSales > 1000 && volumeSales <= 10000) {
        commissions = volumeSales * 10 / 100;
    }
    else if (volumeSales > 10000) {
        commissions = volumeSales * 13 / 100;
    } 
    

  }

 else if (town == 'Plovdiv')
  {
            if (volumeSales > 0 && volumeSales <= 500) {
                commissions = volumeSales * 5.5 / 100;
            }
            else if (volumeSales > 500 && volumeSales <= 1000) {
                commissions = volumeSales * 8 / 100;
            }
            else if (volumeSales > 1000 && volumeSales <= 10000) {
                commissions = volumeSales * 12 / 100;
            }
            else if (volumeSales > 10000) {
                commissions = volumeSales * 14.5 / 100;
            }
           


        

    }
 if (commissions !== 0)
 {
    console.log(commissions.toFixed(2));
 }
 else{
    console.log('error');
 }
  

}

tradeCommissions(["Varna",
"-50"])




/* Фирма дава следните комисионни на търговците си според града, в който работят и обема на продажбите:
Град	0 ≤ s ≤ 500  	500 < s ≤ 1 000	 1 000 < s ≤ 10 000	  s > 10 000
Sofia	    5%	              7%	            8%	            12%
Varna	   4.5%	             7.5%	           10%	            13%
Plovdiv	   5.5%	              8%	           12%	           14.5%
Напишете функция, която  получава име на град (стринг) и обем на продажби (число) 
и изчислява и извежда размера на търговската комисионна според горната таблица.
 Резултатът да се изведе форматиран до 2 цифри след десетичната точка. 
 При невалиден град или обем на продажбите (отрицателно число) да се отпечата "error". 
 
 */