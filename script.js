// Урок 2.1
alert('Я JavaScript!')


// Урок 2.4
let name = 'John';
let admin;

admin = name;

alert(admin);



const myPlanetName = 'Земля';
const currentUserName = 'Вася';

// Урок 2.5

let name = "Ilya";

alert( `hello ${1}` );

alert( `hello ${"name"}` );

alert( `hello ${name}` );


// Урок 2.6

let userName = prompt('Как вас зовут?', "");

alert( `Меня зовут ${userName}` );

// Урок 2.8

let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);

alert(a + b); 



// Урок 2.10


let definition = prompt('Какое «официальное» название JavaScript?', '');

if (definition == 'ECMAScript') {
  alert('Верно!');
} else {
  alert('Не знаете? ECMAScript!');
}



let number = prompt('Введите число', 0);

if (+number > 0) {
  alert( 1 );
} else if (+number < 0) {
  alert(-1);
} else {
  alert(0);
} 




let result;

result = (a + b > 4) ? 'Мало' : 'Много';


let message = (login == 'Сотрудник') ?'Привет' : 
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' : '';

  // Урок 2.11

  if ( 14 >= age && age <= 90)

  if (!(14 >= age && age <= 90))

  if (age < 14 || age > 90)




let userName = prompt('Кто там?', '')

if (userName == 'Админ') {
  let pass = prompt('Пароль?', '')

  if (pass == 'Я главный') {
    alert('Здравствуйте')
  } else if (pass == '' || pass == null) {
    alert('Я вас не знаю')
  } else {
    alert('Отмена')
  }

} else if (userName == '' || userName == null) {
  alert('Отменено')
} else {
  alert('Я вас не знаю')
}

 

 // Урок 2.13
 

 for (let i = 2; i <= 10; i++) {
   if (i % 2 == 1) {
   alert (i)
   }
 }


let i = 0;

while (i < 3){
  alert(`number ${i}!`);
  i++
}

let userInput;

do {
  userInput = prompt('Введите число', 0)
} while (userInput <= 100 && userInput);



let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {

for (let j = 2; j < i; j++) {
  if (i % j == 0) continue nextPrime;
}

alert(i);

}

