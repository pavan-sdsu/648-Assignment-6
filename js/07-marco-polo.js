for (var i = 1; i <= 100; i++) {
	if (i % 3 == 0) {
		if (i % 5 == 0) window.console.log('Marco! Polo!');
		else window.console.log('Marco!');
	} else if (i % 5 == 0) {
		window.console.log('Polo!');
	} else {
		window.console.log(i);
	}
}