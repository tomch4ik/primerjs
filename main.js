//task1
// let TorF = false;
// do {
//     let login = prompt("Введите ФИО:");
//     let gender = prompt("Введите пол:");
//     let age = parseInt(prompt("Введите возраст:"));
//     let email = prompt("Введите email:");
//     TorF = confirm(`ФИО: ${login}\nПол: ${gender}\nВозраст: ${age}\nEmail: ${email}\n\nВсе верно?`);
// } while (!TorF);
// alert("Спасибо за информацию!");
//task2
// let luckyNumber;
// do {
//     luckyNumber = prompt("Введите 6-значное число:");
// } while (luckyNumber < 100000 || luckyNumber > 999999); 
// let n1 = parseInt(luckyNumber[0]);
// let n2 = parseInt(luckyNumber[1]);
// let n3 = parseInt(luckyNumber[2]);
// let n4 = parseInt(luckyNumber[3]);
// let n5 = parseInt(luckyNumber[4]);
// let n6 = parseInt(luckyNumber[5]);
// let A = n1 + n2 + n3;
// let B = n4 + n5 + n6;
// if (A == B) {
//     alert("Это счастливый билет!!!");
// } else {
//     alert("Это обычный билет!!!");
// }
//task3
let min = 0;
let max = 100;
let N;
let answer;
alert("Загадайте число от 0 до 100");
while (min <= max) {
    N = Math.floor((min + max) / 2);
    answer = prompt(`Ваше число > ${N}, < ${N} или == ${N}?`);
    if (answer === "==") {
        alert(`Ваше число: ${N}.`);
        alert("Вы молодец!");
        break;
    } else if (answer === ">") {
        min = N + 1;
    } else if (answer === "<") {
        max = N - 1;
    } else {
        alert("Пожалуйста, введите только >, < или ==");
    }
}

