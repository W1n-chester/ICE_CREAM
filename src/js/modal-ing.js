(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-ing-open]'),
    closeModalBtn: document.querySelector('[data-modal-ing-close]'),
    modal: document.querySelector('[data-modal-ing]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
