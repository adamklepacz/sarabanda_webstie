(function () {

const mobileMenu = document.getElementById('menu__mobile');
const menuWrapper = document.getElementById('menu--wrapper');
const hamburgers = document.getElementsByClassName('menu__mobile__item');

console.log(hamburgers);


function toogleNav() {
  if(menuWrapper.classList.contains('menu--wrapper--open')) {
    menuWrapper.classList.remove('menu--wrapper--open');
  } else {
    menuWrapper.classList.add('menu--wrapper--open');
  }

  for(let i = 0; i < hamburgers.length; i++) {
    if(hamburgers[i].classList.contains('menu__mobile--open')) {
      hamburgers[i].classList.remove('menu__mobile--open');
    } else {
      hamburgers[i].classList.add('menu__mobile--open');
    }
  }
}

mobileMenu.addEventListener('click', toogleNav);

})();
