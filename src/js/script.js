const body = document.querySelector('body');

// for burger

function burger () {
	const menuBurger = document.querySelector('.header__list');
const burgerButton = document.querySelector('.burger_menu');
burgerButton.addEventListener('click', function () {
	menuBurger.classList.toggle('active');
	burgerButton.classList.toggle('active');	
})
}
burger ();



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
			if (listItem.classList.contains('active')){
				dropdownButton.innerText = this.innerText;	
			}else{
			dropdownButton.innerText = this.innerText;
			dropdownInput.value = this.dataset.value;
			dropdownList.classList.remove('dropdown__list--visible');	
			}
			
		});
	});

	document.addEventListener('click', function (e) {
		if (e.target !== dropdownButton) {
			dropdownList.classList.remove('dropdown__list--visible');
		}
	});

	// для декількох значень

	if (dropdownButton.dataset.form == 'participant') {
		dropdownListAitems.forEach(function (listItem) {
			listItem.addEventListener('click', function (e) {
				e.stopPropagation();
				if (listItem.classList.contains('active')){
				let dataAtrValue = listItem.dataset.value;
				let remuveInput =  document.querySelector('[name = "'+dataAtrValue+'"]');
				remuveInput.remove();
					listItem.classList.remove('active');
				}
				else{
					let newInput = document.createElement('input');
				newInput.type = 'text';
				newInput.value = this.dataset.value;
				newInput.className = 'dropdown__input_hidden';
				newInput.name = this.dataset.value;
				dropdownList.after(newInput);
				listItem.classList.add('active');
				}
			});
		});
	}
	
});
