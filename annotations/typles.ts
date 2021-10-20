// TYPLES - array-like structure, each element represents property of record
// order of elements is important!
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

const pepsi = ['brown', true, 40];
const cola: [string, boolean, number] = ['brown', true, 40];

//type alias
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 35];

// typles are not usable, hard to understand
const carSpecs: [number, number] = [126, 1500];

const carStats = {
  horsepower: 126,
  weight: 1500
}
























