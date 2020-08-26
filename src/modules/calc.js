export default (() => {
	const appData = {
		form: document.getElementById('card_order'),
		priceCollection: document.querySelectorAll('[name="club-name"]'),
		monthCollection: document.querySelectorAll('[name="card-type"]'),
		cardPrice: {
			schelkovo: {'1': 2999, '6': 14990, '9': 21990, '12': 24990},
			mozaika: {'1': 1990, '6': 9900, '9': 13900, '12': 19900}
		},
		month: 1,
		price: 1990,
		priceTotal: document.getElementById('price-total')
	};
	const checkIt = (collection) => {
		for (let item of collection) {
			if (item.checked) {
				return item.value;
			}
		}
	};
	const calc = (event) => {
		const target = event.target;
		if (target.matches('input')) {
			appData.month = checkIt(appData.monthCollection);
			appData.price = appData.cardPrice[checkIt(appData.priceCollection)][appData.month];
			appData.priceTotal.textContent = appData.price;
		}
	};
	appData.form.addEventListener('change', calc);
})();