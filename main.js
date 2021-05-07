// AOS
AOS.init();
// Swiper
var swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 25.5,
  centeredSlides: true,
  loopAdditionalSlides: 1,
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false
  },
});

// id取得
const dt = document.querySelectorAll('dl > dt');
const faqListQuestion1 = document.getElementById('faq__list--question1');
const faqListAnswer1 = document.getElementById('faq__list--answer1');
const humbergerMenu = document.getElementById('humberger-menu');
const humbergerList = document.getElementById('humberger-list');

// 「FAQ」一つ目'is-active'クラス付与
faqListQuestion1.classList.add('is-active');
faqListAnswer1.classList.add('is-active');
// アコーディオン
for (let i = 0; i < dt.length; i++) {
  dt[i].addEventListener('click', function() {
    this.classList.toggle('is-active');
    this.nextElementSibling.classList.toggle('is-active');
  })
};
// ハンバーガー
humbergerMenu.addEventListener('click', function() {
  humbergerList.classList.toggle('is-active');
});


// jQuery スムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 1000;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});