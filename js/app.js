const barBtn = document.querySelector('.bars')
const navbar = document.querySelector('.navbar-list')

barBtn.addEventListener('click', (e) => {
    navbar.classList.toggle('active')
    console.log(navbar)
})