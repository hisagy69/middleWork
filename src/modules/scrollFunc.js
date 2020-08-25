const scrollFunc = (selectorButton, selectorShowBlock, selectorTo) => {
	try {
		const blockAt = document.getElementById(selectorShowBlock),
			button = document.getElementById(selectorButton),
			blockTo = document.querySelector(selectorTo);
			
		let	scrollAt;

		if (button) {
			window.addEventListener('scroll', () => {
				scrollAt = blockAt.getBoundingClientRect().top;
				if (scrollAt <= 0) {
					button.style.display = 'block';
				} else {
					button.style.display = '';
				}
			});
		}
		
		const animateTo = () => {
			let animateKey;
			let timeStart = 0;
			const animate = (time) => {
				timeStart = time;
				if (blockTo) {
					if (blockTo.offsetTop - Math.abs(document.documentElement.scrollTop) <= 50  || document.documentElement.scrollHeight - Math.abs(document.documentElement.scrollTop) <= document.documentElement.clientHeight){
						document.documentElement.scrollTop = blockTo.offsetTop;
						return;
					}
					if (blockTo.offsetTop > document.documentElement.scrollTop) {
						document.documentElement.scrollTop += 50;
					} 
					if (blockTo.offsetTop < document.documentElement.scrollTop) {
						document.documentElement.scrollTop -= 50;
					}
					animateKey = requestAnimationFrame(animate);
				} else {
					document.documentElement.scrollTop -= 50;
					if (document.documentElement.scrollTop !== 0) {
						animateKey = requestAnimationFrame(animate);
					}
				}
			};
			animate();
		}
		if (button) {
			button.addEventListener('click', (event) => {
				event.preventDefault();
				animateTo();
			});
		} else {
			animateTo();
		}
	} catch(error) {
		console.log(error);
	}
};
export default scrollFunc;