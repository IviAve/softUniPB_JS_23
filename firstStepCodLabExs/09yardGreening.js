function yardGreening (input)
{
   let metersForGreening = Number(input[0]);

   let totalPrice = metersForGreening * 7.61;
   let discount = totalPrice * (18/100);

     console.log (`The final price is: ${totalPrice - discount} lv.`);
     console.log (`The discount is: ${discount} lv.`);   
}
yardGreening (["150"])