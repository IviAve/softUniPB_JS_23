function easterBake(input) {

    let numOfEasterBread = Number(input[0]);
    let maxUsedFlour = Number.MIN_SAFE_INTEGER;
    let maxUsedSugar = Number.MIN_SAFE_INTEGER;
    let totalSugar = 0;
    let totalFlour = 0;

    for (let i = 1; i <= numOfEasterBread * 2; i++) {

        let sugar = Number(input[i++]);
        let flour = Number(input[i]);
        totalSugar += sugar;
        totalFlour += flour;

        let maxFlour = flour;
        let maxSugar = sugar;
        if (maxFlour > maxUsedFlour) {
            maxUsedFlour = maxFlour;
        } if (maxSugar > maxUsedSugar) {
            maxUsedSugar = maxSugar;
        }
    }
    let totalPacksSugar = totalSugar / 950;
    let totalPackFlour = totalFlour / 750;

    console.log(`Sugar: ${Math.ceil(totalPacksSugar)}`);
    console.log(`Flour: ${Math.ceil(totalPackFlour)}`);
    console.log(`Max used flour is ${maxUsedFlour} grams, max used sugar is ${maxUsedSugar} grams.`);
}

easterBake(["4",
"500",
"350",
"560",
"430",
"600",
"345",
"578",
"543"])



/* Предстои Великден и Деси е решила да изпече домашни козунаци за колегите си. 
Главните продукти, които ще трябват на Деси са: брашно и захар.
 Един пакет захар е 950 грама, а един пакет брашно е 750 грама
 . Напишете програма, която изчислява колко пакета захар и брашно трябва да купи Деси,
  за да й стигнат за направата на козунаците,
   като знаете за всеки един козунак по колко грама захар и брашно са изразходени.
    Също намерете кое е най-голямото количество захар и брашно, които са използвани.
Вход
От конзолата се чете 1 ред:
•	 Броят на козунаците – цяло число в интервала [1 ... 100]
За всеки козунак се чете:
o	Количество изразходвана захар (грамове) – цяло число в интервала [1 … 10000]
o	Количество изразходвано брашно (грамове) – цяло число в интервала [1 … 10000]
Изход
Да се отпечатат на конзолата 3 реда:
•	"Sugar: {брой нужни пакети захар}"
•	"Flour: {брой нужни пакет брашно}"
•	"Max used flour is {максимално количество грамове брашно, използвани за правенето на козунак} grams, max used sugar is {максимално количество грамове захар, използвани за правенето на козунак} grams."
Пакетите захар и брашно да бъдат закръглени към най-близкото цяло число нагоре.
 */