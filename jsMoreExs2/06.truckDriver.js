function truckDriver(input) 
{
    let season = input[0];
    let kmForMonth = Number(input[1]);

    let monthSalary = 0;
    let salary = 0;

    if (kmForMonth <= 5000) {
        switch (season) {
            case 'Spring':
            case 'Autumn':
                monthSalary = kmForMonth * 0.75;
                break;
            case 'Summer':
                monthSalary = kmForMonth * 0.90;
                break;
            case 'Winter':
                monthSalary = kmForMonth * 1.05;
                break;

        }
    }
     else if (kmForMonth > 5000 && kmForMonth <= 10000) {
        switch (season) {
            case 'Spring':
            case 'Autumn':
                monthSalary = kmForMonth * 0.95;
                break;
            case 'Summer':
                monthSalary = kmForMonth * 1.10;
                break;
            case 'Winter':
                monthSalary = kmForMonth * 1.25;
                break;

        }
    }
    else if (kmForMonth > 10000 && kmForMonth <= 20000) {
        monthSalary = kmForMonth * 1.45;
    }
    salary = monthSalary * 4;
    salary *= 0.90;
    console.log(salary.toFixed(2));
}

truckDriver(['Autumn',
    8600
])

/* 6.	Шофьор на ТИР
Напишете програма която пресмята колко пари ще изкара шофьор на ТИР за един сезон.
 На входа програмата получава през кой сезон ще работи шофьора, 
 както и колко километра на месец ще кара. Един сезон е 4 месеца. 
 Според зависи сезона и броя километри на месец ще му се заплаща различна сума 
 на километър:

                              Пролет/Есен	  Лято	         Зима
км на месец <= 5000	         0.75 лв./км	0.90 лв./км	   1.05 лв./км
5000 < км на месец <= 10000	  0.95 лв./км	1.10 лв./км	   1.25 лв./км
10000 < км на месец <= 20000	1.45 лв./км – за който и да е сезон

След като са извадени 10% за данъци се отпечатват останалите пари.
Вход
Входът се чете от конзолата и се състои от два реда:
•	Първи ред – Сезон – текст "Spring", "Summer", "Autumn" или "Winter"
•	Втори ред –  Километри на месец – реално число в интервала [10.00...20000.00]
Изход
На конзолата трябва да се отпечатат едно число:
•	Заплатата на шофьора след данъците, форматирана до втория знак след десетичната запетая.
 */