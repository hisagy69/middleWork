class SliderCarousel {
	constructor({wrap, position = 0, slidesToShow = 3,
				infinity = false, responsive = [],
				button = false, controlPrev, controlNext,
				typeTranslate = 'show'}) {
		this.wrap = document.querySelector(wrap);
		this.main = this.wrap.parentNode;
		this.slides = this.wrap.children;
		this.slidesToShow = slidesToShow;
		this.option = {
			typeTranslate,
			position,
			widthSlides: Math.floor(100 / this.slidesToShow),
			infinity
		};
		this.control = {
			button,
			controlPrev,
			controlNext
		};
		this.responsive = responsive;
	}
	idGen() {
		return Math.random().toString(36).substring(7);
	}
	init() {
		if (this.wrap) {
			this.main.id = this.idGen();
			this.wrap.id = this.idGen();
			this.addArrow();
			this.controlSlider();
			this.responseInit();
		}
	}
	addStyle() {
		this.main.style.overflow = 'hidden';
		if (this.option.typeTranslate === 'show') {
			this.wrap.style.display = 'block';
			[...this.slides].forEach((slide, i) => {
				if (i === this.option.position) {
					slide.style.display = 'block';
				} else {
					slide.style.display = 'none';
				}
			});
		}
		if (this.option.typeTranslate === 'translate') {
			this.wrap.style.display = 'flex';
			this.wrap.style.cssText = `
				transition: transform 0.5s;
				will-change: transform;
			`;
			[...this.slides].forEach(slide => {
				slide.style.cssText = `
					flex: 0 0 ${this.option.widthSlides}% !important;
					margin: auto 0 !important;
				`;
			});
		}
	}
	addArrow() {
		if (this.controlPrev && this.controlNext) {
			this.prev = document.querySelector(this.controlPrev);
			this.next = document.querySelector(this.controlNext);
			return;
		}
		if (this.slides.length >= 4 && this.control.button) {
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
			if (this.option.typeTranslate === 'translate') {
				this.wrap.style.transform = `
					translateX(-${this.option.position * this.option.widthSlides}%)
				`;
			}
			if (this.option.typeTranslate === 'show') {
				this.wrap.style.display = 'block';
			}
		}
	}
	nextSlider() {
		if (this.option.infinity || this.option.position < this.slides.length - this.slidesToShow) {
			++this.option.position;
			if (this.option.position > this.slides.length - this.slidesToShow) {
				this.option.position = 0;
			}
			if (this.option.typeTranslate === 'translate') {
				this.wrap.style.transform = `
					translateX(-${this.option.position * this.option.widthSlides}%)
				`;
			}
			if (this.option.typeTranslate === 'show') {
				this.slides[this.option.position].display = 'block';
			}
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
				if (this.slidesToShow === 1) {
					this.addStyle();
				} else {
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
				}
			};
			checkResponse();
			window.addEventListener('resize', checkResponse);
		}
	}
}
export default SliderCarousel;