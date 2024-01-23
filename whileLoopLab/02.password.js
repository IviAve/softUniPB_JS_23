function password (input){

 let name = (input[0]);
 let password = (input[1]);

 let index = 2;
 let command = (input[index]);
 index++;

 while (command !== password){
    command = input[index];
    index ++;
 }

console.log(`Welcome ${name}!`);
}

password(["Gosho",
"secret",
"secret"])



/*  Напишете функция, която първоначално прочита име и парола на потребителски профил. 
След това чете парола за вход. 
•	при въвеждане на грешна парола: потребителя да се подкани да въведе нова парола.
•	при въвеждане на правилна парола: отпечатваме "Welcome {username}!".
*/