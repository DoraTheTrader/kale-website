# Kale Mekanik modern site notları

Bu prototip statik HTML, CSS ve JavaScript ile hazırlandı. React Native bu iş için doğru araç değil; React Native mobil uygulama geliştirmek içindir. Kurumsal web sitesi için en pratik seçenekler:

- Statik site: Bu klasördeki `index.html`, `styles.css`, `script.js` ve `assets/` dosyaları doğrudan yayınlanabilir.
- React/Next.js: İleride blog, yönetim paneli, dinamik referanslar veya SEO odaklı sayfa yapısı büyürse tercih edilebilir.
- WordPress devam: Mevcut site WordPress ise bu tasarım tema olarak uygulanabilir, KVKK ve gizlilik sayfaları aynen korunabilir.

GitHub Pages bu tür tanıtım sitesi için yeterlidir. Ücretsizdir, SSL verir ve statik sayfaları sorunsuz yayınlar. İletişim formu için backend çalıştırmadığı için bu prototip formu e-posta istemcisine yönlendirir. Gerçek form kaydı veya panel istenirse Formspree, Netlify Forms, Cloudflare Pages Functions ya da küçük bir backend gerekir.

Yayın akışı:

1. GitHub'da `kalemekanik-site` gibi bir repo oluşturun.
2. Bu klasördeki dosyaları repoya ekleyin.
3. Repository Settings > Pages bölümünde kaynak olarak ana branch'i seçin.
4. Alan adını `kalemekanik.com` için GitHub Pages'a yönlendirin.
5. `/k-v-k-k/` ve `/gizlilik-politikasi/` rotalarındaki mevcut içerikleri aynen taşıyın veya mevcut WordPress sayfalarından koruyun.
