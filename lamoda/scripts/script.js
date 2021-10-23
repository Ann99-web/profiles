const headerCityButton = document.querySelector('.header__city-button');

headerCityButton.addEventListener('click', () => {
    const city = promt('Укажите ваш город');
    headerCityButton.textContent = city;
});