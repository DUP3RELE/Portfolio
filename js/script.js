const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");
const cube = document.querySelector(".rotating-cube-container__cube");
const scrollToTopBtn = document.querySelector("#scrollToTop");
const scrollObject = document.querySelectorAll(".scroll__hidden");

// let mouseX = 0;
// let mouseY = 0;
// let rotationCubeX = 0;
// let rotationCubeY = 0;
// const rotationValue = 200;
// scroll-to-top arrow
document.addEventListener("DOMContentLoaded", () => {
	const scrollToTop = document.getElementById("scrollToTop");
	window.addEventListener("scroll", () => {
	  if (window.scrollY > document.documentElement.scrollHeight * 0.2) {
		scrollToTop.classList.remove("hidden");
	  } else {
		scrollToTop.classList.add("hidden");
	  }
	});
	
	scrollToTop.addEventListener("click", () => {
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		  
	});
  });
// CRICLE
const circleText = document.querySelector(".circle__text");
const insideCircleText = "-REACT-CSS-SASS-JavaSCR-Wordpress";

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
// const handleMouseMove = (e) => {
// 	mouseX = e.clientX;
// 	mouseY = e.clientY;
// 	rotateX = (mouseY / window.innerHeight - 0.5) * rotationValue;
// 	rotateY = (mouseX / window.innerWidth - 0.5) * rotationValue;
// 	cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
// };
// Desktop CUBE
function widthCheck(x) {
	if (x.matches) {
		let rotationX = 0;
		let rotationY = 0;

		const rotateCube = () => {
			rotationX += 1;
			rotationY += 1;
			cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
		};

		const rotationInterval = setInterval(rotateCube, 30);
		rotateCube();
	} else {
		let mouseX = 0;
		let mouseY = 0;
		let rotationCubeX = 0;
		let rotationCubeY = 0;
		const rotationValue = 200;

		const handleMouseMove = (e) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
			rotateX = (mouseY / window.innerHeight - 0.5) * rotationValue;
			rotateY = (mouseX / window.innerWidth - 0.5) * rotationValue;
			cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
		};
		window.addEventListener("mousemove", handleMouseMove);
	}
}

const x = window.matchMedia("(max-width: 1200px)");
widthCheck(x);
x.addListener(widthCheck);


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

scrollObject.forEach((el) => observer.observe(el));
navBtn.addEventListener("click", handleNav);
window.addEventListener("mousemove", handleMouseMove);