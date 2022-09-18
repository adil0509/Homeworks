let num = +prompt('Введите трехзначное число:');
let number1 = parseInt(num / 100);
let number2 = parseInt(num / 10) % 10;
let number3 = num % 10;

  if (number1===number2 || number2===number3 || number1===number3)
{
      alert('Есть одинаковые цифры');
}

  else
{
      alert('Нет одинаковых цифр');
}