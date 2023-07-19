const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const cube = document.querySelector('.rotating-cube-container__cube')


let mouseX = 0
let mouseY = 0
const rotationValue = 200

// CRICLE
const circleText = document.querySelector('.circle__text')
const insideCircleText = '❤❤❤❤CSS-SASS-JavaScript-Wordpress'

window.onload = () => {
    for (let i = 0; i < insideCircleText.length; i++) {
        let circleSpan = document.createElement('span')
        circleSpan.innerHTML = insideCircleText[i]
        circleText.appendChild(circleSpan)
        circleSpan.style.transform = `rotate(${11 * i}deg)`
    }
}

// nav btn
const handleNav = () => {
    nav.classList.toggle('nav--active')

    allNavItems.forEach(item => {
        item.addEventListener('click', ()=> {
            nav.classList.remove('nav--active')
        })
    })
}
// CUBE
const handleMouseMove = (e) => {
mouseX = e.clientX
mouseY = e.clientY
rotateX = (mouseY / window.innerHeight - 0.5) * rotationValue
rotateY = (mouseX / window.innerWidth - 0.5) * rotationValue
cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
}
// Desktop CUBE
// const handleCubeMove = () => {
//     if (window.matchMedia("(max-width: 768px)")) {
//         // CubeRotateX = 
//         // CubeRotateY =
//         console.log('scroll', document.body.clientHeight);
//     }
// }

// handleCubeMove()
navBtn.addEventListener('click', handleNav)
window.addEventListener('mousemove', handleMouseMove)