//default or public, protected, private property Modifiers
//public we know.. accessible anywhere

//private -- cannot be accessed from outside class
class Animal {
	protected name: string
	constructor(theName:string){
	//constructor parameter property:  //doing this we dont need to declare 'name' at top
	//constructor(protected name:string){
			this.name = theName
	}
}

var animal = new Animal('kitty')

//this will throw error.
//console.log(animal.name)


//when two classes share the same private or protected reference, the types are considered compatible.
//eg
class Cat extends Animal{
	constructor(){
		super('cat')
	}
	//this method does not work because the name is a private property of Animal. To get it in subclasses, it has to be protected.
	getName(){
		return this.name
	}
}

class Human {
	private name: string
	constructor(theName:string){
		this.name = theName
	}
}

var cat = new Cat();
cat.getName(); 	//getting property as method works
console.log(cat.name)  //but you cannot get protected/private properties directly
var human = new Human('brian');

//animal = cat;		//<--we can set animal to be cat as they share the same private declaration
//animal = human;		//<--not compatible even when properties are same because it has a different private property reference


//Accessors -- get/set methods to fine control getting properties of an obj
class Employee {
	name: string;
}
let employee = new Employee()
employee.name = 'brian' 	//this works, but not good because anyone can change the property value.

//we can add passcode to 'set' the property:
let passcode = 'secret'
class Employee2 {
	private _name: string;
	get name():string {
		return this._name;
	}
	set name(newName: string){
		if(passcode && passcode =="secret"){
			this._name = newName;
		}else{
			console.log('unauthorized access')
		}
	}
}
let emp2 = new Employee2()
emp2.name = 'brian'	//works the same