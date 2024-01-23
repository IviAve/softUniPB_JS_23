function easterEggs(input) {

    let totalEggs = Number(input[0]);

    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;
    let maxNumEggs = Number.MIN_SAFE_INTEGER;
    let colorMaxEggs = '';

    for (let i = 1;i <= totalEggs;i++){

        let egg = input[i];

        if(egg === 'red'){
            red ++;
            if(red > maxNumEggs){
                maxNumEggs = red;
                colorMaxEggs = egg;
            }

        }if(egg === 'orange'){
            orange ++;
            if(orange > maxNumEggs){
                maxNumEggs = orange;
                colorMaxEggs = egg;
            }

        }if(egg === 'blue'){
            blue ++;
            if(blue > maxNumEggs){
                maxNumEggs = blue;
                colorMaxEggs = egg;
            }

        }if(egg === 'green'){
            green ++;
            if(green > maxNumEggs){
                maxNumEggs = green;
                colorMaxEggs = egg;
            }

        }

    }
console.log(`Red eggs: ${red}`);
console.log(`Orange eggs: ${orange}`);
console.log(`Blue eggs: ${blue}`);
console.log(`Green eggs: ${green}`);
console.log(`Max eggs: ${maxNumEggs} -> ${colorMaxEggs}`);

}

easterEggs(["7",
    "orange",
    "blue",
    "green",
    "green",
    "blue",
    "red",
    "green"])


/* Предстои Великден и едно от най-вълнуващите неща е боядисването на яйца.
 Наличните цветове за боядисване са:
•	червено (red)
•	оранжев (orange)
•	син (blue) 
•	зелен (green) 
Напишете програма, която изчислява какъв е броят на яйцата от всеки цвят и от кой цвят яйцата са най - много,
 като знаете общия им брой и цвета на всяко яйце.
Вход
От конзолата се чете 1 ред:
•	 Броят на боядисаните яйца – цяло число в интервала [1 ... 100]
За всяко яйце се чете:
o	Цветът на яйцето – текст с възможности: "red", "orange", "blue", "green"
Изход
Да се отпечатат на конзолата 5 реда:
•	"Red eggs: {брой на червените яйца}"
•	"Orange eggs: {брой на оранжевите яйца}"
•	"Blue eggs: {брой на сините яйца}"
•	"Green eggs: {брой на зелените яйца}"
•	"Max eggs: {максимален брой на яйцата от цвят} -> {цвят}"
 */