/*
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



 // Урок 2.14

let browser = 'Chrome';

if (browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
  alert('Okay we support these browsers too');
} else {
  alert('We hope that this page looks ok!');
}

const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
  case 0 :
  alert('Вы ввели число 0');
  break;

  case 1 :
  alert('Вы ввели число 1');
  break;

  case 2 :
  case 3 :
  alert('Вы ввели число 2, а может и 3');
  break;
}



// Урок 2.15


function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');

}


function min (a, b) {
 if (a < b) {
   return a;
 } else {
   return b;
 }
}



function pow (x, n) {
  return x**n
}

let x = prompt('Введите значение x', 2)
let n = prompt('Введите значение n', 2)
let result = (x**n);

console.log(result)



function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Сепень ${n} не поддерживается, используется натуральное число`)
} else {
  alert (pow (x,n));
}


// Урок 2.17

let ask = (question, yes, no) => {
  if (confirm(question)) yes()
  else no ();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);


// Урок 3.2

function pow(x, n) 
{
  let result = 1;
  for (let i = 0; i < n; i++) 
  {result *= x; }
  return result;
}

let x = prompt("x?", ''), 
n = prompt("n?", '');

if (n < 0) 
{
  alert(`Степень ${n} не поддерживается, 
  введите целую степень, большую 0`);
} else {
  alert(pow(x, n));
}



// Урок 4.1

let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";

delete user.name;




function isEmpty (obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}



let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;



  for (let key in salaries) {
   sum += salaries[key]
  }
  
  alert(sum);






function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}



// Урок 4.2

let calculator = {
  mul () {
    return this.a * this.b;
  },
  sum() {
    return this.a + this.b;
  },
  read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());



let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () { // показывает текущую ступеньку
    alert (this.step)
    return this;
  }
};

ladder.up().up().up().down().up().down().showStep();



// Урок 4.3

let obj = {};

function A() { 
  return obj;
}
function B() {
  return obj;
}

alert(new A() == new B());





function Calculator () {
this.read = function () {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };
    this.mul = function () {
    return this.a * this.b;
  };

}

let calculator = new Calculator();

calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());




function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("Число?", 0);
    
  };

}

let accumulator = new Accumulator(10);
accumulator.read();
accumulator.read();


alert(accumulator.value);



// Урок 5.1


let a = +prompt("Введите 1 число!", '');
let b = +prompt("Введите 2 число!", '');


alert (a + b);



alert(Math.round(6.35 * 10) / 10);




function readNumber () {
let num;

  do {
    num = +prompt("Введите число!", 0);
  } while (!isFinite(num));

  if (num === null || num === '') return null;

  return +num;
}

alert(`число: ${readNumber()}`);




function random(min, max) {
 return min + Math.random() * (max - min);
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));



function randomInteger(min, max) {
  let random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

alert(randomInteger(1, 5)); 
alert(randomInteger(1, 5)); 
alert(randomInteger(1, 5));





let str = prompt('Введите строку', '');

function ucFirst() {
  str = prompt('Введите строку', '');

  if (str != '') return true;

}

alert(str[0].toUpperCase() + str.slice(1));



function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst("вася"));


let str = prompt('Spam check', '');

function checkSpam (str) {
  let lowStr = str.toLowerCase();

  return lowStr.includes('viagra') || lowStr.includes('XXX');
 
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));



function truncate(str, maxlength) {
  return (str.legth > maxlength) ?
     str.slice(0, maxlength - 1) + '…' : str;
  }



function extractCurrencyValue(str) {
  return +str.slice(1);
}

*/


// Урок 5.3