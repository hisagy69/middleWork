'use strict';

import './modules/listShow';
import popup from './modules/popup';
import './modules/burger';
import scrollFunc from './modules/scrollFunc';
import SliderCarousel from './modules/slider';
import sendForm from './modules/sendForm';
import Validator from './modules/validator';
import './modules/calc.js';
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
		]
	}
});

sendForm('banner-form');
const valid1 = new Validator({
	selector: '#form1',
	method: {
		'name': [
			['notEmpty'],
			['pattern', 'name']
		],
		'phone': [
			['notEmpty'],
			['pattern', 'phone']
		]
	}
});

sendForm('form1');
const valid2 = new Validator({
	selector: '#form2',
	method: {
		'name': [
			['notEmpty'],
			['pattern', 'name']
		],
		'phone': [
			['notEmpty'],
			['pattern', 'phone']
		]
	}
});

sendForm('form2');
const valid3 = new Validator({
	selector: '#footer_form',
	method: {
		'phone': [
			['notEmpty'],
			['pattern', 'phone']
		]
	}
});

sendForm('footer_form');
const valid4 = new Validator({
	selector: '#card_order',
	method: {
		'name': [
			['notEmpty'],
			['pattern', 'name']
		],
		'phone': [
			['notEmpty'],
			['pattern', 'phone']
		]
	}
});

sendForm('card_order');
const valid5 = new Validator({
	selector: '#card_order',
	method: {
		'name': [
			['notEmpty'],
			['pattern', 'name']
		],
		'phone': [
			['notEmpty'],
			['pattern', 'phone']
		]
	}
});
valid.init();
valid1.init();
valid2.init();
valid3.init();
valid4.init();
valid5.init();
sendForm('card_order');