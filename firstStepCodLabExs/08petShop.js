function petShop (input)
{
  let packsDogFood = Number(input[0]);
  let packsCatFood = Number(input[1]);

   let totalPrice = (packsDogFood * 2.50) + (packsCatFood * 4) ;

   console.log(`${totalPrice} lv.`);
   
}
petShop(["13" , "9"])