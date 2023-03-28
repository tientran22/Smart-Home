AOS.init();
// Open close nav Tablet,Mobile
const navList = document.querySelector('.nav-list');
const menuIcon = document.querySelector('.menu-btn i')
const app = document.querySelector('.app');
const navBar = document.querySelector('.nav');
menuIcon.addEventListener('click', () =>{
    navList.classList.toggle('hide');
    if(menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.replace('fa-bars','fa-xmark');
    } else {
        menuIcon.classList.replace('fa-xmark','fa-bars');
    }
})

// window.onclick = (e) => {
//     console.log(e.target)
//     if(e.target.classList.contains('header'))
//         navList.classList.add('hide');
        
// }


// Faqs
const faqsList = [...document.querySelectorAll('.faqs')];

faqsList.map((item) => {
    item.onclick = () => {
        item.classList.toggle('open');
        // change icon
        const iconFaqs = item.querySelector('.icon-faqs');
            if(iconFaqs.classList.contains('fa-plus')) {
                iconFaqs.classList.replace('fa-plus','fa-minus');
            } else {
                iconFaqs.classList.replace('fa-minus','fa-plus');
            }
    }
});

// Change background color when scroll navbar

window.addEventListener('scroll', () => {
    console.log(scrollY)
    if(scrollY > 100) {
        navBar.classList.add('bg')
    }
})