function challengeTheWedding(input) {
    let men = Number(input[0]);
    let women = Number(input[1]);
    let tables = Number(input[2]);
    let numTables = 0;
    let buff = '';
    for (let i = 1; i <= men; i++) {
        for (let j = 1; j <= women; j++) {
            numTables++;
            buff += `(${i} <-> ${j}) `;
            if (numTables == tables) {
                break;
            }
        }
        if (numTables == tables) {
            break;
        }
    }
    console.log(buff);
}

challengeTheWedding([2,
    2,
    3
    
    ])

/* Провокирани от сватбата си, Михаела и Иван решават да предоставят нова услуга 
на клиенти на ресторанта си, а именно вечеря за запознанства - "Предизвикай Сватбата".
 Напишете програма, която отпечатва всички възможни срещи на клиентите на ресторанта. 
 При настаняване всеки мъж и всяка жена получават талончета с поредни номера стартирайки от 1.
  Ако бъдат заети всички маси, програмата трябва да приключи. Всяка маса има две места.
Вход
От конзолата се четат точно 3 числа, всяко на отделен ред:
•	Броя клиенти мъже - цяло число в интервала [1...100]
•	Броя клиенти жени - цяло число в интервала [1...100]
•	Максималният брой маси - цяло число в интервала [1...100]
Изход
На конзолата се принтират на един ред, разделени с интервал всички срещи в следният формат:
•	({№ клиент} <-> {№ клиент}) ({№ клиент} <-> {№ клиент}) ...
 */