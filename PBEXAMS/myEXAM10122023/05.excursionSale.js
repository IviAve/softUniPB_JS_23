function excursionSale (input) {

    let seaCount = Number(input[0]);
    let moutainCount = Number(input[1]);

    let profit = 0;

    let index = 2;
    let command = input[index];
    index++;

    while (command !== 'Stop') {
        let inputLine = command;
        if (inputLine == "Stop") {


            break;
        }
        if (inputLine == "sea" && seaCount != 0) {
            profit += 680;
            seaCount--;
        }
        else if (inputLine == "mountain" && moutainCount != 0) {
            profit += 499;
            moutainCount--;
        }

        if (seaCount == 0) {
            if (moutainCount == 0) {

                break;
            }
        }

        if (moutainCount == 0) {


            if (seaCount == 0) {


                break;
            }
        }

        command = input[index];
        index++;
    }


    if (command != "Stop") {
        console.log(`Good job! Everything is sold.`);
        console.log(`Profit: ${profit} leva.`);
    }
    else {
        console.log(`Profit: ${profit} leva.`);
    }

}

excursionSale(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])



/* Туристическа фирма разпродава финални екскурзионни пакети за края на годината. Напишете програма, която да изчислява, печалбата от разпродажбата и дали са продадени всички пакети или не, като знаете първоначалния брой екскурзии и техните цени. Фирмата предлага два вида екскурзии – море ("sea") на цена 680 лева и планина ("mountain") на цена 499 лева. При избор на даден пакет, към общата сума се добавя съответната цена. При избор на пакет, който вече не е наличен (броят му е равен на 0), не трябва да се добавя към общата цена.
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