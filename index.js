const navButtonToggle = document.querySelector(".mobile-toggle");
const navButtonImage = document.querySelector(".nav-menu");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");

let isOpen = true;

navButtonToggle.addEventListener("click", () => {
	if (isOpen) {
		navButtonImage.src = "./images/icon-close.svg";
		isOpen = false;
		overlay.style.display = "block";
		mobileNav.style.display = "block";
	} else {
		navButtonImage.src = "./images/icon-hamburger.svg";
		isOpen = true;
		overlay.style.display = "none";
		mobileNav.style.display = "none";
	}
});
