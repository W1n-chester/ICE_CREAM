(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-ing-milk-open]'),
    closeModalBtn: document.querySelector('[data-modal-ing-milk-close]'),
    modal: document.querySelector('[data-modal-ing-milk]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
