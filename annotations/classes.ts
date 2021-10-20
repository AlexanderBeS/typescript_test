class Vehicle {
  // drive(): void {
  //   console.log('Moving...');
  // }


  //1
  // color: string;
  //
  // constructor(color: string) {
  //   this.color = color;
  // }

 //2 equivalent
  constructor(public color: string) {}

  protected honk(): void {
    console.log('BEEEEP!');
  }
}

class Car extends Vehicle {

  constructor(public wheels: number, color: string) {
    super(color);
  }

   private drive(): void {
    console.log('Wroom wroom...');
  }

  startDrivingProcess() {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'blue');
car.startDrivingProcess();

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
