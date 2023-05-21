const subscriptions = document.querySelectorAll(".btn.btn-sm");

// Parcourir chaque abonnement et cliquer sur le bouton "Se désabonner"
subscriptions.forEach((subscription) => {
	const timer = setInterval(() => {
		subscription.click();
		clearInterval(timer);
	}, 300);
});
