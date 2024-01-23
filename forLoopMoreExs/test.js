function test(input) {

    let OddSum = 0;
    let EvenSum = 0;
    let OddMin =Number. MAX_VALUE;
    let OddMax = Number. MIN_VALUE;
    let EvenMin = Number. MAX_VALUE;
    let EvenMax = Number. MIN_VALUE;
    let n = Number(input[0]);
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            let NumberEven = Number(input[i]);
            EvenSum += NumberEven;

            if (NumberEven < EvenMin) {
                EvenMin = NumberEven;
            }
            if (NumberEven > EvenMax) {
                EvenMax = NumberEven;
            }
        }
        else {
            let NumberOdd = Number(input[i]);
            OddSum += NumberOdd;
            if (NumberOdd < OddMin) {
                OddMin = NumberOdd;
            }
            if (NumberOdd > OddMax) {
                OddMax = NumberOdd;
            }

        }
    }
    if (n == 0) {
        console.log("OddSum=" + OddSum);
        console.log("OddMin=No");
        console.log("OddMax=No");
        console.log("EvenSum=" + EvenSum);
        console.log("EvenMin=No");
        console.log("EvenMax=No");
    }
  
    else {
       console.log("OddSum=" + OddSum);
      console.log("OddMin=" + OddMin);
       console.log("OddMax=" + OddMax);
       console.log("EvenSum=" + EvenSum);
       console.log("EvenMin=" + EvenMin);
       console.log("EvenMax=" + EvenMax);
    }

}

test ([1,
    -5
    
    ])

