// 🚶‍♂️🚶‍♂️🚶‍♂️🐈 ﾆｬｰﾝ
const wrapper = document.querySelector('.main'),
      background = wrapper.querySelector('.novel__background'),
      intoSea = document.querySelector('.into-sea'),
      fromSea = document.querySelector('.from-sea-to-sea');

// IntersectionObserverは上スクロール検知がややこいので見送りました
window.addEventListener('scroll', function () {
  let offset = window.scrollY;

  if(offset < fromSea.offsetTop) {
    if(offset / (intoSea.offsetTop + intoSea.clientHeight) > 1) {
      background.style.opacity = 1;
    } else {
      background.style.opacity = offset / (intoSea.offsetTop + intoSea.clientHeight);
    }
  } else {
    background.style.opacity = 0;
  }

  if(offset > intoSea.offsetTop && offset < fromSea.offsetTop) {
    wrapper.classList.add('into-sea')
  } else {
    wrapper.classList.remove('into-sea')
  }

});