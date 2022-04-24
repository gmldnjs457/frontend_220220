'user strict';
// a_03_js_typeCheck.js

let num = 10;
let likeNum = '10';

let checkType;

checkType = typeof(num);
console.log(num + ': ' + checkType);

checkType = typeof(likeNum);
console.log(likeNum + ': ' + checkType);

let bool = true;
checkType = typeof(bool);
console.log(bool + ': ' + checkType);

let check = 0 !== '0';

console.log(!bool);

let num2;
console.log(!!num2);

console.clear();

// ===========================
/*
let confirmText = "나이를 입력하세요.";
let inputMessage = prompt(confirmText);
let convertNumber = parseInt(inputMessage);
console.log(convertNumber);

if(!!convertNumber){
  console.log('입력한 숫자는 0이 아닌 숫자')
}

if( convertNumber <= 20 ){
  console.log('현재 나이는 20세 이하');
}
*/
// ===================================
let variable;
checkType = typeof variable;
console.log(checkType);
checkType = undefined;
console.log(checkType);

let nothing = 10 ;
console.log(nothing);
nothing = null;
console.log(nothing);
checkType = typeof nothing;
console.log(checkType);


// 

// js 형타입 / 자료구조
/* 
  원시형태(기본형): number, string, boolean(논리), undefined, null, bigInt, symbol
  특수형태: object(object, array), function

  속성 값이 없고 목차만 존재하는 그룹: array
*/

let ch = NaN;
checkType = typeof ch;
console.log(checkType);

// ==================================================
console.clear();


// Object > object 
let obj = {
  'apple':'red', 
  'banana':'yellow', 
  'grape':'purple', 
  '파인 애플':'갈색'};
  

console.log(obj);
console.log(obj.apple);
console.log(obj['파인 애플']);

let arr = [
  'apple', 
  'banana', 
  'grape', 
  '파인 애플'];
console.log(arr[0]);
console.log(arr[1]);

console.clear();

// 중괄호 대괄호 섞여있어서 순서있음
let gnbList = [
  {'name':'about us', 'href':'#'},
  {'name':'product', 'href':'#'},
  {'name':'gallery', 'href':'#'},
  {'name':'notice', 'href':'#'},
  {'name':'event', 'href':'#'},
  {'name':'sns', 'href':'#'},
]

for(let i=0; i < gnbList.length; i = i + 1){
  console.log(gnbList[i].name);
}
   
// for(let i=0;i < 4; i = i + 1){
//   console.log(arr[i]);
// }
 
// console.clear;

// //순서없음
// let data = ['pen', 'cup', 'mic']; //data[2]
// let data2 = {'pen':'red', 'cup': 'white', 'mic':'black'}; //data2['mic'] || data2.mic

// //순서있음
// let data3 = [
//   {'pen':'red', 'cup': 'white', 'mic':'black'},
//   {'pen':'red', 'cup': 'white', 'mic':'gray'},
//   {'pen':'red', 'cup': 'white', 'mic':'black'}
// ]; //data3[1].mic || data3[1]['mic']