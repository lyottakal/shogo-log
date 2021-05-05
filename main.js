// AOS
AOS.init();
// Swiper
var swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 55,
  centeredSlides: true,
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false
  },
});

const dt = document.querySelectorAll('dl > dt');
const faqListQuestion1 = document.getElementById('faq__list--question1');
const faqListAnswer1 = document.getElementById('faq__list--answer1');
const humbergerMenu = document.getElementById('humberger-menu');
const humbergerList = document.getElementById('humberger-list');


faqListQuestion1.classList.add('is-active');
faqListAnswer1.classList.add('is-active');

for (let i = 0; i < dt.length; i++) {
  dt[i].addEventListener('click', function() {
    this.classList.toggle('is-active');
    this.nextElementSibling.classList.toggle('is-active');
  })
};

humbergerMenu.addEventListener('click', function() {
  humbergerList.classList.toggle('is-active');
});