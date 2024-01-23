function lettersCombinations(input) {

    let letter1 = charAt(input[0]);
    let letter2 =charAt (input[1]);
    let letter3 = charAt(input[2]);
    let count = 0;
    let buff= '';
    for (let i = letter1; i <= letter2; i++) {
        for (let j = letter1; j <= letter2; j++) {
            for (let m = letter1; m <= letter2; m++) {
                if (i == letter3 || j == letter3 || m == letter3) {
                    continue;
                }
                else {
                    count++;
                    buff += `${i}${j}${m}` + ' ';
                }
            }

        }
    }
    console.log(buff);
}

lettersCombinations(['a',
    'c',
    'b'
])

/* Входът се чете от конзолата и съдържа точно 3 реда:
Ред 1.	Малка буква от английската азбука за начало на интервала – от ‘a’ до ‚z’.
Ред 2.	Малка буква от английската азбука за край на интервала  – от първата буква до ‚z’.
Ред 3.	Малка буква от английската азбука – от ‘a’ до ‚z’ – като комбинациите съдържащи тази буквата се пропускат.
Изход
Да се отпечатат на един ред всички комбинации отговарящи на условието плюс броят им разделени с интервал.
 */