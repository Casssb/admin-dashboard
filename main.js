const menuToggle = document.querySelector('#nav-hamburger');
const menuTitleText = document.querySelector('.nav-title-text');
const menuIconText = document.querySelectorAll('.nav-text');

function changeMenu () {
    if (menuTitleText.style.display === 'none') {
        menuTitleText.style.display = 'block';
      } else {
        menuTitleText.style.display = 'none';
      }
    
      menuIconText.forEach((icon) => {
        if (icon.style.display === 'none') {
          icon.style.display = 'block';
        } else {
          icon.style.display = 'none';
        }
      });
    
      if (menuToggle.style.alignSelf === 'center') {
        menuToggle.style.alignSelf = 'flex-end';
      } else {
        menuToggle.style.alignSelf = 'center'
      }
}

menuToggle.addEventListener('click', changeMenu);
