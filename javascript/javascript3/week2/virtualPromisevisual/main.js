//marks
const redBall = document.querySelector("ul.marks li:nth-child(1)");
const blueBall = document.querySelector("ul.marks li:nth-child(2)");
const greenBall = document.querySelector("ul.marks li:nth-child(3)");
//initial top left values of balls in number
const redBallx = redBall.offsetLeft;
const redBally = redBall.offsetTop;
const blueBallx = blueBall.offsetLeft;
const blueBally = blueBall.offsetTop;
const greenBallx = greenBall.offsetLeft;
const greenBally = greenBall.offsetTop;
async function translateOneByOne() {
  await moveElement(redBall, { x: 20 - redBallx, y: 300 - redBally })
  console.log("red ball moved");
  await moveElement(blueBall, { x: 400 - blueBallx, y: 300 - blueBally })
  console.log("blue ball moved");
  await moveElement(greenBall, { x: 400 - greenBallx, y: 20 - greenBally })
  console.log("green ball moved");
}
translateOneByOne();
function translateAllAtOnce() {
  const promiseRed = moveElement(redBall, { x: 20 - redBallx, y: 300 - redBally })
  const promiseBlue = moveElement(blueBall, { x: 400 - blueBallx, y: 300 - blueBally })
  const promiseGreen = moveElement(greenBall, { x: 400 - greenBallx, y: 20 - greenBally })
  Promise.all([promiseRed, promiseBlue, promiseGreen])
    .then(() => console.log("all balls moved"))
}
//translateAllAtOnce();