# 📄 Ürün Gereksinim Belgesi (PRD) - Sentetik Empati

**Hazırlayan:** Nehir TUNCA
**Proje Durumu:** Taslak Aşamasında
**Vizyon:** "Görünmeyen acıları, hissedilen sanata dönüştürmek."

---

## 1. Ürün Vizyonu ve Hedef
Bu uygulama, toplumsal dışlanma yaşayan bireylerin (mülteciler, engelliler, yalnız yaşayan yaşlılar vb.) hikayelerini alır ve yapay zeka (AI) kullanarak bu hikayeleri birer **şiir ve dijital tabloya** dönüştürür. Amacı, kullanıcıda istatistiksel bilgiden ziyade duygusal bir farkındalık ve empati yaratmaktır.

## 2. Kullanıcı Deneyimi (UX) ve Ekran Tasarımı
Uygulama, minimalist ve duygusal derinliği olan tek sayfalık bir yapıya sahip olacaktır:

### **A. Giriş Ekranı (Hero Section)**
* **Başlık:** "Sentetik Empati: Başkasının Kalbiyle Hisset."
* **Davet:** Kullanıcıyı, tanık olduğu veya yaşadığı bir dışlanma anısını paylaşmaya teşvik eden kısa bir açıklama.

### **B. Hikaye Giriş Alanı (Input)**
* **Metin Kutusu:** Geniş, temiz bir yazım alanı.
* **Buton:** "Dönüştür ve Hisset" (Görsel olarak dikkat çekici ve estetik).

### **C. Dönüşüm Animasyonu (Processing)**
* AI arka planda çalışırken, verinin duyguya dönüştüğünü simgeleyen yumuşak bir yükleme animasyonu.

### **D. Sonuç Kartı (Output)**
* **Sol Taraf:** AI tarafından üretilen 4-6 mısralık, hikayenin özünü kavrayan bir şiir.
* **Sağ Taraf:** Hikaye ve şiirle uyumlu, yapay zeka tarafından çizilmiş soyut bir sanat eseri.
* **İşlevler:** "Resmi İndir" ve "Farkındalık Yarat (Paylaş)" butonları.

## 3. Fonksiyonel Gereksinimler (AI Yetenekleri)
1.  **Duygu Analizi:** AI, girilen metindeki baskın duyguları (yalnızlık, direnç, hüzün vb.) analiz eder.
2.  **Yaratıcı Yazım:** Ham metni, sıradan bir özet yerine sanatsal bir dille şiire dönüştürür.
3.  **Görselleştirme:** Metindeki anahtar kelimeleri ve duygu tonunu kullanarak görsel oluşturma komutu (prompt) hazırlar ve tabloyu üretir.

## 4. Teknik Tercihler (Tech Stack)
* **Frontend:** React / Lovable (Hızlı ve modern arayüz için).
* **AI Modelleri:** * **Metin/Şiir:** Google Gemini API.
    * **Görsel:** DALL-E 3 veya Gemini Image Generation.
* **Yayınlama (Hosting):** Netlify veya Lovable.

## 5. Başarı Kriterleri (MVP)
* Kullanıcının yazdığı metinden anlamlı ve duygusal bir şiir üretilmesi.
* Şiirle görsel olarak bütünleşen bir tablonun ekranda belirmesi.
* Tüm sürecin uçtan uca sorunsuz ve 15 saniye altında tamamlanması.