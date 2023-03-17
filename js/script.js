const gridItems = document.querySelectorAll('.grid-element');
const gridBox = document.getElementById(`projekt-grid`);

gridItems.forEach(item => {

  let widthScale = (item.offsetWidth + 20) / item.offsetWidth;

  item.addEventListener('mouseover', () => {
    if (!item.classList.contains("expanded")) {
      item.style.transform = `scale(${widthScale})`;
      item.style.zIndex = '1';
    }
  });
    
  item.addEventListener('mouseout', () => {
    item.style.transform = 'scale(1)';
    item.style.zIndex = '0';
  });
  

  item.addEventListener("click", toggleExpand);
});

function toggleExpand(event) {
  const item = event.target;
  const items = document.querySelectorAll(".grid-element");
  items.forEach((item) => {
    if (item !== event.target) {
      item.classList.toggle("hidden");
    }
  });
  item.classList.toggle("expanded");
  item.style.transform = 'scale(1)';
}

const navbar = document.querySelector('.navbar');
const burgerMenu = navbar.querySelector('.burger-menu');
const list = navbar.querySelector('ul');

burgerMenu.addEventListener('click', () => {
  list.classList.toggle('burger-active');
  burgerMenu.classList.toggle('active');
});


