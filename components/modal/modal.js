const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const modalContent = modal.querySelector('.modal-content');

// Aç
openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  modal.classList.remove('hide');
  modal.classList.add('show');

  // Animasyonu sıfırla ve yeniden uygula
  modalContent.style.animation = 'none';
  void modalContent.offsetWidth; // trigger reflow
  modalContent.style.animation = 'popIn 0.3s ease-out forwards';
});

// Kapat
closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  modal.classList.add('hide');

  setTimeout(() => {
    modal.style.display = 'none';
    modal.classList.remove('hide');
  }, 300);
});

// Arka plana tıklayınca kapat
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
    modal.classList.add('hide');

    setTimeout(() => {
      modal.style.display = 'none';
      modal.classList.remove('hide');
    }, 300);
  }
});