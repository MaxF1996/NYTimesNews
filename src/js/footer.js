const footerEl = document.querySelector('footer');
export default function footerJs() {
  setInterval(getRandomHexColor, 5000);
}

function getRandomHexColor() {
  footerEl.firstElementChild.firstElementChild.style.color = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
}

function footer() {
	const
		 main = document.getElementsByTagName('main')[0],
		 footer = document.getElementsByTagName('footer')[0]

	main.style.paddingBottom = footer.clientHeight + 'px'
}

window.addEventListener('load', footer);
window.addEventListener('resize', footer);