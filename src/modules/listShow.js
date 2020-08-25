export default (() => {
	const clubsSelect = document.querySelector('.club-select'),
			list = clubsSelect.querySelector('ul');

	clubsSelect.addEventListener('click', () => {
		!list.style.display ? 
		list.style.display = 'inline-block' :
		list.style.display = '';
	});
})();