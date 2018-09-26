const header = document.querySelector('header');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const nav = document.querySelector('nav');

open.addEventListener('click', () => {
	header.style.background = 'rgb(153,164,175, 0.8)';
	open.style.display = 'none';
	close.style.display = 'block';
	nav.style.display = 'flex';
});

close.addEventListener('click', () => {
	header.style.background = '#99a4af';
	open.style.display = 'block';
	close.style.display = 'none';
	nav.style.display = 'none';
});