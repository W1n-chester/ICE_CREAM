(() => {
  const refs = {
    openModalBtn: document.getElementById('data-modal-buy-open'),
    openModalBtnMobile: document.getElementById('data-modal-buy-open-mobile'),
    closeModalBtn: document.getElementById('data-modal-buy-close'),
    modal: document.getElementById('data-modal-buy'),
  };

  const body = document.getElementById('body');

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnMobile.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.openModalBtn.addEventListener('click', locking);
  refs.openModalBtnMobile.addEventListener('click', locking);
  refs.closeModalBtn.addEventListener('click', locking);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function locking() {
    body.classList.toggle('locked');
  }
})();
