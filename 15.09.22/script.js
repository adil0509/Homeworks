let age = +prompt("Введите свой возраст:");

if (age >= 0 && age <= 2) {
    alert('Вы ребёнок');
}

if (age >= 12 && age <= 18) {
    alert('Вы подросток');
}

if (age >= 18 && age <= 60) {
    alert('Вы взрослый');
}

if (age >= 60) {
    alert('Вы пенсионер');
}