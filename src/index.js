'use strict';

import listShow from './modules/listShow';
import popup from './modules/popup';
import './modules/burger';
import arrowTop from './modules/arrowTop';


listShow();
popup('.open-popup', 'free_visit_form');
popup('.fixed-gift', 'gift', true);
popup('.callback-btn', 'callback_form');
arrowTop('clubs', 'totop')
// burger();