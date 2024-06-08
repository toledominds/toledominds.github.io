/* .js files add interaction to your website */

/* transparent to solid navbar */
const navEl = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    navEl.classList.add('nav-scrolled');
  } else if (window.scrollY <= 300) {
    navEl.classList.remove('nav-scrolled');
  }
});


/* PHOTO GALLERY/CAROUSEL */
const slider = document.querySelector('.slider');
const carousel = document.querySelector('.carousel');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

var direction;

prev.addEventListener('click', function() {
  if (direction == -1) {
    slider.appendChild(slider.firstElementChild);
    direction = 1;
  }
  direction = 1;
  slider.style.transform = 'translate(6.25%)';
  carousel.style.justifyContent = 'flex-end';
});

next.addEventListener('click', function() {
  direction = -1;
  carousel.style.justifyContent = 'flex-start';
  slider.style.transform = 'translate(-6.25%)';
});

slider.addEventListener('transitionend', function() {
  if (direction == -1) {
    slider.appendChild(slider.firstElementChild);
  } else if (direction == 1) {
    slider.prepend(slider.lastElementChild);
  }


  slider.style.transition = 'none';
  slider.style.transform = 'translate(0)';
  setTimeout(function() {
    slider.style.transition = 'all 0.5s';  
  });

});

