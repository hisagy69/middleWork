const popup = (selectorOpenPopup, idPopup, hideBtn) => {
	const popupBtn = document.querySelector(selectorOpenPopup),
			popup = document.getElementById(idPopup);
	
	popupBtn.addEventListener('click', () => {
		if (hideBtn) {
			popupBtn.style.display = 'none';
		}
		popup.style.display = 'block';
	});

	popup.addEventListener('click', (event) => {
		const target = event.target;
		if(target.classList.contains('close_icon') || !target.closest('.form-content')) {
			popup.style.display = '';
		}
	});
};

export default popup;