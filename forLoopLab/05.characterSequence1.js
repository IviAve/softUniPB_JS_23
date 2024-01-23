function characterSequence1 (input)
{

    let text = input[0];
  for (let i = 0 ; i < text.length; i++){
  let letter = text[i];
  console.log(letter);
  }
}

characterSequence1(["ice cream"])

/* Напишете функция, която получава текст (стринг)
 и печата всеки символ от текста на отделен ред */