//default or public, protected, private
//public we know.. accessible anywhere
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//private -- cannot be accessed from outside class
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    return Animal;
}());
var animal = new Animal('kitty');
//this will throw error.
//console.log(animal.name)
//when two classes share the same private or protected reference, the types are considered compatible.
//eg
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        _super.call(this, 'cat');
    }
    return Cat;
}(Animal));
var Human = (function () {
    function Human(theName) {
        this.name = theName;
    }
    return Human;
}());
var cat = new Cat();
var human = new Human('brian');
animal = cat;
animal = human;
