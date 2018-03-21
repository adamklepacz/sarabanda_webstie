$(document).ready(function () {

  const mobileMenu = document.getElementById('menu__mobile');
  const menuWrapper = document.getElementById('menu--wrapper');
  const hamburgers = document.getElementsByClassName('menu__mobile__item');
  const jobCardWrapper = document.getElementById('job__card__wrapper');
  
  const navLinks = $('.menu__link');
  const cards = $('.job__card');
  
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

  function scrollTo(e) {
    e.preventDefault();

    let href = $(this).attr('href');
    
    $('html, body').animate({
      scrollTop: $(href).offset().top + 'px'
    }, 1500, function () {
      location.hash = href;
    });

    setTimeout(function() {
      $('.menu__mobile__item').removeClass('menu__mobile--open');
      $('.menu--wrapper').removeClass('menu--wrapper--open');
    }, 1500);
  
  }

  $('.job__card__wrapper').slick({
    centerMode: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 838,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  mobileMenu.addEventListener('click', toogleNav);
  navLinks.each(function () {
    $(this).on('click', scrollTo);
  });

  activeCard();
});
