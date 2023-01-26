if ('serviceWorker' in navigator) {
		navigator.serviceWorker
			.register('/PWA/sw.js')
			.then(() => {console.log('Service Worker Registered')})
			.catch((error) => {console.log(`Error: ${error}`)});
}


const button = document.getElementById('notifications');
button.addEventListener('click', () => {
  Notification.requestPermission().then((result) => {
    if (result === 'granted') {
      randomNotification();
    }
  });
})

function randomNotification() {
	//const randomItem = Math.floor(Math.random() * games.length);
	const notifTitle = "Notification";//games[randomItem].name;
	const notifBody = `a notification :)`;//`Created by ${games[randomItem].author}.`;
	//const notifImg = `data/img/${games[randomItem].slug}.jpg`;
	const options = {
		body: notifBody,
		vibrate: [200, 100, 200]
	//	icon: notifImg,
	};
	new Notification(notifTitle, options);
	//setTimeout(randomNotification, 3000);
  }