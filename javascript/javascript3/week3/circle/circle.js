
let c = document.getElementById("canvasForCircle");
let context = c.getContext("2d");
// 3rd part -  circle randomly appearing on the screen, make them appear around the cursor.
c.width = window.innerWidth;
c.height = window.innerHeight;
class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }

    draw() {
        console.log(this.fillColor);
        console.log(this.x,this.y);
        context.beginPath();
        context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, false);
        context.fillStyle = this.fillColor;
        context.fill();
        context.lineWidth = 2;
        context.stroke();
    }

}
document.addEventListener("mousemove", (event)=>{
    let xco = event.clientX;
    let yco = event.clientY;
    console.log(xco,yco);
    let radius = Math.floor(Math.random() * 50)
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor);
    new Circle(xco, yco, radius, 0, 2 * Math.PI, randomColor).draw()

});




// first art -Paint a circle to a canvas element
//new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000").draw();
//const c2 =new Circle(100, 100, 20, 0, 2 * Math.PI, "green");
//c2.draw();
// let c = document.getElementById("canvasForCircle");
// let ctx = c.getContext("2d"); 
// ctx.beginPath();
// ctx.arc(100, 75, 50, 0, 2 * Math.PI);
// ctx.stroke();

/* 2nd part- creating circles with in 100ms
setInterval(() => {
    let width = c.width;
    let height = c.height;
    let xco = Math.floor(Math.random() * width);
    let yco = Math.floor(Math.random() * height);
    let radius = Math.floor(Math.random() * 10)
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor );
    new Circle(xco, yco, radius, 0, 2 * Math.PI,  randomColor).draw();


}, 100);
*/
