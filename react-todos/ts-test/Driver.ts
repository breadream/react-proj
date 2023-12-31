import { Shape } from './Shape';
import { Circle } from './Circle';
import { Reactangle } from './Rectangle';

let myShape = new Shape(10, 15);
console.log(myShape.getInfo());

let myCircle = new Circle(5, 10, 20);
console.log(myCircle.getInfo());

let myRectangle = new Reactangle(0, 0, 3, 7);
console.log(myRectangle.getInfo());