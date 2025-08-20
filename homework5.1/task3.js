const number = 5;
let max = 10;

for (let i = 1; i <= max; i++) {
  let result = number * i;
  console.log(number, "*", i, "=", result);
}

let j = 1;
while (j <= max) {
  let result = number * j;
  console.log(number, "*", j, "=", result);
  j++;
}
