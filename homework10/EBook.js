const Book = require("./Book");

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this._fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }
  set fileFormat(value) {
    const allowed = ["PDF", "EPUB", "MOBI"];
    if (typeof value !== "string" || !allowed.includes(value.toUpperCase())) {
      throw new Error(`Формат файлу має бути одним із: ${allowed.join(", ")}`);
    }
    this._fileFormat = value.toUpperCase();
  }

  printInfo() {
    super.printInfo();
    console.log(`Формат файлу: ${this._fileFormat}`);
  }

  static fromBook(bookInstance, fileFormat) {
    if (!(bookInstance instanceof Book)) {
      throw new Error("Очікується екземпляр класу Book.");
    }
    const eb = new EBook(
      bookInstance.title,
      bookInstance.author,
      bookInstance.year,
      fileFormat
    );

    eb.fileFormat = fileFormat;
    return eb;
  }
}

module.exports = EBook;
