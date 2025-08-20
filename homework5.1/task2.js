const averageGrade = 72;
let gradeGroup = Math.floor(averageGrade / 10);

switch (gradeGroup) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Незадовільно");
    break;

  case 6:
    console.log("Задовільно");
    break;

  case 7:
    if (averageGrade === 70) {
      console.log("Задовільно");
    } else {
      console.log("Добре");
    }
    break;

  case 8:
    if (averageGrade === 80) {
      console.log("Добре");
    } else {
      console.log("Дуже добре");
    }
    break;

  case 9:
    if (averageGrade === 90) {
      console.log("Дуже добре");
    } else {
      console.log("Відмінно");
    }
    break;

  case 10:
    console.log("Відмінно");
    break;

  default:
    console.log("Помилка: введіть число від 0 до 100");
}
