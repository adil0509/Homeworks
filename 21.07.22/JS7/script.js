let GB = prompt ('Введите объем флешки (в ГБ):');
const data = 820; //820 МБ каждый файл
let res = ((+GB * 1000) / +data);
alert (Math.trunc(+res) +' файлов поместится размером по 820 МБ каждый') //использовал Math.trunc, .toFixed нам не подходит, так как он округляет число