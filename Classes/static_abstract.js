//static properties are accessible only on the class, rather than its instance.
//Circle.pi instead of var a = new Cricle, a.pi
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Grid = (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.distanceFromOrigin = function (point) {
        var xDist = point.x - Grid.origin.x;
        var yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist ^ 2 + yDist ^ 2) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 }; //set static value 
    return Grid;
}());
var grid1 = new Grid(1);
var grid2 = new Grid(5);
console.log(Grid.origin);
console.log(grid1.distanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.distanceFromOrigin({ x: 10, y: 10 }));
//Abstract classes sets a guide for its subclasses. bit like interfaces.
//it has properties and methods
//methods with 'abstract' doesnt have implementation and must be implemented in subclass.
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function () {
        console.log('moving around..');
    };
    return Animal;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        _super.call(this, 'kitty'); //constructor in subclass must call super
    }
    //this method must be implemented
    Cat.prototype.makeSound = function () {
        console.log('meow meow');
    };
    return Cat;
}(Animal));
//let animal = new Animal() //error. cannot make instance of abstract class.
var cat = new Cat();
cat.makeSound();
