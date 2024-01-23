function multiplicationTable (){
 for (let a = 1;a<=10;a++){
    for (let b = 1;b<= 10;b++){
        let c = a* b;
        console.log(`${a} * ${b} = ${c}`);
    }
 }
}
multiplicationTable()

/*  Отпечатайте на конзолата таблицата за умножение за числата от 1 до 10 във формат: 
"{първи множител} * {втори множител} = {резултат}". 
*/