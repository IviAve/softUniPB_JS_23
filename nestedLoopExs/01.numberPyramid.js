function numberPyramid (input){

    let n = Number(input[0]);

let current = 1;
let isBigger = false;
let buff = '';

for (let rows = 1; rows <= n; rows++)
{
    for (let cols = 1; cols <= rows; cols++)
    {
        if (current > n)
        {
            isBigger = true;
            break;
        }
        buff += current + ' ';
        current++;
    }
    console.log(buff);
    buff = '';
    if (isBigger)
    {
        break;
    }
    

}
}
numberPyramid(["12"])

/* 1.	Пирамида от числа
Напишете функция, която получава цяло число n и отпечатва пирамида от числа, като в примерите:
 */