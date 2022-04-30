'use strict';
// a_06_js_grammar.js 

/*
문법: 조건문, 반복문
- 조건문: 
1. if(단수분기)
2. switch(다수분기)

- 반복문: 
1. while(잘 안쓰는거 b/c 속도가 제일 느림)
2. do-while(선행 후 순환)
3. for(자주 사용)
4, forEach(알아서 자동으로 수행, 주로 배열 형식)
5. for-in(객체 순환)
6. 기타
*/

let food = '울면';

if(food === "자장면"){
  console.log('중국집 전화번호: 00-000-0000');
} else if (food === '피자') {
  console.log('피자집 전화번호: 11-111-1111');
} else if ( food === '갈비탕'){
  console.log('한식집 전화번호: 22-222-2222');
} else { console.log('물드세요!');}

let result;
switch(food){
  case '자장면' : result = '중국집 전화번호: 00-000-0000' ; break;
  case '피자' : result = '피자집 전화번호: 11-111-1111' ; break;
  case '갈비탕' : result = '한식집 전화번호: 22-222-2222' ; break;
  default : result = '물';
}

console.log(result);

result = ''; //변수 값 지우기
let bank = 1;
switch(bank){
  case 0 : 
    result += '입금 수행하겠습니다.'; 
    break;
  case 1 : 
    result += '송금 수행하겠습니다.'; 
    break;
  case 2 : 
    result += '계좌 삭제하겠습니다.'; 
    break;
  case 3 :
    result += '블랙리스트 등극'; 
    break;
  default :
    result += '누구신지?';
}
console.log(result);

//------------------------------------------------
console.clear();

let link = './content.html';
let linkText = 'js base';
// const h1 = document.getElementsByTagName('h1')[0];
const h1 = document.querySelector('h1');
// h1.innerHTML = '<a href="'+link+'">'+linkText+'</a>';
// h1.innerHTML = "<a href=\""+link+"\">js base</a>";
h1.innerHTML = `<a href="${link}">${linkText}</a>`; //보간법 interpolation

// ------------------------------------------------------
// var areaEl = document.getAttribute('class','area');
// const areaE1 = document.getElementsByClassName('area')[0];
// const wrapEl = document.getElementById('wrap');

//시나리오: li를 클릭했을때, 해당 순서에 의한 기능 수행
// 1. li의 개수가 복수이기 때문에 여러 개 중의 하나를 클릭한다라는 인식이 필요(이게 forEach)
// 2. li를 클릭하는 순간 여러 개 중의 하나를 순번과 함께 인식

const areaEl = document.querySelector('.area');
const areaUlEl = areaEl.querySelector('ul');
// const areaUlEl = areaEl.childrsen;
const areaListEl = areaUlEl.querySelectorAll('li');
const relEl = areaEl.querySelector('.result');


areaListEl.forEach(function(element, index){
  element.addEventListener('click', function(){
    let num = index; 
    let product;
    switch(num){
      case 0: product = '아이스 아메리카노'; break;
      case 1: product = '슬러시'; break;
      case 2: product = '쿠키'; break;
      case 3: product = '맥주'; break;
      default: product = '기부되었습니다.';
    }
    relEl.innerText = product;
  })
})

