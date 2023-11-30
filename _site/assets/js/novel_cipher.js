// ニャーン！！🐈
const catSelcect = document.querySelector('#cat_color'),
      catDream = document.querySelector('#cat_dream'),
      readBtn = document.querySelector('#read_btn'),
      body = document.querySelector('body');

catSelcect.addEventListener('change', () => {
  if(this.value != "") {
    readBtn.disabled = false;
  } else {
    readBtn.disabled = true;
  }
});

readBtn.addEventListener('click', () => {
  body.classList.add('for-cipher');

  const selectedColor = catSelcect.value;
  catDream.textContent = selectedColor;

});

window.addEventListener('load', () => {
  const textArray = document.querySelectorAll('.novel__content .novel__body p');
  textArray.forEach((paragraph) => {
    let firstLetter = paragraph.textContent.slice( 0, 1 );
    if(firstLetter == "「") {
      paragraph.classList.add('voice');
    }
  });
});