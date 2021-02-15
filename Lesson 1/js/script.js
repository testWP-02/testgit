"use strict"; //мы сообщаем скриптовому файлу что работаем в современном режиме, где старые стандарты не работают. ВСЕГДА ИСПОЛЬЗОВАТЬ!

let number = 64; //let определяется только в области своей видимости, а var определяется везде. Так что используем в JS только let!
const letfBorderWidth = 1; //Констант в JS небывает! const obj = { a: 50 }; obj.a=10; console.log(obj); - тут будет 10!

number = 128;

//console.log(number);

// 1 - Объекты.
const person = //Объект это коллекция определенных данных.
{
    name: "Troll", //свойство в объекта инициализируется через двоеточие :, а не через = . Это ВАЖНО!
    age: 43,
    isMarried: true
};
//console.log(person.name);
//console.log(person.age);
if(person.isMarried === true){
    //console.log(person.name + " married");
}
else
{
    //console.log(person.name + " not married");
}

// 2 - Массивы.
let arr = ["women.png", "men.png", 512]; // Определяем массив через [] и инициализируем его данными. Включают любые типы данных.
//console.log(arr[2]);

//const result = confirm("Are you sure?"); // Если юзер нажмет Ок, то мы получим значение true в result, а если Нет, то false.
//console.log(result);

//const answer = prompt("Are you oldest when 18?", "yes or no"); // Ответ юзера будет типом данных Строка. Функция prompt не работает в консоли VSCode
//const answer2 = +prompt("Are you oldest when 18?", "yes or no"); // Ответ юзера будет типом данных Число.
//console.log(typeof(answer2)); // Через оператор typeof мы узнаем тип данных переменной.

// Простой калькулятор.
const answers = [];
answers[0] = +prompt("Enter first num", "");
answers[1] = +prompt("Enter operator", "");
answers[2] = +prompt("Enter second num", "");
//document.write(`${answers[0]} ${answers[2]} ${answers[1]}`); // Интреполяция работает только внутри таких символов ``

//Создание репозитория 1)git config --local user.name "Olzhas" 2)git config --local user.email testWP-02@yandex.ru Если мы хотим глобальный репозиторий, то вместо local ставим global.