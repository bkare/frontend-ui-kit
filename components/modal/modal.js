const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');

// Aç
openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

//Kapat
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

//Modal dışına tıklanırsa da kapat
window.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
});