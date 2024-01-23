function radiansTodegrees2 (input)
{
  let radians = Number(input[0]);
  let degrees = radians * 180/Math.PI;

  console.log(degrees);
}
radiansTodegrees2(["6.2832"]);