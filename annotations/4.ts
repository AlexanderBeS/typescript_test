
// OBJECTS

const profile = {
    name: 'alex',
    age: 26,
    coords: {
        x: 0,
        y: 10,
        z: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
}


const { age }: { age: number} = profile; //берем age из profile
const { coords: { x, y, z } }: { coords: { x: number, y: number, z: number}} = profile;
