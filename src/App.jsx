import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Target, Shield, GitBranch, Activity, AlertTriangle } from 'lucide-react';

// NOT: Görselleri projenizin 'public/images/' klasörüne koyduğunuzu varsayıyoruz.
// Eğer src klasöründe tutacaksanız, en üste import slide1 from './assets/slide1.jpg' şeklinde eklemeniz gerekir.

const COBITPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Kapak
    {
      title: "COBIT 2019",
      subtitle: "Acil Sağlık Hizmetleri IT Yönetişimi",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {/* Görsel Eklendi */}
          <div className="w-full max-h-80 overflow-hidden rounded-xl shadow-2xl mb-4">
             <img src="/images/slide1.jpg" alt="Emergency Command Center" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
          </div>
          
          <h1 className="text-5xl font-bold text-blue-600">COBIT 2019</h1>
          <p className="text-2xl text-gray-600">Acil Sağlık Hizmetleri için IT Yönetişim Çerçevesi</p>
          <div className="mt-4 text-sm text-gray-500 font-semibold bg-gray-100 px-4 py-2 rounded-full">
            Profesyonel IT Yönetimi • Hayat Kurtaran Teknoloji
          </div>
        </div>
      )
    },
    
    // Slide 2: COBIT Tanımı - Şemsiye Metaforu
    {
      title: "COBIT Nedir?",
      subtitle: "Şemsiye Metaforu ile Anlamak",
      content: (
        <div className="space-y-6">
          {/* Görsel Eklendi - Umbrella Icon yerine görsel */}
          <div className="w-full h-64 overflow-hidden rounded-xl shadow-lg border-2 border-blue-100">
            <img src="/images/slide2.jpg" alt="Digital Protection Umbrella" className="w-full h-full object-cover" />
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-xl leading-relaxed">
              <strong>COBIT, organizasyonların IT yönetişimi için bir şemsiyedir.</strong>
            </p>
            <p className="mt-2 text-lg text-gray-700">
              COBIT organizasyonunuzu IT risklerinden, 
              siber saldırılardan ve sistemsel verimsizlikten koruyan bir dijital şemsiyedir.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">🛡️</div>
              <h4 className="font-semibold text-blue-600">Koruma</h4>
              <p className="text-sm text-gray-600">IT risklerine karşı savunma</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">📜</div>
              <h4 className="font-semibold text-blue-600">Düzen</h4>
              <p className="text-sm text-gray-600">Standart süreçler ve yapı</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-semibold text-blue-600">Hedef</h4>
              <p className="text-sm text-gray-600">İş hedeflerine ulaşma</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 3: 5 Temel Prensip (Görsel değişmedi, içerik yoğun)
    {
      title: "COBIT'in 5 Temel Prensibi",
      subtitle: "Çerçevenin Temelleri",
      content: (
        <div className="space-y-4">
          {[
            { num: "1", title: "Paydaş İhtiyaçlarını Karşılama", desc: "Organizasyonun ve paydaşların değer beklentilerini gerçekleştirme", icon: "❇️" },
            { num: "2", title: "Bütüncül Yaklaşım", desc: "IT'yi izole değil, tüm organizasyon ile entegre bir sistem olarak görme", icon: "❇️" },
            { num: "3", title: "Dinamik Yönetişim Sistemi", desc: "Esnek ve değişen iş ihtiyaçlarına uyarlanabilir yapı", icon: "❇️" },
            { num: "4", title: "Yönetişim ve Yönetimin Ayrılması", desc: "Stratejik karar (yönetişim) ile operasyonel yürütme (yönetim) ayrımı", icon: "❇️" },
            { num: "5", title: "İhtiyaçlara Göre Uyarlama", desc: "Her organizasyonun kendine özgü ihtiyaçlarına göre özelleştirme", icon: "❇️" }
          ].map((principle) => (
            <div key={principle.num} className="flex items-start space-x-4 bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border-l-4 border-blue-500 hover:translate-x-2 transition-transform">
              <div className="text-3xl">{principle.icon}</div>
              <div className="flex-1">
                <h4 className="font-bold text-lg text-blue-700">Prensip {principle.num}: {principle.title}</h4>
                <p className="text-gray-700 mt-1">{principle.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )
    },

    // Slide 4: Governance vs Management
    {
      title: "Yönetişim vs Yönetim",
      subtitle: "Kritik Ayrım",
      content: (
        <div className="space-y-6">
          {/* GÜNCELLENDİ: 
              h-80 (daha uzun boy) -> Resmin daha büyük kısmı görünür.
              object-cover -> Resim çerçeveyi hiç boşluk kalmayacak şekilde doldurur.
          */}
          <div className="w-full h-80 overflow-hidden rounded-xl shadow-md border border-gray-200">
            <img 
              src="/images/slide4.jpg" 
              alt="Governance vs Management" 
              className="w-full h-full object-cover object-center" 
            />
          </div>

          <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-500">
            <p className="text-md font-semibold text-gray-800">
              ⚠️ Yönetişim stratejiyi çizer, Yönetim kabloları bağlar.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-4 rounded-lg shadow-lg border-2 border-purple-400">
              <div className="flex items-center space-x-3 mb-2">
                <Shield className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-bold text-purple-700">Yönetişim</h3>
              </div>
              <div className="space-y-2">
                <div className="bg-white p-2 rounded">
                  <p className="font-semibold text-purple-600 text-sm">Kim?</p>
                  <p className="text-xs">Yönetim Kurulu / Üst Yönetim</p>
                </div>
                <div className="bg-white p-2 rounded">
                  <p className="font-semibold text-purple-600 text-sm">Ne Yapar?</p>
                  <p className="text-xs">Değerlendirir • Yönlendirir • İzler</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-lg shadow-lg border-2 border-green-400">
              <div className="flex items-center space-x-3 mb-2">
                <Activity className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-green-700">Yönetim</h3>
              </div>
              <div className="space-y-2">
                <div className="bg-white p-2 rounded">
                  <p className="font-semibold text-green-600 text-sm">Kim?</p>
                  <p className="text-xs">IT Müdürü / Operasyon Ekipleri</p>
                </div>
                <div className="bg-white p-2 rounded">
                  <p className="font-semibold text-green-600 text-sm">Ne Yapar?</p>
                  <p className="text-xs">Planlar • Uygular • İşletir</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5: APO (Görsel yok, metin odaklı)
    {
      title: "APO: Hizalama, Planlama, Organizasyon",
      subtitle: "112 Komuta Kontrol Merkezi Senaryosu",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h4 className="font-bold text-xl text-blue-800 mb-2">📊 Senaryo: IT Bütçesi ve Risk Yönetimi</h4>
            <p className="text-gray-700">
              İstanbul 112, 2026 yılı için IT stratejisini planlıyor. 
              Yeni bir vaka yönetim sistemi, artan siber saldırı riski ve ekipman yenilemesi gündemde.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-green-600">
              <h5 className="font-semibold text-green-700 mb-2">APO02 - Strateji Yönetimi</h5>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Hedef: "60 saniyede müdahale"</li>
                <li>• 5 yıllık teknoloji yol haritası</li>
                <li>• Bulut tabanlı sistemlere geçiş</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-green-600">
              <h5 className="font-semibold text-green-700 mb-2">APO06 - Bütçe ve Maliyet</h5>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• 15 Milyon TL IT bütçesi</li>
                <li>• %40 sistem yenileme, %30 güvenlik</li>
                <li>• TCO analizi</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-orange-600">
              <h5 className="font-semibold text-orange-700 mb-2">APO12 - Risk Yönetimi</h5>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Risk: Ransomware (Yüksek/Kritik)</li>
                <li>• Önlem: Yedek DC kurulması</li>
                <li>• Önlem: Personel eğitimi</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-purple-600">
              <h5 className="font-semibold text-purple-700 mb-2">APO13 - Güvenlik Yönetimi</h5>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• ISO 27001 uyumluluğu</li>
                <li>• Hasta verilerinin şifrelenmesi</li>
                <li>• 7/24 SOC kurulumu</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: BAI
    {
      title: "BAI: İnşa Et, Satın Al, Uygula",
      subtitle: "Vaka Atama Yazılımı Projesi",
      content: (
        <div className="space-y-4">
          <div className="flex gap-4">
             <div className="w-1/3">
                {/* Görsel Eklendi - AI Dispatch */}
                <img src="/images/slide6.jpg" alt="AI Dispatch System" className="rounded-lg shadow-lg h-full object-cover" />
             </div>
             <div className="w-2/3 space-y-4">
                <div className="bg-indigo-100 p-4 rounded-lg">
                  <h4 className="font-bold text-xl text-indigo-800 mb-2">AI Destekli Ambulans Atama Atama</h4>
                  <p className="text-gray-700 text-sm">
                    Mevcut manuel sistem yerine, GPS verilerine göre en yakın ambulansı 
                    <strong> otomatik atayan</strong> sistem.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                  <h5 className="font-semibold text-blue-700 mb-1">BAI01 - Gereksinimler</h5>
                  <ul className="text-xs text-gray-600 ml-4 list-disc">
                    <li>Gerçek zamanlı GPS izleme</li>
                    <li>Otomatik vaka önceliklendirme</li>
                    <li>KVKK uyumlu veri şifreleme</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                  <h5 className="font-semibold text-green-700 mb-1">BAI02 - Çözüm: Satın Alma</h5>
                  <p className="text-xs text-gray-700">
                    İçeride geliştirmek yerine hazır yazılım (SAP/SaaS) seçildi. <br/>
                    <strong>Sonuç:</strong> 18 ay yerine 6 ayda devreye alım.
                  </p>
                </div>
             </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mt-2">
            <p className="font-semibold text-green-800">✅ Sonuç:</p>
            <p className="text-gray-700 text-sm">
              Sistem 6 ayda devreye alındı. Ortalama atama süresi 45 saniyeden 8 saniyeye düştü. 
              
            </p>
          </div>
        </div>
      )
    },

    // Slide 7: DSS
    {
      title: "DSS: Teslimat, Hizmet, Destek",
      subtitle: "7/24 Kesintisiz Operasyon",
      content: (
        <div className="space-y-4">
          {/* Görsel Eklendi - Ambulans İçi Tablet */}
          <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg mb-4 group">
             <img src="/images/slide7.jpg" alt="Ambulance Tablet" className="w-full h-full object-cover object-center" />
             <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-2 w-full text-sm">
               DSS01: Sahadaki tabletin GPS bağlantısı kesilirse, vaka bulunamaz.
             </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h5 className="font-semibold text-blue-700 mb-2">DSS01 - Operasyon</h5>
              <ul className="text-sm space-y-1 text-gray-700">
                <li><strong>SLA:</strong> %99.9 uptime</li>
                <li><strong>Kapasite:</strong> 500 eşzamanlı ambulans</li>
                <li><strong>GPS:</strong> 5 saniyede bir güncelleme</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h5 className="font-semibold text-green-700 mb-2">DSS02 - Destek</h5>
              <ul className="text-sm space-y-1 text-gray-700">
                <li><strong>Helpdesk:</strong> 7/24 Öncelikli Hat</li>
                <li><strong>Çözüm:</strong> Max 15 dakika</li>
                <li><strong>Self-Servis:</strong> Tablet reset kılavuzu</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h5 className="font-semibold text-orange-700 mb-2">DSS03 - Problem Yön.</h5>
              <div className="text-sm text-gray-700">
                <p><strong>Vaka:</strong> GPS Kopması</p>
                <p><strong>Kök Neden:</strong> Hatalı güncelleme</p>
                <p><strong>Aksiyon:</strong> Rollback (30 dk)</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h5 className="font-semibold text-purple-700 mb-2">DSS04 - Süreklilik</h5>
              <ul className="text-sm space-y-1 text-gray-700">
                <li><strong>DR Site:</strong> Ankara Yedek Merkez</li>
                <li><strong>RTO:</strong> 2 saat (Max kesinti)</li>
                <li><strong>Test:</strong> 6 ayda bir tatbikat</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Slide 8: MEA
    {
      title: "MEA: İzle, Değerlendir, Değerle",
      subtitle: "Performans ve Uyumluluk Yönetimi",
      content: (
        <div className="space-y-4">
          {/* Görsel Eklendi - NOC Dashboard */}
          <div className="w-full h-56 rounded-xl overflow-hidden shadow-2xl border-4 border-gray-800 mb-4">
             <img src="/images/slide8.jpg" alt="NOC Dashboard" className="w-full h-full object-cover" />
          </div>

          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
              <h5 className="font-semibold text-blue-700 mb-2">MEA01 - Performans İzleme (Görseldeki Ekranlar)</h5>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-green-100 p-2 rounded text-center">
                  <p className="font-bold text-green-700">Çağrı Başarı</p>
                  <p className="text-2xl font-bold">99.7%</p>
                  <p className="text-green-600">✓ Hedef Tutuldu</p>
                </div>
                <div className="bg-yellow-100 p-2 rounded text-center">
                  <p className="font-bold text-yellow-700">Yanıt Süresi</p>
                  <p className="text-2xl font-bold">280ms</p>
                  <p className="text-yellow-600">⚠ İyileştirilmeli</p>
                </div>
                <div className="bg-green-100 p-2 rounded text-center">
                  <p className="font-bold text-green-700">Uptime</p>
                  <p className="text-2xl font-bold">99.92%</p>
                  <p className="text-green-600">✓ Mükemmel</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                  <h5 className="font-semibold text-purple-700 mb-2">MEA02 - İç Kontrol</h5>
                  <div className="text-xs text-gray-700 space-y-1">
                     <p>✓ Yedeklerin testi</p>
                     <p>✓ Log incelemeleri</p>
                     <p className="text-red-600 font-bold">✗ Felaket tatbikatı (Gecikmiş)</p>
                  </div>
               </div>
               <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500">
                  <h5 className="font-semibold text-orange-700 mb-2">MEA03 - Uyumluluk</h5>
                  <div className="text-xs text-gray-700 space-y-1">
                     <p>✓ KVKK (Veri Şifreleme)</p>
                     <p>✓ ISO 27001</p>
                     <p className="text-yellow-600">⚠ Sağlık Bakanlığı Std.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 9: Risk ve Güvenlik
    {
      title: "Risk ve Güvenlik",
      subtitle: "Kritik Sistemlerde COBIT'in Rolü",
      content: (
        <div className="space-y-4">
          <div className="flex gap-4 items-stretch">
             <div className="w-1/3">
                {/* Görsel Eklendi - System Failure */}
                <div className="h-full rounded-lg overflow-hidden shadow-lg border-2 border-red-600">
                   <img src="/images/slide9.jpg" alt="Critical System Failure" className="w-full h-full object-cover" />
                </div>
             </div>
             <div className="w-2/3 flex flex-col justify-center">
                <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-600 mb-2">
                  <h4 className="font-bold text-xl text-red-800 mb-2 flex items-center">
                    <AlertTriangle className="w-6 h-6 mr-2" />
                    Gerçek: IT Arızası = İnsan Ölümü
                  </h4>
                  <p className="text-sm text-gray-800">
                    Sol taraftaki ekranı görmek istemiyorsak COBIT şart. Bir sunucu arızası, vaka atamasını 
                    dakikalarca geciktirebilir.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                   <h5 className="font-bold text-blue-800 mb-2">Çözüm Paketi:</h5>
                   <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>DSS04:</strong> Yedek veri merkezi (2 saat RTO)</li>
                      <li>• <strong>APO12:</strong> Risk senaryoları</li>
                      <li>• <strong>DSS05:</strong> 7/24 Güvenlik İzleme</li>
                   </ul>
                </div>
             </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg border-t-4 border-orange-500">
            <h5 className="font-bold text-sm text-orange-800 mb-2">Olgunluk Seviyesi (Maturity Level) Hedefi: Level 4</h5>
            <div className="grid grid-cols-6 gap-1 text-xs text-center">
              <div className="bg-red-200 p-1 rounded opacity-50">Level 0</div>
              <div className="bg-orange-200 p-1 rounded opacity-50">Level 1</div>
              <div className="bg-yellow-200 p-1 rounded opacity-50">Level 2</div>
              <div className="bg-lime-200 p-1 rounded opacity-50">Level 3</div>
              <div className="bg-green-600 text-white p-1 rounded font-bold ring-2 ring-green-400">Level 4</div>
              <div className="bg-emerald-200 p-1 rounded opacity-50">Level 5</div>
            </div>
            <p className="text-xs text-gray-600 mt-2 text-center">
               112 sistemleri "Ölçülebilir ve Yönetilen" (Level 4) seviyesinde olmalıdır.
            </p>
          </div>
        </div>
      )
    },

    // Slide 10: IT İş Akış Şeması
    {
      title: "112 Acil Servis IT İş Akışı",
      subtitle: "COBIT Süreçlerinin Entegrasyonu",
      content: (
        <div className="space-y-4">
          {/* Görsel Eklendi - Flowchart */}
          <div className="w-full bg-white p-2 rounded-xl shadow-lg border border-gray-200 mb-2">
             <img src="/images/slide10.jpg" alt="112 Flowchart" className="w-full rounded-lg" />
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-white p-3 rounded-lg shadow border-l-4 border-green-500">
               <h5 className="font-bold text-green-700">1. Çağrı Gelir (Girdi)</h5>
               <p className="text-xs text-gray-600">DSS02 (Talep), DSS05 (Güvenlik)</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow border-l-4 border-blue-500">
               <h5 className="font-bold text-blue-700">2. AI İşleme (Süreç)</h5>
               <p className="text-xs text-gray-600">BAI04 (Kapasite), MEA01 (Performans)</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow border-l-4 border-orange-500">
               <h5 className="font-bold text-orange-700">3. Müdahale (Saha)</h5>
               <p className="text-xs text-gray-600">DSS01 (Operasyon), DSS03 (Problem)</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow border-l-4 border-purple-500">
               <h5 className="font-bold text-purple-700">4. Veri Saklama (Çıktı)</h5>
               <p className="text-xs text-gray-600">BAI05 (Veri), MEA03 (KVKK)</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-lg text-center shadow-lg">
            <p className="font-bold text-md">
              ✅ Sonuç: Görseldeki 4 adımın her birinde COBIT süreçleri aktiftir.
            </p>
          </div>
        </div>
      )
    },

    // Slide 11: COBIT Süreç Matrisi Tablosu (Görsel yok, tablo)
    {
      title: "COBIT Süreç Matrisi",
      subtitle: "İş Akışı ve Süreç Eşleştirmesi",
      content: (
        <div className="space-y-4">
           {/* Tablo içeriği aynı kalacak, yer kaplamaması için kısaltıyorum ama orijinal koddaki tablo buraya gelecek */}
           <div className="bg-blue-50 p-3 rounded text-sm text-gray-700">
              <p>Bu bölümdeki detaylı tablo, önceki slayttaki akış şemasının teknik dökümüdür.</p>
           </div>
           <div className="overflow-x-auto h-96 overflow-y-auto border border-gray-300 rounded-lg">
            <table className="w-full text-xs border-collapse">
              <thead className="sticky top-0 bg-blue-600 text-white shadow-sm z-10">
                <tr>
                  <th className="p-2 text-left">İş Akışı</th>
                  <th className="p-2 text-left">Süreç</th>
                  <th className="p-2 text-left">Açıklama</th>
                  <th className="p-2 text-center">Risk</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b bg-green-50"><td className="p-2 font-bold">1. Çağrı</td><td className="p-2">DSS02</td><td className="p-2">Çağrı Kayıt</td><td className="p-2 text-red-600 font-bold text-center">Kritik</td></tr>
                <tr className="border-b"><td className="p-2"></td><td className="p-2">DSS05</td><td className="p-2">Kimlik Doğrulama</td><td className="p-2 text-orange-600 font-bold text-center">Yüksek</td></tr>
                <tr className="border-b bg-blue-50"><td className="p-2 font-bold">2. Atama</td><td className="p-2">DSS01</td><td className="p-2">Yazılım Performansı</td><td className="p-2 text-red-600 font-bold text-center">Kritik</td></tr>
                <tr className="border-b"><td className="p-2"></td><td className="p-2">APO12</td><td className="p-2">Yedekleme Planı</td><td className="p-2 text-red-600 font-bold text-center">Kritik</td></tr>
                <tr className="border-b bg-orange-50"><td className="p-2 font-bold">3. Saha</td><td className="p-2">DSS03</td><td className="p-2">GPS/Network Sorunu</td><td className="p-2 text-red-600 font-bold text-center">Kritik</td></tr>
                <tr className="border-b"><td className="p-2"></td><td className="p-2">DSS05</td><td className="p-2">VPN Şifreleme</td><td className="p-2 text-red-600 font-bold text-center">Kritik</td></tr>
                <tr className="border-b bg-purple-50"><td className="p-2 font-bold">4. Arşiv</td><td className="p-2">MEA03</td><td className="p-2">KVKK/Yasal Süre</td><td className="p-2 text-orange-600 font-bold text-center">Yüksek</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },

    // Slide 12: Özet ve Sonuç
    {
      title: "Özet ve Ana Çıkarımlar",
      subtitle: "COBIT 2019 ile Hayat Kurtaran IT Yönetişimi",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-1">1. Şemsiye Metaforu</h4>
              <p className="text-xs text-gray-700">COBIT, IT risklerine karşı organizasyonu koruyan bir kalkandır.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 mb-1">2. Yönetişim ≠ Yönetim</h4>
              <p className="text-xs text-gray-700">Strateji (Ne yapılacak?) ile Operasyon (Nasıl yapılacak?) ayrılmalıdır.</p>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg shadow-lg border-2 border-red-500 flex items-center gap-4">
            <div>
               <h4 className="font-bold text-xl text-red-700">Sonuç</h4>
               <p className="text-gray-800">
                 Acil sağlık hizmetlerinde IT arızası teknik bir sorun değil, <br/>
                 <strong>insan hayatına mal olan bir felakettir.</strong> COBIT bunu önler.
               </p>
            </div>
          </div>

          <div className="bg-gray-800 text-white p-4 rounded-lg text-center mt-8">
            <p className="text-lg font-bold">Teşekkürler</p>
            <p className="text-sm text-gray-400">Sunum Sonu - Sorularınız?</p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Ana Slayt Konteyner */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden min-h-[700px] flex flex-col relative">
          
          {/* Header */}
          <div className="bg-white p-8 border-b border-gray-100 flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">{slides[currentSlide].title}</h2>
              <p className="text-lg text-blue-600 font-medium mt-1">{slides[currentSlide].subtitle}</p>
            </div>
            <div className="text-right text-sm text-gray-400">
               Muhammed KAYA
            </div>
          </div>

          {/* Content Area */}
          <div className="p-8 flex-grow bg-gray-50/50">
            {slides[currentSlide].content}
          </div>

          {/* Footer / Navigation */}
          <div className="p-6 bg-white border-t border-gray-100 flex justify-between items-center">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold transition-all transform active:scale-95 ${
                currentSlide === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-blue-600 border-2 border-blue-100 hover:border-blue-500 hover:bg-blue-50 shadow-sm'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Geri</span>
            </button>

            <div className="flex flex-col items-center">
               <span className="text-sm font-semibold text-gray-500 mb-2">
                {currentSlide + 1} / {slides.length}
              </span>
              <div className="flex space-x-1">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentSlide
                        ? 'w-8 bg-blue-600'
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold transition-all transform active:scale-95 ${
                currentSlide === slides.length - 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30'
              }`}
            >
              <span>İleri</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default COBITPresentation;