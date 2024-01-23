function vowelsSum (input)
{
 let word = input[0];
 let sum = 0;

 for (let i = 0; i < word.length; i++){
    let currentChar = word[i];
    switch (currentChar){
        case 'a':sum +=1;break;
        case 'e':sum +=2;break;
        case 'i':sum +=3;break;
        case 'o':sum +=4;break;
        case 'u':sum +=5;break;
       
    }
    
 }
 console.log(sum);
}

vowelsSum(["hello"])

/* Да се напише функция, която получава, изчислява 
буква	    a	e	i	o	u
стойност	1	2	3	4	5

и отпечатва сумата от стойностите 
на гласните букви според таблицата по-долу: */