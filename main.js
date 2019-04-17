// 1.Вывести все четные числа в консоль от 0 до 50.
for (let i =0; i<=50; i++) {
    if(i%2===0){
        console.log(i)
    }
}

// 2.Есть число 50. Найти сумму нечетных цифр, входящих в его состав.
let tempStr = 0;
for (let i =0; i<=50; i++) {

    if(i % 2 !== 0){
       tempStr+=i;
    }

}
console.log(tempStr);

/*3. Есть число 100. Перебрать все его числа ,начиная с последнего.
То есть сначала выводится в консоль 100,
потом 99...и так далее.*/
for (let i = 100; i>=0; i--){
    console.log(i);
}

// 4. Возвести 2 в 10 степень.
let result = 2;
for ( let i = 2; i<=10; i++){
     result=result*2;
}
console.log(result);

// 5. Найти максимальное число из трех

let a = prompt("введите первое число:");
let b = prompt("введите второе число:");
let c = prompt("введите третье число:");
let max;

max = a;
if(max < b){
    max = b;
}
if (max < c){
    max = c;
}
alert("из тех чисел - самое большое:" + max);

/*6. Написать программу, которая  суммирует все числа
от 1 до введенного пользователем числа.*/

let sumOfNumbers = prompt("введите число:");
let resultSum = 0;
for(let i = 1; i <= sumOfNumbers; i++){
    resultSum+=i;
}
alert("сумма чисел от 1 до " + sumOfNumbers + " равна " + resultSum);

// 7.Составьте программу, выводящую на экран квадраты чисел от 10 до 20.

for(let i = 10; i<=20; i++){
    console.log(i*i);
}

// 8. Вывести числа в последовательности: 4 7 10 13 с помощью цикла.

for(let i = 4; i <= 13; i+=3){
    console.log(i);
}

// 9. Вывести числа -4 -2 0 2 4 6 ...100.

for(let i = -4; i<=100; i+=2){
    console.log(i);
}

// 10. задание со звездочкой


for (let i = 1; i<=4; i++){
    let star = "* ";
    for(let a = 1; a<=2; a++){
        star+=star;
    }
    console.log(star)
}

// 11.  задание со звездочкой

let star = "* ";
for(let i = 0; i<=3; i++){
    console.log(star);
    star+=star;
}
