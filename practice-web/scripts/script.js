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
const container1 = document.getElementById("faqContainer1")

container1.addEventListener('click', ()=> {
    button1.classList.toggle("faq-close-button")
    text1.classList.toggle("hide-answer")
})

const button2 = document.getElementById("faqButton2")
const text2 = document.getElementById("faqText2")
const container2 = document.getElementById("faqContainer2")

container2.addEventListener('click', ()=> {
    button2.classList.toggle("faq-close-button")
    text2.classList.toggle("hide-answer")
})

const button3 = document.getElementById("faqButton3")
const text3 = document.getElementById("faqText3")
const container3 = document.getElementById("faqContainer3")

container3.addEventListener('click', ()=> {
    button3.classList.toggle("faq-close-button")
    text3.classList.toggle("hide-answer")
})

const button4 = document.getElementById("faqButton4")
const text4 = document.getElementById("faqText4")
const container4 = document.getElementById("faqContainer4")

container4.addEventListener('click', ()=> {
    button4.classList.toggle("faq-close-button")
    text4.classList.toggle("hide-answer")
})

const button5 = document.getElementById("faqButton5")
const text5 = document.getElementById("faqText5")
const container5 = document.getElementById("faqContainer5")

container5.addEventListener('click', ()=> {
    button5.classList.toggle("faq-close-button")
    text5.classList.toggle("hide-answer")
})


// fixed navbar

const nav = document.querySelector('.header');
const cont = document.querySelector('.fixed-container')
function fixNavbar() {
    if (window.scrollY > nav.offsetTop) {
        nav.classList.add('fixed');
        cont.classList.add('fixed')
    } else {
        nav.classList.remove('fixed');
        cont.classList.remove('fixed');
    }
}
window.addEventListener('scroll', fixNavbar);