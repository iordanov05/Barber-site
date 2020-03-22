var modalOpenButton = document.querySelector('.slider__btn--modalShow');
var modal = document.querySelector('.modal');
var modalCloseButton = modal.querySelector('.modal__close-btn');

var onModalOpenButtonClick = function () {
  if (modal.classList.contains('modal--hide')) {
    modal.classList.remove('modal--hide');
    modalCloseButton.addEventListener('click', onModalCloseButtonClick);
    document.addEventListener('keydown', onDocumentKeydown);
  }
};

var onModalCloseButtonClick = function () {
  if (!modal.classList.contains('modal--hide')) {
    modal.classList.add('modal--hide');
    modalCloseButton.removeEventListener('click', onModalCloseButtonClick);
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

var onDocumentKeydown = function (evt) {
  if (evt.key === 'Escape' && !modal.classList.contains('modal--hide')) {
    modal.classList.add('modal--hide');
    modalCloseButton.removeEventListener('click', onModalCloseButtonClick);
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

modalOpenButton.addEventListener('click', onModalOpenButtonClick);