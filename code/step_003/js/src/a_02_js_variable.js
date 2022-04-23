'use strict';
// a_02_js_variable.js

// document.write('무엇이든나와라!');
// document.write('<p>요소일것인가? 글자인것인가?</p>');
// alert('message!!!');
// console.log('나와라');

var checkNumber = 1;
console.log(checkNumber);

var checkName = '희원';
console.log(checkName);

var resultName = checkNumber + checkName;
console.log(resultName);

var likeNumber = '10';
console.log(checkNumber + likeNumber);

console.log(checkNumber - likeNumber); // js 특징: 자동 형변환
console.log(checkName - likeNumber); 
// 문자라고 하더라도 어떠한 계산을 거치는 경우 실제 계산이 안되면 NaN(Not a Number)을 출력한다

var convertNumber = parseInt(checkNumber + likeNumber);
console.log(convertNumber);

checkNumber = 100;
console.log(checkNumber);


// ---------------------------------------------------
var btn = document.querySelector('.btn');
var count = document.querySelector( '.count');
var countNumber = 0;

// btn 이벤트발생(클릭) 시 count 숫자가 1씩 증가

btn.addEventListener('click', function(){
  countNumber = countNumber + 1;
  count.innerText = countNumber;
})

// -------------------------------------------------------
console.clear();

console.log('sample:', sample);
var sample;

// sample = 100;
// console.log('sample:', sample);

// ---------------------------------------------------------
// .date_list 내부에 날짜에 해당하는 요소를 삽입 (31개)

var dateList = document.querySelector('.date_list')
var i = 1;
for( ; i <= 31; i = i + 1){
  // document.write('<li><button type="button">'+ i +'일</button></li>');
  console.log(i);
  // dateList.innerHTML = '<li><button type="button">'+ i +'일</button></li>';
}
console.log('i:', i);




// 라면 봉지를 생성 > 라면 봉지 내부에 무언가 채우기 > 판매 (append를 쓰면 진열) 
// 생성 채우기 대체하기가 기본 원리 ! 모든걸 하나하나 해야함



// -----------------------------------------------------------

/* var 변수의 문제점
  1. Hoisting 현상이 일어나면서 var 변수 선언은 상단에 초기화 처리된 것으로 인식
  2. 한번 선언 후에는 다시 재선언 가능 (원래 에러가 나야함)
  3. scope(영역) 제한 균형이 다소 맞지 않는다.
*/

// console.log(user)
let user = '희원';
console.log(user);

let k=1
for(; k<=100; k=k + 1){
  console.log('k:', k);
}
console.log('outer for k:', k);

const onlyOne = 10;
console.log(onlyOne);

// var 이제는 사용하지 X > let, const 사용한다.
// 1. let 호이스팅 현상은 사라지지 않는다. 다만 초기화가 되지 않을뿐
// 2. let, const 모두 재선언 불가
// 3. let은 범위에 대한 설정이 더 민감하다.
// 4. const는 선언과 동시에 값을 입력해야한다.