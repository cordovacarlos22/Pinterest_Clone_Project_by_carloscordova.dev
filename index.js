const toggleMenu = document.getElementById("myLinks");

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toogleMobileMenu() {

  if (toggleMenu.style.display === "block") {
    toggleMenu.style.display = "none";
    
    console.log(toggleMenu,'click')
  } else {
    toggleMenu.style.display = "block";
    
  }
}