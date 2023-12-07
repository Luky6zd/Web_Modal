'use strict';

const modal_1 = document.querySelector('.modal-1');
const modal_2 = document.querySelector('.modal-2');
const modal_3 = document.querySelector('.modal-3');
const modal_4 = document.querySelector('.modal-4');

const overlay_1 = document.querySelector('.overlay-1');
const overlay_2 = document.querySelector('.overlay-2');
const overlay_3 = document.querySelector('.overlay-3');
const overlay_4 = document.querySelector('.overlay-4');

const buttonCloseModal_1 = document.querySelector('.close-modal-1');
const buttonsOpenModal_1 = document.querySelectorAll('.show-modal-1');

const buttonCloseModal_2 = document.querySelector('.close-modal-2');
const buttonsOpenModal_2 = document.querySelectorAll('.show-modal-2');

const buttonCloseModal_3 = document.querySelector('.close-modal-3');
const buttonsOpenModal_3 = document.querySelectorAll('.show-modal-3');

const buttonCloseModal_4 = document.querySelector('.close-modal-4');
const buttonsOpenModal_4 = document.querySelectorAll('.show-modal-4');

const openModal_1 = function () {
  modal_1.classList.remove('hidden');
  overlay_1.classList.remove('hidden');
};

const openModal_2 = function () {
  modal_2.classList.remove('hidden');
  overlay_2.classList.remove('hidden');
};

const openModal_3 = function () {
  modal_3.classList.remove('hidden');
  overlay_3.classList.remove('hidden');
};

const openModal_4 = function () {
  modal_4.classList.remove('hidden');
  overlay_4.classList.remove('hidden');
};

const closeModal_1 = function () {
  modal_1.classList.add('hidden');
  overlay_1.classList.add('hidden');
};

const closeModal_2 = function () {
  modal_2.classList.add('hidden');
  overlay_2.classList.add('hidden');
};

const closeModal_3 = function () {
  modal_3.classList.add('hidden');
  overlay_3.classList.add('hidden');
};

const closeModal_4 = function () {
  modal_4.classList.add('hidden');
  overlay_4.classList.add('hidden');
};

for (let i = 0; i < buttonsOpenModal_1.length; i++)
  buttonsOpenModal_1[i].addEventListener('click', openModal_1);

buttonCloseModal_1.addEventListener('click', closeModal_1);
overlay_1.addEventListener('click', closeModal_1);

document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Escape') {
    // ako pritisnemo Esc tipku
    if (!modal_1.classList.contains('hidden'))
      // i ako modal ne sadrži skrivenu klasu
      closeModal_1(); // zatvori modal
  }
});

for (let i = 0; i < buttonsOpenModal_2.length; i++)
  buttonsOpenModal_2[i].addEventListener('click', openModal_2);

buttonCloseModal_2.addEventListener('click', closeModal_2);
overlay_2.addEventListener('click', closeModal_2);

document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Escape') {
    // ako pritisnemo Esc tipku
    if (!modal_2.classList.contains('hidden'))
      // i ako modal ne sadrži skrivenu klasu
      closeModal_2(); // zatvori modal
  }
});

for (let i = 0; i < buttonsOpenModal_3.length; i++)
  buttonsOpenModal_3[i].addEventListener('click', openModal_3);

buttonCloseModal_3.addEventListener('click', closeModal_3);
overlay_3.addEventListener('click', closeModal_3);

document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Escape') {
    // ako pritisnemo Esc tipku
    if (!modal_3.classList.contains('hidden'))
      // i ako modal ne sadrži skrivenu klasu
      closeModal_3(); // zatvori modal
  }
});

for (let i = 0; i < buttonsOpenModal_4.length; i++)
  buttonsOpenModal_4[i].addEventListener('click', openModal_4);

buttonCloseModal_4.addEventListener('click', closeModal_4);
overlay_4.addEventListener('click', closeModal_4);

document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Escape') {
    // ako pritisnemo Esc tipku
    if (!modal_4.classList.contains('hidden'))
      // i ako modal ne sadrži skrivenu klasu
      closeModal_4(); // zatvori modal
  }
});
