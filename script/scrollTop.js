window.addEventListener('scroll', () => {
	const scrollTopButton = document.getElementById('scrollTop')
	if (window.scrollY > 300) {
		scrollTopButton.classList.add('show')
	} else {
		scrollTopButton.classList.remove('show')
	}
})

// Прокрутка наверх
function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}
