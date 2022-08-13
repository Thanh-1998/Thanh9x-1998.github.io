const body = document.body;
const menuItems = document.querySelectorAll('.show-items');
const listMenu = document.querySelector('.list-menu');
const toggleMenu = document.querySelector('.arrow-menu');
const navMenu = document.querySelector('.header-menu');
const overlay = document.querySelector('.overlay');
const permissionItems = document.querySelectorAll('.permission-items');
const seePres = document.querySelectorAll('.see-pre');
const scrollCalendar = document.querySelector('.calendar_left-content');
const scrollHeading = document.querySelector('.calendar_right-heading');
const scrollHeadingLeft = document.querySelector('.title-calendar');
const scrollCollLeft = document.querySelector('.left-content_staff');


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
		itemPre.parentNode.parentNode.classList.toggle("active");
	});
}

for (let item of permissionItems) {
	item.addEventListener('click', () => {
		permissionItems.forEach((menuItem) => {
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
});




scrollCalendar.addEventListener('scroll', function(e) { 
	let scroll_y = this.scrollLeft; 
	let scroll_x = this.scrollTop; 

	scrollHeading.style.top = scroll_x + 'px';
	scrollHeadingLeft.style.top = scroll_x + 'px';
	scrollCollLeft.style.left =  scroll_y + 'px';
}); 

