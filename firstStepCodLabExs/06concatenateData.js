function gretingByName (input)
{
  let firstName = input[0];
  let lastName  = input[1];
  let age = Number (input[2]);
  let sity = input[3];

  console.log ("You are " + firstName + " " + lastName +", a " + age + "-years old person from " + sity +".");

  
}
gretingByName(["Maria" , "Ivanova" , "20" , "Sofia"]);