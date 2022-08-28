let dollar = prompt ('Введите сумму (в $):');
const euro = 1.0036; //на 27.08.2022 один Доллар равен 1,0036 Евро
let res = (+dollar * +euro);
alert (+res +' EUR')