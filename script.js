const togglebutton = document.getElementsByClassName('toggle-button')[0]

const menubar = document.getElementsByClassName('menubar-links')[0]

/* const body = document.getElementsByTagName('body')[0] */


togglebutton.addEventListener('click', () => {
    menubar.classList.toggle('active')
})

