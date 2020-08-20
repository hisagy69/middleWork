'use strict';

const listShow = () => {
	const clubsSelect = document.querySelector('.club-select'),
			list = clubsSelect.querySelector('ul');

	clubsSelect.addEventListener('click', () => {
		!list.style.display ? 
		list.style.display = 'inline-block' :
		list.style.display = '';
	});
}

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
}

listShow();
popup('.open-popup', 'free_visit_form');
popup('.fixed-gift', 'gift', true);