const today = new Date();
today.getMinutes(); //определяет тип и понимает какие методы есть

class Color {}
const red = new Color();

// typescript может сам догадываться о типе переменной если инициализируем и определяем в одной строке.
let applesCount: number = 5;
let text: string = 'Text string';
let isAdded: boolean = false;
let nothing: null = null;

// built in objects
let now: Date = new Date();

// array
// array of strings
let colors: string[] = ['red', 'green'];
let numbers: number[] = [1, 2];
let truth: boolean[] = [true, false];

// classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number, y: number } = {
    x: 10,
    y: 20
};

// function
// ф-ция требует (i: number), возвращает void
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}


// When to use annotations
// 1) Function that returns the 'any; type
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number} = JSON.parse(json);
console.log(coordinates)

// 2) Declare var on one line, and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

// 3) Variable whose type cannot be inferred correctly
let numbersNew: number[] = [-10, -1, -12];
let numbersAboveZero: boolean | number = false; // | = OR
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numbersAboveZero = numbers[i];
    }
}
