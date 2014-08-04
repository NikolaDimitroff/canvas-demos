
var Vector2 = function (x, y) {
    this.x = x;
    this.y = y;
}

Vector2.prototype.copy = function () {
    return new Vector2(this.x, this.y);
}

Vector2.prototype.dot = function (other) {
    return this.x * other.x + this.y * other.y;
}

Vector2.prototype.distTo = function (other) {
    return Math.sqrt((this.x - other.x) * (this.x - other.x) + 
                     (this.y - other.y) * (this.y - other.y))
};

Vector2.prototype.len = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
};

Vector2.prototype.normalize = function() {
    var len = this.len();
    this.x /= len;
    this.y /= len;
}

Vector2.prototype.sub = function (other) {
    return new Vector2(this.x - other.x, this.y - other.y);
}

Vector2.prototype.add = function (other) {
    return new Vector2(this.x + other.x, this.y + other.y);
}

Vector2.prototype.scale = function(scalar) {
    this.x *= scalar;
    this.y *= scalar;
}
   
Vector2.prototype.scaled = function(scalar) {
    return new Vector2(this.x * scalar, this.y * scalar);
}