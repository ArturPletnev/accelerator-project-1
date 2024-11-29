import { loadVideo } from './video';
import { initPriceTabs } from './price';
import { initJurySlider } from './slider-juri';
import { initFaqTabs } from './fag';
import { initFagAccordions } from './fag-accordions';
import { initReviewSlider } from './reviews-slider';
import { initFormValidation } from './form-validation';

loadVideo(); // загрузка видео в блоке "about"
initPriceTabs(); // переключение табами абонементов в блоке "price"
initJurySlider(); // слайдер карточек в блоке "juri"
initFaqTabs(); // переключение табами меню в блоке "fag"
initFagAccordions(); // открытие-закрытие аккордеонов в блоке "fag"
initReviewSlider(); // слайер в блоке "reviews"
initFormValidation(); // валидация формы в блоке "form-validation"
