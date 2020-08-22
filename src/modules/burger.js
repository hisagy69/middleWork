//burger
export default (() => {
	const menuButton = document.querySelector('.menu-button'),
		menu = document.querySelector('.popup-menu'),
		topMenu = document.querySelector('.top-menu');
	if (innerWidth <= 768) {
		menuButton.style.display = 'block';

		menuButton.addEventListener('click', () => {
			menu.style.display ='flex';
		});
		menu.addEventListener('click', (event) => {
			const target = event.target;
			if (target.matches('.close-menu-btn img') || target.closest('.scroll')) {
				menu.style.display = '';
			}
		});
		window.addEventListener('scroll', () => {
			if (topMenu.getBoundingClientRect().top === 0){
				topMenu.style.cssText = '';
			}
			if (topMenu.getBoundingClientRect().top < 0) {
				topMenu.style.cssText = `
					position: fixed;
					top: 0;
				`;
			}
		});
		window.addEventListener('resize', () => {
			if (innerWidth > 768) {
				menuButton.style.display = '';
				menu.style.display = '';
				topMenu.style.display = '';
			}
		});
	}
})();