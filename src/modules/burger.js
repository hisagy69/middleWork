//burger
export default (() => {
	const menuButton = document.querySelector('.menu-button'),
			menu = document.querySelector('.popup-menu');

	menuButton.addEventListener('click', () => {
		menu.style.display ='flex';
	});
	menu.addEventListener('click', (event) => {
		const target = event.target;
		if (target.matches('.close-menu-btn img') || target.closest('.scroll')) {
			menu.style.display = '';
		}
	});
})();