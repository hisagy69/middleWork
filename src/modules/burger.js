//burger
const burger = () => {
		const menuButton = document.querySelector('.menu-button'),
		menu = document.querySelector('.popup-menu'),
		topMenu = document.querySelector('.top-menu');
		const menuShow = () => {
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
					const menuScroll = topMenu.getBoundingClientRect().top;
					console.log(menuScroll);
					if (menuScroll === 0) {
						topMenu.style.cssText = '';
					}
					if (menuScroll < 0 && innerWidth < 768) {
						topMenu.style.cssText = `
							position: fixed;
							top: 0;
						`;
					}
				});
			}
		}
		window.addEventListener('resize', () => {
			if (innerWidth > 768) {
				menuButton.style.display = '';
				menu.style.display = '';
				topMenu.style.cssText = '';
			} else {
				menuShow();
			}
		});
		menuShow();
};
export default burger;