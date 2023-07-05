export function loadGoogleMapsAPI() {
  return new Promise((resolve, reject) => {
    if (window.google && window.google.maps) {
      // Eğer Google Haritalar API zaten yüklü ise hemen çözümlenmiş promise döndür
      resolve();
    } else {
      // API yüklü değilse API betiğini dinamik olarak oluştur ve yükle
      const script = document.createElement("script");
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyBsaaOFjYWp1_i2gd6QzstLEMJm6GpPjI4";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        resolve();
      };
      script.onerror = () => {
        reject(new Error("Google Haritalar API yüklenemedi."));
      };
      document.head.appendChild(script);
    }
  });
}
