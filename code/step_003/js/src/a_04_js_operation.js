'use strict';
// a_04_js_operation.js

// operator, literal
let num, num2;

num = 10;
num2 = 20;

[num, num2] = [30, 40]; 
console.log(num2);

// 사칙연산 + - * / %

let rel1 = num + num2;
console.log(rel1);

rel1 = rel1 + 10;
console.log(rel1);

rel1 += 10;
console.log(rel1);

rel1 -= 5;
console.log(rel1);

rel1 *= 20;
console.log(rel1);

rel1 /= 15;
rel1= parseInt(rel1);
console.log(rel1);

let rel2 = rel1 % 10;
console.log(rel2);

// rel1을 10으로 나누었을때 몫 필요없고, 나머지 값?
rel1 %= 10; 
console.log(rel1);

//---------------------------------------------

let rel3 = num2;
console.log(rel3);

rel3 += 1;
console.log(rel3);

rel3++; //후치 증가연산
console.log(rel3);
++rel3; //전치 증가연산
console.log(rel3);

console.log(++rel3);
console.log(++rel3);
console.log(rel3++);
console.log(rel3++);
console.log(rel3);

rel3--; // 후치 가감연산
--rel3; // 전치 가감연산
console.log(rel3);

// =, ===, !, !==, <, <=, >, >=, ++, --, +=, -+, ... 복합연산자
// && (and), || (or) 비교연산자
// 조건문: if, switch, 삼항연산자(얘는 문법아님)
// 반복문: for, for-in, forEach, while(시스템 성능저하를 가장 많이 일으킴), do-while