const iconOpen = document.getElementById("iconOpen")
const iconClose = document.getElementById("iconClose")
const mainMenu = document.getElementById("mainMenu")
const menuIcons = document.getElementById("menuIcons")

menuIcons.addEventListener('click', ()=> {
    iconOpen.classList.toggle("hide")
    iconClose.classList.toggle("hide")
    mainMenu.classList.toggle("hide-menu")
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

// FAQ hide

let containers = document.querySelectorAll('.body-content-item')

containers.forEach(element => {
    element.addEventListener('click', ()=> {
        element.querySelector('.faq-answer').classList.toggle("hide-answer")
        element.querySelector('.faq-button').classList.toggle("faq-close-button")
    })
});


// Modal window

let modal = document.getElementById('contact-us')
document.querySelectorAll('.openModal').forEach(element => {
    element.addEventListener('click', () => {
        if(modal.classList.contains('hide')) {
            modal.classList.remove('hide')
        }
    })
});

modal.addEventListener('click', () => {
    if(modal === event.target) {
        modal.classList.add('hide')
    }
})

document.querySelectorAll('.closeModal').forEach(element => {
    element.addEventListener('click', () => {
        if(!modal.classList.contains('hide')) {
            modal.classList.add('hide')
        }
    })
});