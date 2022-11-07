if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/PWA/sw.js')
      .then(() => {console.log('Service Worker Registered')})
      .catch((error) => {console.log(`Error: ${error}`)});
}