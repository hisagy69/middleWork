'use strict';

import listShow from './modules/listShow';
import popup from './modules/popup';
import './modules/burger';
import scrollFunc from './modules/scrollFunc';
import SliderCarousel from './modules/slider';
import sendForm from './modules/sendForm';
import Validator from './modules/validator'


listShow();
popup('.open-popup', 'free_visit_form');
popup('.fixed-gift', 'gift', true);
popup('.callback-btn', 'callback_form');
scrollFunc('totop', 'clubs');
document.querySelector('.hidden-small')
	.addEventListener('click', (event) => {
		event.preventDefault();
		if (event.target.closest('a')) {
			scrollFunc(null, null, event.target.hash);
		}
	});
const slider1 = new SliderCarousel({
	wrap: '.services-slider',
	typeTranslate: 'translate',
	slidesToShow: 4,
	button: true,
	infinity: true,
	responsive: [{
		breakpoint: 1024,
		slideToShow: 3
	},
	{
		breakpoint: 768,
		slideToShow: 2
	},
	{
		breakpoint: 576,
		slideToShow: 1
	}]
});
slider1.init();
const slider2 = new SliderCarousel({
	wrap: '.gallery-slider',
	typeTranslate: 'show',
	slidesToShow: 1,
	button: true,
	infinity: true
});
slider2.init();

const valid = new Validator({
	selector: '#banner-form',
	method: {
		'name': [
			['notEmpty'],
			['pattern', 'name']
		],
		'phone': [
			['notEmpty'],
			['pattern', 'phone']
		],
		'checkbox': [
			['notEmpty']
		]
	}
});
valid.init();
sendForm('banner-form');