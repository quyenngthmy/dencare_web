const navbarMenu = document.getElementById("navbar");
const burgerMenu = document.getElementById("burger");
const overlayMenu = document.querySelector(".overlay");

if (navbarMenu) {
   // Show and Hide Navbar Function
   const toggleMenu = () => {
      navbarMenu.classList.toggle("active");
      overlayMenu.classList.toggle("active");
   };
   
   // Fixed Resize Window Function
   const resizeWindow = () => {
      if (window.innerWidth > 1025) {
         if (navbarMenu.classList.contains("active")) {
            toggleMenu();
         }
         if (navbarMenu.querySelector(".menu-dropdown.active")) {
            collapseSubMenu();
         }
      }
   };
   
   // Initialize Event Listeners
   burgerMenu.addEventListener("click", toggleMenu);
   overlayMenu.addEventListener("click", toggleMenu);
   window.addEventListener("resize", resizeWindow);
}
