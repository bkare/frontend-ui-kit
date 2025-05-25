document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.disabled) return;
            alert(`"${btn.textContent}" butonuna tıkladınız.`); 
        });
    });
});