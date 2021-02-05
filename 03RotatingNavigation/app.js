const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

// Open menu
open.addEventListener('click', () => container.classList.add('show-nav'));

// close menu
close.addEventListener('click', () => container.classList.remove('show-nav'));
