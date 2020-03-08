var modalOpenButton = document.querySelector('.slider__btn--modalShow');
var modal = document.querySelector('.modal');
var modalCloseButton = modal.querySelector('.modal__close-btn');

modalOpenButton.addEventListener('click', function () {
  if (modal.classList.contains('modal--hide')) {
    modal.classList.remove('modal--hide');
  }
});

modalCloseButton.addEventListener('click', function () {
  if (!modal.classList.contains('modal--hide')) {
    modal.classList.add('modal--hide');
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape' && !modal.classList.contains('modal--hide')) {
    modal.classList.add('modal--hide');
  }
});