// inrefaces + classes

import axios from "axios";

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

interface Summary {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2008,
  broken: false,
  summary(): string {
    return `Name: ${this.name}`
  }
}

const cola = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Sugar: ${this.sugar}`
  }
};

const printVehicle1 = (vehicle: Vehicle): void => {
  console.log(`
        The TODO with name: ${vehicle.name}
        The TODO with year: ${vehicle.year}
        The TODO with broken: ${vehicle.broken}
    `);
}

const printSummary = (item: Summary): void => {
  console.log(item.summary());
}

printVehicle1(oldCivic);
printSummary(oldCivic);
printSummary(cola);

// ---------------------------------


