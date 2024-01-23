function celsiusTotFahrenheit (input)
{
  let celsium = Number(input[0]);
  let fahreheit = celsium * 1.8000 + 32.00;
  console.log(fahreheit.toFixed(2));
}

celsiusTotFahrenheit([-5.5])