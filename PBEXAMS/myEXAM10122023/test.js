function multiplyTable (input){
    let num = String(input[0]);
    
    let digit1 =Number(num[2]) ;
    let digit2 = Number(num[1]);
    let digit3 = Number(num[0]);
    
   
    
    for( let a = 1; a <= digit1;a++){
        for (let b = 1;b<= digit2;b++){
            for(let c = 1;c <= digit3;c++){
                 console.log(`${a} * ${b} * ${c} = ${a*b*c};`);
    
            }
        }
    
    }
    
    
    }
    
    multiplyTable(["324"])

/* Туристическа фирма разпродава финални екскурзионни пакети за края на годината.
 Напишете програма, която да изчислява, печалбата от разпродажбата и дали са продадени всички пакети или не,
  като знаете първоначалния брой екскурзии и техните цени. 
  Фирмата предлага два вида екскурзии – море ("sea") на цена 680 лева и планина ("mountain") на цена 499 лева.
   При избор на даден пакет, към общата сума се добавя съответната цена. 
   При избор на пакет, който вече не е наличен (броят му е равен на 0), не трябва да се добавя към общата цена.
Вход:
От конзолата първоначално се четат 2 реда:
1.	Брой екскурзии за море – цяло число в интервала [1… 500]
2.	Брой екскурзии за планина – цяло число в интервала [1… 500]
След това се чете по един ред до получаване на команда "Stop" или докато фирмата не продаде всички пакети:
•	Име на пакет – текст с възможности "sea" или "mountain"
Изход:
На конзолата се отпечатват 1 или  2 реда, според случая: 
•	Ако фирмата е успяла да продаде всички пакети:
" Good job! Everything is sold." 
Винаги се отпечатва:
"Profit: {печалба от продажбите} leva."
 */