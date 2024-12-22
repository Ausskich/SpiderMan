const characters = [
	{
		name: 'Питер Паркер / Человек-Паук (Том Холланд)',
		image: './images/search-items/tomi.svg',
	},
	{
		name: 'Питер Паркер / Человек-Паук (Тоби Магуайр)',
		image: './images/search-items/tobi.svg',
	},
	{
		name: 'Питер Паркер / Человек-Паук (Эндрю Гарфилд)',
		image: './images/search-items/endry.svg',
	},
	{
		name: 'Зелёный Гоблин / Норман Озборн (Уильям Дефо)',
		image: './images/search-items/defo.svg',
	},
	{
		name: 'Мэри Джейн Уотсон (Кирстен Данст)',
		image: './images/search-items/danst.svg',
	},
	{
		name: 'Доктор Осьминог / Док Ок (Альфред Молина)',
		image: './images/search-items/molino.svg',
	},
	{
		name: 'Веном / Эдди Брок (Тофер Грейс)',
		image: './images/search-items/grays.svg',
	},
	{
		name: 'Человек-Песок / Флинт Марко (Томас Хейден Чёрч)',
		image: './images/search-items/tomas.svg',
	},
	{
		name: 'Новый Зелёный Гоблин / Гарри Озборн (Джеймс Франко)',
		image: './images/search-items/jaaims.svg',
	},
	{
		name: 'Ящерица / Доктор Коннорс (Рис Ифанс)',
		image: './images/search-items/ris.svg',
	},
	{
		name: 'Гвен Стейси (Эмма Стоун)',
		image: './images/search-items/gven.svg',
	},
	{
		name: 'Электро / Макс Диллон (Джейми Фокс)',
		image: './images/search-items/blu.svg',
	},
	{
		name: 'Гарри Озборн / Зелёный Гоблин (Дэйн Дехаан)',
		image: './images/search-items/dehan.svg',
	},
	{
		name: 'Вулкан / Адриан Тумс (Майкл Китон)',
		image: './images/search-items/mikle.svg',
	},
	{
		name: 'Тони Старк / Железный Человек (Роберт Дауни-младший)',
		image: './images/search-items/daun.svg',
	},
	{
		name: 'Мистерио / Квентин Бек (Джейк Джилленхол)',
		image: './images/search-items/jake.svg',
	},
	{
		name: 'Доктор Стрэндж (Бенедикт Камбербэтч)',
		image: './images/search-items/xzlol.svg',
	},
]

const characterGrid = document.getElementById('character-grid');
const searchInput = document.getElementById('search');

function renderCharacters(filter = "") {
    characterGrid.innerHTML = "";
    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(filter.toLowerCase())
    );

    filteredCharacters.forEach(character => {
        const [characterName, actorName] = character.name.split(" (");
        const card = document.createElement('div');
        card.className = 'character__card';
        card.innerHTML = `
            <img class="character__card-pict" src="${character.image}" alt="${characterName}" loading="lazy">
            <h2 class="character__card-heading" >${characterName}</h2>
            <p class="character__card-descriptor" >${actorName ? `(${actorName}`.replace(/\)$/g, ")") : ""}</p>
        `;
        characterGrid.appendChild(card);
    });
}

searchInput.addEventListener('input', (e) => {
    renderCharacters(e.target.value);
});

renderCharacters();