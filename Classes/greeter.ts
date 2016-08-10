class Greeter {
	greeting: string;
	constructor(message: string){
		this.greeting = message;
	}
	greet(){
		return 'Hello' + this.greeting;
	}
}

console.log('run greeter')
let greeter = new Greeter(' brian');
console.log(greeter.greet())
