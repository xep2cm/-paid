// Получаем картинку
const rectangle = document.querySelector('.rectangle');

// Функция для запуска анимации
function animateOnFirstScroll() {
    // Предотвращаем многократное включение
    window.removeEventListener('scroll', animateOnFirstScroll);

    // Определяем нижнюю позицию картинки
    const finalPosition = document.querySelector('.creator-marketing__features-list').offsetTop +
                          document.querySelector('.creator-marketing__features-list').clientHeight + 63; // 63px интервал

    // Ставим картину на место
    rectangle.style.top = `${finalPosition}px`;

    // Спустя некоторое время открываем картинку
    setTimeout(() => {
        rectangle.classList.add('visible');
    }, 500); // Задержка перед открытием
}

// Вешаем обработчик на первую прокрутку
window.addEventListener('scroll', animateOnFirstScroll);