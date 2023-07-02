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