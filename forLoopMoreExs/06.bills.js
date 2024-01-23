function bills(input) {

    let months = Number(input[0]);

    let billForWater = months * 20;
    let billForInternet = months * 15;
    let billForElectricity = 0;


    for (let i = 1; i <= months; i++) {
        let electricity = Number(input[i]);

        billForElectricity += electricity;


    }

   let other = (billForElectricity + billForInternet + billForWater);
   let totalOther = other + (other*0.20);
    let average = (billForElectricity + billForInternet + billForWater + totalOther) / months;

    console.log(`Electricity: ${billForElectricity.toFixed(2)} lv`);
    console.log(`Water: ${billForWater.toFixed(2)} lv`);
    console.log(`Internet: ${billForInternet.toFixed(2)} lv`);
    console.log(`Other: ${totalOther.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);

}

bills([8,
    123.54,
    231.54,
    140.23,
    100,
    122.4,
    430,
    178.52,
    64.2
    
])

/* Напишете програма която да пресмята средният разход за месец на семейство за даден период време. 
За всеки месец разходите са следните:
•	За ток – всеки месец е различен, ще се чете от конзолата
•	за вода – 20 лв.
•	за интернет – 15 лв.
•	за други – събират се тока, водата и интернета за месеца и към сумата се прибавят 20%.
За всеки разход трябва да се пресметне колко общо е платено за всички месеци.
Вход
Входът се чете от конзолата:
•	Първи ред – месеците за които се търси средният разход – цяло число в интервала [1...100]
•	За всеки месец – сметката за ток – реално число в интервала [1.00...1000.00]
Изход
Да се отпечата на конзолата 5 реда:
•	1ви ред: "Electricity: {ток за всички месеци} lv"
•	2ри ред: "Water: {вода за всички месеци} lv"
•	3ти ред: "Internet: {интернет за всички месеци} lv"
•	4ти ред: "Other: {други за всички месеци} lv"
•	5ти ред: "Average: {средно всички разходи за месец} lv"
Всички числа трябва да са форматирана до вторият знак след запетаята.
 */