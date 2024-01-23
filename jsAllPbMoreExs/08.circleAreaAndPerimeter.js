function circleAreaAndPerimeter (input)
{
  let  r = Number(input[0]);

  let S = Math.PI * r * r;
  let R = 2 *Math.PI * r;

  console.log(S.toFixed(2));
  console.log(R.toFixed(2));

}

circleAreaAndPerimeter([4.5])

/* Напишете програма, която чете от конзолата число r и пресмята и 
отпечатва лицето и периметъра на кръг / окръжност с радиус r,
 като форматирате изхода в следния вид: "<calculated area>" 
"<calculated parameter>".
 Форматирайте изходните данни до втория знак след десетичната запетая.
 */