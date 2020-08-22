class SliderCarousel {
	constructor({wrap, position = 0, slidesToShow = 3, infinity = false, responsive = []}) {
		this.wrap = document.querySelector(wrap);
		this.main = this.wrap.parentNode;
		this.slides = this.wrap.children;
		this.slidesToShow = slidesToShow;
		this.option = {
			position,
			widthSlides: Math.floor(100 / this.slidesToShow),
			infinity
		};
		this.responsive = responsive;
	}
	init() {
		this.addStyle();
		this.addArrow();
		this.controlSlider();
		this.responseInit();
	}
	addStyle() {
		let style = document.getElementById('sliderCarousel-style');
		if (!style) {
			style = document.createElement('style');
			style.id = 'sliderCarousel-style';
		}
		style.textContent = `
			.${this.main.className}{
				overflow: hidden !important;
			}
			.${this.wrap.className}{
				display: flex !important;
				transition: transform 0.5s !important;
				will-change: transform !important;
			}
			.${this.slides[0].className}{
				 flex: 0 0 ${this.option.widthSlides}% !important;
				 margin: auto 0 !important;
			}
		`;
		document.head.append(style);
	}
	addArrow() {
		if (this.slides.length >= 4) {
			this.prev = document.createElement('button');
			this.next = document.createElement('button');
			this.main.style.position = 'relative';
			this.prev.style.cssText = `
				position: absolute;
				top: 25%;
				transform: translateY(-35%);
				left: 35px;
				width: 40px;
				height: 40px;
				background: #fc0 url('images/arrow-left.png') no-repeat center;
				border: none;
				border-radius: 50%;
			`;
			this.next.style.cssText = `
				position: absolute;
				top: 25%;
				transform: translateY(-35%);
				right: 35px;
				width: 40px;
				height: 40px;
				background: #fc0 url('images/arrow-right.png') no-repeat center;
				border: none;
				border-radius: 50%;
			`;
			this.main.append(this.prev);
			this.main.append(this.next);
		}
	}
	prevSlider() {
		if (this.option.infinity || this.option.position > 0) {
			--this.option.position;
			if (this.option.position < 0) {
				this.option.position = this.slides.length - this.slidesToShow;
			}
			this.wrap.style.transform = `
				translateX(-${this.option.position * this.option.widthSlides}%)
			`;
		}
	}
	nextSlider() {
		if (this.option.infinity || this.option.position < this.slides.length - this.slidesToShow) {
			++this.option.position;
			if (this.option.position > this.slides.length - this.slidesToShow) {
				this.option.position = 0;
			}
			this.wrap.style.transform = `
				translateX(-${this.option.position * this.option.widthSlides}%)
			`;
		}
	}
	controlSlider() {
		if (this.prev && this.next) {
			this.prev.addEventListener('click', this.prevSlider.bind(this));
			this.next.addEventListener('click', this.nextSlider.bind(this));
		}
	}
	responseInit() {
		if (this.responsive) {
			const slidesToShowDefault = this.slidesToShow;
			const allResponse = this.responsive.map(item => item.breakpoint);
			const maxResponse = Math.max(...allResponse);

			const checkResponse = () => {
				const widthWindow = document.documentElement.clientWidth;
				if (widthWindow < maxResponse) {
					for(let i = 0; i < allResponse.length; i++) {
						if (widthWindow < allResponse[i]) {
							this.slidesToShow = this.responsive[i].slideToShow;
							this.option.widthSlides = Math.floor(100 / this.slidesToShow);
							this.addStyle();
						}
					}
				} else {
					this.slidesToShow = slidesToShowDefault;
					this.option.widthSlides = Math.floor(100 / this.slidesToShow);
					this.addStyle();
				}
			};
			checkResponse();
			window.addEventListener('resize', checkResponse);
		}
	}
}
export default SliderCarousel;