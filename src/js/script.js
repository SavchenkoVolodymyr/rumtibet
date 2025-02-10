const body = document.querySelector('body');
document.querySelector('.dropdown__button').addEventListener('click', function () {
    document.querySelector('.dropdown__list').classList.add('dropdown__list--visible');
});