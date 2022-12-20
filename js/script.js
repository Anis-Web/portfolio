/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    if(this.scroll >= 50) header.classList.add('scroll-header'); else header.classList.remove('scrollHeader');
}
window.addEventListener('scroll', scrollHeader)
/*=============== Lang Switch =========================*/
const select = document.getElementById('lang-switch')
const allLang = ['ru', 'en']

select.addEventListener('change', changeUrl)

function changeUrl() {
    let lang = select.value
    location.href = `${window.location.pathname}#${lang}`
    location.reload()
}
let hash = window.location.hash
hash = hash.substr(1)
select.value = hash
console.log(langArr)
function changeLang() {
    if(!allLang.includes(hash)) {
        location.href = `${window.location.pathname}#ru`
        location.reload()
    }
    if(hash === 'en'){
        document.querySelector('meta[name="description"]').content = `I am a Frontend developer, I create from layouts a responsive and friendly websites for the search engines, using HTML, CSS, and JavaScript languages` 
        document.querySelector('html').lang = "en"
        document.querySelector('.cvBtn').download = `pdf/ShadliaAnis.pdf`
        document.querySelector('.cvBtn').href = `pdf/ShadliaAnis.pdf`
        document.querySelector('.stack_home').innerHTML = `<i class='bx bxl-stack-overflow'></i>`
        document.querySelector('.stack_home').href = `https://stackoverflow.com/users/20814448/anis?tab=profile`
        document.querySelector('.linkedin_home').innerHTML = `<i class='bx bxl-linkedin' ></i>`
        document.querySelector('.linkedin_home').href = `https://www.linkedin.com/in/anis-shadlia-57008225b`
        document.querySelector('.contact-write-wp').href = `https://api.whatsapp.com/send?phone=+79692238868&text=Hello!`
        document.querySelector('.linkedin_footer').innerHTML = `<i class='bx bxl-linkedin' ></i>`
        document.querySelector('.stack_footer').innerHTML = `<i class='bx bxl-stack-overflow'></i>`
        document.querySelector('.stack_footer').href = `https://stackoverflow.com/users/20814448/anis?tab=profile`
    }
    console.log(langArr.formMailInput.ru);
    document.querySelector('title').textContent = langArr['unit'][hash];
    document.querySelector('.formNameInput').placeholder = langArr['formNameInput'][hash]
    document.querySelector('.formMailInput').placeholder = langArr['formMailInput'][hash]
    document.querySelector('.formProjectInput').placeholder = langArr['formProjectInput'][hash]

    for(let key in switchAll) {
        document.querySelector(`.${key}`).innerHTML = switchAll[key][hash]
    }
}
changeLang()

/*=============== show menu ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
//remove menu moblie
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        },
    }
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 100,
    // reset: true,
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, {delay: 100})
sr.reveal(`.home__social, .home__scroll`, {delay: 100, origin: 'bottom'})
sr.reveal(`.about__img`, {delay: 100, origin: 'left'})
sr.reveal(`.about__data`, {delay: 100, origin: 'right'})
sr.reveal(`.contact__content:nth-child(1)`, {delay: 100, origin: 'left'})
sr.reveal(`.contact__content:nth-child(2)`, {delay: 100, origin: 'right'})
sr.reveal(`.skills__group:nth-child(1)`, {delay: 100, origin: 'left'})
sr.reveal(`.skills__group:nth-child(2)`, {delay: 100, origin: 'right'})
sr.reveal(`.services__card:nth-child(1)`, {delay: 100, origin: 'left'})
sr.reveal(`.services__card:nth-child(2)`, {delay: 100, origin: 'bottom'})
sr.reveal(`.services__card:nth-child(3)`, {delay: 100, origin: 'right'})

/*================ EMAIL JS ==============*/
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactProject = document.getElementById('contact-project'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')
        if(hash === 'en'){
            contactMessage.textContent = 'Write all the inputs fields'
        }else{
            contactMessage.textContent = 'Заполните все поля ввода'
        }
    }else{
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_ji5dwmn', 'template_6a4rhxq', '#contact-form', 'DfRVbT0wf_YUy__ky')
            .then(() =>{
                contactMessage.classList.add('color-blue')
                if(hash === 'en'){
                    contactMessage.textContent = 'Sent'
                } else{
                    contactMessage.textContent = 'Отправлено'
                }

                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! SOMETHING HAS FAILED...', error)
            })

            contactName.value = ''
            contactEmail.value = ''
            contactProject.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)