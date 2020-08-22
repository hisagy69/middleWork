'use strict';

import listShow from './modules/listShow';
import popup from './modules/popup';
import './modules/burger';
import arrowTop from './modules/arrowTop';
import SliderCarousel from './modules/slider';


listShow();
popup('.open-popup', 'free_visit_form');
popup('.fixed-gift', 'gift', true);
popup('.callback-btn', 'callback_form');
arrowTop('clubs', 'totop');
const slider1 = new SliderCarousel({
	wrap: '.services-slider',
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
// burger();