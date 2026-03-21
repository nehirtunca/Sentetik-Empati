# Sentetik Empati - Kullanıcı Akışı (User Flow)

Bu akış, kullanıcının uygulamayı ilk açtığı andan sonuçları paylaşmasına kadar deneyimi adım adım tanımlar.

## 1) Karşılama ve İlk İzlenim
**Kullanıcı ne görür?**
- Pastel tonlarda, minimalist bir ana sayfa
- Başlık: `Sentetik Empati: Başkasının Kalbiyle Hisset`
- Kısa bir açıklama: Toplumsal dışlanma hikayelerini sanata dönüştürme amacı

**UX notu:**
- İlk ekranda dikkat dağıtıcı unsurlar minimumda tutulur.
- Görsel dil güven veren ve sakinleştirici olmalıdır.

## 2) Hikaye Paylaşımı (Input)
**Kullanıcı ne yapar?**
- Geniş bir metin alanına yaşadığı ya da tanık olduğu dışlanma anısını yazar.
- Örnek giriş:
  `Metroda insanların, kıyafetleri eski olduğu için bir gencin yanına oturmaktan kaçındığını gördüm.`

**Arayüz bileşenleri:**
- Çok satırlı metin kutusu
- Karakter/uzunluk için nazik yönlendirme metni (opsiyonel)
- Birincil buton: `Dönüştür ve Hisset`

## 3) Dönüşümün Başlatılması
**Kullanıcı ne yapar?**
- `Dönüştür ve Hisset` butonuna basar.

**Sistem ne yapar?**
- Metni doğrular (boş gönderim engeli)
- Duygu analizi + şiir üretimi + görsel üretimi akışını başlatır

## 4) İşleme Süreci (Processing)
**Kullanıcı ne görür?**
- Yumuşak bir yükleme animasyonu
- Süreci hissettiren kısa mesajlar:
  - `Duygular analiz ediliyor...`
  - `Siir dokunuyor...`
  - `Tuval boyaniyor...`

**UX notu:**
- Bekleme süresi boyunca kullanıcı bilgilendirilir.
- Akış ortalama 10-15 saniye hedefiyle optimize edilir.

## 5) Sanatsal Sonuç (Output)
**Kullanıcı ne görür?**
- Iki kolonlu sonuç kartı:
  - **Sol:** AI'nin ürettiği 4-6 mısralık şiir
  - **Sağ:** Hikaye ve şiirle uyumlu soyut görsel

**Deneyim hedefi:**
- Çıktı, bilgi vermekten çok duygusal yankı üretmelidir.

## 6) Etkileşim ve Paylaşım
**Kullanıcı ne yapar?**
- Sonucu inceler
- `Resmi İndir` ile görseli indirir
- `Farkındalık Yarat` ile paylaşım başlatır

**Beklenen çıktı:**
- Kullanıcı tek oturumda üretim + etkileşim + paylaşım adımlarını tamamlayabilir.

## 7) Hata ve Sınır Durumları
**Boş giriş:**
- `Lutfen once hikayenizi yazin.` uyarısı gösterilir.

**API / ağ hatası:**
- `Su an donusturme yapilamadi. Lutfen tekrar deneyin.` mesajı verilir.
- Kullanıcı girdisi korunur (tekrar yazmak zorunda kalmaz).
 Kullanıcı Akışı (User Flow) - Sentetik EmpatiBu akış, bir kullanıcının uygulamayla olan etkileşimini adım adım açıklar: 1. Karşılama ve İlk İzlenimNe Görür? Kullanıcı uygulamayı açtığında minimalist, sakinleştirici renklerde bir ana sayfa görür. Ekranın ortasında "Sentetik Empati: Başkasının Kalbiyle Hisset" başlığı ve projenin amacını (toplumsal dışlanmaya karşı sanatsal bir köprü) anlatan 1-2 cümlelik duygusal bir karşılama metni yer alır. 2. Hikaye Paylaşımı (Girdi)Ne Yapar? Kullanıcı, ekranın merkezindeki geniş metin kutusuna, tanık olduğu veya bizzat yaşadığı bir toplumsal dışlanma hikayesini/anısını yazar. Örnek: "Bugün metroda insanların, kıyafetleri eski olduğu için bir gencin yanına oturmaktan kaçındığını gördüm. O gencin gözlerindeki yalnızlık çok ağırdı." 3. Dönüşümün BaşlatılmasıNe Yapar? Metni yazdıktan sonra kutunun altındaki "Sanata Dönüştür" veya "Empati Kur" butonuna tıklar. 4. İşleme Süreci (Yükleme)Ne Görür? Butona tıklandığında kısa bir süreliğine (yaklaşık 10-15 saniye) bir "yükleniyor" animasyonu belirir. Ekranda "Duygular analiz ediliyor...", "Şiir dokunuyor...", "Tuval boyanıyor..." gibi kullanıcıyı sürecin içine çeken bilgilendirme yazıları geçer. 5. Sanatsal Sonuç (Çıktı)Ne Görür? İşlem bittiğinde ekran iki ana bölmeye ayrılır: Sol Taraf: AI tarafından yazılmış, hikayenin duygusunu yansıtan 4-6 mısralık vurucu bir şiir. Sağ Taraf: AI tarafından, hikaye ve şiirdeki temalara uygun olarak üretilmiş soyut ve sanatsal bir görsel/tablo. 6. Etkileşim ve PaylaşımNe Yapar? Kullanıcı üretilen bu "Empati Kartını" inceler. Alt kısımda yer alan seçenekleri kullanarak: Sonucu bir görsel olarak bilgisayarına/telefonuna indirir. "Farkındalık Yarat" butonuyla bu sanatsal çıktıyı sosyal medyada paylaşarak başkalarının da bu hikayeyi hissetmesini sağlar. 