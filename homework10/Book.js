class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }

  get title() {
    return this._title;
  }
  get author() {
    return this._author;
  }
  get year() {
    return this._year;
  }

  set title(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Назва повинна бути непорожнім рядком.");
    }
    this._title = value.trim();
  }
  set author(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Автор повинен бути непорожнім рядком.");
    }
    this._author = value.trim();
  }
  set year(value) {
    if (
      typeof value !== "number" ||
      !Number.isFinite(value) ||
      !Number.isInteger(value)
    ) {
      throw new Error("Рік має бути цілим числом.");
    }
    this._year = value;
  }

  printInfo() {
    console.log(
      `Книга: "${this._title}", Автор: ${this._author}, Рік видання: ${this._year}`
    );
  }

  static findOldestBook(booksArray) {
    if (!Array.isArray(booksArray) || booksArray.length === 0) {
      throw new Error("Передайте ненульовий масив книг.");
    }
    let oldest = booksArray[0];
    for (const book of booksArray) {
      if (!(book instanceof Book)) {
        throw new Error(
          "У масиві мають бути лише екземпляри Book або його нащадків."
        );
      }
      if (book.year < oldest.year) oldest = book;
    }
    return oldest;
  }
}

module.exports = Book;
