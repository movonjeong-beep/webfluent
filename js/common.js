document.addEventListener('DOMContentLoaded', function () {
  const btnMenu = document.querySelector('.btn-menu');
  const mMenu = document.querySelector('.m-menu');
  const btnClose = document.querySelector('.btn-close');

  if (btnMenu && mMenu) {
    btnMenu.addEventListener('click', function () {
      mMenu.classList.add('active');
    });
  }

  if (btnClose && mMenu) {
    btnClose.addEventListener('click', function () {
      mMenu.classList.remove('active');
    });
  }
});
