function carNumber(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let buff = '';

    for (let a = startNum; a <= endNum; a++) {
        for (let b = startNum; b <= endNum; b++) {
            for (let c = startNum; c <= endNum; c++) {
                for (let d = startNum; d <= endNum; d++) {
                    if (((a % 2 === 0 && d % 2 !== 0) || (a % 2 !== 0 && d % 2 === 0)) && a > d && (b + c) % 2 === 0) {
                        buff += `${a}${b}${c}${d}` + ' ';
                    }
                }
            }
        }
    }
    console.log(buff);
}

carNumber([5,
    8
])

/* Поздравления, поради вашите задълбочени знания в сферата на програмирането МВР реши да наеме точно вас 
за създаването на новата им система за генериране на специални автомобилни номера. 
Всеки един специален автомобилен номер се състой от четири числа. 
Условията, които разграничават специалните от обикновените номера са следните: 
•	Ако номерът започва с четна цифра, то той трябва да завършва на нечетна цифра и обратното – 
ако започва с нечетна,  завършва на четна
•	Първата цифра от номера е по-голяма от последната
•	Сумата от втората и третата цифра трябва да е четно число
Входа се състой от две числа - начало и край на интервал, между които трябва да се генерира всяко едно число от номера.
Вход
1.	Първи ред - едноцифрено число - началото на интервала – цяло число в интервала [1…9]
2.	Втори ред - едноцифрено число - края на интервала – цяло число в интервала [1…9]
Изход
На конзолата трябва да се отпечатат всички специални номера, разделени с интервал.
 */