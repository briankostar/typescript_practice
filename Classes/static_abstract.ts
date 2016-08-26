//static properties are accessible only on the class, rather than its instance.
//Circle.pi instead of var a = new Cricle, a.pi

class Grid {
	static origin = {x:0, y:0}  //set static value 
	constructor(public scale:number){}
	distanceFromOrigin(point: {x:number, y:number}){  //accepts obj w name point w 2 properties. just turns into 'point'
		let xDist = point.x - Grid.origin.x;
		let yDist = point.y - Grid.origin.y;
		return Math.sqrt(xDist^2 + yDist^2) / this.scale;
	}
}
let grid1 = new Grid(1)
let grid2 = new Grid(5)

console.log(Grid.origin)
console.log(grid1.distanceFromOrigin({x:10, y:10}))
console.log(grid2.distanceFromOrigin({x:10, y:10}))



//Abstract classes sets a guide for its subclasses. bit like interfaces.
//it has properties and methods
//methods with 'abstract' doesnt have implementation and must be implemented in subclass.

abstract class Animal{
	constructor(public name:string){}
	abstract makeSound(): void;	
	move():void {
		console.log('moving around..')
	}
}

class Cat extends Animal {
	constructor(){
		super('kitty') //constructor in subclass must call super
	}
	//this method must be implemented
	makeSound():void{
		console.log('meow meow')
	}
}
//let animal = new Animal() //error. cannot make instance of abstract class.
let cat = new Cat()
cat.makeSound();