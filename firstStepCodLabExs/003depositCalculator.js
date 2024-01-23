function depositCalculator3 (input)
{
  let deposit = Number(input[0]);
  let period = Number(input[1]);
  let gpr = Number(input[2]);


  let interest = period * ((deposit * gpr /100)/12 );
  let totalSum = deposit + interest;

  console.log(totalSum);

}
depositCalculator3(["200 ",
  "3 ",
  "5.7 "])
