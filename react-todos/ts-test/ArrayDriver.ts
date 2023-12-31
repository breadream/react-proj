import { Shape } from './Shape';
import { Circle } from './Circle';
import { Reactangle } from './Rectangle';

let myCircle = new Circle(5, 10, 20);
let myRectangle = new Reactangle(0, 0, 3, 7);

// declare an array of shapes ... initially empty
let theShapes: Shape[] = [];

// add the shapes to the array
theShapes.push(myCircle)
theShapes.push(myRectangle)
// theShapes.push(" hey~")
// theShapes.push(17)

for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}