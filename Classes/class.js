var Person = (function () {
    function Person() {
    }
    Person.prototype.talk = function () {
        this._talk();
    };
    Person.prototype._talk = function () {
        this._privateTalk();
    };
    Person.prototype._privateTalk = function () {
        return 'hello';
    };
    return Person;
}());
