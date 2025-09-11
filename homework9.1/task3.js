let car1 = {
  brand: "BMW",
  model: "X5",
  year: 2020,
};

let car2 = {
  brand: "BMW",
  model: "Z3",
  owner: "Lady Gaga",
};

let car3 = {
  ...car1,
  ...car2,
};

console.log(car3);
