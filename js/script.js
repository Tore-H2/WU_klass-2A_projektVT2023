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



//.


