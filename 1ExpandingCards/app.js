// https://github.com/Wissanukhong/50projects50days.git
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeAcctiveClass();
    panel.classList.add('active');
  });
});

function removeAcctiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
