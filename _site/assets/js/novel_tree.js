function novelAnker() {
  let heading2Array = document.querySelectorAll('.novel__body h2');
  heading2Array?.forEach((el, index) => {
    let headingNum = index + 1;
    el.setAttribute("id", 'sectionMain' + headingNum);
  });

  let heading3Array = document.querySelectorAll('.novel__body h3');
  heading3Array?.forEach((el, index) => {
    let headingNum = index + 1;
    el.setAttribute("id", 'section' + headingNum);
  });

  let heading4Array = document.querySelectorAll('.novel__body h4');
  heading4Array?.forEach((el, index) => {
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
    //behavior: 'smooth',
  });
}

/*
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++){
  smoothScrollTrigger[i].addEventListener('click', (e) => {
    e.preventDefault();
    let href = smoothScrollTrigger[i].getAttribute('href');
    smoothAnkerScroll(href);
  });
}
*/

function novelViewModeManager() {
  const viewModeBtn = document.querySelectorAll('.novel__mode-btn');
  
  if (viewModeBtn) {
    // LocalStorageから保存された閲覧モードを読み込む
    const savedFontSize = localStorage.getItem('kokyushobo-novel-font-size'),
          savedFontFamily = localStorage.getItem('kokyushobo-novel-font-family'),
          savedTextLayout = localStorage.getItem('kokyushobo-novel-text-layout');

    if (savedFontSize) {
      document.documentElement.dataset.fontSize = savedFontSize;
      document.querySelector(`.novel__mode-btn[data-font-size="${savedFontSize}"]`).classList.add('current');
    } else {
      document.documentElement.dataset.fontSize = 'medium';
      document.querySelector(`.novel__mode-btn[data-font-size="medium"]`).classList.add('current');
    }
    if (savedFontFamily) {
      document.documentElement.dataset.fontFamily = savedFontFamily;
      document.querySelector(`.novel__mode-btn[data-font-family="${savedFontFamily}"]`).classList.add('current'); 
    } else {
      document.documentElement.dataset.fontFamily = 'serif';
      document.querySelector(`.novel__mode-btn[data-font-family="serif"]`).classList.add('current');
    }
    if (savedTextLayout) {
      document.documentElement.dataset.textLayout = savedTextLayout;
      document.querySelector(`.novel__mode-btn[data-text-layout="${savedTextLayout}"]`).classList.add('current');
    } else {
      document.documentElement.dataset.textLayout = 'horizontal';
      document.querySelector(`.novel__mode-btn[data-text-layout="horizontal"]`).classList.add('current');
    }

    viewModeBtn.forEach((btn) => {
      btn.addEventListener('click', () => {

        btn.parentElement.querySelectorAll('.novel__mode-btn').forEach((siblingBtn) => {
          siblingBtn.classList.remove('current');
        });
        btn.classList.add('current');

        if (btn.dataset.fontSize) {
          document.documentElement.dataset.fontSize = btn.dataset.fontSize;
          localStorage.setItem('kokyushobo-novel-font-size', btn.dataset.fontSize);
        }

        if (btn.dataset.fontFamily) {
          document.documentElement.dataset.fontFamily = btn.dataset.fontFamily;
          localStorage.setItem('kokyushobo-novel-font-family', btn.dataset.fontFamily);
        }

        if (btn.dataset.textLayout) {
          document.documentElement.dataset.textLayout = btn.dataset.textLayout;
          localStorage.setItem('kokyushobo-novel-text-layout', btn.dataset.textLayout);
        }
        
      });
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  novelAnker();
  novelViewModeManager();
})

window.addEventListener('load', () => {
  const novelContent = document.querySelector('.novel');
  //smoothAnkerScroll('.novel');
})