# Y-Takip — tanitim sitesi

Hali yikama isletmeleri icin Y-Takip uygulamasinin tek sayfalik tanitim sitesi.
Sadece urunu anlatir — fiyat bilgisi ve iletisim bolumu yok.
Statik HTML/CSS/JS — build araci, bagimlilik veya sunucu gerekmez.

## Dosyalar

```
index.html        Sayfanin tamami (bolumler arasinda BODY:START / BODY:END isaretleri var)
assets/style.css  Tum stiller, tasarim token'lari en ustte (:root)
assets/app.js     Mobil menu, SSS akordeon, ustbar cizgisi
assets/logo.svg   Y logosu (turuncu gradyan)
```

## Calistirma

`index.html` dosyasina cift tiklamak yeterli. Yayina alirken klasorun tamamini
herhangi bir statik barindirmaya (Netlify, Vercel, cPanel, GitHub Pages) yukleyin.

## Yayina almadan once degistirilecekler

| Nerede | Ne |
|---|---|
| `index.html` — footer "Kurumsal" | KVKK, gizlilik ve kullanim kosullari sayfa linkleri (`href="#"`) |
| `index.html` — `<head>` | `og:image` etiketi eklenmeli (sosyal medya onizlemesi icin) |
| — | Fiyat ve iletisim bilgisi hazir oldugunda ayri bolumler olarak eklenebilir |
| — | App Store / Google Play linkleri yayinlandiginda hero ve footer'a eklenebilir |

## Tasarim sistemi

Renkler `assets/style.css` icinde `:root` altinda token olarak tanimli;
acik ve koyu tema ayni token seti uzerinden calisir. Marka rengini degistirmek
icin `--ember`, `--ember-deep`, `--ember-text` ve `--amber` degerlerini
guncellemek yeterli.

Yazi tipleri Google Fonts: Bricolage Grotesque (basliklar), Figtree (metin),
JetBrains Mono (siparis no, m², plaka gibi veriler).
