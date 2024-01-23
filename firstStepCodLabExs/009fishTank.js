function fishTank (input)
{
  let length = Number (input[0]);
  let width  = Number (input[1]);
  let height  = Number (input[2]);
  let percent  = Number (input[3]);

  let volume = (length * width * height)/1000;
  
  let  litres = volume - volume * percent/100;  //  volume * ( 1 - percent/100); or volume - volume *percent/100;

    console.log(litres);
}
fishTank(["85 ",
"75 ",
"47 ",
"17 "])

/* За рождения си ден Любомир получил аквариум с формата на паралелепипед. 
Първоначално прочитаме от конзолата на отделни редове размерите му – дължина, широчина и височина в сантиметри. 
Трябва да се пресметне колко литра вода ще събира аквариума, ако се знае, 
че определен процент от вместимостта му е заета от пясък, растения, нагревател и помпа. 
Един литър вода се равнява на един кубичен дециметър/ 1л=1 дм3/. 
Да се напише програма, която изчислява литрите вода, която са необходими за напълването на аквариума.
Вход
От конзолата се четат 4 реда:
1.	Дължина в см – цяло число в интервала [10 … 500]
2.	Широчина в см – цяло число в интервала [10 … 300]
3.	Височина в см – цяло число в интервала [10… 200]
4.	Процент  – реално число в интервала [0.000 … 100.000]
Изход
Да се отпечата на конзолата едно число:
•	литрите вода, които ще събира аквариума.
обем на аквариумa: 85 * 75 * 47 = 299625 см3
обем в литри: 299625 * 0.001 или  299625 / 1000 => 299.625 литра
заето пространство: 17% = 0.17
нужни литри: 299.625 * (1 - 0.17) = 248.68875 литра

 */