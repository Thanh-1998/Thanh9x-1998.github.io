const body = document.body;
const menuItems = document.querySelectorAll('.show-items');
const listMenu = document.querySelector('.list-menu');
const toggleMenu = document.querySelector('.arrow-menu');
const navMenu = document.querySelector('.header-menu');
const overlay = document.querySelector('.overlay');
const permissionItems = document.querySelectorAll('.permission-items');
const seePres = document.querySelectorAll('.see-pre');


for (let item of menuItems) {
	item.addEventListener('click', () => {
		menuItems.forEach((menuItem) => {
			if (menuItem.classList.contains("active") && menuItem != item) {
				menuItem.classList.remove("active");
			}
		});
		item.classList.toggle("active");
	});
}


for (let itemPre of seePres) {
	itemPre.addEventListener('click', () => {
		seePres.forEach((seePre) => {
			itemPre.parentNode.parentNode.classList.toggle("active");
		});
	});
}

for (let item of menuItems) {
	item.addEventListener('click', () => {
		menuItems.forEach((menuItem) => {
			if (menuItem.classList.contains("active") && menuItem != item) {
				menuItem.classList.remove("active");
			}
		});
		item.classList.toggle("active");
	});
}

let checkMenu = false;
toggleMenu.addEventListener('click', () => {
	if(!checkMenu) {
		navMenu.classList.add('active');
		toggleMenu.classList.add('active');
		body.classList.add('no-scroll');
		overlay.classList.add('active');
		checkMenu = true;
	} else {
		navMenu.classList.remove('active');
		toggleMenu.classList.remove('active');
		body.classList.remove('no-scroll');
		overlay.classList.remove('active');
		checkMenu = false;
	}
});

overlay.addEventListener('click', () => {
	navMenu.classList.remove('active');
	toggleMenu.classList.remove('active');
	body.classList.remove('no-scroll');
	overlay.classList.remove('active');
	checkMenu = false;
})

