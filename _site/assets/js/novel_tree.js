function novelAnker() {
  let heading2Array = document.querySelectorAll('.novel__body h2');
  heading2Array.forEach((el, index) => {
    let headingNum = index + 1;
    el.setAttribute("id", 'sectionMain' + headingNum);
  });

  let heading3Array = document.querySelectorAll('.novel__body h3');
  heading3Array.forEach((el, index) => {
    let headingNum = index + 1;
    el.setAttribute("id", 'section' + headingNum);
  });

  let heading4Array = document.querySelectorAll('.novel__body h4');
  heading4Array.forEach((el, index) => {
    let headingNum = index + 1;
    el.setAttribute("id", 'sectionSub' + headingNum);
  });
}

const smoothAnkerScroll = (hash) =>{
  const targetElement = document.querySelector(hash);
  const rect = targetElement.getBoundingClientRect().top;
  const offset = window.pageYOffset;
  const target = rect + offset;
  window.scrollTo({
    top: target,
    behavior: 'smooth',
  });
}

const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++){
  smoothScrollTrigger[i].addEventListener('click', (e) => {
    e.preventDefault();
    let href = smoothScrollTrigger[i].getAttribute('href');
    smoothAnkerScroll(href);
  });
}

novelAnker();