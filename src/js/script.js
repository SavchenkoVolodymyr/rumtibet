const body = document.querySelector('body');

// for burger

function burger() {
	const menuBurger = document.querySelector('.header__list');
	const burgerButton = document.querySelector('.burger_menu');
	burgerButton.addEventListener('click', function () {
		menuBurger.classList.toggle('active');
		burgerButton.classList.toggle('active');
	});
}
burger();

// for form

document.querySelectorAll('.dropdown').forEach(function (dropForAll) {
	const dropdownButton = dropForAll.querySelector('.dropdown__button');
	const dropdownList = dropForAll.querySelector('.dropdown__list');
	const dropdownListAitems = dropdownList.querySelectorAll('.dropdown__item');
	const dropdownInput = dropForAll.querySelector('.dropdown__input_hidden');

	dropdownButton.addEventListener('click', function () {
		dropdownList.classList.toggle('dropdown__list--visible');
	});


	document.addEventListener('click', function (e) {
		if (e.target !== dropdownButton) {
			dropdownList.classList.remove('dropdown__list--visible');
		}
	});

	if (dropdownButton.dataset.form == 'location') {
		dropdownListAitems.forEach(function (listItem) {
			listItem.addEventListener('click', function (e) {
				e.stopPropagation();
				dropdownButton.innerText = this.innerText;
				dropdownInput.value = this.dataset.value;
				dropdownList.classList.remove('dropdown__list--visible');
			});
		});
	}

	if (dropdownButton.dataset.form == 'date') {
		dropdownListAitems.forEach(function (listItem) {
			listItem.addEventListener('click', function (e) {
				e.stopPropagation();
				// dropdownButton.innerText = this.innerText;
				// dropdownInput.value = this.dataset.value;
				// dropdownList.classList.remove('dropdown__list--visible');
			});
		});
	}


	if (dropdownButton.dataset.form == 'participant') {
		dropdownListAitems.forEach(function (listItem) {
			listItem.addEventListener('click', function (e) {
				e.stopPropagation();
				if (listItem.classList.contains('marked')) {
					let dataAtrValue = listItem.dataset.value;
					let remuveInput = document.querySelector('[name = "' + dataAtrValue + '"]');
					remuveInput.remove();
					listItem.classList.remove('marked');
				} else {
					let newInput = document.createElement('input');
					newInput.type = 'text';
					newInput.value = this.dataset.value;
					newInput.className = 'dropdown__input_hidden';
					newInput.name = this.dataset.value;
					dropdownList.after(newInput);
					listItem.classList.add('marked');
				}
			});
		});
	}
});

// for slider

document.querySelectorAll('.slider').forEach(function (slider) {
	console.log(slider);

	let offset = 0;
	const sliderLine = slider.querySelector('.slider_line');
	const elemWidht = slider.querySelector('.slider_line__item').clientWidth;
	const numberOfOlements = slider.querySelectorAll('.slider_line__item').length;

	slider.addEventListener('touchstart', hendleTouchStart, false);
	slider.addEventListener('touchend', handleTouchend, false);

	let x1 = null;

	function hendleTouchStart(event) {
		const firstTouch = event.touches[0];
		x1 = firstTouch.clientX;
	}

	function handleTouchend(event) {
		if (!x1) {
			return false;
		}
		let x2 = event.changedTouches[0].clientX;
		let xDiff = x2 - x1;
		if (xDiff < 0 && Math.abs(xDiff) > 50) {
			offset = offset + elemWidht;
			if (offset > (numberOfOlements - 1) * elemWidht) {
				offset = 0;
			}
			sliderLine.style.left = -offset + 'px';
		}
		if (xDiff > 0 && Math.abs(xDiff) > 50) {
			offset = offset - elemWidht;
			if (offset < 0) {
				offset = (numberOfOlements - 1) * elemWidht;
			}
			sliderLine.style.left = -offset + 'px';
		}
	}
});

