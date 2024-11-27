import { loadVideo } from './video';
import { initPriceTabs } from './price';
import { initJurySlider } from './slider-juri';

loadVideo(); // Загрузка видео в блоке "about"
initPriceTabs(); // переключение табами абонементов в блоке "price"
initJurySlider(); // слайдер карточек в блоке "juri"

