(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-ing-ice-open]'),
    closeModalBtn: document.querySelector('[data-modal-ing-ice-close]'),
    modal: document.querySelector('[data-modal-ing-ice]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
