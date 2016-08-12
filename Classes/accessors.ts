//default or public, protected, private
//public we know.. accessible anywhere

//private -- cannot be accessed from outside class
class Animal {
	private name: string
	constructor(theName:string){
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
}

class Human {
	private name: string
	constructor(theName:string){
		this.name = theName
	}
}

var cat = new Cat();
var human = new Human('brian');

animal = cat;		//<--we can set animal to be cat as they share the same private declaration
animal = human;		//<--not compatible even when properties are same because it has a different private property reference