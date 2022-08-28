let sum = prompt ('Введите сумму денег в кошельке:');
let choko = prompt ('Введите цену одной шоколадки:');
let res1 = (Math.trunc(+sum / +choko));
let res2 = (+sum % +choko);
alert ('Шоколадок можно купить: '+res1 +' , останется сдачи: ' +res2)