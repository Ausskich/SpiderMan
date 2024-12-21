// Массивы выбора Дня, Месяца и Года
const days = Array.from({ length: 31 }, (_, i) => i + 1)

const months = [
	'Январь',
	'Февраль',
	'Март',
	'Апрель',
	'Май',
	'Июнь',
	'Июль',
	'Август',
	'Сентябрь',
	'Октябрь',
	'Ноябрь',
	'Декабрь',
]

const currentYear = new Date().getFullYear()

const years = Array.from(
	{ length: currentYear - 1920 + 1 },
	(_, i) => currentYear - i
)


// Константы для запоминания выбранных значений  
const daySelect = document.getElementById('birth-day')
const monthSelect = document.getElementById('birth-month')
const yearSelect = document.getElementById('birth-year')

// options для выбора Дня, Месяца и Года через метод массивов (.forEach)

days.forEach(day => {
    const option = document.createElement('option');
    option.value = day;
    option.textContent = day;
    daySelect.appendChild(option);
});

months.forEach((month, index) =>{
    const option = document.createElement('option');
    option.value = index + 1;
    option.textContent = month;
    monthSelect.appendChild(option);
});

years.forEach(year => {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
})

// Обработка формы
document.getElementById('authForm').addEventListener('submit', function(e){
    e.preventDefault()

    const login = document.getElementById('login').value;
    const day = daySelect.value;
    const month =  monthSelect.value;
    const year = yearSelect.value;
    const gender = document.getElementById('gender').value;

    let isValid = true;
    
    // Сброс ошибки
    document.querySelectorAll('.auth__error').forEach(error => {
        error.computedStyleMap.display= 'none';
    })

    if (!login) {
            const error = document.getElementById('login-error');
            error.textContent = "Введите логин!";
            isValid = false;
            error.style.display = 'block';
        }

    if (!day || !month || !year) {
        const error = document.getElementById('birth-error');
        error.textContent = "Введите дату рождения";
        isValid = false;
        error.style.display = 'block';
    }

    if (gender === '') {
        const error = document.getElementById('gender-error')
        error.textContent = 'Выберите пол!';
        isValid = false;
        error.style.display = 'block';
    }

    if (isValid) {
        const profile = {login, birthday: `${day}-${month}-${year}`, gender};

        localStorage.setItem('profile', JSON.stringify(profile));

        window.location.href = 'index.html';
    }
});