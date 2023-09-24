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
		// console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add("scroll__show");
		} else {
			entry.target.classList.remove("scroll__show");
		}
	});
});

// tłumaczenie
const translations = {
	pl: {
		MainSite: "Strona główna",
		AboutMeNav: "O mnie",
		ProjectsNav: "Projekty",
		ContactNav: "Kontakt",
		ProjectsCourse: "Projekty utworzone podczas kursu",
		ProjectsCourseRSI: "Strona stworzona w React.js/Next.js/API",
		ProjectsCourseZSI: "Zaawansowana Strona Internetowa",
		ProjectsJs: "Projekty w JS",
		InternetWebsites: "Strony internetowe",
		FooterText:
			"Fajnie że wpadłeś! Jeśli masz jakieś sugestie lub chcesz się skontaktować - daj znać!",
		Description:
			"Nazywam się Krystian Żywczak. Przez ostatnie 10 lat pracowałem w branży gastronomicznej, zarówno jako kucharz, jak i szef kuchni. Przez ten czas zdobyłem duże doświadczenie w przygotowywaniu różnorodnych potraw i zarządzaniu zespołem kuchennym. Praca w gastronomii była dla mnie pasją i dawała wiele satysfakcji, ale ostatnio podjąłem decyzję o zmianie ścieżki kariery zawodowej. Skierowałem swoje zainteresowania w stronę programowania i budowy stron internetowych. Fascynuje mnie tworzenie pięknych i interaktywnych interfejsów użytkownika oraz tworzenie oprogramowania, które przynosi korzyści dla innych ludzi. Właśnie dlatego chciałbym pracować jako front-end developer. Zmiana ścieżki kariery może być ekscytująca i pełna wyzwań, ale jestem gotów na naukę i rozwój w tej dziedzinie. Cieszę się, że mogę wykorzystać moje umiejętności logicznego myślenia, kreatywności i precyzji w nowym zawodzie.",
		DrinkSearch: "Wyszukiwarka Napojów",
		WalidatorFormularza: "Walidator Formularza",
		KalkulatorWydatków: "Kalkulator Wydatków",
		Czasomierz: "Czasomierz",
		ListaToDo: "ToDo Lista",
		Stoper: "Stoper",
	},
	en: {
		MainSite: "Main site",
		AboutMeNav: "About me",
		ProjectsNav: "Projects",
		ContactNav: "Contact",
		ProjectsCourse: "Projects created during the course",
		ProjectsCourseRSI: "React.js/Next.js/API Website",
		ProjectsCourseZSI: "Advanced Webiste",
		ProjectsJs: "JS Projects",
		InternetWebsites: "Websites Online",
		FooterText:
			"Glad you dropped by! If you have any suggestions or want to get in touch - let me know!",
		Description:
			"My name is Krystian Żywczak. For the last 10 years, I've been working in the gastronomy industry, both as a cook and a head chef. During this time, I've gained significant experience in preparing various dishes and managing kitchen teams. Working in gastronomy has been a passion for me and has provided a lot of satisfaction, but recently I've made the decision to change my career path. I've directed my interests towards programming and website development. Creating beautiful and interactive user interfaces, as well as building software that benefits others, fascinates me. That's why I would like to work as a front-end developer. Changing career paths can be exciting and full of challenges, but I'm ready for learning and growth in this field. I'm excited to apply my skills in logical thinking, creativity, and precision to my new profession.",
		DrinkSearch: "Drink Search",
		WalidatorFormularza: "Form Validator",
		"Kalkulator wydatków": "Expense Calculator",
		Czasomierz: "Timer",
		ListaToDo: "To Do List",
		Stoper: "Stopwatch",
	},
};

document.addEventListener("DOMContentLoaded", () => {
	const langButtons = document.querySelectorAll(".lang-button");
	const elementsToTranslate = document.querySelectorAll("[data-translate]");

	langButtons.forEach((button) => {
		button.addEventListener("click", () => {
			event.preventDefault();
			const selectedLang = button.getAttribute("data-lang");
			elementsToTranslate.forEach((element) => {
				const translationKey = element.getAttribute("data-translate");
				if (translations[selectedLang][translationKey]) {
					element.innerText = translations[selectedLang][translationKey];
				}
			});
			localStorage.setItem("selectedLang", selectedLang);
		});
	});
	const savedLang = localStorage.getItem("selectedLang");
	if (savedLang) {
		elementsToTranslate.forEach((element) => {
			const translationKey = element.getAttribute("data-translate");
			if (translations[savedLang][translationKey]) {
				element.innerText = translations[savedLang][translationKey];
			}
		});
	}
});

scrollObject.forEach((el) => observer.observe(el));
navBtn.addEventListener("click", handleNav);
// window.addEventListener("mousemove", handleMouseMove);
