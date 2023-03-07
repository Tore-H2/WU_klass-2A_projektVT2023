const gridItems = document.querySelectorAll('#projekt-grid > div');

gridItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.transform = 'scale(1.1)';
    item.style.zIndex = '1';
  });
  
  item.addEventListener('mouseout', () => {
    item.style.transform = 'scale(1)';
    item.style.zIndex = '0';
  });
});

const navbar = document.querySelector('.navbar');
const burgerMenu = navbar.querySelector('.burger-menu');
const list = navbar.querySelector('ul');

burgerMenu.addEventListener('click', () => {
  list.classList.toggle('burger-active');
  burgerMenu.classList.toggle('active');
});


