const body = document.querySelector('body');

document.querySelectorAll('.dropdown').forEach(function (dropForAll) {

	const dropdownButton = dropForAll.querySelector('.dropdown__button');
	const dropdownList = dropForAll.querySelector('.dropdown__list');
	const dropdownListAitems = dropdownList.querySelectorAll('.dropdown__item');
	const dropdownInput = dropForAll.querySelector('.dropdown__input_hidden');

	dropdownButton.addEventListener('click', function () {
		dropdownList.classList.toggle('dropdown__list--visible');
	});

	dropdownListAitems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropdownButton.innerText = this.innerText;
			dropdownInput.value = this.dataset.value;
			dropdownList.classList.remove('dropdown__list--visible');
		});
	});

	document.addEventListener('click', function (e) {
		if (e.target !== dropdownButton) {
			dropdownList.classList.remove('dropdown__list--visible');
		}
	});
});