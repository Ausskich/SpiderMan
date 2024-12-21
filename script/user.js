// Получение сохраненных данных 
const userData = JSON.parse(localStorage.getItem('profile'));

// Получение последнего результата теста
const lastTestResult = JSON.parse(localStorage.getItem('lastTestResult'))

// Если данные существую вывожу их на страницу

if (userData) {
    document.getElementById('username').textContent = userData.login
    document.getElementById('birth').textContent = userData.birthday
	document.getElementById('gender').textContent = userData.gender
}

// Если последний результат теста существует, вывожу его
if (lastTestResult) {
    document.getElementById('lastTestResult').textContent = 
        `${lastTestResult.correctAnswers} из ${lastTestResult.totalQuestions}`;
} else {
    document.getElementById('lastTestResult').textContent = 'Тест ещё не пройден.';
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