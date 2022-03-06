const sideMenu = document.querySelector("aside")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")
const themeChange = document.querySelector('.theme-toggler')

menuBtn.addEventListener('click', () => {
    sideMenu.classList.add('show_sticky')
})
closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('show_sticky')
})

//===== change theme
themeChange.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeChange.querySelector('span:nth-child(1)').classList.toggle('active');
    themeChange.querySelector('span:nth-child(2)').classList.toggle('active');
})
