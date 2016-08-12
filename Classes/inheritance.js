var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(theName) {
        this.name = theName;
        console.log('parent constructor activated');
    }
    Person.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " --person -- moved " + distance + "m.");
    };
    return Person;
}());
var brian = new Person('brian');
brian.move(5);
var Giant = (function (_super) {
    __extends(Giant, _super);
    function Giant(name) {
        //activates parent's constructor
        _super.call(this, name);
    }
    Giant.prototype.move = function (distance) {
        if (distance === void 0) { distance = 10; }
        console.log('--Giant moving');
        //super is literally the the parent class
        _super.prototype.move.call(this, distance);
    };
    return Giant;
}(Person));
var Dwarf = (function (_super) {
    __extends(Dwarf, _super);
    function Dwarf(name) {
        _super.call(this, name);
    }
    Dwarf.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0.5; }
        _super.prototype.move.call(this, distance);
    };
    return Dwarf;
}(Person));
console.log('giant time');
var giant = new Giant('big brian');
giant.move();
var dwarf = new Dwarf('small brian');
dwarf.move();
