const Book = require("./Book");
const EBook = require("./EBook");

const b1 = new Book("Кобзар", "Тарас Шевченко", 1840);
const b2 = new Book("Мандри Гуллівера", "Джонатан Свіфт", 1726);

const e1 = new EBook("Сто років самотності", "Г. Г. Маркес", 1967, "EPUB");
const e2 = EBook.fromBook(new Book("Мистецтво війни", "Сунь-Цзи", -500), "PDF");

b1.printInfo();
b2.printInfo();
e1.printInfo();
e2.printInfo();

b1.title = "Кобзар (перевидання)";
b1.year = 1900;
console.log("Після змін через сеттери:", b1.title, b1.year);

try {
  e1.fileFormat = "MOBI";
  console.log("Новий формат e1:", e1.fileFormat);
  e1.fileFormat = "TXT";
} catch (err) {
  console.error("Помилка формату:", err.message);
}

const library = [b1, b2, e1, e2];
const oldest = Book.findOldestBook(library);
console.log("Найдавніша книга:");
oldest.printInfo();
