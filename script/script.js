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

const popup = () => {
	const openPopup = document.querySelector('.open-popup'),
			popup = document.getElementById('free_visit_form');
	
	openPopup.addEventListener('click', () => {
		popup.style.display = 'block';
	});

	popup.addEventListener('click', (event) => {
		const target = event.target;
		if(target.classList.contains('close_icon') || !target.closest('.form-content')) {
			popup.style.display = '';
		};
	});
}

listShow();
popup();