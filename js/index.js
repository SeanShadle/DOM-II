//Nav Updates
Array.from(document.links).forEach(link => {
    link.addEventListener('focus', event => {
        event.target.style.color = 'red';
    })
    link.addEventListener('blur', event => {
        event.target.style.color = 'black'

    })
})

//Header selectors
const header = document.querySelector('.intro')
const busImg = header.querySelector('img')

//Header updates

const zoom = function(event){
    event.preventDefault()
    scale += event.deltaY * -0.01
    scale = Math.min(Math.max(.125, scale),4)
    busImg.style.transform = `scale(${scale})`
    event.stopPropagation()
}

let scale = 1
busImg.onwheel = zoom;

//Let's Go! Selectors
const contentSection = document.querySelector('.content-section')
const img1 = contentSection.querySelector('img')
const p1 = contentSection.querySelector('p')

//Let's Go! Updates
document.addEventListener('keydown', () => {
        p1.style.color = 'red'
})

document.addEventListener('keyup', () => {
        p1.style.color = 'black'
})

img1.addEventListener('mouseenter', () => {
    img1.style.border = '3px solid red'
})

img1.addEventListener('mouseleave', event => {
    img1.style.border = 'none'
})


//Adventure Awaits selectors
const contentSection2 = document.querySelector('.content-section.inverse-content')
const adventureH2 = contentSection2.querySelector('h2')

//Adventure Awaits updates
adventureH2.addEventListener('auxclick', () => {
    adventureH2.style.opacity = '.25'
})

//Content-destination selectors
const destination = document.querySelector('.content-destination')
const destinationImg = destination.querySelector('img')

//Content-destination updates
destinationImg.addEventListener('click', () => {
    destinationImg.setAttribute('src', '')
})


//Footer selectors
const footer = document.querySelector('footer')
const footerP = footer.querySelector('p')

//Footer updates

footerP.addEventListener('copy', event => {
    event.clipboardData.setData('text/plain', "Plagiarism is a crime!")
    event.preventDefault()
})