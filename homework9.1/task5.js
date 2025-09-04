let users = [
  { name: "Олег", email: "oleg@example.com", age: 25 },
  { name: "Марія", email: "maria@example.com", age: 30 },
  { name: "Андрій", email: "andriy@example.com", age: 28 },
];

for (let { name, email, age } of users) {
  console.log("Ім'я:", name);
  console.log("Email:", email);
  console.log("Вік:", age);
  console.log("-----");
}
