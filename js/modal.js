(() => {
  const refs = {
    openModalBtn: document.querySelector('.title__boton'),
    closeModalBtn: document.querySelector('.modal__modal-svg'),
    modal: document.querySelector('.is-hidden'),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();