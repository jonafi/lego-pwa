const staticInfo = "Ian's Legos";
const assets = [
  "/",
  "/index.html",
  "/256.png",
  // "/10771.jpg",
  // "/10771.pdf",
  // "/30364.jpg",
  // "/30364.pdf",
  "/30496.jpg",
  "/30496.pdf",
  // "/60206.jpg",
  // "/60206.pdf",
  // "/60212.jpg",
  // "/60212.pdf",
  // "/60249.jpg",
  // "/60249.pdf",
  "/75125.jpg",
  "/75125.pdf",
  "/75126.jpg",
  "/75126.pdf",
  "/75127.jpg",
  "/75127.pdf",
  // "/75130.jpg",
  // "/75130.pdf",
  // "/75183.jpg",
  // "/75183.pdf",
  // "/75193.jpg",
  // "/75193.pdf",
  // "/75198.jpg",
  // "/75198.pdf",

];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticInfo).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })