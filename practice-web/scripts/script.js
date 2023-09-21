const iconOpen = document.getElementById("iconOpen")
const iconClose = document.getElementById("iconClose")
const mainMenu = document.getElementById("mainMenu")
const menuIcons = document.getElementById("menuIcons")

menuIcons.addEventListener('click', ()=> {
    iconOpen.classList.toggle("hide")
    iconClose.classList.toggle("hide")
    mainMenu.classList.toggle("hide")
})

const button1 = document.getElementById("faqButton1")
const text1 = document.getElementById("faqText1")

button1.addEventListener('click', ()=> {
    button1.classList.toggle("faq-close-button")
    text1.classList.toggle("hide")
})

const button2 = document.getElementById("faqButton2")
const text2 = document.getElementById("faqText2")

button2.addEventListener('click', ()=> {
    button2.classList.toggle("faq-close-button")
    text2.classList.toggle("hide")
})

const button3 = document.getElementById("faqButton3")
const text3 = document.getElementById("faqText3")

button3.addEventListener('click', ()=> {
    button3.classList.toggle("faq-close-button")
    text3.classList.toggle("hide")
})

const button4 = document.getElementById("faqButton4")
const text4 = document.getElementById("faqText4")

button4.addEventListener('click', ()=> {
    button4.classList.toggle("faq-close-button")
    text4.classList.toggle("hide")
})

const button5 = document.getElementById("faqButton5")
const text5 = document.getElementById("faqText5")

button5.addEventListener('click', ()=> {
    button5.classList.toggle("faq-close-button")
    text5.classList.toggle("hide")
})