function divide(numerator, denominator) {
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Обидва аргументи повинні бути числами");
  }
  if (denominator === 0) {
    throw new Error("Ділення на нуль неможливе");
  }
  return numerator / denominator;
}

// Тестові виклики
try {
  console.log("10 / 2 =", divide(10, 2));
} catch (error) {
  console.error("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}

try {
  console.log("5 / 0 =", divide(5, 0));
} catch (error) {
  console.error("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}

try {
  console.log("10 / 'a' =", divide(10, "a"));
} catch (error) {
  console.error("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}
