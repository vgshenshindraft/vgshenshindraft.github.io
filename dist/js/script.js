const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});


// счетчик для индикаторов скилов
const percents = document.querySelectorAll('.use__percent-exp'),
      lines = document.querySelectorAll('.use__scale-exp span');

percents.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

const works = document.querySelectorAll('.portfolio__wrapper img');

works.forEach(img => {
    img.addEventListener('mouseover', (e) => {
        e.target.style.opacity = '1';
        e.target.nextElementSibling.classList.add('d-none');
    });
    
    img.addEventListener('mouseout', (e) => {
        e.target.style.opacity = null;
        e.target.nextElementSibling.classList.remove('d-none');
    });
});

