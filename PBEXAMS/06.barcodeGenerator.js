function barcodeGenerator(input) {
    let start = String(input[0]);
    let end = String(input[1]);

    let aStart = Number(start[0]);
    let bStart = Number(start[1]);
    let cStart = Number(start[2]);
    let dStart = Number(start[3]);

    let aEnd = Number(end[0]);
    let bEnd = Number(end[1]);
    let cEnd = Number(end[2]);
    let dEnd = Number(end[3]);
    let buff = '';

    for (let a = aStart; a <= aEnd; a++) {
        for (let b = bStart; b <= bEnd; b++) {
            for (let c = cStart; c <= cEnd; c++) {
                for (let d = dStart; d <= dEnd; d++) {
                    if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
                        buff += `${a}${b}${c}${d}` + ' ';
                    }
                }
            }
        }
    }

console.log(buff);

}



barcodeGenerator(["1365",
"5877"])




/* Техниката в магазин за коледни украси се разваля.
 Артикулите, които съдържат четни числа в своя баркод не могат да бъдат маркирани от касиерите.
  Вашата задача е, да напишете програма, която генерира всички баркодове,
   които НЕ съдържат четни цифри в себе си.
Вход:
•	Две четирицифрени числа, които показват обхвата на баркодовете, които трябва да промените.
•	Първи ред – четирицифрено число – началото на обхвата. Цяло число в интервала [1000…9999]
•	Втори ред – четирицифрено число – края на обхвата. Цяло число в интервала [1000…9999]
Изход:
На конзолата трябва да се отпечатат всички "баркодове", които НЕ съдържат четна цифра в себе си, 
разделени с интервал.
 */