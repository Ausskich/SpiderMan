// Получение сохраненных данных 
const userData = JSON.parse(localStorage.getItem('profile'));

// Если данные существую вывожу их на страницу

if (userData) {
    document.getElementById('username').textContent = userData.login
    document.getElementById('birth').textContent = userData.birthday
	document.getElementById('gender').textContent = userData.gender
}

const profileButton = document.getElementById('profileButton')
const profileModal = document.getElementById('profileModal')
const overlay = document.getElementById('overlay')
const closeModal = document.getElementById('closeModal')
const logoutButton = document.getElementById('logoutButton')

// Открытие модального окна
profileButton.addEventListener('click', function () {
	profileModal.style.display = 'block'
	overlay.style.display = 'block'
})

// Закрытие модального окна
closeModal.addEventListener('click', function () {
	profileModal.style.display = 'none'
	overlay.style.display = 'none'
})

// Выйти из профиля
logoutButton.addEventListener('click', function () {
	window.location.href = 'auth.html' // Перенаправление на страницу авторизации
})

// Закрытие модального окна при клике на overlay
overlay.addEventListener('click', function () {
	profileModal.style.display = 'none'
	overlay.style.display = 'none'
})       