
    function test2(input) {
        let num = Number(input[0])
    
        let oddSum = 0;
        let oddMin = Number.MAX_SAFE_INTEGER;
        let oddMax = Number.MIN_SAFE_INTEGER;
        let evenSum = 0;
        let evenMin = Number.MAX_SAFE_INTEGER;
        let evenMax = Number.MIN_SAFE_INTEGER;
    
        for (let i = 1; i <= num; i++) {
    
    
            if (i % 2 === 0) {
                let numEven = Number(input[i]);
                evenSum += numEven;
                if (numEven < evenMin) {
                    evenMin = numEven;
                }
                if (numEven > evenMax) {
                    evenMax = numEven;
                }
            }
            else {
                let numOdd = Number(input[i]);
                oddSum += numOdd;
                if (numOdd < oddMin) {
                    oddMin = numOdd;
                }
                if (numOdd > oddMax) {
                    oddMax = numOdd;
                }
            }
    
    
        }
         if (num === 0){
            //console.log(`OddSum=${oddSum.toFixed(2)},`);
            //console.log(`OddMin=${'No'},`);
            //console.log(`OddMax=${'No'},`);
           // console.log(`EvenSum=${evenSum.toFixed(2)},`);
            //console.log(`EvenMin=${'No'},`);
            //console.log(`EvenMax=${'No'}`);
        }
          if (oddSum === 0) {
            console.log(`OddSum=${oddSum.toFixed(2)}, `);
            console.log(`OddMin=${'No'}, `);
            console.log(`OddMax=${'No'},`);
           // console.log(`EvenSum=${evenSum.toFixed(2)},`);
           // console.log(`EvenMin=${evenMin.toFixed(2)},`);
           // console.log(`EvenMax=${evenMax.toFixed(2)}`);
        }
         if (evenSum === 0) {
           // console.log(`OddSum=${oddSum.toFixed(2)}, `);
           // console.log(`OddMin=${oddMin.toFixed(2)}, `);
            //console.log(`OddMax=${oddMax.toFixed(2)},`);
            console.log(`EvenSum=${evenSum.toFixed(2)},`);
            console.log(`EvenMin=${'No'},`);
            console.log(`EvenMax=${'No'}`);
        }
        
    
       else {
    
        console.log(`OddSum=${oddSum.toFixed(2)}, `);
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)}, `);
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
            }
        
       
         
    }

test2([1,
    1
    
])
