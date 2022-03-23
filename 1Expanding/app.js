const panels = document.querySelectorAll('.panel');

// Add active class
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeClassActive();
    panel.classList.add('active');
  });
});

// Remove class active
function removeClassActive() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
