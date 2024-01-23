function primePairs(input) {
    let oneLevCoins = Number(input[0])
    let twoLevCoins = Number(input[1])
    let fiveLevCoins = Number(input[2])
    let sum = Number(input[3])

    for (let one = 0; one <= oneLevCoins; one++) {
        for (let two = 0; two <= twoLevCoins; two++) {
            for (let five = 0; five <= fiveLevCoins; five++) {
                if (one * 1 + two * 2 + five * 5 == sum) {
                    console.log(`${one} * 1 lv. + ${two} * 2 lv. + ${five} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}

primePairs([3,
    2,
    3,
    10
 
])