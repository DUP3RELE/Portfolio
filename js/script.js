const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')


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

navBtn.addEventListener('click', handleNav)