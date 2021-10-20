// annotate every single argument, after arguments - what type function return
const add = (a: number): number => {
    return a;
}

function divide( a: number, b: number): number {
    return a / b;
}

const multiply = function ( a: number, b: number): number {
    return a * b;
}

const logger = (message: string): void => {
    console.log(message);
}

const throwError = (message: string): never => {
    throw new Error(message);
}

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

// разбиваем объект на аргументы
//const logWeather = (forecast: { date: Date, weather: string }): void => {
//    console.log(forecast.date);
//     console.log(forecast.weather);
// };
const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
};
logWeather(todaysWeather);

