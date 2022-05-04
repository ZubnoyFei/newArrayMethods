'use strict'

// method filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
//
//
// В переменную будем записывать данные, которые мы получили от фильтрации массива names. Внутрь переменной мы передаём коллбэк-функцию
// const shortNames = names.filter(function(name){ //name- это каждый отдельный элемент, который находится внутри этого массива
// return name.length < 5;// Возвращаем только то имя, длина которого меньше 5 символов
// });
//
// console.log(shortNames);// result Array [ "Ivan", "Ann" ]


// map method

// let answers = ['IvAn', 'AnNa', 'Hello'];
//
// answers = answers.map(item=> item.toLowerCase()); // айтем-это наш элемент массива. Мы с помощью map перебираем его и в консоль выводим результат
//
// console.log(answers);


//every/some

// Методы возвращают булиновое значение

//const some = [4, 'asdfsadfasd', 'gfr4gsdfg5'];


//console.log(some.some(item=> typeof(item==='number'))); // true// Проверим, есть ли внутри нашего массива хоть одно число

//console.log(some.every(item=> typeof(item)==='number')); // false// Проверяет, если все элементы нашего массива подходят под наше условие


// Reduce method

/*Собирает массив в одно единое целое*/
//
// const arr = [4, 5, 6, 16, 24];
//
//
// const reducedArray = arr.reduce((sum, current) => sum + current);// Мы создаем 2 переменные, в которые мы будем передавать сумму и текущее значение,
// // функция получает текущее значение и суммированное и будет выдавать результат. Начальное значение функции - 0.
//
// console.log(reducedArray);

/*Reduce со строками*/


// const arr = ['apple', 'pear', 'plum'];
//
//
// const reducedArray = arr.reduce((sum, current) => `${sum}, ${current}`);// Мы перебираем массив и складываем его
//
// console.log(reducedArray);

// Reduce также может иметь какое-то изначальное значение. К примеру, в качестве аргумента мы можем передать 3 и с этой тройки начнётся перебор массива и она прибавится к результату

// const reduce = arr.reduce((sum, curr)=> sum +curr, 3)
// console.log(reduce);


const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};


// Получаем ключи, а не значения из объекта

const array = Object.entries(obj) // Мы получаем из объекта массив
    .filter(item=>item[1]==='person')// Из массивов, которые мы перебираем, мы будем получать только те мыссивы, у которых второй элемент будет person
    .map(item=>item[0])// Внутри нового массива мы хоти получить только имена, т.е. только первые элементы
console.log(array);
