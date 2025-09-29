async function getTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const todo = await response.json();
    console.log("Todo отримано:", todo);
    return todo;
  } catch (error) {
    console.error("Помилка при отриманні todo:", error);
  }
}

async function getUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await response.json();
    console.log("User отримано:", user);
    return user;
  } catch (error) {
    console.error("Помилка при отриманні user:", error);
  }
}

async function fetchAll() {
  const [todo, user] = await Promise.all([getTodo(), getUser()]);
  console.log("Promise.all результат:");
  console.log("Todo:", todo);
  console.log("User:", user);
}

async function fetchRace() {
  const first = await Promise.race([getTodo(), getUser()]);
  console.log("Promise.race результат (перший):", first);
}

fetchAll();
fetchRace();
