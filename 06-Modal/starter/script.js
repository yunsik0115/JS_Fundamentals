'use strict';

// Way how to implement modal

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal());
overlay.addEventListener('click', closeModal());

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape') {
    console.log('ESC Was Pressed');
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
// key down key press key up
/*1. keyup

키보드에서 손을 땠을 때 실행

2. keydown

키보드를 눌렀을 때 실행

키보드를 누르고 있을 때 한번만 실행됨

3. keypress

키보드를 눌렀을 때 실행

키보드를 누르고 있을 때 계속 실행됨

 

* Ctrl, Alt, Shift 키 등은 keydown에서는 작동하지만 keypress 에서 작동하지 않음

 

* keyCode ASCII code 값

keydown, keyup에서는 a = 65, A = 65로 동일하게 보여짐

keypress에서는 a = 97, A = 65로 다른 값이 보여짐

 -> Caps Lock 여부 체크, 대소문자 구분을 통한 로직 작성 가능



출처: https://silver0r.tistory.com/119 [어흥]*/
