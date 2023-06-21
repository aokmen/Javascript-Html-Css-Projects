var animationUrl = '128594-rock-paper-scissors.json';

// Lottie animasyonunu yüklemek için kullanacağımız elementi seçin
var container = document.getElementById('lottie-container');

// Lottie animasyonunu yükle
lottie.loadAnimation({
  container: document.getElementById('lottie-container'), // Animasyonun gösterileceği element
  renderer: 'svg', // SVG formatında render et
  loop: true, // Döngüsel animasyon
  autoplay: true, // Otomatik oynat
  path: '128594-rock-paper-scissors.json' // Lottie dosyasının URL'si veya dosya yolu
});