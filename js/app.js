//================= Класс fixed для header ==================
let header = document.querySelector('.header');
let about = document.querySelector('.about-page');

//Проверка после загрузки страницы
document.addEventListener("DOMContentLoaded", function () {
	checkScroll();
}); // ИЛИ 
//просто checkScroll();

//проверка при скроле страницы
window.onscroll = function () {
	checkScroll();
}

//Активция
function checkScroll() {

	let scrollPos = window.scrollY;
	let aboutScrollPos = about.offsetTop;

	//console.log(scrollPos);
	//console.log(aboutScrollPos);

	if (scrollPos >= aboutScrollPos) {
		header.classList.add('fixed');
	} else {
		header.classList.remove('fixed');
	}
}
//===========================================================
//=================== Активация бургер-меню =================
let headerBurger = document.querySelector('.burger');
let headerNav = document.querySelector('.header__nav');

headerBurger.addEventListener("click", function (e) {
	headerBurger.classList.toggle('active');
	headerNav.classList.toggle('active');
});
//===========================================================
//========= Навигация при клике по меню header__nav =========
let dataScrolls = document.querySelectorAll('[data-scroll]');

for (let dataScroll of dataScrolls) {
	let dataScrollId = dataScroll.getAttribute("data-scroll");
	let sectionId = document.querySelector(dataScrollId);

	dataScroll.onclick = function (e) {
		e.preventDefault();
		if (!dataScroll.classList.contains('active')) {
			for (let dataScroll of dataScrolls) {
				dataScroll.classList.remove('active');
			};

			headerBurger.classList.remove('active');
			headerNav.classList.remove('active');

			dataScroll.classList.add('active');
		}

		sectionId.scrollIntoView({
			behavior: 'smooth', // плавный скрол
		});
	}
}
//document.querySelector('[data-scroll]').click();
//===========================================================
//======== Функционал меню "menu" (DELICIOUS MENU) ==========
let menuBtns = document.querySelectorAll('.menu-page__btn');
let menuCards = document.querySelectorAll(".menu-page__card");

for (let menuBtn of menuBtns) {

	menuBtn.addEventListener("click", function () {

		let tabId = menuBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);
		//console.log(tabId);

		for (let menuCard of menuCards) {
			menuCard.classList.remove('active');
		}

		currentTab.classList.add('active');
	});
}

//Вешается active на первый из menu__btn
document.querySelector('.menu-page__btn').click();
//===========================================================





