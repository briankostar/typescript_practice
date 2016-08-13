//static properties are accessible only on the class, rather than its instance.
//Circle.pi instead of var a = new Cricle, a.pi
var Grid = (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.distanceFromOrigin = function (point) {
        var xDist = point.x - Grid.origin.x;
        var yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist ^ 2 + yDist ^ 2) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 }; //set static value 
    return Grid;
}());
var grid1 = new Grid(1);
var grid2 = new Grid(5);
console.log(Grid.origin);
console.log(grid1.distanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.distanceFromOrigin({ x: 10, y: 10 }));
