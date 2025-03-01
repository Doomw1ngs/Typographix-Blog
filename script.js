// Create a function to check if page is scrolled and adjust the logo size.
function checkScroll() {
  const navBar = document.getElementById('navbar');
  const logo = document.getElementById('logo');
  let scrollPosition = window.scrollY;

  //   Add/remove 'scrolled' class based on scroll position
  if (scrollPosition > 20) {
    navBar.classList.add('scrolled');
  } else {
    navBar.classList.remove('scrolled');
  }

  //   Calculate new font size based on scroll position
  let newSize = 3 - scrollPosition * 0.03; //Decrease font size by 0.03 rem for each 1px scrolled

  //   Clamping the font size between 1.5rem and 3rem
  newSize = Math.max(1.5, newSize);
  newSize = Math.min(3, newSize);

  //   Apply the new font size
  logo.style.fontSize = `${newSize}rem`;
}

window.addEventListener('scroll', checkScroll);
