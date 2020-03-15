var modalOpenButton = document.querySelector('.slider__btn--modalShow');
var modal = document.querySelector('.modal');
var modalCloseButton = modal.querySelector('.modal__close-btn');

var onModalOpenButtonClick = function () {
  if (modal.classList.contains('modal--hide')) {
    modal.classList.remove('modal--hide');
    modalCloseButton.addEventListener('click', onModalCloseButton);
    document.addEventListener('keydown', onDocumentKeydown);
  }
};

var onModalCloseButton = function () {
  if (!modal.classList.contains('modal--hide')) {
    modal.classList.add('modal--hide');
    modalCloseButton.removeEventListener('click', onModalCloseButton);
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

var onDocumentKeydown = function (evt) {
  if (evt.key === 'Escape' && !modal.classList.contains('modal--hide')) {
    modal.classList.add('modal--hide');
    modalCloseButton.removeEventListener('click', onModalCloseButton);
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

modalOpenButton.addEventListener('click', onModalOpenButtonClick);