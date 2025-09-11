function getTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      return response.json();
    })
    .then((todo) => {
      console.log("Todo отримано:", todo);
      return todo;
    })
    .catch((error) => {
      console.error("Помилка при отриманні todo:", error);
    });
}

function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((user) => {
      console.log("User отримано:", user);
      return user;
    })
    .catch((error) => {
      console.error("Помилка при отриманні user:", error);
    });
}

Promise.all([getTodo(), getUser()]).then((results) => {
  const [todo, user] = results;
  console.log("Promise.all результат:");
  console.log("Todo:", todo);
  console.log("User:", user);
});

Promise.race([getTodo(), getUser()]).then((firstResult) => {
  console.log("Promise.race результат (перший):", firstResult);
});
