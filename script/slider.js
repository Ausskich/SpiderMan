const swiper = new Swiper('.swiper', {
    loop: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: updateNavigationAndSlideNumber,
    },
});

const nextButton = document.querySelector('.swiper-button-next');
const prevButton = document.querySelector('.swiper-button-prev');
const totalSlides = document.querySelectorAll('.swiper-slide').length;

function updateNavigationAndSlideNumber() {
    const currentIndex = swiper.activeIndex + 1;

    
    document.querySelectorAll('.slider__number').forEach((el, index) => {
        el.textContent = `${index + 1} / ${totalSlides}`;
    });

    if (currentIndex === 1) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }

    if (currentIndex === totalSlides) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
}

updateNavigationAndSlideNumber();