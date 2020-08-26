'use strict';
import listShow from './modules/listShow';
import popup from './modules/popup';
import burger from'./modules/burger';
import scrollFunc from './modules/scrollFunc';
import SliderCarousel from './modules/slider';
import sendForm from './modules/sendForm';
import Validator from './modules/validator';
import calc from './modules/calc';

document.addEventListener('readystatechange', () => {
	if (document.readyState !== 'complete') {
		return;
	}
	listShow();
	burger();
	calc();
	popup('.open-popup', 'free_visit_form');
	popup('.fixed-gift', 'gift', true);
	popup('.callback-btn', 'callback_form');
	scrollFunc('totop', '.header-main');
	const hidden = document.querySelector('.hidden-small');

	if (hidden) {
		hidden.addEventListener('click', event => {
			event.preventDefault();
			if (event.target.closest('a')) {
				scrollFunc(null, null, event.target.hash);
			}
		});
	}
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
	slider1.prev.style.cssText = `
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
	slider1.next.style.cssText = `
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
	const slider2 = new SliderCarousel({
		wrap: '.gallery-slider',
		typeTranslate: 'show',
		slidesToShow: 1,
		button: true,
		infinity: true
	});
	slider2.init();
	slider2.prev.style.cssText = `
		position: absolute;
		top: 50%;
		transform: translateY(-35%);
		left: 5%;
		width: 40px;
		height: 40px;
		background: #fc0 url('images/arrow-left.png') no-repeat center;
		border: none;
		border-radius: 50%;
	`;
	slider2.next.style.cssText = `
		position: absolute;
		top: 50%;
		transform: translateY(-35%);
		right: 5%;
		width: 40px;
		height: 40px;
		background: #fc0 url('images/arrow-right.png') no-repeat center;
		border: none;
		border-radius: 50%;
	`;
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
	valid.init();
	valid1.init();
	valid2.init();
	valid3.init();
	valid4.init();
});