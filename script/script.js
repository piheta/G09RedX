const togglebutton = document.getElementsByClassName('toggle-button')[0]
const menubar = document.getElementsByClassName('menubar-links')[0]

togglebutton.addEventListener('click', () => {
    menubar.classList.toggle('active')
})

