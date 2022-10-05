let num = prompt ('Введите трехзначное число:');
let res = 0;

while (+num){
    res *= 10;
    res += +num % 10;
    num = Math.floor(+num / 10);
}

alert (res)