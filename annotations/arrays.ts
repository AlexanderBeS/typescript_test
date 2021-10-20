const carMakers: string[] = ['ford', 'toyota', 'chevrolet'];

// string[][]
const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro'],
];

const car = carsByMake[0];
const myCar = car.pop();

//error
//carMakers.push(100);

carMakers.map((car: string): string => {
  return car.toUpperCase();
});


// multiple types, flexible
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2020-10-11');
