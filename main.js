// AOS
AOS.init();
// Swiper
var swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 85.5,
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
  let headerHight = 94; // ヘッダー高さ
  $('a[href^="#"]').click(function(){
    let speed = 1000;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top-headerHight;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// jQuery(function(){
//   var headerHight = 120; //ヘッダーの高さ
//     //*ページ内リンク
//     jQuery('a[href^=#]').click(function(){
//       var href= jQuery(this).attr("href");
//       var target = jQuery(href == "#" || href == "" ? 'body' : href);
//       var position = target.offset().top-headerHight;
//       jQuery("html, body").animate({scrollTop:position}, 550, "swing");
//       return false;
//     });
//     //*ページ外リンク*/      
//     var url = jQuery(location).attr('href');
//     if (url.indexOf("?id=") == -1) {
//       // ほかの処理
//     }else{
//       var url_sp = url.split("?id=");
//       var hash     = '#' + url_sp[url_sp.length - 1];
//       var target2	= jQuery(hash);
//       var position2	= target2.offset().top-headerHight;
//       jQuery("html, body").animate({scrollTop:position2}, 550, "swing");
//     }
//   });