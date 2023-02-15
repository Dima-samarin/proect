  const modalBtn = document.querySelectorAll('[data-modal]');
  const modalClose = document.querySelectorAll('.modal-close');
  const modal = document.querySelectorAll('.modal');
  

  modalBtn.forEach(item => {
    item.addEventListener('click', function (event) {

      let $this = event.currentTarget;
      let modalId = $this.getAttribute('data-modal');
      let modal = document.getElementById(modalId);
      let modalContent = modal.querySelector('.modal-content');
      modalContent.addEventListener('click', event => {
        event.stopPropagation();
      })
      modal.classList.add('open');
      disableScroll();
      setTimeout(function () {
        modalContent.style.transform = 'none';
        modalContent.style.opacity = '1';
      }, 1)

    });
  });

  modalClose.forEach(item => {
    item.addEventListener('click', function (event) {
      let currentModal = event.currentTarget.closest('.modal');
      closeModal(currentModal);
    })
  });

  modal.forEach(item => {
    item.addEventListener('click', function (event) {
      let currentModal = event.currentTarget;
      closeModal(currentModal);
    })
  });

  function closeModal(currentModal) {
    let modalContent = currentModal.querySelector('.modal-content');
    modalContent.removeAttribute('style');
    currentModal.classList.remove('open');
    
    setTimeout(function () {
      currentModal.classList.remove('open');
      enableScroll();
    });
  }
