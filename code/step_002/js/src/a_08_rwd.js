// a_08_rwd.js

const menu = document.querySelector('.mobile_menu');
const gnbList = document.querySelector('.gnb > ul');

// const menu = $('.mobile_mennu');
// const menu = $('.gnb > ul');

// menu(버튼)을 클릭하면, gnbList를 나타나게 해라!
// 이벤트: 기본상태에서 변화가 처리되는 모~~든 것(사이즈 변경, 우클릭, 스크롤, 클릭 등 포함)

menu.addEventListener('click', function(){
  gnbList.style.display = 'flex';
})

// menu.on('click', function(){
//   gnbList.classList({display:'flex'});
// })

// video, audio {display:none;}