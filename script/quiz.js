
document.addEventListener('DOMContentLoaded', () => {
	const questions = document.querySelectorAll('.question.container')
	const resultsContainer = document.querySelector('.result')
	const resultText = document.getElementById('result-text')
	const userProfile = JSON.parse(localStorage.getItem('profile')) // Получаем данные из localStorage

	const restartButton = document.querySelector('.result__restart')
	let correctAnswers = 0
	const totalQuestions = questions.length

	// Показ след вопроса или результата (отталкивается от индекса коллекции questions)
	const showNextQuestion = index => {
		questions[index].classList.add('hidden')
		if (questions[index + 1]) {
			questions[index + 1].classList.remove('hidden')
		} else {
			showResult()
		}
	}

	// Если профиль существует, заменяем UserName на логин
	// Показ результатов
	const showResult = () => {
		if (userProfile && resultsContainer && resultText) {
			resultText.innerHTML = `${userProfile.login}, поздравляю, вы ответили на ${correctAnswers} из ${totalQuestions} вопросов.`
			resultsContainer.classList.remove('hidden')

            localStorage.setItem(
							'lastTestResult',
							JSON.stringify({ correctAnswers, totalQuestions })
						)
		}
	}

	// Перезапуск игры (обнуление правильных ответов, добавляет .hidden всем кроме первого вопроса(0 по индексу))
	const restartQuiz = () => {
		correctAnswers = 0
		resultsContainer.classList.add('hidden')
		questions.forEach(q => q.classList.add('hidden'))
		questions[0].classList.remove('hidden')
	}

	// Обработчики событий для вопросов
	questions.forEach((question, index) => {
		const nextButton = question.querySelector('.question__submit')
		const answers = question.querySelectorAll('.question__answers-radio')

		nextButton.addEventListener('click', () => {
			answers.forEach(answer => {
				if (answer.checked && answer.value === '1') {
					correctAnswers++
				}
			})
			showNextQuestion(index)
		})
	})

	// Обработчик кнопки "Пройти снова"
	if (restartButton) {
		restartButton.addEventListener('click', restartQuiz)
	}
})
