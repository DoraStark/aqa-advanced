// function declaration
function area(width, height) {
  return width * height;
}
const result = area(5, 10);
console.log(`Площа прямокутника: ${result} см²`);

// function expression
const areaSquare = function (width, height) {
  return width * height;
};
console.log(`Площа прямокутника: ${areaSquare(7, 20)} см²`);

// arrow function
const area1 = (width, height) => width * height;
console.log(`Площа прямокутника: ${area1(4, 15)} см²`);
