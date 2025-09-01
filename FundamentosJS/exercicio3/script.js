const dayjs = require("dayjs");

function birthday(date) {
  const birthday = dayjs(date);
  const today = dayjs();
  const age = today.diff(birthday, "Year");
  const nextBirthday = birthday.add(age + 1, "Year");
  const daysToNextBirthday = nextBirthday.diff(today, "day");

  console.log(`Idade : ${age}`);
  console.log(`Proximo aniversário : ${nextBirthday.format("DD/MM/YYYY")}`);
  console.log(
    `Dias até completar: ${age + 1} anos: ${daysToNextBirthday} dias`
  );
}

birthday("2002-12-09");
