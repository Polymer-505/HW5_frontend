let drinkName;
let drink = prompt("Оберіть один з даних напоїв: Кава; Чай; Сік");
switch (drink) {
  case "Кава":
    drinkName = "Кава";
    alert(drinkName);
    break;
  case "Чай":
    drinkName = "Чай";
    alert(drinkName);
    break;
  case "Сік":
    drinkName = "Сік";
    alert(drinkName);
    break;
  default:
    alert("У нас неразі нема даного напою");
}

let day = prompt(
  "Оберіть один з днів тижня: Понеділок; Вівторок; Середа; Четвер; П'ятниця; Субота; Неділя;"
);
switch (day) {
  case "Понеділок":
    alert("Робочий день");
    break;
  case "Вівторок":
    alert("Робочий день");
    break;
  case "Середа":
    alert("Робочий день");
    break;
  case "Четвер":
    alert("Робочий день");
    break;
  case "П'ятниця":
    alert("Робочий день");
    break;
  case "Субота":
    alert("Вихідний");
    break;
  case "Неділя":
    alert("Вихідний");
    break;
  default:
    alert("Неправельно ведений день");
}

let seasonName;
let season = prompt("Введіть номер місяця");
switch (season) {
  case "1":
    seasonName = "Зима";
    alert(seasonName);
    break;
  case "2":
    seasonName = "Зима";
    alert(seasonName);
    break;
  case "3":
    seasonName = "Весна";
    alert(seasonName);
    break;
  case "4":
    seasonName = "Весна";
    alert(seasonName);
    break;
  case "5":
    seasonName = "Весна";
    alert(seasonName);
    break;
  case "6":
    seasonName = "Літо";
    alert(seasonName);
    break;
  case "7":
    seasonName = "Літо";
    alert(seasonName);
    break;
  case "8":
    seasonName = "Літо";
    alert(seasonName);
    break;
  case "9":
    seasonName = "Осінь";
    alert(seasonName);
    break;
  case "10":
    seasonName = "Осінь";
    alert(seasonName);
    break;
  case "11":
    seasonName = "Осінь";
    alert(seasonName);
    break;
  case "12":
    seasonName = "Зима";
    alert(seasonName);
    break;
  default:
    alert("Такого номера місяця немає");
}

let color = prompt("Оберіть один з кольорів: червоний; зелений; жовтий");
switch (color) {
  case "червоний":
    alert("стоп");
    break;
  case "зелений":
    alert("йти");
    break;
  case "жовтий":
    alert("чекати");
    break;
  default:
    alert("Неправельно ведений день");
}
