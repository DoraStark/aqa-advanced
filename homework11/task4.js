class TodoService {
  async getTodo() {
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
}

class UserService {
  async getUser() {
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
}

const todoService = new TodoService();
const userService = new UserService();

async function fetchAll() {
  const [todo, user] = await Promise.all([
    todoService.getTodo(),
    userService.getUser(),
  ]);
  console.log("Promise.all результат:");
  console.log("Todo:", todo);
  console.log("User:", user);
}

async function fetchRace() {
  const first = await Promise.race([
    todoService.getTodo(),
    userService.getUser(),
  ]);
  console.log("Promise.race результат (перший):", first);
}

fetchAll();
fetchRace();
