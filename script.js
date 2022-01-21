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




// Урок 5.3

let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");

styles[Math.floor((styles.length - 1) / 2)] = "Классика";
//styles[1] = "Классика";

styles.shift("Джаз");

styles.unshift("Рэп", "Регги");

console.log(styles)





function sumInput() {

  let numbers = [];
  
   while (true) {

     let value = prompt("Введите число", 0);

     if (value === '' || value === null || !isFinite(value)) break;

     numbers.push(+value);
  }

  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }

  return sum;
}

console.log(sumInput() );



function getMaxSubSum(arr) {
let maxSum = 0;

 

 for (let i = 0; i < arr.length; i++) {
   let sumFixedStart = 0;
   for (let j = i; j < arr.length; j++) {
     sumFixedStart += arr[j];
     maxSum = Math.max(maxSum, sumFixedStart);
   }
 }

 return maxSum;
}


getMaxSubSum([-1, 2, 3, -9]);
getMaxSubSum([2, -1, 2, 3, -9]);
getMaxSubSum([-1, 2, 3, -9, 11]);
getMaxSubSum([-2, -1, 1, 2]);
getMaxSubSum([100, -9, 2, -3, 5]);
getMaxSubSum([1, 2, 3]);

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // для каждого элемента массива
    partialSum += item; // добавляем значение элемента к partialSum
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
  }

  return maxSum;
}

alert(getMaxSubSum([-1, 2, 3, -9])); // 5
alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
alert(getMaxSubSum([-2, -1, 1, 2])); // 3
alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100
alert(getMaxSubSum([1, 2, 3])); // 6
alert(getMaxSubSum([-1, -2, -3])); // 0



// Урок 5.6




function camelize(str) {

return str

.split('-')
.map(
  (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice()
)

.join('');
}



function filterRange(arr, a, b) {

return arr.filter(item => (a <= item && item <= b));

}
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1 (совпадающие значения)

alert(arr); // 5,3,8,1 (без изменений)



function filterRangeInPlace(arr, a, b) {

 for (let i = 0; i < arr.length; i++) {
   let val = arr[i]

   if (val < a || val > b) {
     arr.splice(i, 1);
     i--;
   }
 }

}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert(arr); // [3, 1]



function copySorted(arr) {
 return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (без изменений)




function Calculator () {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

  let split = str.split(' '),
    a = +split[0],
    op = split[1],
    b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    } 
    return this.methods[op] (a, b);
  }

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}





let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(item => item.name);



alert(names); // Вася, Петя, Маша




function sortByAge() {
  arr.sort((a, b) => a.age > b.age ? 1 : 1);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

sortByAge(arr);

// теперь отсортировано: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя



let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.forEach(function(users) {
  alert(`Fullname: ${users.name}` + " " + `${users.surname}` + "," + " " + "id:" + " " + `${users.id}`);
});



let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));



function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  
}

let arr = [1, 2, 3];
shuffle(arr);
alert(arr);



function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

    // поменять элементы местами
    // мы используем для этого синтаксис "деструктурирующее присваивание"
    // подробнее о нём - в следующих главах
    // то же самое можно записать как:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}



let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let users = [vasya, petya, masha];

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let arr = [vasya, petya, masha];

alert(getAverageAge(arr)); // 28


function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings));



function unique(arr) {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values)); // Hare,Krishna,:-O




function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word)
  }
  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"



let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); // name, more



let messageRead = new WeakSet();


let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

messageRead.add("Hello"[0]);
messageRead.add("How goes?"[1]);


alert("Read message 0: " + messageRead.has(messages[0]));

messageRead.shift()



let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let messageRead = new WeakMap();

messageRead.set(messages[0], new Date(2017, 1,1));







function sumSalaries(salaries) {

  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum; // 650
}


let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert(sumSalaries(salaries)); // 650



function count(obj) {
 return Object.values(obj).length;
  
}

let user = {
  name: 'John',
  age: 30
};

alert(count(user)); // 2



let user = { name: "John", years: 30 };

let { name, years: age, isAdmin = false} = user;

alert(name); // John
alert(age); // 30
alert(isAdmin); // false



let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};


function topSalary(salaries) {
 let max = 0;
 let maxName = null;

 for(const [name, salary] of Object.entries(salaries)) {
   if (max < salary) {
     max = salary;
     maxName = name;
   }
 }

 return maxName;
}



let date = new Date(2012, 1, 20, 3, 12);
alert(date);



function getWeekDay(date) {

let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

return days[date.getDay()];

}

let date = new Date(2014, 0, 3); // 3 января 2014 года
alert(getWeekDay(date)); // ПТ




function getLocalDay(date) {
let day = date.getDay();

if (day == 0) {
  day = 7;
}
return day;
}



function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  return date.getDate();
 
}

let date = new Date(2015, 0, 2);

alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)



function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

alert(getLastDayOfMonth(2012, 0)); // 31
alert(getLastDayOfMonth(2012, 1)); // 29
alert(getLastDayOfMonth(2013, 1)); // 28



function getSecondsToday() {
  let date = new Date();
  return date.getHours() * 3600 + date.getMinutes * 60 + date.getSeconds();
}



function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let diff = tomorrow - now;
  return Math.round(diff / 1000);
}


function formatDate(date) {
  let diff = new Date() - date;
  if (diff < 1000) {
    return 'прямо сейчас';
  }

  let sec = Math.floor(diff / 1000);

  if (sec < 60) {
    return sec + 'сек. назад';
  }

  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

  // соединить компоненты в дату
  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}



let user = {
  name: "Василий Иванович",
  age: 35
};

let newUser = JSON.parse(JSON.stringify(user));



alert(JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));

