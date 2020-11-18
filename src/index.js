'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'fetch-polyfill';
import 'mdn-polyfills/Node.prototype.append';
import 'date-polyfill';


import countTimer from './modules/countTimer'
import calc from './modules/calc'
import toggleMenu from './modules/toggleMenu'
import togglePopUp from './modules/togglePopUp'
import tabs from './modules/tabs'
import slider from './modules/slider'
import dataImg from './modules/dataImg'
import sendForm from './modules/sendForm'
import inputForm from './modules/inputForm'
import 'regenerator-runtime/runtime'

// Timer    
countTimer('17 november 2020');

// калькулятор
calc();

// Menu 
toggleMenu();

//popup
togglePopUp();

//табы    
tabs();

//слайдер
slider();    

// Наша команда    
dataImg();

//send-ajax-form   
sendForm();

//валидация    
inputForm();