'use strict';

import listShow from './modules/listShow';
import popup from './modules/popup';
import './modules/burger';


listShow();
popup('.open-popup', 'free_visit_form');
popup('.fixed-gift', 'gift', true);
// burger();