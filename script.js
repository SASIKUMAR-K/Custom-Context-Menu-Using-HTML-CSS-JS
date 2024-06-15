const option = document.querySelector('.contextBar');
function show(visible = true) {
	option.style.display = visible ? 'block' : 'none';
}
window.addEventListener('contextmenu', (e) => {
	e.preventDefault();
	show();
	const topPx =
		e.y + option.offsetHeight > window.innerHeight
			? window.innerHeight - option.offsetHeight
			: e.y;
	const leftPx =
		e.x + option.offsetWidth > window.innerWidth
			? window.innerWidth - option.offsetWidth
			: e.x;
	option.style.top = topPx + 'px';
	option.style.left = leftPx + 'px';
});

window.addEventListener('click', () => {
	show(false);
});
