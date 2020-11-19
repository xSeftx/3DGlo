'use strict';

import countTimer from './modules/countTimer'
import toggleMenu from './modules/toggleMenu'
import togglePopUp from './modules/togglePopUp'
import tabs from './modules/tabs'
import slider from './modules/slider'
import dataImg from './modules/dataImg'
import calc from './modules/calc'
import sendForm from './modules/sendForm'
import inputForm from './modules/inputForm'

// Timer    
countTimer('17 november 2020');

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

// калькулятор
calc();

//send-ajax-form   
sendForm();

//валидация    
inputForm();