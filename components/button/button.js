document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn:not(.btn-disabled");

    buttons.forEach((btn => {
        btn.addEventListener("click", (e) => {
            //ripple efektini oluştur
            const ripple = document.createElement("span");
            ripple.classList.add("ripple");

            //tıklama koordinatlarını al
            const rect = btn.getBoundingClientRect();
            ripple.style.left= `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;

            //butona ekle ve kaldır
            btn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);

            //uyarı mesajı
            alert(`"${btn.textContent.trim()}" butonuna tıkladınız.`);
        });
    }));
});