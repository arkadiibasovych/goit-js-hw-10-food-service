import itemsTemplate from '../templates/menu-items.hbs';
import menuItems from '../menu.json';
const menuRef = document.querySelector('.js-menu');

const markup = itemsTemplate(menuItems);


menuRef.insertAdjacentHTML('beforeend', markup);


