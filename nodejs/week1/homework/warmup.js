console.log("inside warmup file");
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getDiameter() {
        const diameter = 2 * this.radius
        console.log(diameter)
        return diameter
    }
    getCircumference() {
        console.log(2 * Math.PI * this.radius);
    }
    getArea() {
        console.log(Math.PI * Math.pow(this.radius,2));
    }
}

const circle = new Circle(10);
circle.getDiameter();
circle.getCircumference();
circle.getArea();