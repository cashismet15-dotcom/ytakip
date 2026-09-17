# Y-Takip — tanitim sitesi

Hali yikama isletmeleri icin Y-Takip uygulamasinin tanitim sitesi: ana sayfa
artı 4 hukuki sayfa (Kullanim Kosullari, Gizlilik Politikasi, KVKK Aydinlatma
Metni, Mesafeli Sozlesme). Statik HTML/CSS/JS — build araci, bagimlilik veya
sunucu gerekmez. `www.ytakip.com` uzerinde Vercel + bu GitHub reposu ile
otomatik yayinlanir (main dalina push = canli siteye deploy).

## Dosyalar

```
index.html                 Ana sayfa (ozellikler, rota, fiyatlar, SSS...)
kullanim-kosullari.html    Kullanim Kosullari (20 bolum)
gizlilik-politikasi.html   Gizlilik Politikasi (13 bolum)
kvkk-aydinlatma-metni.html KVKK Aydinlatma Metni (14 bolum)
mesafeli-sozlesme.html     Mesafeli Sozlesme (13 bolum)
assets/style.css           Tum stiller, tasarim token'lari en ustte (:root)
assets/app.js              Mobil menu, SSS akordeon, ustbar cizgisi
assets/logo.png            Gercek marka logosu (turuncu daire, seffaf kose)
assets/favicon.png         64x64 favicon (logo.png'den turetildi)
assets/logo.svg            Eski placeholder Y ikonu (artik kullanilmiyor)
```

## Calistirma

`index.html` dosyasina cift tiklamak yeterli. Yayina alirken klasorun tamamini
herhangi bir statik barindirmaya (Netlify, Vercel, cPanel, GitHub Pages) yukleyin.

## Yayina almadan once degistirilecekler

| Nerede | Ne |
|---|---|
| `index.html` — footer "Kurumsal" | "Hakkımızda" sayfasi henuz yok (`href="#"`) |
| `index.html` — `<head>` | `og:image` etiketi eklenmeli (sosyal medya onizlemesi icin) |
| `index.html` — fiyatlandirma | Fiyatlar MaviPOS'la ayni tutulacak sekilde girildi (749→300, 1490→500 ₺); gercek fiyat politikanizla eslesip eslesmedigini kontrol edin |
| `mesafeli-sozlesme.html` | Kullanicidan gelen metin 4. bolumde kesikti; 5-13. bolumler taslak olarak tamamlandi — **hukuk danismanina gosterin** |
| — | App Store / Google Play linkleri yayinlandiginda hero ve footer'a eklenebilir |
| — | Gercek musteri sayisi/puani gibi veriler olustugunda hero'daki guven rozetlerine eklenebilir (su an fabrikasyon istatistik kullanilmiyor) |

## Tasarim sistemi

Renkler `assets/style.css` icinde `:root` altinda token olarak tanimli;
acik ve koyu tema ayni token seti uzerinden calisir. Marka rengini degistirmek
icin `--ember`, `--ember-deep`, `--ember-text` ve `--amber` degerlerini
guncellemek yeterli.

Yazi tipleri Google Fonts: Bricolage Grotesque (basliklar), Figtree (metin),
JetBrains Mono (siparis no, m², plaka gibi veriler).
