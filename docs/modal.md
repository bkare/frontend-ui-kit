# Modal Bileşeni

Bu bileşen, sayfa üzerinde kullanıcı dikkatini odaklama için kullanılan açılır (modal) penceredir.

---

## Kullanım
### Tetikleyici Buton

```html
<button id="openModalBtn" class="btn btn-primary"></button>

<div class="modal" id="myModal">
  <div class="modal-content">
    <span class="close-btn" id="closeModalBtn">&times;</span>
    <h3>Modal Başlığı</h3>
    <p>Bu bir modal içerik örneğidir.</p>
  </div>
</div>

## Desteklenen Sınıflar

| Sınıf Adı         | Açıklama                                          |
| ----------------- | ------------------------------------------------- |
| .modal            | Ekranı karartan arka plan (tam sayfa)             |
| .modal-content    | Ortalanmış modal kutusu                           |
| .show             | Modal açıldığında eklenen animasyon sınıfı        |
| .hide             | Modal kapatıldığında eklenen animasyon sınıfı     |
| .close-btn        | Modal'ı kapatmak için sağ üstteki çarpı butonu    |

## JS Özellikleri 

- #openModalBtn butonuna tıklanınca modal açılır
- #closeModalBtn veya modal dışına tıklanınca kapanır.
- Açılışta .show, kapanışta .hide sınıfı ile animasyon uygulanır.
- İçerik kutusu (.modal-content) her açılışta JS ile tekrar tetiklenir.


