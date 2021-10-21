import * as faker from "faker";
//npm install @types/faker

//import faker from "faker";

//export default 'red'; //dont use!

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
}
