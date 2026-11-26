const frame = document.querySelector('#page-frame');
const buttons = document.querySelectorAll('[data-page]');
buttons.forEach((button) => button.addEventListener('click', () => {
  buttons.forEach((item) => item.removeAttribute('aria-current'));
  button.setAttribute('aria-current', 'page');
  frame.src = button.dataset.page;
  frame.title = button.dataset.title;
}));
