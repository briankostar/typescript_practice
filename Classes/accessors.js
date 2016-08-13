//default or public, protected, private property Modifiers
//public we know.. accessible anywhere
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//private -- cannot be accessed from outside class
var Animal = (function () {
    function Animal(theName) {
        //constructor parameter property:  //doing this we dont need to declare 'name' at top
        //constructor(protected name:string){
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
    //this method does not work because the name is a private property of Animal. To get it in subclasses, it has to be protected.
    Cat.prototype.getName = function () {
        return this.name;
    };
    return Cat;
}(Animal));
var Human = (function () {
    function Human(theName) {
        this.name = theName;
    }
    return Human;
}());
var cat = new Cat();
cat.getName(); //getting property as method works
//console.log(cat.name)  //but you cannot get protected/private properties directly
var human = new Human('brian');
//animal = cat;		//<--we can set animal to be cat as they share the same private declaration
//animal = human;		//<--not compatible even when properties are same because it has a different private property reference
//Accessors -- get/set methods to fine control getting properties of an obj
var Employee = (function () {
    function Employee() {
    }
    return Employee;
}());
var employee = new Employee();
employee.name = 'brian'; //this works, but not good because anyone can change the property value.
//we can add passcode to 'set' the property:
var passcode = 'secreta';
var Employee2 = (function () {
    function Employee2() {
    }
    Object.defineProperty(Employee2.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            if (passcode && passcode == "secret") {
                this._name = newName;
            }
            else {
                console.log('unauthorized access');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee2;
}());
var emp2 = new Employee2();
emp2.name = 'brian'; //works the same
console.log('emp2 name is', emp2.name);
