const arrowTop = (selectorBlock, selectorArrow) => {
	const blockAt = document.getElementById(selectorBlock),
			arrow = document.getElementById(selectorArrow);

	window.addEventListener('scroll', () => {
		const scrollAt = blockAt.getBoundingClientRect().top;
		if (scrollAt < 0) {
			arrow.style.display = 'block';
		}
		if (scrollAt >= 0) {
			arrow.style.display = '';
		}
	});
	let animateKey;
	let timeStart = 0;
	const animate = (time) => {
		timeStart = time;
		document.documentElement.scrollTop -= 50;
		if (document.documentElement.scrollTop !== 0) {
			animateKey = requestAnimationFrame(animate);
		}
	};
	arrow.addEventListener('click', (event) => {
		event.preventDefault();
		animateKey = requestAnimationFrame(animate);
	});
};
export default arrowTop;