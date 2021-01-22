// querySelectorAll that it will return node list
const pictures = document.querySelectorAll('.picture-container .picture');

let i = 1;

setInterval(() => {
  // interation loop
  i++;

  // querySelector class
  const picture = document.querySelector('.picture.active');

  // removed classList
  picture.classList.remove('active');

  if (i > pictures.length) {
    pictures[0].classList.add('active');
    i = 1;
  } else {
    // nextElementSibbling
    picture.nextElementSibling.classList.add('active');
  }
}, 1000);
