const staticGoTrav = "gotrav-v1";
const assets = [
  "/",
  "/index.html",
  "src/css/styles.css",
  "src/js/index.js",
  "src/assets/About.svg",
  "src/assets/Contact.svg",
  "src/assets/logo.svg",
  "src/assets/preview.svg",
  "src/assets/Traveller.svg",
  "src/assets/Destinations",
  "src/assets/Services",
  "src/assets/Testimoni",
  "src/assets/Destinations/Bali.png",
  "src/assets/Destinations/Beijing.png",
  "src/assets/Destinations/France.png",
  "src/assets/Destinations/London.png",
  "src/assets/Destinations/Rome.png",
  "src/assets/Destinations/Swiss.png",
  "src/assets/Services/fast.svg",
  "src/assets/Services/loyalty",
  "src/assets/Services/refund.svg",
  "src/assets/Testimoni/people-1.png",
  "src/assets/Testimoni/people-2.png",
  "src/assets/Testimoni/people-3.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticGoTrav).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
