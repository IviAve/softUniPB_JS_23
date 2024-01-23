function minNumber(input) {
    let num = (input[0]);
    let index = 1;
    let mixNum = Number.MAX_SAFE_INTEGER;

    while (num !== 'Stop') {
        let currentNum = Number(num);

        if (currentNum < mixNum) {
            mixNum = currentNum;

        }

        num = input[index];
        index++;
    }
    console.log(mixNum);
}
minNumber(["45",
    "-20",
    "7",
    "99",
    "Stop"])





