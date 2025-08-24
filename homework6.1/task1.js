//function declaration

function area(height, width) {
  let areaSquare = height * width;
  return areaSquare;
}

let result = area(5, 10);
console.log("Площа прямокутника: " + result + " СМ");

// function expression
const areaSquare = function (height, width) {
  return height * width;
};
console.log("Площа прямокутника: " + areaSquare(7, 20) + " СМ");

// arrow function
const area1 = (height, width) => height * width;
console.log("Площа прямокутника: " + area1(4, 15) + " СМ");
