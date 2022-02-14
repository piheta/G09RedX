const togglebutton = document.getElementsByClassName('toggle-button')[0]

const menubar = document.getElementsByClassName('menubar-links')[0]

/* const body = document.getElementsByTagName('body')[0] */


togglebutton.addEventListener('click', () => {
    menubar.classList.toggle('active')
})




var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slider");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 9000);    
}