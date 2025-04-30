//task1
let TorF = false;
do {
    let login = prompt("Введите ФИО:");
    let gender = prompt("Введите пол:");
    let age = parseInt(prompt("Введите возраст:"));
    let email = prompt("Введите email:");
    TorF = confirm(`ФИО: ${login}\nПол: ${gender}\nВозраст: ${age}\nEmail: ${email}\n\nВсе верно?`);
} while (!TorF);
alert("Спасибо за информацию!");