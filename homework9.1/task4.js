let person = {
  firstName: "Олег",
  lastName: "Ковальчук",
  age: 25,
};

person.email = "oleg.kovalchuk@example.com";

delete person.age;

console.log(person);
