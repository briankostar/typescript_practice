class Person {
	name: string;
	constructor(theName:string){
		this.name = theName
		console.log('parent constructor activated')
	}
	move(distance: number = 0){
		console.log(`${this.name} --person -- moved ${distance}m.`);
	}
}

let brian = new Person('brian')
brian.move(5)

class Giant extends Person {
	constructor(name:string){
		//activates parent's constructor
		super(name)
	}
	move(distance = 10){
		console.log('--Giant moving')
		//super is literally the the parent class
		super.move(distance)
	}
}

class Dwarf extends Person {
	constructor(name:string){ super(name) }
	move(distance = 0.5){
		super.move(distance)
	}
}

console.log('giant time')
let giant = new Giant('big brian')
giant.move()

let dwarf = new Dwarf('small brian')
dwarf.move()