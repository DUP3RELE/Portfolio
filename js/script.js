const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");
const cube = document.querySelector(".rotating-cube-container__cube");
const scrollToTopBtn = document.querySelector("#scrollToTop");

let mouseX = 0;
let mouseY = 0;
let rotationCubeX = 0;
let rotationCubeY = 0;
const rotationValue = 200;

// CRICLE
const circleText = document.querySelector(".circle__text");
const insideCircleText = "❤❤❤❤CSS-SASS-JavaScript-Wordpress";

window.onload = () => {
	for (let i = 0; i < insideCircleText.length; i++) {
		let circleSpan = document.createElement("span");
		circleSpan.innerHTML = insideCircleText[i];
		circleText.appendChild(circleSpan);
		circleSpan.style.transform = `rotate(${11 * i}deg)`;
	}
};

// nav btn
const handleNav = () => {
	nav.classList.toggle("nav--active");
	scrollToTopBtn.classList.add("hidden");
	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			nav.classList.remove("nav--active");
		});
	});
};
// CUBE
const handleMouseMove = (e) => {
	mouseX = e.clientX;
	mouseY = e.clientY;
	rotateX = (mouseY / window.innerHeight - 0.5) * rotationValue;
	rotateY = (mouseX / window.innerWidth - 0.5) * rotationValue;
	cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};
// Desktop CUBE
const handleCubeMove = (i) => {
	if (window.matchMedia("(max-width: 768px)")) {
		console.log(Date.get);
	}
};
// scroll-to-top arrow
document.addEventListener("DOMContentLoaded", function () {
	const scrollToTop = document.getElementById("scrollToTop");
	window.addEventListener("scroll", function () {
		if (window.scrollY > window.innerHeight * 0.2) {
			scrollToTop.classList.remove("hidden");
		} else {
			scrollToTop.classList.add("hidden");
		}
	});

	scrollToTop.addEventListener("click", function () {
		function scrollToTopAnimation() {
			if (window.scrollY > 0) {
				window.scrollBy(0, -50);
				requestAnimationFrame(scrollToTopAnimation);
			}
		}
		scrollToTopAnimation();
	});
});
// smooth on-scroll animations
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add("scroll__show");
		} else {
			entry.target.classList.remove("scroll__show");
		}
	});
});

const scrollObject = document.querySelectorAll(".scroll__hidden");

scrollObject.forEach((el) => observer.observe(el));
navBtn.addEventListener("click", handleNav);
window.addEventListener("mousemove", handleMouseMove);
