let navbar = document.querySelector(".navbar");
let toggleMenu = document.querySelector(".toggle-menu");
let spanFooter = document.querySelector(".copyright-container p span");
let liLinks = document.querySelectorAll(".navbar li a");
let buttonScollToTop = document.querySelector(".scroll-to-top");

toggleMenu.onclick = function () {
  // Open And Close The NavBar
  navbar.classList.toggle("open");
};
document.addEventListener("click", (e) => {
  // To Close The Navbar By Clicking On AnyThing
  if (e.target !== toggleMenu) {
    if (navbar.classList.contains("open")) {
      navbar.classList.remove("open");
    }
  }
});
navbar.onclick = function (e) {
  // Stop Propagation The Navbar
  e.stopPropagation();
};
liLinks.forEach((link) => {
  // Move To The Section
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth"
    });
  });
});
// Scroll To Top By Botton
function scrollByButton() {
  window.onscroll = function () {
    if (window.scrollY >= 500) {
      buttonScollToTop.style.right = "20px";
    } else {
      buttonScollToTop.style.right = "-35px";
    }
  };
  buttonScollToTop.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
}
scrollByButton(); // Scroll To Top By Botton
spanFooter.innerHTML = new Date().getFullYear(); // Update The Year Of The Span
