function novelAnker() {
  let headingArray = document.querySelectorAll('h3');
  headingArray.forEach((el, index) => {
    let headingNum = index + 1;
    el.setAttribute("id", 'section' + headingNum);
  });
}

novelAnker();