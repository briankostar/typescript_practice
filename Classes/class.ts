class Person {
	public talk(){
		this._talk();
	}
	//this protected method is only available within the Person class AND its subclasses
	protected _talk(){
		this._privateTalk();
	}
	//private method is only available to Person class
	private _privateTalk(){
		return 'hello'
	}
}